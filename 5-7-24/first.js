let data = [2,3,43,23,2,33,2,44,4];


// #traversing

// for (let i=0;i<data.length;i++){
//     // document.write(data[i])

//     document.write(`This is Array ${i} ${data[i]} </br> `)
// }

let x=3;
document.write(data[3]);

// accessiiing 
// validation
function getElement(){

    let el = document.getElementById("Element").value;


    if(el<data.length){

     alert(data[el])
    }else if(el.length == ""){
        alert("please enter value")

    }else{
        alert("write value")
    }
}