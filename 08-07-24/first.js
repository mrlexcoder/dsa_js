console.log("hello")

let a = 3;
let b = 4;

c = a+b;
if (a < c ){
    console.log("true");

    for (c=0;c<a;c++){
        console.log(c);
    }
}else{

    console.log("false");
}

function Generatearrayrandom(Size, Min, Max){

    array = [];
    for (i=0;i<Size;i++){
        array.push(Math.floor(Math.random() * (Max-Min+1)) - Min)
    }
    return(array);
}

let getArray = Generatearrayrandom(12,1,1000);
console.log(getArray);



let even = [];
let odd =[];
getArray.forEach(getfilter => {

    if (getfilter%2==0){
        even.push(getfilter);
    } else {
        odd.push(getfilter);
    }
})

console.log(even);
console.log(odd)