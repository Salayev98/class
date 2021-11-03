// Task 1
class circle{
    
    p=3;
    S=1;
    L=1
    constructor(name){
        this.Name=name;
    }
    calcarea(r){
        
        this.S=this.p*Math.pow(r,2);
        console.log(this.S);
    }
    calclength(r){
        this.L=2*this.p*r;
        console.log(this.L);
    }
}
let daire=new circle("Yumru");
let r=5;
daire.calcarea(r);
daire.calclength(r);

// Task2
class Product{
    constructor(costPrice,sellPrice,inventory){
        this.CostPrice=costPrice;
        this.SellPrice=sellPrice;
        this.Inventory=inventory;
    }
}
let product = new Product(32,45,1200)
console.log(calculate(product));
function calculate(products){
    return  totalcoming=(products.SellPrice-products.CostPrice)*products.Inventory
    
}

// Task 3
console.log(IsinRange(2,{min: 3, max:5}));
function IsinRange(a,obj){
    if(a>obj.min&&a<obj.max){
        return true;
    }
    else{
        return false;
    }
}
// Task 4


console.log(countAll("H35ello World"));
function countAll(a){
    let count1 = 0
    let count2 = 0
    let Str=a.replace(/\s/g,'')
    for (let item of Str) {
        if (isNaN(item)) {
            count1++
        }else {count2++}
        
        
    }
    let count={
        "Letters": count1,
        "Digits": count2, 
    }
    return count;
}

// Task 5

console.log(evenoddPartition([5,8,9,2,3,4]));
function evenoddPartition(obj){
    let even=[];
    let odd=[];
    for (let item of obj) {
        if (item%2==0) {
            even.push(item)
        }
        else{
            odd.push(item)
        }
    }
    let numarray=[]
    numarray.push(even)
    numarray.push(odd)
    return numarray;
}

