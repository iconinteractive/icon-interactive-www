function formatServiceName(name) {
  let format = name;
  let output = "";
  let spaceIdx = -2;
  if (format === "web_mobile" || format === "web and mobile") {
    return "Web & Mobile";
  }
  if (
    format === "design_visual_content" ||
    format === "design and visual content"
  ) {
    return "Design & Visual Content";
  } else {
    for (let idx = 0; idx < format.length; idx++) {
      if (idx === 0) {
        output += format[idx].toUpperCase();
        continue;
      }
      if (format[idx] === "_" || format[idx] === " ") {
        spaceIdx = idx;
        output += " ";
        continue;
      }
      if (spaceIdx === idx - 1) {
        output += format[idx].toUpperCase();
        continue;
      } else {
        output += format[idx];
      }
    }
    return output;
  }
}

export default formatServiceName;
