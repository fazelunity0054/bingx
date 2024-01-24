/**
 *
 * @param type {"short" | "long"}
 * @return number
 */
window.getAvailableMargin = (type)=>{
    const leverage = +variables[`${type}-leverage`] || 0;
    const targetPrice = +document.querySelector(".price-input")?.value || 0;
    const targetVolume = +document.querySelector(".volume-input")?.value || 0;
    return targetPrice * (targetVolume / leverage);
}
/**
 *
 * @param type {"short" | "long"}
 * @param marginUnit {"symbol" | "usdt"}
 * @return number
 */
window.getMarginOfType = (type, marginUnit = window.marginUnit)=>{
    const leverage = +variables[`${type}-leverage`] || 0;
    let targetPrice = +document.querySelector(".price-input")?.value || 0;
    if (type === 'short' && targetPrice < currency.tradePrice)
        targetPrice = currency.tradePrice;
    let targetVolume = +document.querySelector(".volume-input")?.value || 0;
    if (marginUnit === "symbol") {
        if (marginUnit !== window.marginUnit) {
            targetVolume = targetVolume / targetPrice * leverage
        }
        return targetPrice * (targetVolume / leverage);
    } else {
        return ((targetVolume - (targetVolume / 100 * (0.049950049749999996 * leverage))) * leverage) / targetPrice;
    }
}
window.currency = JSON.parse(window.localStorage.getItem("currency")) ?? null
function calcNumber(n) {
    if (n < 1000)
        return {
            symbol: "",
                result: substringNumber(n, currency.qtyDigitNum, false)
        }
    if (n >= 1000 && n < 1_000_000) {
        return {
            result: +(substringNumber((n / 1000), currency.qtyDigitNum)),
            symbol: "K"
        }
    }
    if (n >= 1_000_000) {
        return {
            result: +(substringNumber((n / 1_000_000), currency.qtyDigitNum)),
            symbol: "M"
        }
    }
}
window.calcNumber = calcNumber;
/**
 *
 * @param type {"short" | "long"}
 * @param lastTrade {any}
 */
function calculateMaxMarginAsSymbol(type, lastTrade) {
    const leverage = +variables[`${type}-leverage`] ?? 0;
    if (!leverage)
        return 0;

    let targetPrice = +document.querySelector(".price-input")?.value;
    if (type === 'short' && targetPrice < currency.tradePrice)
        targetPrice = currency.tradePrice;

    const B = +variables.balance;
    let origin = ((B * leverage) / targetPrice) ;
    const fee = (type === "long" ? calculateFee(B, leverage, targetPrice) : 0);

    let result = origin - fee;
    if (result < 0)
        result = 0;
    return result < 99 ? substringNumber(result, +currency.qtyDigitNum,true) : (type === "long" ? Math.floor(result):Math.round(result)).toLocaleString();
}
window.calculateMaxMarginAsSymbol = calculateMaxMarginAsSymbol;

window.calculateFee = (B, leverage, targetPrice)=>{
    return (((B * leverage) * 0.0005) * leverage) / targetPrice
}

window.isLimit = ()=>{
    return document.querySelector(".trade-type")?.querySelector('.target')?.innerText?.includes("Limit");
}

window.handleMargin = ()=>{
    document.querySelectorAll(".margin").forEach(e=>{
        const type = e.getAttribute("data-type");
        const margin = getMarginOfType(type);
        let R = substringNumber(margin, marginUnit === "symbol" ? 2:+currency.qtyDigitNum, true)
        R = marginUnit === "symbol" ? +R:R; // Remove end zeros
        e.innerText = margin > 0 ? R : "--";
        calculateLiquidationPrice(type);
    }
    );
}

function calculateLiquidationPrice(type = "short", key = 'currency', callback = null) {

    /**
     *
     * @type {position}
     */
    const position = key === "currency" ? {
        leverage: +variables[`${type}-leverage`],
        type,
        openedPrice: +document.querySelector(".price-input").value,
        marginMode: document.querySelector(".margin-mode").innerText,
        amount: +document.querySelector(".volume-input").value,
        margin: getMarginOfType(type)
    }:positions[key];

    handleLiquidCalculation(key === 'currency' ? `currency-${type}`:key, position, (number)=>{
        if (!callback) {
            const t = document.querySelector(`.liq-${type}-price`);
            if (t)
                t.innerText = substringNumber(number, currency.priceDigitNum);
        } else callback(number);
    });


}

