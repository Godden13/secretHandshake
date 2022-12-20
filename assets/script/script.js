const buttonElement = document.getElementById("shake");
const display = document.getElementById("display");
const inputValue = document.getElementById("value");


function convert(num) {
  let arr = [];
  while (num > 0) {
    arr.push(num % 2);
    num = parseInt(num / 2);
  }
  return parseInt(arr.reverse().join(""));
}

function greet(value) {
  const arr1 = [1000, 100, 10, 1];
  const arr2 = ["Jump", "Close Your Eyes", "Double Blink", "Wink"];
  let bin = convert(value);
  const keepSame = bin - 10000 > 0;
  if (keepSame) {
    bin -= 10000;
  }
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (bin - arr1[i] >= 0) {
      bin -= arr1[i];
      result.push(arr2[i])
    }
  }

  if (!keepSame) {
    result.reverse();
  }
  return result.join(", ");
}

buttonElement.addEventListener("click", () => {
  display.innerHTML = greet(inputValue.value);
});
