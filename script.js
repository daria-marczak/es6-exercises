
// first task
const hello = "Hello",
      world = "world";
const sayHello = console.log(`${hello} ${world}`);


// second task
const multiply = (a,b = 1) => a * b;
console.log(multiply(5, 2));


// third task
const average = (...param) => {
  let total = 0;
  param.forEach(item => {
    total += item;
  });
  return total / param.length;
}
console.log(average(3, 10, 5));


// fourth task
console.log(average(...grades));


// fifth task
const data = [1, 4, "Iwona", false, "Nowak"];
const [ , ,name, , lastName] = data;
console.log (`${name} ${lastName}`);
