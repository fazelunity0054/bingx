
const id = generateRandomString()
if (!currency) {
    window.location.href = "/select.html";
    throw ("ERR");
}
const socket = new WebSocket(`ws://${window.location.hostname}:30054/market`);

// Connection opened
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened');
});

// Listen for messages from the server
socket.addEventListener('message', (event) => {
    try {
        onMessage(JSON.parse(event.data));
    } catch (e) {
    }
});
// Connection closed
socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed');
    if (window.location.host.includes("localhost") ? true:window.confirm("ارتباط با سرور قطع شد! اتصال مجدد؟")) {
        window.location.reload();
    }
});

// Handle errors
socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});

const symbols = [
    currency.symbol,
    ...Object.values(positions).filter(c => c.symbol !== currency.symbol).map(c => c.currency.symbol)
]

function handleDepth(data) {
    const symbol = data.dataType.split(".")[2];
    const isMain = symbol === currency.symbol;

    if (isMain) {
        const lastTrade = data.data.latestTrade;
        const pInput = document.querySelector(".price-input");
        if (pInput.value === "last") pInput.value = lastTrade?.price;

        const cLast = document.querySelector(".current-last");
        const cond = lastTrade.priceSide?.toLowerCase?.() === 'up';

        cLast.classList.add(cond ? "up" : "down");
        cLast.classList.remove(cond ? "down" : "up");

        cLast.innerText = substringNumber(+lastTrade.price,+currency.priceDigitNum,true);

        const balance = +variables.balance;
        ['long', 'short'].forEach(clx => {
            const elm = document.querySelector(`.available-${clx}`);
            if (!elm) return;

            elm.innerText = calculateMaxMarginAsSymbol(clx, lastTrade);
        })

    } // Handle Last Trade Data!

    {
        const bidShowLength = 9, askShowLength = 9;
        const marketDepthBids = data.data.bids;
        const marketDepthAsks = data.data.asks;

        function depthBaseVolume() {

            const t = marketDepthBids.slice(0, bidShowLength).reduce((s, i) => s + Number(i.volume), 0)
                ,
                o = marketDepthAsks.slice(marketDepthAsks.length - askShowLength, marketDepthAsks.length).reduce((s, i) => s + Number(i.volume), 0);
            return Math.max(t, o)
        }

        const base = depthBaseVolume();
        const all = [];
        {
            function displayMarketDepthAsks() {
                let o = 0;
                return [...marketDepthAsks].reverse().map(n => {
                        o += Number(n.volume);
                        const a = n.price * 1;
                        return {
                            ...n,
                            percent: ((o / base) * 100),
                            displayAccumulateVolume: n.volume,
                            displayVolume: n.volume,
                            type: "sell"
                        }
                    }
                ).reverse()
            }

            const asks = displayMarketDepthAsks();
            all.push(...asks);
            asks.sort((l, l1) => +l1.price - +l.price)
            const wrapper = document.querySelector(".asks-wrapper");
            if (isMain) asks.slice(-askShowLength).forEach((ask, i) => {
                const item = wrapper.children[i];
                const progress = item.querySelector(".progress");
                progress.style.width = `${ask.percent}%`
                const price = item.querySelector(".price");
                price.innerText = (+ask.price).toLocaleString();
                const total = item.querySelector(".total")
                const n = +ask.volume;
                const {result, symbol} = calcNumber(n);
                total.children[1].innerText = result;
                total.children[2].innerText = symbol;
            });
        } // ASKs
        {
            function displayMarketDepthBids() {
                let o = 0;
                return marketDepthBids.map(i => {
                        o += Number(i.volume);
                        const n = i.price * 1;
                        return {
                            ...i,
                            percent: ((o / base) * 100),
                            displayAccumulateVolume: n.accumulateVolume,
                            displayVolume: n.volume,
                            type: "buy"
                        }
                    }
                )
            }

            const bids = displayMarketDepthBids();
            all.push(...bids);
            bids.sort((l, l1) => +l.price - +l1.price)
            const wrapper = document.querySelector(".bids-wrapper");
            if (isMain) bids.slice(-bidShowLength).reverse().forEach((ask, i) => {
                const item = wrapper.children[i];
                const progress = item.querySelector(".progress");
                progress.style.width = `${ask.percent}%`
                const price = item.querySelector(".price");
                price.innerText = (+ask.price).toLocaleString();
                const total = item.querySelector(".total")
                const n = +ask.volume;
                const {result, symbol} = calcNumber(n);
                total.children[1].innerText = result;
                total.children[2].innerText = symbol;
            });
        } // BIDs

        const types = ['sell', 'buy'];
        const average = types.map(type => {
            const items = all.filter(i => i.type === type)
            if (items.length === 0) return 0;
            return items.reduce((total, n) => total + n?.percent ?? 0, 0) / items.length
        });
        const max = average.reduce((total, n) => total + n, 0);
        if (isMain) types.forEach((type, i) => {
            const progress = document.querySelector(`.average-${type}-progress`);
            const elm = document.querySelector(`.average-${type}`);
            const percent = Math.round((+average[i] / max) * 100);
            progress.style.width = `calc(${percent}% - var(--average-config))`;
            elm.innerText = percent + "%";
        });

        const mids = types.map(type => {
            const items = all.filter(i => i.type === type)
            if (items.length === 0) return 0;
            return items.reduce((total, n) => total + +n?.price ?? 0, 0) / items.length
        });
        const midsA = Object.fromEntries(mids.map((v, i) => [types[i], v]));
        const basisRate = Object.values(mids).reduce((t, v) => t + v, 0) / mids.length;
        if (isMain) {
            window.mids = midsA;
            window.basisRate = basisRate;
        }
        updatePositionsData({
            symbol,
            mids: midsA,
            basisRate
        })
    } // Handle Order Book
}

