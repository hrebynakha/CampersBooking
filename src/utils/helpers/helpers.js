export function capitalize(text) {
  return text[0].toUpperCase() + text.toLowerCase().slice(1);
}

export function ensureMinItems(arr, min = 5) {
  const items = [...arr];
  while (items.length < min) {
    items.push(...arr);
  }
  return items;
}
