var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSo, hoTen, soXe, doanhThu) {
        this.maSo = maSo;
        this.hoTen = hoTen;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }
    ChuyenXe.prototype.getMaSo = function () {
        return this.maSo;
    };
    ChuyenXe.prototype.setMaSo = function (maSo) {
        this.maSo = maSo;
    };
    ChuyenXe.prototype.getHoTen = function () {
        return this.hoTen;
    };
    ChuyenXe.prototype.setHoTen = function (hoTen) {
        this.hoTen = hoTen;
    };
    ChuyenXe.prototype.getSoXe = function () {
        return this.soXe;
    };
    ChuyenXe.prototype.setSoXe = function (soXe) {
        this.soXe = soXe;
    };
    ChuyenXe.prototype.setDoanhThu = function (doanhThu) {
        this.doanhThu = doanhThu;
    };
    ChuyenXe.prototype.getDoanhThu = function () {
        return this.doanhThu;
    };
    return ChuyenXe;
}());
var ChuyenXeNoiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNoiThanh, _super);
    function ChuyenXeNoiThanh(maSo, hoTen, soXe, doanhThu, soTuyen, soKm) {
        var _this = _super.call(this, maSo, hoTen, soXe, doanhThu) || this;
        _this.soTuyen = _this.soTuyen;
        _this.soKm = _this.soKm;
        return _this;
    }
    ChuyenXeNoiThanh.prototype.getSoTuyen = function () {
        return this.soTuyen;
    };
    ChuyenXeNoiThanh.prototype.setSoTuyen = function (soTuyen) {
        this.soTuyen = soTuyen;
    };
    ChuyenXeNoiThanh.prototype.getSoKm = function () {
        return this.soKm;
    };
    ChuyenXeNoiThanh.prototype.setSoKm = function (soKm) {
        this.soKm = soKm;
    };
    return ChuyenXeNoiThanh;
}(ChuyenXe));
var ChuyenXeNgoaiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNgoaiThanh, _super);
    function ChuyenXeNgoaiThanh(maSo, hoTen, soXe, doanhThu, noiDen, soNgay) {
        var _this = _super.call(this, maSo, hoTen, soXe, doanhThu) || this;
        _this.noiDen = _this.noiDen;
        _this.soNgay = _this.soNgay;
        return _this;
    }
    ChuyenXeNgoaiThanh.prototype.getNoiDen = function () {
        return this.noiDen;
    };
    ChuyenXeNgoaiThanh.prototype.setNoiDen = function (noiDen) {
        this.noiDen = noiDen;
    };
    ChuyenXeNgoaiThanh.prototype.getSoNgay = function () {
        return this.soNgay;
    };
    ChuyenXeNgoaiThanh.prototype.setSoNgay = function (soNgay) {
        this.soNgay = soNgay;
    };
    return ChuyenXeNgoaiThanh;
}(ChuyenXe));
function main() {
    var arr = [];
    arr.push(new ChuyenXeNoiThanh(1, "GoVap", 24142421, 3000, 24, 9), new ChuyenXeNoiThanh(1, "DongNai", 3123244, 3000, 25, 8), new ChuyenXeNgoaiThanh(2, "Thanhbuoi", 4124214, 400000, "QuangNgai", 2), new ChuyenXeNgoaiThanh(2, "ThanhBuoi", 41241231, 300000, "DaLat", 3));
    var tong = 0;
    var tongNoiThanh = 0;
    var tongNgoaiThanh = 0;
    for (var i = 0; i < arr.length; i++) {
        tong += arr[i].getDoanhThu();
        if (arr[i] instanceof ChuyenXeNoiThanh) {
            tongNoiThanh += arr[i].getDoanhThu();
        }
        else {
            tongNgoaiThanh += arr[i].getDoanhThu();
        }
    }
    console.log("Tong doanh thu cua tat ca chuyen xe: " + tong);
    console.log("Tong doanh thu cua chuyen xe noi thanh: " + tongNoiThanh);
    console.log("Tong doanh thu cua chuyen xe ngoai thanh: " + tongNgoaiThanh);
}
main();
