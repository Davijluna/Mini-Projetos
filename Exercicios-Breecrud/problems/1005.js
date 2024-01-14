export function problem(lines) {
  const [value1, value2] = lines;
  const media = (parseFloat(value1) * 3.5 + parseFloat(value2) * 7.5) / 11;
  console.log(media)
}