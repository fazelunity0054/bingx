const st = document.createElement("link");
st.href = "/override/dark.css";
st.rel = "stylesheet";
document.head.append(st);


function isNearWhite(r, g, b, threshold) {
    return r > threshold && g > threshold && b > threshold;
}

window.handleDark = function() {


    const images = document.querySelectorAll("img");
    images.forEach(img => {
        let origin = img.src+"";
        if (img.classList.contains("dark-reverse")) {
            let pre = img.style.border;
            img.style.border = "1px blue solid";
            const handleCanvasTransparent = ()=>{
                if (img.hasAttribute("applied")) return;

                const canvas = document.createElement("canvas");
                canvas.className = img.className;
                img.parentNode.append(canvas);
                const ctx = canvas.getContext('2d');

                // Set canvas size to match the image size
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;

                ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                const threshold = 250;
                for (let i = 0; i < data.length; i += 4) {
                    if (isNearWhite(data[i], data[i + 1], data[i + 2], threshold)) {
                        data[i + 3] = 0; // set alpha to 0 (transparent)
                    }
                }

                ctx.putImageData(imageData, 0, 0);
                img.src = canvas.toDataURL();
                canvas.parentNode.removeChild(canvas);
                img.style.border = pre;
                img.setAttribute("applied", "dark")
            }
            handleCanvasTransparent();
            img.onload = handleCanvasTransparent
        } else {
            if (!img.src.includes("ui")) return;
            const args = img.src.split(".");
            let preborder = img.style.border;
            let prefilter = img.style.filter;
            img.style.border = "1px yellow solid";
            img.style.filter = "blur(5px)";
            img.src = `${args.slice(0, args.length - 1).join(".")}-dark.${args[args.length - 1]}`
            img.onerror = () => {
                img.src = origin;
            }
            img.onload = ()=>{
                img.style.border = preborder;
                img.style.filter = prefilter;
            }
        }
    })
};

window.dark = true;
