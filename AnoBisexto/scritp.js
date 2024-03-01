const date = new Date('jul 12 2022')

const today = date.getDate()
const currentMonth = date.getMonth() + 1

const formatMap = {
  mm: date.getMonth() + 1,
  dd: date.getDate(),
  aa: date.getFullYear().toString().split(-2),
  aaa: date.getFullYear()
}

// const currentYear = date.getFullYear()

// console.log(today);
// console.log(currentMonth)

console.log(`dia:${formatMap.dd}, mês:${formatMap.mm}, ano:${formatMap.aaa}`)