const types = [
    ...symbols.map(symbol => ({
        type: `market.depth.${symbol}.step0.level20`,
        handle: handleDepth
    })),
    {
        type: `market.contracts.${symbols.join(".")}`,
        handle({data}) {
            const target = data.contracts[0];
            updatePositionsData(target);

            if (target.asset !== window.currency.asset) return;

            updateChange(target.changePercentageFair);
            window.localStorage.setItem("currency", JSON.stringify(target));
            window.currency = target;
            document.querySelector(".fair").innerText = (+target.fairPrice).toLocaleString();
            document.querySelector(".funding-rate").innerText = target.fundingRate;
            refreshFee();
            if (!isLimit()) {
                document.querySelector(".price-input").value = target.tradePrice;
            }

            handleMargin();
        }
    }
]

/**
 *
 * @param object {{
 *     dataType: string,
 *     [key: string]: any
 * }}
 */
function onMessage(object) {
    if (object.ping) {
        socket.send("Pong");
        socket.send(`{"pong":"${object.ping}","time":"${new Date().toISOString()}"}`);
        return;
    }

    switch (object.dataType) {
        case "PENDING":
            console.log("Transforming...")
            break;
        case "ready":
            types.forEach((t) => {
                console.log("TYPE SETUP", t.type);
                socket.send(`{"dataType":"${t.type}","id": "${id}","reqType":"sub"}`)
            })
            break;
        default:
            const type = types.find(t => t.type === object.dataType);
            if (type) {
                try {
                    type.handle(object);
                } catch(e) {
                    console.error(e);
                }
            }
            else console.log("TYPE NOT FOUND", object);
            break;
    }
}

function updatePositionsData(currency) {
    const keys = Object.entries(positions).filter(([_,p]) => {
        if (currency.asset) return p.asset === currency.asset;
        else return currency.symbol === p?.currency?.symbol
    }).map(([k,p]) => k);
    keys.forEach(key => {
        positions[key] = {
            ...positions[key],
            currency: {
                ...positions[key].currency ?? {},
                ...currency
            }
        };
    });
    refreshPositions();
}

window.updatePositionsData = updatePositionsData;
