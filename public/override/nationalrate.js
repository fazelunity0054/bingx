
let n = 0;
function rateUpdater() {
    if (n >= 5) return;
    const socket = new WebSocket("wss://push.coinmarketcap.com/ws?device=web&client_source=coin_detail_page");

    socket.addEventListener("open", ()=>{
        n = 0;
        socket.send("{\"method\":\"RSUBSCRIPTION\",\"params\":[\"main-site@crypto_price_15s@{}@detail\",\"825\"]}")
    })
    socket.addEventListener("message", (e)=>{
        const obj = JSON.parse(e.data+"");
        window.rate = obj?.d?.p || window.rate;
    })

    socket.addEventListener('close', ()=>{
        n ++;
        rateUpdater();
    })
}

rateUpdater();
