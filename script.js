// setInterval(() => {
//     console.log("Hello");
// }, 3000);

// setInterval(() => {
//     console.log("Hai");
// }, 4000);

// setTimeout(() => {
//     console.log("Hai");
// }, 1000);


// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setTimeout(() => {
//     console.log("Hii");
// }, 3000);

// setTimeout(() => {
//     console.log("hello");
// },4000);



// callback
// var btn1 = document.getElementById("btn1")
// btn1.addEventListener("click",()=>{
//     alert("Button Click")
// })


//---------------------------------------------------------------------------------------------------------------------------------------------

//NORMAL FUNCTION

// Add two numbers using FUNCTION
// function add1(a,b){
//     var sum = a+b
//     return sum
// } 

// function display(val){
//     document.getElementById("textc").innerText= `The sum is ${val}`
// }

// var result = add1(9,10)
// display(result)

// Product of two numbers
// function mutl(a,b){
//     var mutl = a*b
//     return mutl
// } 

// function display(val){
//     document.getElementById("textc").innerText= `The multiplication is ${val}`
// }

// var result = mutl(9,10)
// display(result)




//CALLBACK FUNCTION
// function add1(a,b,callback){
//     var sum = a+b
//     callback(sum)
// }

// function display(val){
//     document.getElementById("textc").innerText= `The sum is ${val}`
// }

// add1(10,45,display)



// PROMISESS
// function add1(a,b){
//     return promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Sum is not greater than 10")
//         }
//     })
// }
//     // console.log(promise)
//     add1(20,10)
//     promise.then((val)=>{
//         document.getElementById("textc").innerText=`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textc").innerText=`The error message is ${err}`
//     })




    // function add1(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var sum = a+b
    //         if(sum>10){
    //             resolve(sum)
    //         }
    //         else{
    //             reject("Sum is not greater than 10")
    //         }
    //     })
    
    //     // console.log(promise)
        
    //     promise.then((val)=>{
    //         document.getElementById("sum").innerText=`The sum is ${val}`
    //     })
    //     .catch((err)=>{
    //         document.getElementById("sum").innerText=`The error message is ${err}`
    //     })
    // }
    // add1(10,20)


    //  function add2(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var sub = a-b
    //         if(sub>10){
    //             resolve(sub)
    //         }
    //         else{
    //              reject("Difference is not greater than 10")
    //         }
    //     })
    //     // console.log(promise)
            
    //     promise.then((val)=>{
    //         document.getElementById("sub").innerText=`The difference is ${val}`
    //     })
    //     .catch((err)=>{
    //         document.getElementById("sub").innerText=`The error message is ${err}`
    //     })
    // }
    //     add2(30,10)


    // function add3(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var mutl = a*b
    //         if(mutl>10){
    //             resolve(mutl)
    //          }
    //         else{
    //              reject("Product is not greater than 10")
    //         }
    //     })
    //     // console.log(promise)
                
    //     promise.then((val)=>{
    //         document.getElementById("mutl").innerText=`The product is ${val}`
    //     })
    //     .catch((err)=>{
    //         document.getElementById("mutl").innerText=`The error message is ${err}`
    //     })
    // }
    //     add3(10,5)


    // function add4(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var div = a/b
    //         if(div>10){
    //             resolve(div)
    //         }
    //         else{
    //             reject("Division is not greater than 10")
    //         }
    //     })
    //     // console.log(promise)
                    
    //     promise.then((val)=>{
    //         document.getElementById("div").innerText=`The division is ${val}`
    //     })
    //     .catch((err)=>{
    //         document.getElementById("div").innerText=`The error message is ${err}`
    //     })
    // }
    //      add4(60,5)         



//ASYNC AWAIT
//async function by default returns a promise
//await only executes after async
    // async function add1(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var sum = a+b
    //         if(sum>10){
    //             resolve(sum)
    //         }
    //         else{
    //             reject("Error")
    //         }
    //     })
    //     var ans = await promise
    //     document.getElementById("textc").innerHTML=`The sum is ${ans}`
    // }
    // add1(10,2)



    // async function add2(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var sub = a-b
    //         if(sub>10){
    //             resolve(sub)
    //         }
    //         else{
    //             reject("Error")
    //         }
    //     })
    //     var ans = await promise
    //     document.getElementById("sub").innerHTML=`The difference is ${ans}`
    // }
    // add2(15,2)

    // async function add3(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var mutl = a*b
    //         if(mutl>10){
    //             resolve(mutl)
    //         }
    //         else{
    //             reject("Error")
    //         }
    //     })
    //     var ans = await promise
    //     document.getElementById("mutl").innerHTML=`The product is ${ans}`
    // }
    // add3(20,2)

    // async function add4(a,b){
    //     let promise = new Promise((resolve,reject)=>{
    //         var div = a/b
    //         if(div>10){
    //             resolve(div)
    //         }
    //         else{
    //             reject("Error")
    //         }
    //     })
    //     var ans = await promise
    //     document.getElementById("div").innerHTML=`The division is ${ans}`
    // }
    // add4(60,5)

    //https://dummyjson.com/products





//  USING  AJAX
    function ajaxcall(){            
        var xhr = new XMLHttpRequest()
        xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
        xhr.send();
        xhr.onreadystatechange = function(){
        let promise = new Promise((resolve,reject)=>{
            if(this.readyState == 4 && xhr.status == 200){
                 resolve("It is done")
            }
        })
        promise.then((val)=>{
            document.getElementById("textc").innerHTML=`The result is ${val}`  
        })
        }
    }
     ajaxcall()           
                       
                


    