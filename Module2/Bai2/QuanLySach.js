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
var Sach = /** @class */ (function () {
    function Sach(maSach, ngayNhap, donGia, soLuong, nhaXuatBan) {
        this.maSach = maSach;
        this.ngayNhap = ngayNhap;
        this.donGia = donGia;
        this.soLuong = soLuong;
        this.nhaXuatBan = nhaXuatBan;
    }
    Sach.prototype.getMaSach = function () {
        return this.maSach;
    };
    Sach.prototype.setMaSach = function (maSach) {
        this.maSach = maSach;
    };
    Sach.prototype.getNgayNhap = function () {
        return this.ngayNhap;
    };
    Sach.prototype.setNgayNhap = function (ngayNhap) {
        this.ngayNhap = ngayNhap;
    };
    Sach.prototype.getDonGia = function () {
        return this.donGia;
    };
    Sach.prototype.setDonGia = function (donGia) {
        this.donGia = donGia;
    };
    Sach.prototype.getSoLuong = function () {
        return this.soLuong;
    };
    Sach.prototype.setSoLuong = function (soLuong) {
        this.soLuong = soLuong;
    };
    Sach.prototype.getNhaXuatBan = function () {
        return this.nhaXuatBan;
    };
    Sach.prototype.setNhaXuatBan = function (nhaXuatBan) {
        this.nhaXuatBan = nhaXuatBan;
    };
    return Sach;
}());
var SachGiaoKhoa = /** @class */ (function (_super) {
    __extends(SachGiaoKhoa, _super);
    function SachGiaoKhoa(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, tinhTrang) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        _this.tinhTrang = tinhTrang;
        return _this;
    }
    SachGiaoKhoa.prototype.getTinhTrang = function () {
        return this.tinhTrang;
    };
    SachGiaoKhoa.prototype.setTinhTrang = function (tinhTrang) {
        this.tinhTrang = tinhTrang;
    };
    SachGiaoKhoa.prototype.getThanhTien = function () {
        if (this.tinhTrang == "moi")
            return this.getSoLuong() * this.getDonGia();
        else
            return this.getSoLuong() * this.getDonGia() / 2;
    };
    return SachGiaoKhoa;
}(Sach));
var SachThamKhao = /** @class */ (function (_super) {
    __extends(SachThamKhao, _super);
    function SachThamKhao(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, thue) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        _this.thue = thue;
        return _this;
    }
    SachThamKhao.prototype.getThue = function () {
        return this.thue;
    };
    SachThamKhao.prototype.setThue = function (thue) {
        this.thue = thue;
    };
    SachThamKhao.prototype.getThanhTien = function () {
        return this.getSoLuong() * this.getDonGia() + this.thue;
    };
    return SachThamKhao;
}(Sach));
function main() {
    var arr1 = [];
    ;
    var arr2 = [];
    ;
    var tong1 = 0;
    var tong2 = 0;
    var soLuong2 = 0;
    arr1.push(new SachGiaoKhoa(1, new Date(), 36000, 6, "KimDong", "moi"), new SachGiaoKhoa(2, new Date(), 25000, 2, "Khoa", "moi"), new SachGiaoKhoa(3, new Date(), 76000, 2, "khoi", "cu"));
    arr2.push(new SachThamKhao(1, new Date(), 70000, 2, "KimDong", 7000), new SachThamKhao(2, new Date(), 20000, 2, "khoa2", 2000), new SachThamKhao(3, new Date(), 37000, 2, "Khoa3", 3700));
    for (var i = 0; i < 3; i++) {
        tong1 += arr1[i].getThanhTien();
        tong2 += arr2[i].getThanhTien();
        soLuong2 += arr2[i].getSoLuong();
    }
    console.log("Tong thanh tien cua sach giao khoa: " + tong1);
    console.log("Tong thanh tien cua sach tham khao: " + tong2);
    console.log("Trung binh cong don gia cua sach tham khao: " + tong2 / soLuong2);
}
main();
