

window.addPosition = handleAddPosition;
window.refreshPositions = handleRefreshPositions;

/**
 * @type {positions}
 */
window.positions = new Proxy(JSON.parse(localStorage.getItem('positions') || "{}"), {
    set: (positions, key, value)=>{
        if (!isNaN(+key)) key = generateRandomString();
        Reflect.set(positions,key,value);
        localStorage.setItem("positions", JSON.stringify(positions));
        return true;
    },
    deleteProperty(target, p) {
        delete target[p];
        localStorage.setItem("positions", JSON.stringify(target));
        window.registerCalculators();
        return true;
    },

});

/**
 * @typedef {{[key: string]: position}} positions
 */

/**
 *
 * @param type {"short" | "long"}
 */
function handleAddPosition(type) {
    const id = generateRandomString();
    const tradeType = document.querySelector(".trade-type .target").innerText;
    const targetPrice = tradeType.includes("Limit") ? +document.querySelector(".price-input").value:+currency.tradePrice;
    const targetVolume = +document.querySelector(".volume-input").value;
    const leverage = +variables[`${type}-leverage`];
    if (!basisRate) {
        alert("Waiting for basis rate");
        return;
    }
    if (!targetPrice || !targetVolume) {
        alert("targetPrice and targetVolume required!");
        return;
    }
    const volumePercentInBalance = (targetVolume / +variables.balance) * 100;
    const margin = getMarginOfType(type,"symbol");
    const amount = /*((targetVolume * leverage) / targetPrice) * (1 - +currency.defaultPrecision)*/ targetVolume;

    if (margin > +variables.balance) {
        alert("Increase your balance");
        return;
    }

    const random = +(generateRandomString("12345",1)+generateRandomString("1234567890",1))

    variables.balance = ((+variables.balance) - margin).toFixed(2);
    /**
     * @name position
     */
    const position = {
        asset: currency.asset,
        margin,
        amount,
        targetPrice,
        targetVolume,
        leverage,
        type,
        marginMode: document.querySelector(".margin-mode").innerText+"",
        openedPrice: targetPrice,
        currency: {
            ...currency,
            basisRate: window.basisRate,
            mids: window.mids
        },
        estLiq: type === "long" ? targetPrice - ((targetPrice / 100) * random):targetPrice + ((targetPrice / 100) * random),
        estLiqRandom: random,
        randomized: undefined
    };

    positions["position_"+id] = position

    alert("Position has been opened");
    registerCalculators()
}

/**
 *
 * @param lastPrice {number}
 * @param liquid {number}
 * @param type {'long' | 'short'}
 * @param position {position}
 * @return {number|string}
 */
function calculateRisk(lastPrice, liquid, type = "long", position, pnl) {
    if (lastPrice === 0) {
        // Avoid division by zero
        return 0.00;
    }
    let change;
    if (type === "short") {
        change = (liquid - lastPrice) / lastPrice * 100;
    } else {
        change = (lastPrice - liquid) / lastPrice * 100;
    }
    change *= (pnl / 100) * position?.leverage;
    const final = (100 - Math.max(change < 100 ? change:99.99, 0)).toFixed(2);
    const randomized = `0.${generateRandomString("1234567890",1)}${generateRandomString("123456789",1)}`;
    position.randomized ??= randomized;
    return final < 1 ? +position.randomized:final;
}

function calculatePositionRisk(lastPrice, openedPrice, positionType, liquidPrice) {
    if (!["long", "short"].includes(positionType)) {
        throw new Error("Invalid position type. Must be 'long' or 'short'.");
    }

    const isLong = positionType === "long";
    const priceDiff = isLong ? lastPrice - liquidPrice : liquidPrice - lastPrice;

    return Math.max(0, priceDiff);
}

