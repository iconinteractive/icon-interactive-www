function formatServiceName(name) {
  let format = name;
  console.log(format);
  if (format === "web_mobile" || format === "web and mobile") {
    return "Web & Mobile";
  }
  if (
    format === "design_visual_content" ||
    format === "design and visual content"
  ) {
    return "Design & Visual Content";
  } else {
    let output = "";
    let spaceIdx = "";
    for (let idx = 0; idx < format.length; idx++) {
      if (idx === 0) {
        output += format[idx].toUpperCase();
        continue;
      }
      if (format[idx] === "_") {
        spaceIdx = idx;
        output += " ";
        continue;
      }
      if (spaceIdx === idx - 1) {
        output += format[idx].toUpperCase();
      } else {
        output += format[idx];
      }
    }
    return output;
  }
}

export default formatServiceName;
