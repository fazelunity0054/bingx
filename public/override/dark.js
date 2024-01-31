const st = document.createElement("link");
st.href = "/override/dark.css";
st.rel = "stylesheet";
document.head.append(st);


window.onload = function() {
    const image = document.querySelector("img");
    console.log(image);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    image.parentNode.append(canvas );

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) { // if white

        }
    }

    ctx.putImageData(imageData, 0, 0);
};
