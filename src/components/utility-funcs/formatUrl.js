export default function formatUrl(name) {
  let output = "/tags/";
  for (const letter in name) {
    if (name[letter] === "_") {
      output += "-";
    } else {
      output += name[letter];
    }
  }
  return output;
}
