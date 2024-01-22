class Sach {
    private maSach: number;
    private ngayNhap: Date;
    private donGia: number;
    private soLuong: number;
    private nhaXuatBan: string;

    public getMaSach(): number {
        return this.maSach;
    }

    public setMaSach(maSach: number): void {
        this.maSach = maSach;
    }

    public getNgayNhap(): Date {
        return this.ngayNhap;
    }

    public setNgayNhap(ngayNhap: Date): void {
        this.ngayNhap = ngayNhap;
    }

    public getDonGia(): number {
        return this.donGia;
    }

    public setDonGia(donGia: number): void {
        this.donGia = donGia;
    }

    public getSoLuong(): number {
        return this.soLuong;
    }

    public setSoLuong(soLuong: number): void {
        this.soLuong = soLuong;
    }

    public getNhaXuatBan(): string {
        return this.nhaXuatBan;
    }

    public setNhaXuatBan(nhaXuatBan: string): void {
        this.nhaXuatBan = nhaXuatBan;
    }




    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string) {
        this.maSach = maSach;
        this.ngayNhap = ngayNhap;
        this.donGia = donGia;
        this.soLuong = soLuong;
        this.nhaXuatBan = nhaXuatBan;
    }
}

class SachGiaoKhoa extends Sach {
    private tinhTrang: string;

    public getTinhTrang(): string {
        return this.tinhTrang;
    }

    public setTinhTrang(tinhTrang: string): void {
        this.tinhTrang = tinhTrang;
    }


    public getThanhTien() {
        if (this.tinhTrang=="moi")
            return this.getSoLuong() * this.getDonGia();
        else
            return this.getSoLuong() * this.getDonGia() / 2;
    }

    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string, tinhTrang: string) {
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
        this.tinhTrang = tinhTrang;
    }
}

class SachThamKhao extends Sach {
    private thue: number;

    public getThue(): number {
        return this.thue;
    }

    public setThue(thue: number): void {
        this.thue = thue;
    }


    public getThanhTien() {
        return this.getSoLuong() * this.getDonGia() + this.thue;
    }

    constructor(maSach: number, ngayNhap: Date, donGia: number, soLuong: number, nhaXuatBan: string, thue: number) {
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
        this.thue = thue;
    }
}

function main() {
    let arr1: SachGiaoKhoa[] = [];;
    let arr2: SachThamKhao[] = [];;
    let tong1: number = 0;
    let tong2: number = 0;
    let soLuong2: number = 0;

    arr1.push(
        new SachGiaoKhoa(1, new Date(), 36000, 6, "KimDong","moi"),
        new SachGiaoKhoa(2, new Date(), 25000, 2, "Khoa","moi"),
        new SachGiaoKhoa(3, new Date(), 76000, 2, "khoi","cu"),
    );

    arr2.push(
        new SachThamKhao(1, new Date(), 70000, 2, "KimDong", 7000),
        new SachThamKhao(2, new Date(), 20000, 2, "khoa2", 2000),
        new SachThamKhao(3, new Date(), 37000, 2, "Khoa3", 3700),
    );

    for (let i = 0; i < 3; i++) {
        tong1 += arr1[i].getThanhTien();
        tong2 += arr2[i].getThanhTien();

        soLuong2 += arr2[i].getSoLuong();
    }

    console.log( "Tong thanh tien cua sach giao khoa: " + tong1 );
    console.log( "Tong thanh tien cua sach tham khao: " + tong2 );
    console.log( "Trung binh cong don gia cua sach tham khao: " + tong2 / soLuong2 );
    
}

main();