window.calculateLiquidationPrice = calculateLiquidationPrice;

window.substringNumber = (margin,n=2,force=true)=>{
    const R = (margin + '').split(".");
    if (n === 0) return R?.[0] ?? margin;
    return R[0] + (!!R[1] || force ? "." : "") + (!!R[1] || force ? Array.from({
        length: n
    }).map((_,i)=>(R?.[1]?.split("")?.[i] || "0")).join("") : "");
}

function generateRandomString(charset='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', length=10) {
    // Validate the provided length
    if (length < 1 || !Number.isInteger(length)) {
        throw new Error('Invalid length. Please provide a positive integer.');
    }

    // Generate random string with the provided (or default) length
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }

    return randomString;
}
window.generateRandomString = generateRandomString;
function formatNumber(number, len) {
    const args = (number + "").split(".");
    if (args.length === 1)
        return number;
    let result = args[0] + ".";

    let n = 0;
    for (let s of args[1].split("")) {

        if (n >= len)
            break;
        result += s;
        if (!!+s) {
            n++;
        }
    }

    return result;
}
window.formatNumber = formatNumber;

function getUSDTBalance() {
    const b = +variables.balance;
    return b - (b / 100 * fee);
}
window.getActualBalance = getUSDTBalance;
window.refreshFee = ()=>{
    window.fee = 0.045 + +currency.fundingRate
}
window.fee = 0.045;
refreshFee()
function getActualNumber(number) {
    return number * rate;
}
window.getActualNumber = getActualNumber;

window.variables = new Proxy(JSON.parse(window.localStorage.getItem("variables") || "{}") ?? {},{
    set: (object,key,newValue)=>{
        const elm = document.querySelector(`*[data-key="${key}"]`);
        if (elm && elm.innerText !== newValue) elm.innerText = newValue;
        object[key] = newValue;
        localStorage.setItem("variables", JSON.stringify(object));
        return true;
    }
});
window.rate = 1;
window.updateChange = (newChange='unknown')=>{
    const cChange = document.querySelector(".currency-change");
    cChange.innerText = newChange + "%";
    const change = +newChange;

    cChange.classList.remove(change < 0 ? "up" : "down");
    cChange.classList.add(change < 0 ? "down" : "up");
}
window.basisRate = 0;
window.events = {};
window.addRefreshEvent = (id,event)=>{
    events[id] = event;
}
window.positions ??= JSON.parse(localStorage.getItem('positions') || "{}");

window.test = (targetKey)=>{
    const target = currency[targetKey];
    for (let key in currency) {
        console.log("TEST",targetKey,"-",key,target - currency[key])
    }
}

window.testAll = ()=>{
    for (let key in currency) window.test(key);
}

window.marginUnits = ["symbol","usdt"]
window.marginDisplay = [currency.asset, 'USDT','USDT']
/**
 *
 * @type {"symbol" | "usdt"}
 */
window.marginUnit = "symbol";

window.registerCalculators = ()=>{
    const container = document.querySelector(".calculators");
    container.innerHTML = null;
    /**
     * @type {positions}
     */
    let p = JSON.parse(window.localStorage.getItem("positions") ?? "{}");
    let symbols = {
        "currency-short": currency.symbol,
        "currency-long": currency.symbol
    };
    Object.entries(p).forEach(([key, p]) => {
        symbols[key] = p.currency.symbol
    })

    let registered = [];
    Object.entries(symbols).map(([key, symbol])=>{
        const iframe = document.createElement('iframe');
        iframe.src = `/calculator.html?symbol=${symbol}`
        iframe.id = key;
        iframe.key = key;
        container.append(iframe);
    })
}


let calculatorStatus = {}
let calculatorCallbacks = {}

/**
 *
 * @param key {string}
 * @param position {position}
 * @param callback {(v: number)=>void}
 */
