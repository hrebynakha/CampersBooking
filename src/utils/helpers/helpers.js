export function capitalize(text) {
  const arr = text.split(/(?=[A-Z])/);
  const spaced = arr.join(" ");
  return spaced[0].toUpperCase() + spaced.toLowerCase().slice(1);
}

export function trasnformToCurrencyText(text) {
  return "€" + text + ",00";
}

export function ensureMinItems(arr, min = 5) {
  const items = [...arr];
  while (items.length < min) {
    items.push(...arr);
  }
  return items;
}

export function getSearchParamFilter() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}
