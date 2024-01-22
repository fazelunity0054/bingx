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
            result: substringNumber(n, n < 0 ? 4 : 2, false)
        }
    if (n >= 1000 && n < 1_000_000) {
        return {
            result: +(substringNumber((n / 1000), 2)),
            symbol: "K"
        }
    }
    if (n >= 1_000_000) {
        return {
            result: +(substringNumber((n / 1_000_000), 2)),
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

function calculateLiquidationPrice(type) {
    const leverageRatioInput = +variables[`${type}-leverage`];
    const entryPriceInput = document.querySelector(".price-input");
    const leverageRatio = parseFloat(leverageRatioInput) || 0;
    const entryPrice = parseFloat(entryPriceInput.value) || 0;

    let liquidationPrice = 0;
    const balance = getUSDTBalance();
    if (type === 'long') {

        if (leverageRatio > 1) {
            const distanceToLiquidation = (1 / leverageRatio) * entryPrice;
            liquidationPrice = entryPrice - distanceToLiquidation
        }
    } else {
        liquidationPrice = entryPrice / (1 - (balance / leverageRatio))
    }
    const t = document.querySelector(`.liq-${type}-price`);
    const value = liquidationPrice / (1 - fee);
    if (t && liquidationPrice)
        t.innerText = substringNumber(value, currency.qtyDigitNum);
    return value;
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
