class ChuyenXe {
    private maSo: number;
    private hoTen: string;
    private soXe: number;
    private doanhThu: number;

    public getMaSo(): number {
        return this.maSo;
    }

    public setMaSo(maSo: number): void {
        this.maSo = maSo;
    }

    public getHoTen(): string {
        return this.hoTen;
    }

    public setHoTen(hoTen: string): void {
        this.hoTen = hoTen;
    }

    public getSoXe(): number {
        return this.soXe;
    }

    public setSoXe(soXe: number): void {
        this.soXe = soXe;
    }
    public setDoanhThu(doanhThu: number): void {
        this.doanhThu = doanhThu;
    }


	public getDoanhThu(): number {
		return this.doanhThu;
    }
    
    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number) {
        this.maSo = maSo;
        this.hoTen = hoTen;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }
}

class ChuyenXeNoiThanh extends ChuyenXe {
    private soTuyen: number;
    private soKm: number;

    public getSoTuyen(): number {
        return this.soTuyen;
    }

    public setSoTuyen(soTuyen: number): void {
        this.soTuyen = soTuyen;
    }

    public getSoKm(): number {
        return this.soKm;
    }

    public setSoKm(soKm: number): void {
        this.soKm = soKm;
    }


    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number, soTuyen: number, soKm: number) {
        super(maSo, hoTen, soXe, doanhThu);
        this.soTuyen = this.soTuyen;
        this.soKm = this.soKm;
    }
}

class ChuyenXeNgoaiThanh extends ChuyenXe {
    private noiDen: string;
    private soNgay: number;

    public getNoiDen(): string {
        return this.noiDen;
    }

    public setNoiDen(noiDen: string): void {
        this.noiDen = noiDen;
    }

    public getSoNgay(): number {
        return this.soNgay;
    }

    public setSoNgay(soNgay: number): void {
        this.soNgay = soNgay;
    }


    constructor(maSo: number, hoTen: string, soXe: number, doanhThu: number, noiDen: string, soNgay: number) {
        super(maSo, hoTen, soXe, doanhThu);
        this.noiDen = this.noiDen;
        this.soNgay = this.soNgay;
    }
}

function main() {
    let arr: any[]  = [];

    arr.push(
        new ChuyenXeNoiThanh(1, "GoVap", 24142421, 3000, 24, 9),
        new ChuyenXeNoiThanh(1, "DongNai", 3123244, 3000, 25, 8),
        new ChuyenXeNgoaiThanh(2, "Thanhbuoi",4124214, 400000, "QuangNgai", 2),
        new ChuyenXeNgoaiThanh(2, "ThanhBuoi",41241231, 300000, "DaLat", 3)
    );

    let tong = 0;
    let tongNoiThanh = 0;
    let tongNgoaiThanh = 0;

    for (let i = 0; i < arr.length; i++) {        
        tong += arr[i].getDoanhThu();

        if (arr[i] instanceof ChuyenXeNoiThanh) {
            tongNoiThanh += arr[i].getDoanhThu();
        } else {
            tongNgoaiThanh += arr[i].getDoanhThu();
        }
    }

    console.log("Tong doanh thu cua tat ca chuyen xe: " + tong);
    console.log("Tong doanh thu cua chuyen xe noi thanh: " + tongNoiThanh);
    console.log("Tong doanh thu cua chuyen xe ngoai thanh: " + tongNgoaiThanh);
}

main();         