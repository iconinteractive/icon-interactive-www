export default function formatUrl(name) {
  let output = "/tags/";
  const idx = name.search("and");
  if (idx !== -1) {
    name = name.slice(0, idx - 1) + name.slice(idx + 3);
  }
  for (const letter in name) {
    if (name[letter] === "_" || name[letter] === " ") {
      output += "-";
    } else {
      output += name[letter];
    }
  }
  return output;
}
