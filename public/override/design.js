[
    {
        name: "Open-Close Toggler",
        handle: ()=>{
            const toggle = document.querySelector(".open-toggle");
            const items = toggle.querySelectorAll(".item");

            let n = 0;
            toggle.onclick = ()=>{
                items[n].classList.remove("active");
                n = n === 0 ? 1:0;
                items[n].classList.add("active");
            }
        }
    },
    {
        name: "Margin Mode",
        handle: ()=>{
            const toggle = document.querySelector(".margin-mode");
            toggle.onclick = ()=>{
                toggle.innerText = toggle.innerText.includes("Isolated") ? "Cross":"Isolated"
            }
        }
    },
    {
        name: "TradeType",
        handle() {
            const tType = document.querySelector(".trade-type");
            tType.onclick = ()=>{
                const target = tType.querySelector('.target');
                target.innerText = target.innerText === 'Limit' ? 'Market':'Limit'
                const ps = document.querySelector(".price-switch");
                const isLimit = target.innerText === "Limit";
                ps.style.display = isLimit ? "flex":"none";
            }
        }
    },
    {
        name: "CurrencyInfo",
        handle() {
            const elm = document.querySelectorAll(".currency, .currency-name");
            elm.forEach(elm => elm.innerText = currency?.name?.split?.("/")?.join(""));
            updateChange(currency.changePercentage);
            const symbol  =document.querySelectorAll(".symbol");
            symbol.forEach(e => e.innerText = currency.asset)
            const pInput = document.querySelector(".price-input");
            pInput.value = currency.tradePrice;
        }
    },
    {
        name: "Variable handler",
        handle() {
            const domVariables = document.querySelectorAll(".variable");
            domVariables.forEach(domVariable => {
                const key = domVariable.getAttribute("data-key");
                const hint = domVariable.getAttribute("data-hint") ?? "Enter Value"
                domVariable.onclick = ()=>{
                    const value = +window.prompt(hint);
                    if (!value) return;
                    window.variables[key] = value;
                    domVariable.innerText = (+value).toLocaleString();
                }
                if (variables[key]) {
                    domVariable.innerText = variables[key];
                } else {
                    variables[key] = (+domVariable.innerText).toLocaleString();
                }
            })
        }
    },
    {
        name: "Volume Handler",
        handle() {
            const input = document.querySelector(".volume-input");
            const price = document.querySelector(".price-input");

            const handle = () => {
                const number = (getMarginOfType('short','symbol') + getMarginOfType('long', 'symbol')) / 2;
                const balance = +variables.balance;
                const percent = 100 / (balance / number);
                handleMargin()
                changeSlider(percent);
            }

            input.oninput = handle;
            handle();
        }
    },
    {
        name: "Buttons",
        handle() {
            ['long','short'].forEach(clx => {
                const btn = document.querySelector(`.btn-${clx}`);
                btn.onclick = ()=>{
                    addPosition(clx);
                }
            })
        }
    },
    {
        name: "CurrencyIcon",
        async handle() {
            const search = await fetch(`/image?symbol=${currency.asset}`)
                .then(r=>r.json());
            const image = search?.url;
            if (image) {
                document.querySelector(".currency-image").src = image;
            }
        }
    },
    {
        name: "Funding Timer",
        handle() {
            const n = (min, max, l =1)=>generateRandomString(Array.from({length: max}).map((_, i)=>(i+min)+""), l);
            document.querySelector(".funding-timer").innerText = `0${n(1, 7)}:${n(1, 5, 2)}:${n(1, 5, 2)}`;
        }
    },
    {
        name: "Margin Unit",
        handle() {
            const element = document.querySelector(".margin-unit");
            const units = marginUnits;
            const display = marginDisplay;
            element.onclick = ()=>{
                let current = units.findIndex(u => u === window.marginUnit) + 1;

                const next = units[current] ?? units[0];
                window.marginUnit = next;
                element.innerText =display[units.findIndex(u => u === next)]
                document.querySelectorAll(".symbol-reverse").forEach(e => {
                    console.log(next);
                    e.innerText =  next === "symbol" ? "USDT":currency.asset
                })
                document.querySelector(".available-volume").style.display = next === "symbol" ? "flex":"none";
            }
        }
    },
    {
        name: "fontsize",
        handle() {
            const html = document.querySelector("html");
            html.style.fontSize = "37px"
        }
    },
    {
        name: "Change Default Units",
        handle() {
            document.querySelector(".margin-unit").click();
            document.querySelector(".margin-mode").click();
        }
    },
    {
        name: "Theme",
        handle() {
            let theme = window.localStorage.getItem("theme") ?? "light";
            const url = new URL(window.location.href);

            if (url.searchParams.has("dark")) {
                theme = "dark";
            } else if (url.searchParams.has("light")) {
                theme = "light";
            }

            if (theme === "dark") {
                const sc = document.createElement('script');
                sc.src = "/override/dark.js";
                sc.onload = ()=>{
                    setTimeout(window.handleDark, 2000)
                }
                document.body.append(sc);
            }

            window.localStorage.setItem("theme", theme);
        }
    }
].forEach((item)=>{
    try {
        item.handle();
    } catch (e) {
        console.error(`FAILED TO HANDLE ${item.name}`,e);
    }
})

function changeSlider(percent) {
    percent = Math.min(Math.max(1.24, percent), 100);
    const btn = document.querySelector('.slider-btn');
    btn.style.left = `calc(${percent}% - 8px)`
    const track = document.querySelector('.slider .track');
    track.style.width = `calc(${percent}% + 8px)`

    document.querySelectorAll(".marks .mark").forEach(mark => {
        const cond = +mark.style.left.split("%")[0];
        if (percent >= cond) {
            mark.classList.add("filled")
        } else {
            mark.classList.remove("filled")
        }
    })
}
