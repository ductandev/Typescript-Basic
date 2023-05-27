/*
    1. type: kiểu dữ liệu
    + primitive value: giá trị cơ bản cơ sở (string, boolean, number, null, undefined)
    | | : gọi là union type
    + reference value (non primitive): giá trị tham chiếu
    + function type
    + type array
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let title = 'abc';
let number = 123;
let valid = true;
let result1 = null;
let result2 = null;
let sp1 = { maSP: '01', tenSP: 'Sản phẩm 01' };
let prod1 = { id: '1', name: 'iphone', price: 1000 };
let prod2 = { id: '2', name: 'iphone', price: 1000, desc: 'abc' };
let prod3 = { id: '1', name: 'iphone', price: 1000, image: 'https://i.pravatar.cc' };
class ButtonWeb {
    constructor() {
        this.id = '';
        this.innerHTML = '';
        this.className = '';
        this.color = '';
        this.backgroundColor = '';
    }
}
let btn = new ButtonWeb();
class ButtonWebGradient extends ButtonWeb {
    constructor() {
        super(...arguments);
        this.gradient = '';
    }
}
let btnGradient = new ButtonWebGradient();
// =========== FUNCTION TYPE ===================
/*
    + Kiểu dữ liệu trả về của hàm (): kiểu trả về => { // Nội dụng}
    + Kiểu dữ liệu của hàm: () => number
*/
let tinhTong = (a, b) => {
    return a + b;
};
// Hàm này nhận vào "content" là "string" và không trả về gì hết thì để là "void" , còn có trả về có "return" thì phải để "return"
function main(callback) {
    callback('Hello cybersoft');
}
function renderH3(content) {
    document.getElementById('result').innerHTML = `<h3 class="p5 text-center bg-dark text-white">${content}</h3>`;
}
function renderDiv(content) {
    document.getElementById('result').innerHTML = `<div class="p5 text-center bg-danger text-white">${content}
    <i class="fa fa-heart fs-3"></i>
    </div>`;
}
main(renderDiv);
//HOF: higher order function (hàm nhận vào callback và trả về hàm)
//Closure function: hàm nhận vào tham số và trả về hàm
let action = () => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        // code abc
    });
};
let tinhTong2So = (a, b) => {
    return a + b;
};
let arrNumber = [1, 2, 3, 4, 5];
let arrString = ['a', 'b', 'c'];
let arrProd = [
    { id: '1', name: 'iphone', price: 1000 },
    { id: '2', name: 'iphone 1', price: 2000 },
    { id: '3', name: 'iphone 2', price: 3000 },
];
function getApi() {
    return {
        id: 1, name: 'Product 1', showInfo: () => {
            console.log('Info product');
        }
    };
}
class ResApi {
    constructor() {
        this.id = 0;
        this.name = '';
    }
}
let resApi = getApi();
if (resApi instanceof ResApi) {
    resApi.showInfo();
}
if (typeof resApi == undefined) {
    console.error('lỗi abc');
}
if (typeof resApi == 'number') {
    resApi++;
}
//generic
class ProductList {
    constructor() {
        this.arrProduct = [];
        this.add = (newProduct) => {
            this.arrProduct.push(newProduct);
        };
        this.del = (id) => {
            this.arrProduct = this.arrProduct.filter((item) => item.id != id);
        };
    }
}
class StudentList {
    constructor() {
        this.arrStudent = [];
        this.add = (newStuden) => {
            this.arrStudent.push(newStuden);
        };
        this.del = (id) => {
            this.arrStudent = this.arrStudent.filter((item) => item.id != id);
        };
    }
}
class List {
    constructor() {
        this.arr = [];
        this.add = (item) => {
            this.arr.push(item);
        };
        this.del = (id) => {
            this.arr = this.arr.filter((item) => item.id != id);
        };
    }
}
let listProd = new List();
// listProd.add()
let student = [1, 'nguyễn văn a'];
