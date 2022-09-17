//mảng rỗng
var nums = [];


function themSo() {
    var num = Number(document.querySelector("#formNumber input").value);

    // push : lưu giá trị mới vào mảng

    nums.push(num);
    
    document.getElementById("txtResult1").innerHTML = "Mảng: " + nums;
}
document.querySelector("#formNumber button").onclick = themSo;
//bài1
function tongChan() {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            sum += nums[i]
        }
    }
  
    document.getElementById("txtResulttong").innerHTML = "Tổng số dương: " + sum;
}
document.getElementById("btnTinh").onclick = tongChan;
//bài 2
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            count++
        }
    }
    
    document.getElementById("txtResultduong").innerHTML = "số Dương: " + count;
}
document.getElementById("btndem").onclick = demSoDuong;
//bài 3
function timmin() { 
    var min = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i];
        }
    }
    document.querySelector("#txtResultnhonhat").innerHTML = "Số nhỏ nhất: " + min;
}
document.getElementById("btnnhonhat").onclick = timmin;

//bài 4
function timsoduongnhonhat() {

    var min = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] > 0 && min > nums[i]) {
            min = nums[i];
        }
    }
    document.querySelector("#txtResultduongnhonhat").innerHTML = "Số dương nhỏ nhất: " + min;
}
document.getElementById("btnduongnhonhat").onclick = timsoduongnhonhat;
//bài 5
function timsoduongcuoicung() {

    var numbercuoicung = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            numbercuoicung = nums[i];
            numbercuoicung;
        }

    }
    document.querySelector("#txtResultduongcuoicung").innerHTML = "Số chẵn cuối cùng: " + numbercuoicung;
}
document.getElementById("btnduongcuoicung").onclick = timsoduongcuoicung;

//bài6
function doicho(a, b) {
    temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;


}
function doiCHo() {
    var vitriso1 = document.getElementById("vitri1").value;
    var vitriso2 = document.getElementById("vitri2").value;
    doicho(vitriso1, vitriso2);

    document.querySelector('#txtResultdoicho').innerHTML = "Mảng sau khi đổi: " + nums;
}
//bài7
function sapxep() {

    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 0; j < nums.length; j++) {

            if (nums[j] > nums[j + 1]) {
                doicho(j, j + 1)
            }

        }

    }
   
    document.querySelector('#txtResultsapxep').innerHTML = "Mảng sau khi sắp xếp: " + nums;
}
document.querySelector("#btnsapxep").onclick = sapxep;

//bài8

function ktnt(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}
function nguyenTo() {
    var nguyento = -1; // trả về -1 khi không có số nguyên tố
    for (var i = 0; i < nums.length; i++) {
        if (ktnt(nums[i])) {
            nguyento = nums[i];
            break;
        }
    }
    document.getElementById('txtResultnguyento').innerHTML = nguyento;
}
document.querySelector("#btnnguyento").onclick = nguyenTo;

//bai9
var nums2 = [];
function themsothuc() {
    var number = Number(document.getElementById("nhapso").value);
    nums2.push(number);
    document.querySelector("#txtResultsothuc").innerHTML = nums2;
}
document.querySelector("#btsothuc").onclick = themsothuc;
function demsonguyen() {
    var count = 0;
    for (var i = 0; i < nums2.length; i++) {
        Number.isInteger(nums2[i]) ? count++ : count;
    }
    document.getElementById('txtResultdemso').innerHTML = count;
}
document.querySelector("#btdemso").onclick = demsonguyen;
//bai10
function sosanh() {
    var countduong = 0;
    var countam = 0;
    var result;
    if (countam === 0) {
        result = "không có số âm";
      } else if (countduong === 0) {
        result = "không có số dương";
      } else if (countduong > countam) {
        result = "Lượng số dương nhiều hơn lượng số âm";
      } else if (countduong < countam) {
        result = "Lượng số âm nhiều hơn lượng số dương";
      } else if ((countduong = countam)) {
        result = "Lượng số dương bằng lượng số âm";
      }
  document.getElementById('txtResultsosanh').innerHTML = result

}
document.querySelector("#btsosanh").onclick = sosanh;