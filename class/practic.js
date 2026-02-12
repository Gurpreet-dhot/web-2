// const para =document.getElementsByClassName("para")
// para[1].innerText="im gurpreet"
// para[1].style.color="blue"

// for(let i=0;i<para.length;i++){
//     para[i].style.color="blue"
// }

// const form=document.querySelector("#myform").addEventListener("submit",function(event){
//     event.preventdefault();
//     alert("form submitted");
// });

// setTimeout(()=>{
//     console.log("hello")
// },2000)
// var i=0;
// const id=setInterval(()=>{b=i+=1 
//     if(i===10)clearInterval(id)
//     console.log(b)   
// },1000)


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })

//     list.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// })

// function print(num){
//     setTimeout(()=>{
//         console.log("inside print")
//         setTimeout(()=>num(),1000)
//     },3000)
// }

// function sample(){
//     console.log("inside call")
// }

// print(sample)



// console.log("starting homework");

// setTimeout(() => {
//     console.log("homework done");
//     console.log("starting dinner");

//     setTimeout(()=>{
//         console.log("dinner done");
//         console.log("getting ready to go out");

//         setTimeout(()=>{
//             console.log("going to playground");
//         },1000);

//     },1500);
    
// },2000);

// const p=new Promise((res,rej)=>{

//     let done=true;
//     setTimeout(()=>{
//         if(done){
//             res({name:"gurpreet",age:25})
//         }else{
//             rej("words have not completed")
//         }
//     },5000);
// })
// p.then((data)=>{
//     console.log(data.name)
// })
// p.catch((err)=>{
//     console.log(err)
// })
// p.finally(()=>{
//     console.log("final block")
// })


// function doHomeWork(){
//     const p=new Promise((res,rej)=>{
//         let done=true;
//         setTimeout(() => {
//             if (done){
//                 console.log("homework complete")
//                 res("homework is done")
//             }else{
//                 rej("home work not completed")
//             }
            
//         },3000);
//     })
//     return p
// }


    
// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("food is ordered;;")
//             res("food is ordered")
//         }, 2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("food preped")
//             res()
//         }, 2000)
//     })
// }

// function deliverfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("food deliered")
//             res()
//         }, 2000)
//     })
// }

// async function foodorder(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverfood()
//     console.log(" thank u !! \n enjoy your meal")
// }
// foodorder()



