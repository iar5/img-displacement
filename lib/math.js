export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
};

export function lerp(value1, value2, amount) {
    return value1 + (value2 - value1) * amount;
}

export function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
