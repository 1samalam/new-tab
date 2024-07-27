function invertColor(hex) {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    let gray = Math.round((r + g + b) / 3);
    let invertedColor = `${gray}, ${gray}, ${gray}`;
    return invertedColor;
}

const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
const invertedColor = invertColor(bgColor);

document.documentElement.style.setProperty('--fg', invertedColor);
