function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbtohex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function extractRgb(rgb) {
  const result = rgb
    .substring(rgb.indexOf("(") + 1, rgb.indexOf(")"))
    .split(",");
  return result;
}
export { componentToHex, rgbtohex, extractRgb };
