const iframe = document.querySelector("iframe");

function extractLink(data) {
    return Object.values(data).filter(v => typeof v === 'object' || (typeof v === "string" && (v + "").endsWith("png"))).map(v => typeof v === "object" ? extractLink(v) : v).flat();
}

function extractAllLink(data) {
    return Object.values(data).map(extractLink).flat();
}

function handleImagesRequest(path, params, selector, key) {
    return (async () => {
        const bannersData = (await request({
            method: "GET",
            url: `//${window.location.protocol}//${window.location.host}${path}`,
            params
        }))?.list;
        const links = extractAllLink(bannersData);
        appendImagesTo(selector, links.map(l => `${window.location.origin}${new URL(l).pathname}`), key);
    })().catch((e) => {
        console.error(e)
        if (!window.location.host.includes("localhost")) {
            window.location.reload();
        }
    })
}

iframe.onload = () => {
    window.request = iframe.contentWindow.request;
    handleImagesRequest("/fake/fetch/https/api-app.we-api.com/api/platform-tool/v1/sharing/get-config-list"
        , {shareType: 4}
        , ".select-banner"
        , 'banner'
    ).then(()=>{
        alert("LOADED");
    })
    appendImagesTo(".select-avatar", [1, 2, 3, 4].map(n => `${window.location.origin}/fake/fetch/https/static-app.bb-os.com/avatar/20230901/avatar_${n}.png`), 'avatar')
}


window.getVars = ()=>{
    return JSON.parse(localStorage.getItem("exportVar") || "{}");
}

/**
 *
 * @param key {string}
 * @return string
 */
window.getVar = (key)=>{
    return getVars()?.[key];
}
/**
 *
 * @param key {string}
 * @param value {any}
 * @return {any}
 */
window.setVar = (key, value) => {
    let pre = getVars();
    pre[key] = value;
    localStorage.setItem("exportVar", JSON.stringify(pre));
    return pre;
}

function appendImagesTo(selector, links, key) {

    const container = document.querySelector(selector);

    const addImg = link => {
        if (added.includes(link)) return;
        added.push(link);
        const img = document.createElement("img");
        img.src = link;
        img.onclick = () => {
            window[key] = link;
            setVar(key, link);
            container.querySelectorAll("img").forEach(i => i.style.removeProperty("border"))
            img.style.border = "2px solid red"
        }
        img.onerror = () => {
            container.removeChild(img);
            container.append(img);
        }
        container.append(img);
        return img;
    }


    const file = document.createElement("input");
    file.type = "file";
    file.placeholder = `Select Custom ${key}`;
    file.onchange = (e) => {
        /**
         * @type {file}
         */
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const result = e.target.result;
            addImg(result).click();
        }
    }
    container.append(file)
    let added = [];
    const prevalue = getVar(key);
    links.forEach(l => {
        const img = addImg(l);

        if (l === prevalue) {
            img?.click?.();
        }
    })
    setVar("entries_"+key, added);
    return added;
}

window.data = {};
const card = JSON.parse(window.localStorage.getItem("card") ?? "{}");
document.querySelectorAll(".inputs input").forEach(input => {
    const key = input.getAttribute("name");
    input.onchange =()=>{
        window.data[key] = input.value;
        setVar(key, input?.value)
    }
    input.value = getVar(key);
})

