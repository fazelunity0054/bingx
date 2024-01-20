(async () => {
    const all = await fetch("/contracts").then(r => r.json());

    /**
     * @type {{
     *     symbol: string,
     *     name: string
     * }[]}
     */
    const contracts = all.data.contracts;

    render(contracts);

    const input = document.querySelector("input");
    input.oninput = ()=>{
        const value = input.value;
        if (!value) {
            render(contracts);
        } else {
            render(contracts.filter(c => c.name.toLowerCase().includes(value.toLowerCase())))
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
