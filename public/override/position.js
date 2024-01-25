

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

    if (window.document.readyState !== 'complete') {
        alert("Wait for document load");
        return;
    }
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
        openedPrice: (basisRate + targetPrice) / 2,
        currency: {
            ...currency,
            basisRate: window.basisRate,
            mids: window.mids
        }
    };

    positions["position_"+id] = position

    alert("Position has been opened");
    registerCalculators()
}

function calculateRisk(lastPrice, liquid, type = "long") {
    if (lastPrice === 0) {
        // Avoid division by zero
        return "0.00";
    }
    let change;
    if (type === "short") {
        // For short positions, the calculation is reversed
        change = (liquid - lastPrice) / lastPrice * 100;
    } else {
        // For long positions (default)
        change = (lastPrice - liquid) / lastPrice * 100;
    }
    return Math.max(change < 100 ? change.toFixed(2):99.99, 0);
}

function handleRefreshPositions() {
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
        const coin = position.currency;
        const risk = typeof position.liq !== 'undefined' ? calculateRisk(+currency.tradePrice, position.liq,position.type):"Wait";
        const tradePrice = +currency.tradePrice;
        const markPrice = currency.indexPrice + (1 + currency.basisRate);
        let positionSize = (position.margin * position.leverage) / position.openedPrice;

        if (!position.liq) handleLiquidCalculation(key, position, (number) => {
            if (window.positions[key]) window.positions[key] = {
                ...positions[key],
                liq: number
            }
        })


        const echoN = (n,n2 = currency.qtyDigitNum, n3 =false) => substringNumber(n,n2,n3)

        let pnl = position.type === "short"
            ? (position.openedPrice - tradePrice) * positionSize
            : (tradePrice - position.openedPrice) * positionSize;



        const positionMargin = position.openedPrice * position.leverage * position.amount;
        const ratio = position.type === "long"
            ? (tradePrice - position.openedPrice) / position.openedPrice * position.leverage * 100
            : (position.openedPrice - tradePrice) / position.openedPrice * position.leverage * 100;

        let element = new DOMParser().parseFromString(`
        <div class="item-wrapper" data-v-db2fc607="">
            <div class="top-wrapper" data-v-db2fc607="">
                                <div class="detail-wrapper" data-v-db2fc607="">
                                    <p class="name" data-v-db2fc607="">
                                        ${currency?.name?.split("/")?.join("")}
                                    </p>
                                    <div class="tag-wrapper" data-v-db2fc607="">
                                        <div class="tag ${position.type}" data-v-db2fc607="">${position.type.slice(0,1).toUpperCase()}${position.type.slice(1)}</div>
                                        <div class="tag" data-v-db2fc607="">${position.marginMode}</div>
                                        <!---->
                                        <div class="tag" data-key="leverage" data-v-db2fc607="">${position.leverage}X</div>
                                    </div>
                                </div>
                                <!---->
                            </div>
                            <div class="profit-and-loss" data-v-db2fc607="">
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">
                                        Unrealized PnL (USDT)
                                    </p>
                                    <p class="value ${pnl > 0 ? "up":"down"}" data-v-db2fc607="">${pnl > 0 ? "+":""}${echoN(pnl, 4)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">PnL Ratio</p>
                                    <p class="value ${ratio > 0 ? "up":"down"}" data-v-db2fc607="">${ratio > 0 ? "+":""}${ratio.toFixed(2)}%</p>
                                </div>
                            </div>
                            <div class="data-wrapper" data-v-db2fc607="">
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">Position (${currency.asset})
                                    <p class="value up" data-v-db2fc607="">${(positionSize+0).toFixed(2)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label " data-v-db2fc607="">Margin
                                        (USDT)
                                    </p>
                                    <p class="value up" data-key="margin" data-v-db2fc607="">${echoN(position.margin,+currency.priceDigitNum)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Risk</p>
                                    <p class="value up" data-key="risk" data-v-db2fc607="">${risk}%</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Avg. Open Price</p>
                                    <p class="value up" data-key="openedPrice" >${echoN(position.openedPrice,+currency.priceDigitNum)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">Mark Price</p>
                                    <p class="value up" data-v-db2fc607="">${echoN(markPrice, currency.priceDigitNum)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Est.
                                        Liq. Price
                                    </p>
                                    <p class="value up" data-key="liq" data-v-db2fc607="">${typeof position.liq !== 'undefined' ? echoN(position.liq, currency.priceDigitNum):"Calculating"}</p>
                                </div>
                                <!---->
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
        element.id = `position-${key}`;
        positionContainer.append(element);
    });


    const closeAll = document.querySelector(".close-all");

    closeAll.classList.remove(!length ? "active":"disabled");
    closeAll.classList.add(!!length ? "active":"disabled");
}
