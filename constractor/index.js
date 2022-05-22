// function submitProduct(e){
//     e.preventDefault();
//     let form=document.getElementById("products")
//     let name=form.name.value;
//     let brand=form.brand.value;
//     let price=form.price.value;

//     console.log(name,brand,price)
// }

function Product(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
}

let arr=[];

function submitProduct(e){
    e.preventDefault();
    let form=document.getElementById("products")
    let Name=form.name.value;
    let brand=form.brand.value;
    let price=form.price.value;

    let p=new Product(Name,brand,price);
    arr.push(p);

    console.log(arr);
}

//----------CALL,APPLY,BIND-------------//

// let bedroom = {
//     name:"bedroom",
//     purpose:"sleep",
//     food:function(food){
//         console.log(`Serving ${food} in ${this.name}`);
//     },
// };

// bedroom.food("pizza");

// let livingroom = {
//     name:"livingroom",
//     purpose:"rest",
//     food:function(food){
//         console.log(`Serving ${food} in ${this.name}`);
//     },
// };

// livingroom.food("maggie");


let bedroom={
    name:"bedroom",
    purpose:"sleep"
};
let livingroom={
    name:"living room",
    purpose:"rest"
};
let storeroom={
    name:"store room",
    purpose:"store"
};
function food(food){
    console.log(`Serving ${food} in ${this.name}`);
}
food.call(bedroom,"pizza");
food.call(livingroom,"pizza");
food.call(storeroom,"pizza");

food.apply(bedroom,["pizza","samosa"]);
food.apply(livingroom,["pizza"]);
food.apply(storeroom,["pizza"]);

let f1=food.bind(bedroom,"pizza");
let f2=food.bind(livingroom,"pizza");
let f3=food.bind(storeroom,"pizza");

f1()