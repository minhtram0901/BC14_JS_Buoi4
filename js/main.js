// Bài tập 1: xuất 3 số theo thứ tự tăng dần
function sort(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var max = num1 > num2? (num1 > num3? num1:num3): (num2 > num3? num2:num3);
    var min = num1 < num2? (num1 < num3? num1 : num3) : (num2 < num3? num2 : num3);
    var avg = num1 > num2? (num1 > num3? (num2 > num3? num2: num3):num1): (num2 > num3? (num1 > num3? num1: num3):num2);
    
    var p1 = document.getElementById("bt1-output1");
    p1.innerHTML =  "3 số nhập vào: " + num1 + ", " + num2 + ", " + num3;
    var p2 = document.getElementById("bt1-output2");
    p2.innerHTML = "Kết quả xếp tăng dần: " + min + ", " + avg + ", " + max;

}

// Bài tập 2: chào hỏi
var p = document.getElementById("bt2-output");
function sayHi(){
    var someone = document.getElementById("mySelect").value;
    switch (someone){
        case "B":
            p.innerHTML =  "Xin chào Bố!";
            break;
        case "M":
            p.innerHTML =  "Xin chào Mẹ!";
            break;
        case "A":
            p.innerHTML =  "Xin chào Anh Trai!";
            break;
        default:
            p.innerHTML =  "Xin chào Em Gái!";
    }
}

// Bài tập 3: đếm số chẵn lẻ
function isOdd(number){
    if (number%2 !== 0)
        return true;
    else
        return false;
}
function countOddNumber(){
    var num1 = Number(document.getElementById("no1").value);
    var num2 = Number(document.getElementById("no2").value);
    var num3 = Number(document.getElementById("no3").value);
    var odd = 0;
    var even = 0;
    
    var strNo1, strNo2, strNo3;
    //check num1
    if (isOdd(num1)){
        odd +=1;
        strNo1 = num1 + " là số lẻ, "
    } else { 
        even+=1;
        strNo1 = num1 + " là số chẵn, "
    }
    // check num2
    if (isOdd(num2)){
        odd +=1;
        strNo2 = num2 + " là số lẻ, "
    } else { 
        even+=1;
        strNo2 = num2 + " là số chẵn, "
    }
    // check num3
    if (isOdd(num3)){
        odd +=1;
        strNo3 = num3 + " là số lẻ."
    } else { 
        even+=1;
        strNo3 = num3 + " là số chẵn."
    }
    
    var p1 = document.getElementById("bt3-output1");
    p1.innerHTML = strNo1 + strNo2 + strNo3;
    var p2 = document.getElementById("bt3-output2");
    p2.innerHTML =  "3 số nhập vào có: " + odd + " số lẻ và " + even + " số chẵn.";

}

// Bài tập 4: Xác định loại tam giác
function triangleChk(){
    var a = Number(document.getElementById("edge1").value);
    var b = Number(document.getElementById("edge2").value);
    var c = Number(document.getElementById("edge3").value);
    var p = document.getElementById("bt4-output");
    if( a<b+c && b<a+c && c<a+b ){
        if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
            p.innerHTML = "Đây là tam giác vuông.";
        else if(a==b && b==c)
            p.innerHTML = "Đây là tam giác đều.";
        else if(a==b || a==c || b==c)
            p.innerHTML = "Đây là tam giác cân.";
        else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)    
            p.innerHTML = "Đây là tam giác tù.";
        else
            p.innerHTML = "Đây là tam giác nhọn.";
    }
    else
        p.innerHTML = "Ba cạnh a, b, c không phải là ba cạnh của một tam giác.";
}