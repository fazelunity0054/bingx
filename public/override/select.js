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


    (!contracts?.length ? [{
        name: "SYMBOL NOT FOUND",
        changeFair: "wait until full data load"
    }]:contracts).forEach(contract => {
        const item = document.createElement("div");
        item.style.cursor = "pointer";
        item.style.padding = "10px";
        item.style.border = "solid 1px #333"
        item.style.margin = "20px 0px"
        item.onclick = ()=>{
            if (!contract?.symbol) return;
            window.localStorage.setItem("currency", JSON.stringify(contract));
            window.location.href = "/";
        }
        item.innerHTML = `
           <p>${contract.name}</p>
           <small style="color: ${contract?.fairDirection === 'Down' ? "red":"green"}">${contract?.changeFair}</small>
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
        case "market.contracts":
            const input = document.querySelector("input");
            if (input?.value) return;
            /**
             * @type {any[]}
             */
            const array = object?.data?.contracts || [];
            /**
             * @type {string[]}
             */
            let copy= Object.fromEntries(
                all?.map?.(i => ([
                    i?.symbol,
                    i
                ]))
            )

            for (let item of array) {
                copy[item?.symbol] = item;
            }
            all = Object.values(copy);
            render(all);
            break;
        default:
            console.log(object);
            break;
    }
}
