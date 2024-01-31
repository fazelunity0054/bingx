const st = document.createElement("link");
st.href = "/override/dark.css";
st.rel = "stylesheet";
document.head.append(st);


window.onload = function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        const args = img.src.split(".");
        img.src = `${args.slice(-1).join("")}-dark.${args[args.length -1]}`
    })
};
