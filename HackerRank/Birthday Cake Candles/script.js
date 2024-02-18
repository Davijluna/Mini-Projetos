const candles = [18, 90, 90, 13, 90 ,75, 90, 8, 90, 43];

let max = 0;
let counter= 0;

for(let i = 0; i < candles.length; i += 1) {
  if(candles[i] > max) {
    max = candles[i]
  }
}

for(let y = 0; y < candles.length; y += 1) {
  if(candles[y] === max) {
    counter += 1
  }
  console.log(counter)
}