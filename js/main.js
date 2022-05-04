var monA = document.getElementById("diemA")
var monB = document.getElementById("diemB")
var monC = document.getElementById("diemC")
var khuVuc = document.getElementById('Kv')
var doiTuong = document.getElementById('Dt')
var tongChuan = document.getElementById('diemChuan')
var kQ1 = document.getElementById("ketQua01")


function xetKetQua() {
    var a = monA.value
    var b = monB.value
    var c = monC.value
    var k = khuVuc.value
    var d = doiTuong.value
    var tong = parseFloat(a) + parseFloat(b) + parseFloat(c)
    if (a > 10 || b > 10 || c > 10 || a < 0 || b < 0 || c < 0) {
        kQ1.innerHTML = "Nhập sai điểm số"
    } else {
        switch (k) {
            case "A":
                tong += 2;
                break;
            case "B":
                tong += 1;
                break;
            case "C":
                tong += 0.5;
                break;
            default:
                break;
        }
        switch (d) {
            case "1":
                tong += 2.5;
                break;
            case "2":
                tong += 1.5;
                break;
            case "3":
                tong += 1;
                break;
            default:
                break;
        }
        if (tong >= tongChuan.value) {
            kQ1.innerHTML = "-Thí sinh đã đậu <br>-Tổng điểm : " + tong
        } else kQ1.innerHTML = "-Thí sinh đã rớt <br>-Tổng điểm : " + tong
    }
}
// Bài 2
var nameX = document.getElementById('ten')
var numberA = document.getElementById('soKw')
var kQ2 = document.getElementById('ketQua02')
function tinhTienDien() {
    var tong = 0
    var kW = numberA.value
    if (kW > 0) {
        if (kW <= 50) {
            tong = kW * 500
        } else {
            tong += 50 * 500
        }
        kW -= 50
    }

    if (kW > 0) {
        if (kW <= 50) {
            tong += kW * 650
        } else {
            tong += 50 * 650
        }
        kW -= 50
    }

    if (kW > 0) {
        if (kW <= 100) {
            tong += kW * 850
        } else {
            tong += 100 * 850
        }
        kW -= 100
    }

    if (kW > 0) {
        if (kW <= 150) {
            tong += kW * 1100
        } else {
            tong += 150 * 1100
            kW -= 150
            tong += kW * 1300
        }
    }
    kQ2.innerHTML = "Tên Người Tiêu Tụ : " + nameX.value + "<br>Tổng Tiền Thanh Toán : " + tong.toLocaleString('vi-VN') + " VNĐ"

}
