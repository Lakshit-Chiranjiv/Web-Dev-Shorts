const selectedImage = document.querySelector("#selectedimage");
const fileInput = document.querySelector("#fileinput");
const pickBtn = document.querySelector("#btn-pick");

const btnsDiv = document.querySelector(".btnsDiv");
const outputDiv = document.querySelector(".output");

const rgbDiv = document.querySelector(".rgbc");
const hexDiv = document.querySelector(".hexc");
const hslDiv = document.querySelector(".hslc");

const rgb = document.querySelector("#rgb");
const hex = document.querySelector("#hex");
const hsl = document.querySelector("#hsl");

const selectedColor = document.querySelector("#selectedcolor");

const copyText = document.querySelector("#copied");
const error = document.querySelector("#error");

const checkEyeDropper = () => {
    if ("EyeDropper" in window) {
        btnsDiv.classList.remove("hidden");
        error.classList.add("hidden");
        return
    }
    btnsDiv.classList.add("hidden");
    error.innerHTML = "Sorry, your browser doesn't support this feature. Try using Chrome or Edge.";
    error.classList.remove("hidden");
    error.style.transform = 'scale(1)'
}

const convertHexToRGB = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

const convertHexToHSL = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;

    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;

    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) {
        h = 0;
    } else if (cmax == r) {
        h = ((g - b) / delta) % 6;
    } else if (cmax == g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
        h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

const pickColor = () => {
    const eyeDropper = new EyeDropper();
    error.classList.add("hidden");
    eyeDropper.open()
        .then((color) => {
            selectedColor.style.backgroundColor = color.sRGBHex;
            rgb.innerHTML = convertHexToRGB(color.sRGBHex);
            hex.innerHTML = color.sRGBHex;
            hsl.innerHTML = convertHexToHSL(color.sRGBHex);
            outputDiv.classList.remove("hidden");
        })
        .catch((err) => {
            console.log(err);
            error.innerHTML = "Something went wrong. Try again.";
            error.classList.remove("hidden");
            error.style.transform = 'scale(1)'
        });
}

const copyToClipboard = (text) => {
    // use navigator clipboard api if available
    error.classList.add("hidden");
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    }
    // workaround for iOS
    if (window.clipboardData && window.clipboardData.setData) {
        // eslint-disable-next-line no-undef
        return clipboardData.setData("Text", text);
    }
    // other browsers which doesn't support nor Clipboard API nor clipboardData
    error.innerHTML = "Clipboard API not supported";
    error.classList.remove("hidden");
    error.style.transform = 'scale(1)'
}

window.onload = () => {
    checkEyeDropper();
}

fileInput.addEventListener("change", () => {
    error.classList.add("hidden");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            selectedImage.src = reader.result;
        }
    }
    else {
        selectedImage.src = './assets/mario.jpg';
    }
})

pickBtn.addEventListener("click", pickColor);

rgbDiv.addEventListener("click", () => {
    copyToClipboard(rgb.innerHTML);
    copyText.style.transform = 'scale(1)'
    setTimeout(() => {
        copyText.style.transform = 'scale(0)'
    }, 2000);
})

hexDiv.addEventListener("click", () => {
    copyToClipboard(hex.innerHTML);
    copyText.style.transform = 'scale(1)'
    setTimeout(() => {
        copyText.style.transform = 'scale(0)'
    }, 2000);
})

hslDiv.addEventListener("click", () => {
    copyToClipboard(hsl.innerHTML);
    copyText.style.transform = 'scale(1)'
    setTimeout(() => {
        copyText.style.transform = 'scale(0)'
    }, 2000);
})