window.handleLiquidCalculation = (key, position, callback) => {
    if (!+position.margin || !+position.openedPrice) return;

    calculatorCallbacks[key] ??= [];
    calculatorCallbacks[key].push(callback);

    if (calculatorStatus[key] === "PENDING") {
        return;
    }
    const iframe = document.querySelector("#"+key);
    if (!iframe) {
        console.error(`Unregistered calculator ${key}`)
        callback(0);
        return;
    }

    const iframeDoc = iframe.contentWindow.document;

    new Promise(async (r,c) => {
        try {
            calculatorStatus[key] = "PENDING";
            const waitFor = async (selector) => {
                return await new Promise((r,re)=>{
                    let n = 0;
                    const thread =setInterval(()=>{
                        n++;
                        const find = iframeDoc.querySelector(selector);
                        if (find && iframeDoc.readyState === 'complete') {
                            r(true);
                            clearInterval(thread);
                        }
                        if (n > 10000) {
                            re("timeout");
                            clearInterval(thread);
                        }
                    },20);
                })
            }
            await waitFor("body");

            /**
             *
             * @param e{Element}
             */
            const input = (e)=>{
                e.dispatchEvent(new Event("input",{
                    bubbles: true
                }));
                return e;
            }

            {
                iframeDoc.querySelector("#__layout > div > div > div > section > div.targets.m > div:nth-child(3)").click();
            } // Open Liq Tab
            {
                iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.selector-wrapper > div").click();
                await waitFor(".selector-dialog .option-list");
                iframeDoc.querySelector(`#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.selector-wrapper > div.selector-dialog > div.option-list > div:nth-child(${position.marginMode.includes("Iso") ? 2:1})`).click();
            } // Select Margin Mode
            {
                iframeDoc.querySelector(`#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.direction > button:nth-child(${position.type === "short" ? 3:1})`).click();
            } // Position Type
            {
                const currentLeverage = +iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.leverage > div:nth-child(1) > div > div.leverage-input > span.leverage-input-small").innerText;
                const diff = position.leverage - currentLeverage;
                if (diff < 0) { // Decrease
                    for (let i=0;i< -(diff);i++) {
                        iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.leverage > div:nth-child(1) > div > div.leverage-input > span:nth-child(1)").click();
                    }
                } else {
                    for (let i=0;i<diff;i++) {
                        iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.leverage > div:nth-child(1) > div > div.leverage-input > span:nth-child(6)").click();
                    }
                }
            } // leverage
            {
                const opIn = iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.input.open-price > div > div > div.input > input[type=text]");
                input(opIn)
                    .value = +(+position.openedPrice).toFixed(5)
                input(opIn)
            } // opened Price
            {
                const amIn = iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div.input.volume > div > div > div.input > input[type=number]");

                input(amIn).value = +((+position.amount).toFixed(5));
                input(amIn);
            } // amount
            {
                let target = +(+variables.balance).toFixed(5);
                const mode = iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div:nth-child(6) > div > div > div.label.long").innerText;
                if (mode.includes("Position")) {
                    target = Object.values(positions).reduce((total, p) => total + p.margin, 0);
                }
                const bIn =iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.inner > div:nth-child(6) > div > div > div.input > input[type=number]");
                input(bIn)
                    .value = target;
                input(bIn);
            } // balance | margin
            iframeDoc.querySelector("#__layout > div > div > div > section > div.calculator-container > div > div.calc-btn > button").click();
            let n=  0;
            const th= setInterval(()=>{
                let result = iframeDoc.querySelector("#__layout > div > div > div > section > div.result-wrapper > div > div > span.value > span").innerText+"";
                if (result.includes("--") && n < 100) {
                    n++;
                    return;
                }
                r(+(result.replaceAll(",","")) || 0);
                clearInterval(th);
            },10);
        } catch (e) {
            c(e);
        }
    }).then((n)=>{
        calculatorCallbacks[key]?.forEach?.(c => c(n));
        calculatorCallbacks[key] = undefined;
    }).catch((e)=>{
        return true;
    }).finally(()=>{
        calculatorStatus[key] = "FREE";
    })
}
