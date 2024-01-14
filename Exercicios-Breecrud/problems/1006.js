// ** 1006 - Média 2
export function problem(lines) {
  const [A, B, C] = lines;
  const media = (parseFloat(A) * 2 + parseFloat(B) * 3 + parseFloat(C) * 5) / 10.0
  console.log(`MEDIA = ${media.toFixed(1)}`)
}