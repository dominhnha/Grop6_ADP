let arr = new Array(20);

// mảng đến gán giá trị = " "
for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = "";
    }
}
display();

let choose = parseInt(prompt(" Người đi trước được chọn:  " + "(1) để chọn (x) / (2) để chọn(o)"));
let checkPlayer1;
if (choose == 1) {
    checkPlayer1 = true;
} else {
    checkPlayer1 = false;
}
