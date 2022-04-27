// hiển thị lên màn hình 
function display() {
    let stringTable = '<table>';
    for (let i = 0; i < 10; i++) {
        stringTable += '<tr>';
        for (let j = 0; j < 10; j++) {
            
            if(arr[i][j]==="x"){
                stringTable += '<td onclick="play(' + i + ' ,' + j + ')" style="width: 60px; height: 60px ; color: rgb(0, 28, 189); font-size: 44px;    border: 1px solid #000;" >' + arr[i][j] + '</td>';;
            }
            else {
                stringTable += '<td onclic1k="play(' + i + ' ,' + j + ')" style="width: 60px; height: 60px ; color: red;font-size: 44px"  "   >' + arr[i][j] + '</td>';;
            }
            
        }
        stringTable += '</tr>';
    }
    stringTable += '</table>';
    document.getElementById("Demo").innerHTML = stringTable;
}