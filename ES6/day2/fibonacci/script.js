function* fibByCount(count) {
  let current = 0;
  let next = 1;

  for (let i = 0; i < count; i++) {
    yield current;
    [current, next] = [next, current + next]
  }
}

console.log("--- By Count ---");
let gen1 = fibByCount(5);
for (let num of gen1) {
  console.log(num);
}

function* fibByMax(maxVal) {
  let current = 0;
  let next = 1;

  while(current <= maxVal) {
    yield current;
    [current, next] = [next, current + next]
  }
}

console.log("--- By max ---");
let gen2 = fibByMax(10);
for(let num of gen2) {
    console.log(num);
}