function handleRefreshPositions() {
    if (document.querySelectorAll(".calculators > iframe").length === 0) {
        window.registerCalculators();
    }
    const positionContainer = document.querySelector(".positions");
    positionContainer.innerHTML = "";

    const len = document.querySelector(".position-length");
    const length = Object.keys(positions).length;
    len.innerText = length;
    Object.entries(window.positions).forEach(([key, position]) => {
        if (!isNaN(+key.slice(0,1))) {
            delete positions[key];
            return;
        }
        const currency = position.currency;
        const finalLiquid = position.liq ?? position.estLiq;
        const coin = position.currency;
        const tradePrice = +currency.tradePrice;
        const markPrice = currency.indexPrice + (1 + currency.basisRate);
        let positionSize = (position.margin * position.leverage) / position.openedPrice;

        if (typeof position.liq === 'undefined') handleLiquidCalculation(key, position, (number) => {
            if (window.positions[key] && !window.positions[key].liq && number) window.positions[key] = {
                ...positions[key],
                liq: number
            }
        });

        let pnl = position.type === "short"
            ? (position.openedPrice - tradePrice) * positionSize
            : (tradePrice - position.openedPrice) * positionSize;
        const risk = typeof finalLiquid !== 'undefined' ? calculateRisk(+currency.tradePrice, finalLiquid,position.type, position, pnl):"Wait";
        const positionMargin = position.openedPrice * position.leverage * position.amount;
        const ratio = position.type === "long"
            ? (tradePrice - position.openedPrice) / position.openedPrice * position.leverage * 100
            : (position.openedPrice - tradePrice) / position.openedPrice * position.leverage * 100;

        const closePosition = (reason)=>{
            alert(`${currency.asset} Closed! reason: ${reason}`);
            const profit = (+position.margin / 100) * ratio;
            variables.balance = (+variables.balance + (+position.margin + profit)).toFixed(3);
            delete window.positions[key];

        }

        const liquidationPrice = +finalLiquid;
        const stopLoss = position.sl ? +position.sl : null;
        const takeProfit = position.tp ? +position.tp : null;

        const buffer = 0.001;
        if (position.type === "long") {
            if (!!liquidationPrice && tradePrice <= liquidationPrice) closePosition("GOT LIQUID");
            if (stopLoss !== null && tradePrice <= stopLoss + buffer) closePosition("STOP LOSS");
            if (takeProfit !== null && tradePrice >= takeProfit - buffer) closePosition("TAKE PROFIT");
        } else if (position.type === "short") {
            if (!!liquidationPrice && tradePrice >= liquidationPrice) closePosition("GOT LIQUID");
            if (stopLoss !== null && tradePrice >= stopLoss - buffer) closePosition("STOP LOSS");
            if (takeProfit !== null && tradePrice <= takeProfit + buffer) closePosition("TAKE PROFIT");
        } else {
            // Handle any other position types or log an error
            console.log("Unknown position type:", position.type);
        }

        const echoN = (n,n2 = currency.qtyDigitNum, n3 =false) => typeof n === 'undefined' ? undefined:substringNumber(n,n2,n3)

        /**
         *
         * @type {Element}
         */
        let element = new DOMParser().parseFromString(`
        <div class="item-wrapper" data-v-db2fc607="">
            <div class="top-wrapper" data-v-db2fc607="">
                                <div class="detail-wrapper" data-v-db2fc607="">
                                    <div>
                                    <p class="name" data-v-db2fc607="">
                                        ${currency?.name?.split("/")?.join("")}
                                    </p>
                                    <div class="tag-wrapper" data-v-db2fc607="">
                                        <div class="tag ${position.type}" data-v-db2fc607="">${position.type.slice(0, 1).toUpperCase()}${position.type.slice(1)}</div>
                                        <div class="tag" data-v-db2fc607="">${position.marginMode}</div>
                                        <!---->
                                        <div class="tag" data-key="leverage" data-v-db2fc607="">${position.leverage}X</div>
                                    </div>
                                    </div>
                                    <div class="card-container card-action">
                                    
                                     </div>
                                </div>
                                <!---->
                            </div>
                            <div class="profit-and-loss" data-v-db2fc607="">
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">
                                        Unrealized PnL (USDT)
                                    </p>
                                    <p class="value ${pnl > 0 ? "up" : "down"}" data-v-db2fc607="">${pnl > 0 ? "+" : ""}${echoN(pnl, 4)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">PnL Ratio</p>
                                    <p class="value ${ratio > 0 ? "up" : "down"}" data-v-db2fc607="">${ratio > 0 ? "+" : ""}${ratio.toFixed(2)}%</p>
                                </div>
                            </div>
                            <div class="data-wrapper" data-v-db2fc607="">
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">Position (${currency.asset})
                                    <p class="value up" data-v-db2fc607="">${(positionSize + 0).toFixed(2)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label " data-v-db2fc607="">Margin
                                        (USDT)
                                    </p>
                                    <p class="value up" data-key="margin" data-v-db2fc607="">${(echoN(position.margin, +currency.priceDigitNum)+"").split(",").join("")}</p>
                                </div>
                                <div class="item risk-container" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Risk</p>
                                    <p class="value up" data-v-db2fc607="">${risk}%</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Avg. Open Price</p>
                                    <p class="value up" data-key="openedPrice" data-v-db2fc607="">${echoN(position.openedPrice, +currency.priceDigitNum)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">Mark Price</p>
                                    <p class="value up" data-v-db2fc607="">${echoN(markPrice, currency.priceDigitNum)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Est.
                                        Liq. Price
                                    </p>
                                    <p class="value up" data-key="liq" data-v-db2fc607="">${typeof finalLiquid !== 'undefined' ? echoN(finalLiquid, currency.priceDigitNum) : "Calculating"}</p>
                                </div>
                                <!---->
                            </div>
                            <div class="tb-sl">
                                 <p class="label tp-sl-text">Position TP/SL</p>
                                 <div class="ts-data">
                                   <div class="ts-data-inner">
                                    <span class="up ts-up average-buy">${echoN(position.tp, currency.priceDigitNum) ?? "--"}</span>
                                    <span class="bold rb-space">/</span>
                                    <span class="down ts-down average-sell">${echoN(position.sl, currency.priceDigitNum) ?? "--"}</span>
                                    </div>
                                   
                                  </div>
                            </div>
                            <div class="button-wrapper" data-v-db2fc607="">
                                <button class="bm-btn-wrap-light bm-btn-default bm-btn-small button" data-v-7f8286e3=""
                                        data-v-db2fc607="">TP/SL
                                </button>
                                <button class="bm-btn-wrap-light bm-btn-default bm-btn-small button" data-v-7f8286e3=""
                                        data-v-db2fc607="">Reverse
                                </button>
                                <button class="bm-btn-wrap-light bm-btn-default bm-btn-small button position-close" data-v-7f8286e3=""
                                        data-v-db2fc607="">Close
                                </button><!---->
                            </div>
                        </div>
        `,"text/html").body.firstChild;
        element.querySelectorAll("*[data-key]").forEach(e => {
            e.onclick = ()=>{
                const eKey = e.getAttribute("data-key");
                const hint = e.getAttribute("data-hint");
                const value = window.prompt(hint || "Enter Value");
                if (!!value?.length) {
                    positions[key] ={
                        ...positions[key],
                        liq: undefined,
                        balance: undefined,
                        forceMargin: undefined,
                        handleMinimum: undefined,
                        [eKey]: +value,
                    }

                }
            }
        })
        const btn = element.querySelector(".position-close");
        btn.onclick = ()=>{
            if (window.confirm(`Delete the ${currency.asset} position?`) && !(delete window.positions[key])) {
                alert("FAILED TO DELETE THE POSITION! position doesn't exists")
            }
        }

        element.querySelector(".tb-sl").onclick = () => {
            Object.entries({
                tp: "Take Profit",
                sl: "Stop Loss"
            }).forEach(([_key, name]) => {
                const value = window.prompt(`Enter ${name} value (current: ${currency.tradePrice} ${currency.asset})`);
                if (!isNaN(+value) && 0 < +value) {
                    console.log("SET");
                    window.positions[key] = {
                        ...window.positions[key] ?? {},
                        [_key]: +value
                    }
                } else {
                    if (typeof position[_key] !== 'undefined') {
                        let c= {...window.positions[key]};
                        delete c[_key];
                        window.positions[key] = c;
                    }
                }
            })
        }

        element.querySelector(".card-action").onclick = () => {
            window.localStorage.setItem("card", JSON.stringify({
                currency,
                position,
                pnl,
                ratio,
            }));
            const auto = window.localStorage.getItem("exportVar");
            if (auto) {
                const autoPrompt = window?.confirm("Export card with previous data?");
                if (autoPrompt) {
                    const iframe = document.createElement("iframe");
                    iframe.src = "/export.html?auto";
                    iframe.style.zIndex = "-9999";
                    iframe.style.opacity = "0";
                    iframe.style.position = "fixed";
                    document.body.append(iframe);
                } else {
                    window.location.href="/export.html";
                }
            } else {
                window.location.href="/export.html";
            }
        }

        element.querySelector(".risk-container").onclick = ()=>{
            let percent = +window.prompt("Enter Risk Percent [The result may change with PNL] (0-100)");
            if (!percent) return;
            percent = 100 - percent;
            if (isNaN(percent)) return;
            const targetPrice = position.targetPrice;
            const liquid =  position.type === "long" ? targetPrice - ((targetPrice / 100) * percent) : targetPrice + ((targetPrice / 100) * percent);
            window.positions[key] = {
                ...window.positions[key] ?? {},
                liq: liquid,
                randomized: undefined
            }
        }

        element.id = `${key}`;
        positionContainer.append(element);
    });


    const closeAll = document.querySelector(".close-all");

    closeAll.classList.remove(!length ? "active":"disabled");
    closeAll.classList.add(!!length ? "active":"disabled");
}
