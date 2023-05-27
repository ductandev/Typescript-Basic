/*
    1. type: kiểu dữ liệu
    + primitive value: giá trị cơ bản cơ sở (string, boolean, number, null, undefined)
    | | : gọi là union type
    + reference value (non primitive): giá trị tham chiếu
    + function type
    + type array
*/



let title: string = 'abc';
let number: number = 123;
let valid: boolean = true;
let result1: null | string = null;
let result2: undefined | string | number = null;


// Tạo ra type của object 
type SanPham = {
    maSP: string,
    tenSP: string
}

type ResponseServer = SanPham | undefined

let sp1: ResponseServer = { maSP: '01', tenSP: 'Sản phẩm 01' };

interface Product {
    id: number | string,
    name: string,
    price: number,
}

// merge interface
interface Product {
    desc?: string       //có dấu ? thì có hoặc ko cũng đc
}

let prod1: Product = { id: '1', name: 'iphone', price: 1000 }
let prod2: Product = { id: '2', name: 'iphone', price: 1000, desc: 'abc' }


// ============== Kế thừa ===============
interface ProductImage extends Product {
    image: string       //Nếu ko có dấu ? thì bắt buộc phải định nghĩa
}

let prod3: ProductImage = { id: '1', name: 'iphone', price: 1000, image: 'https://i.pravatar.cc' }


interface Ibutton {
    id: string,
    innerHTML: string,
    className: string,
    color: string,
    backgroundColor: String
}

class ButtonWeb implements Ibutton {
    id: string = '';
    innerHTML: string = '';
    className: string = '';
    color: string = '';
    backgroundColor: String = '';
}

let btn = new ButtonWeb();

class ButtonWebGradient extends ButtonWeb {
    gradient: string = ''
}

let btnGradient: ButtonWebGradient = new ButtonWebGradient();



// =========== FUNCTION TYPE ===================
/*
    + Kiểu dữ liệu trả về của hàm (): kiểu trả về => { // Nội dụng}
    + Kiểu dữ liệu của hàm: () => number
*/

let tinhTong: (a: number, b: number) => number = (a: number, b: number): number => {

    return a + b;
}


// Hàm này nhận vào "content" là "string" và không trả về gì hết thì để là "void" , còn có trả về có "return" thì phải để "return"
function main(callback: (content: string) => void) {
    callback('Hello cybersoft');
}

function renderH3(content: string) {
    document.getElementById('result').innerHTML = `<h3 class="p5 text-center bg-dark text-white">${content}</h3>`
}

function renderDiv(content: string) {
    document.getElementById('result').innerHTML = `<div class="p5 text-center bg-danger text-white">${content}
    <i class="fa fa-heart fs-3"></i>
    </div>`

}

main(renderDiv)



//HOF: higher order function (hàm nhận vào callback và trả về hàm)
//Closure function: hàm nhận vào tham số và trả về hàm

let action: ()=> (dispatch) => void = (): (dispatch) => void => {

    return async(dispatch) => {
        // code abc

    }
}


let tinhTong2So: (a: number, b: number) => number = (a: number, b: number): number => {
    return a + b
}
type TypeTong2So = ReturnType<typeof tinhTong2So>



let arrNumber: number[] = [1, 2, 3, 4, 5];
let arrString: string[] = ['a', 'b', 'c'];

let arrProd: Product[] = [
    { id: '1', name: 'iphone', price: 1000 },
    { id: '2', name: 'iphone 1', price: 2000 },
    { id: '3', name: 'iphone 2', price: 3000 },
]


//=============== type: any, unknown =======================
/*
    any,unknown thì sẽ chấp nhận tất cả các giá trị
    any : tránh lạm dụng chỉ sử dụng để debug
    unknown : bắt buộc phải kiểm tra kiểu dữ liệu mới cho sử dụng

*/
type ResponseTypeApi = Product[] | string | undefined
function getApi() {

    return {
        id: 1, name: 'Product 1', showInfo: (): void => {
            console.log('Info product')
        }
    }
}
type typeAPI = ReturnType<typeof getApi>
class ResApi {
    id: number = 0;
    name: string = '';
    showInfo: () => void;
}
let resApi: unknown = getApi();
if (resApi instanceof ResApi) {
    resApi.showInfo();
}
if (typeof resApi == undefined) {
    console.error('lỗi abc')
}
if (typeof resApi == 'number') {
    resApi++;
}

//generic

class ProductList {
    arrProduct: Product[] = [];


    add = (newProduct: Product) => {
        this.arrProduct.push(newProduct);
    }

    del = (id: any | number) => {
        this.arrProduct = this.arrProduct.filter((item: Product) => item.id != id);
    }
}

interface Student {
    id: string,
    name: string,
    age: number
}

class StudentList {
    arrStudent: Student[] = [];
    add = (newStuden: Student) => {
        this.arrStudent.push(newStuden)
    }

    del = (id: any | number) => {
        this.arrStudent = this.arrStudent.filter((item: Student) => item.id != id);
    }
}



class List<TypeParam> {
    arr: TypeParam[] = [];
    add = (item: TypeParam) => {
        this.arr.push(item)
    }

    del = (id: any | number) => {
        this.arr = this.arr.filter((item: TypeParam | any) => item.id != id);
    }
}


let listProd: List<Product> = new List<Product>();

// listProd.add()

let student: [number,string] = [1,'nguyễn văn a']