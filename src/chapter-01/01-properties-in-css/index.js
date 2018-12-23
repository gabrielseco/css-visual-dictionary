const element = document.createElement("div");

let count = 0;

for (let index in element.style) {
  count++;
}

const root = document.querySelector("#root");

root.innerHTML = `the number of css properties at ${new Date()} are ${count}`;
