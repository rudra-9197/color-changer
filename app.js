let btn = document.getElementById("button");
let canvas = document.getElementById("canvas");




btn.addEventListener("click", changeColor);




function changeColor() {
  let itemArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let colorcode = "#";

  for (let i = 0; i < 6; i++) {
    let index = Math.ceil(Math.random() * 15);

    colorcode += itemArr[index];
  }

  canvas.style.backgroundColor = colorcode;


}
