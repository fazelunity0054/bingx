const st = document.createElement("link");
st.href = "/override/dark.css";
st.rel = "stylesheet";
document.head.append(st);


window.onload = function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        let origin = img.src+"";
        if (!img.src.includes("ui")) return;
        const args = img.src.split(".");
        img.src = `${args.slice(0,args.length - 1).join(".")}-dark.${args[args.length -1]}`
        img.onerror = ()=>{
            const canvas = document.createElement("canvas");
            img.parentNode.append(canvas);
            const ctx = canvas.getContext('2d');

            // Set canvas size to match the image size
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;

            ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) { // if white
                    data[i + 3] = 0; // set alpha to 0
                }
            }

            ctx.putImageData(imageData, 0, 0);
            img.parentNode.removeChild(img);
        }
    })
};
