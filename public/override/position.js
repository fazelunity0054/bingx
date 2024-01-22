

window.addPosition = handleAddPosition;
window.refreshPositions = handleRefreshPositions;

/**
 *
 * @type {{
 *     [key: string]: {
 *         asset: string,
 *         currency: any,
 *         type: "short" | "long",
 *         margin: number,
 *         openedPrice: number,
 *         targetPrice: number,
 *         targetVolume: number,
 *         leverage: number,
 *         amount: number,
 *         marginMode: "Isolated" | "Cross",
 *         liq: number,
 *         [key: string]: any
 *     }
 * }}
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
        return true;
    },

});


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

    if (!targetPrice || !targetVolume) {
        alert("targetPrice and targetVolume required!");
        return;
    }
    const volumePercentInBalance = (targetVolume / +variables.balance) * 100;
    const margin = getMarginOfType(type,"symbol");
    const amount = ((targetVolume * leverage) / targetPrice) * (1 - +currency.defaultPrecision);

    if (margin > +variables.balance) {
        alert("Increase your balance");
        return;
    }

    variables.balance = ((+variables.balance) - margin).toFixed(2);

    positions[id] = {
        asset: currency.asset,
        margin,
        amount,
        targetPrice,
        targetVolume,
        leverage,
        type,
        marginMode: document.querySelector(".margin-mode").innerText,
        openedPrice: (basisRate + targetPrice) / 2,
        liq: calculateLiquidationPrice(type),
        risk: 33,
        currency
    }

    alert("Position has been opened");
}

function handleRefreshPositions() {
    const positionContainer = document.querySelector(".positions");
    positionContainer.innerHTML = "";

    const len = document.querySelector(".position-length");
    const length = Object.keys(positions).length;
    len.innerText = length;
    Object.entries(window.positions).forEach(([key, position]) => {
        const currency = position.currency;
        const coin = position.currency;
        const tradePrice = +currency.tradePrice;
        const markPrice = currency.indexPrice + (1 + currency.basisRate);
        let positionSize = (position.margin * position.leverage) / position.openedPrice;
        positionSize = positionSize.toFixed(2);



        const echoN = (n,n2 = currency.qtyDigitNum, n3 =false) => substringNumber(n,n2,n3)

        let pnl = (tradePrice - position.openedPrice) * positionSize;

        const positionMargin = position.openedPrice * position.leverage * position.amount;
        const ratio =  (tradePrice - position.openedPrice) / position.openedPrice * position.leverage * 100;

        const element = new DOMParser().parseFromString(`
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
                                        <div class="tag" data-v-db2fc607="">${position.leverage}X</div>
                                        <img src="/ui/charge.png" class="charge" />
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
                                    <p class="value up" data-v-db2fc607="">${positionSize}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label " data-v-db2fc607="">Margin
                                        (USDT)
                                    </p>
                                    <p class="value up" data-key="margin" data-v-db2fc607="">${echoN(position.margin)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Risk</p>
                                    <p class="value up" data-key="risk" data-v-db2fc607="">${position.risk}%</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Avg.
                                        Open Price
                                    <p class="value up" data-key="openedPrice" >${echoN(position.openedPrice)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label" data-v-db2fc607="">Mark Price</p>
                                    <p class="value up" data-v-db2fc607="">${echoN(markPrice)}</p>
                                </div>
                                <div class="item" data-v-db2fc607="">
                                    <p class="label dotted" data-v-db2fc607="">Est.
                                        Liq. Price
                                    </p>
                                    <p class="value up" data-key="liq" data-v-db2fc607="">${echoN(position.liq)}</p>
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
                positions[key] ={
                    ...positions[key],
                    [eKey]: +value
                }
            }
        })
        const btn = element.querySelector(".position-close");
        btn.onclick = ()=>{
            if (window.confirm("ایا میخواهید پوزیشن را ببنید؟") && !(delete window.positions[key])) {
                alert("خطا در حذف")
            }
        }
        positionContainer.append(element)
    })

    const closeAll = document.querySelector(".close-all");

    closeAll.classList.remove(!length ? "active":"disabled");
    closeAll.classList.add(!!length ? "active":"disabled");
}
