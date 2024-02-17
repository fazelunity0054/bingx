let all = [];

(async () => {


    /**
     * @type {{
     *     symbol: string,
     *     name: string
     * }[]}
     */

    render(all);

    const input = document.querySelector("input");
    input.oninput = ()=>{
        const value = input.value;
        if (!value) {
            render(all);
        } else {
            render(all.filter(c => c.name.toLowerCase().includes(value.toLowerCase())))
        }
    }
})()

/**
 *
 * @param contracts {{
 *     symbol: string,
 *     name: string,
 *     change: string
 * }[]}
 */
function render(contracts) {
    const container =document.querySelector(".wrapper");
    if (!container) alert("container not found");
    container.innerHTML = "";


    contracts.forEach(contract => {
        const item = document.createElement("div");
        item.style.cursor = "pointer";
        item.style.padding = "10px";
        item.style.border = "solid 1px #333"
        item.style.margin = "20px 0px"
        item.onclick = ()=>{
            window.localStorage.setItem("currency", JSON.stringify(contract));
            window.location.href = "/";
        }
        item.innerHTML = `
           <p>${contract.name}</p>
        `
        container.append(item);
    })
}


const socket = new WebSocket(`ws://${window.location.hostname}:30054/market`);

socket.addEventListener('message', (event) => {
    try {
        onMessage(JSON.parse(event.data));
    } catch (e) {
    }
});

function onMessage(object) {

    switch (object.dataType) {
        case "ready":
            socket.send(`{"dataType":"market.contracts","id": "UPDATE-LIST","reqType":"sub"}`)
            break;
        default:
            console.log(object);
            break;
    }
}