window.generate = () => {
    const resultElement = document.querySelector(".result");
    const {banner, avatar} = window;
    if (!banner || !avatar) {
        alert("Select a Avatar&Banner");
        return;
    }
    resultElement.innerHTML = ""

    const content = new DOMParser().parseFromString(`
    <div class="poster-container" data-v-70eaf828="" style="background: url('')">
    <img style="position: absolute; left: 0; top:0; width: 100%; height: 100%" src="${banner}" />
   <div class="order-share-body" data-v-70eaf828="">
      <div class="logo-wrapper" data-v-325acc0c="" data-v-70eaf828=""><img src="https://bin.bb-os.com/swap_nuxt/logo.fbb10114.png" alt="" data-v-325acc0c=""></div>
      <div class="order-info" data-v-70eaf828="">
         <p class="base-info" data-v-70eaf828=""><span class="base-item" data-v-70eaf828="">${card.currency.name}</span><span class="divider" data-v-70eaf828=""></span><span class="base-item rise ${card.position.type === "short" ? "down":"up"}" data-v-70eaf828="">${card.position.type === "short"?"S":"L"}${(card.position.type.split("")).splice(1).join("")}</span><span class="divider" data-v-70eaf828=""></span><span class="base-item" data-v-70eaf828="">${card.position.leverage}X</span></p>
         <span class="order-profit-desc" data-v-70eaf828="">ROI</span>
         <div class="rtl-text-ta-right profit min-profit din-pro ${card.ratio < 0 ? "down":""}" data-v-70eaf828="" style="font-size: 40px;"><span class="profit-text" data-v-70eaf828="">${+(+card.ratio).toFixed(2)}%</span></div>
         <ul class="price-info" data-v-70eaf828=""><li class="price-item close-price" data-v-70eaf828="">
               <p class="label" data-v-70eaf828="">Last Price</p>
               <p class="value din-pro" data-v-70eaf828="">${(+card.currency.tradePrice).toFixed(+card.currency.priceDigitNum)}</p>
            </li>
            <li class="price-item close-price" data-v-70eaf828="">
               <p class="label" data-v-70eaf828="">Avg. Open Price</p>
               <p class="value din-pro" data-v-70eaf828="">${(+card.position.openedPrice).toFixed(+card.currency.priceDigitNum)}</p>
            </li>
            <!---->
         </ul>
      </div>
      <div class="user-invite-info" data-v-70eaf828="">
         <div class="user-wrapper" data-v-70eaf828="">
            <div class="user-info-wrapper" align="right" data-v-d1925dea="" data-v-70eaf828="">
               <div class="avatar" data-v-d1925dea="">
                  <div class="avatar-outline-img-wrap" data-v-5e6944e2="" data-v-d1925dea="" style="width: 39px; height: 39px;">
                     <img crossorigin src="${avatar}" class="avatar-outline-img" data-v-5e6944e2=""><!---->
                  </div>
               </div>
               <div class="user-info" data-v-d1925dea="">
                  <p class="nickname" data-v-d1925dea="">${data?.email?.slice(0,2)+`***@${data?.email?.split("@")?.[1]?.split("").slice(0,8).join("")}...`}</p>
                  <p class="date din-pro" data-v-d1925dea="">${new Date().toLocaleDateString().split("/").slice(0,2).map(s => s.length === 1 ? "0"+s:s).join("/")} ${new Date().getHours() < 9 ? "0":""}${new Date().getHours()}:${new Date().getMinutes() < 9 ? "0":""}${new Date().getMinutes()}</p>
               </div>
            </div>
         </div>
         <div class="code-wrapper" data-v-70eaf828="">
            <div class="invite-code-wrapper right" data-v-6f1d6baa="" data-v-70eaf828="">
               <p class="label" data-v-6f1d6baa="">Referral Code</p>
               <p class="code din-pro" data-v-6f1d6baa="">${data.ref}</p>
            </div>
            <div class="invite-qr-code-wrapper small" data-v-6fd4e6e2="" data-v-70eaf828=""><img src="${window.location.origin}/fake/fetch/https/api.qrserver.com/v1/create-qr-code/?size=200x200&data=${`https://bingx.com/invite/${data.ref}?ch=share_poster_position`}" class="qr-image" alt="" data-v-6fd4e6e2=""></div>
         </div>
      </div>
   </div>
</div>
    `,"text/html")
        .querySelector(".poster-container");

    const profit = content.querySelector(".profit");
    profit.onclick = ()=>{
        const unit = content.querySelector(".order-profit-desc");
        let text = "";
        if (unit.innerText === "ROI") {
            unit.innerText = "Profit";
            text = `${+((+card.pnl).toFixed(4))} USDT`
        } else {
            unit.innerText = "ROI";
            text = `${+(+card.ratio).toFixed(2)}%`
        }
        profit.style.fontSize = text.length >= 12 ? "26px":"40px";
        profit.innerText = text;
    }
    const btn = document.createElement("button");
    btn.innerText = "DOWNLOAD";
    btn.onclick = ()=>{
        var pixelRatio = window.devicePixelRatio || 1;
        html2canvas(content, {
            scale: 5
        }).then(canvas => {

            document.body.append(canvas);
            console.log(canvas)
            var image = canvas.toDataURL("image/png");

            // You can then download it or display it as needed
            var link = document.createElement('a');
            link.href = image;
            link.download = 'screenshot.png';
            link.click();
            canvas.parentNode.removeChild(canvas);
        })
    }
    resultElement.append(content);
    resultElement.append(btn);
}
