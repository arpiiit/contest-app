// //loops
// let sum = 0;
// let n = prompt("kjksdfk");
// n = Number.parseInt();
// for (let i = 0; i < n; i++) {
//     sum += (i + 1);
// }
// console.log(sum);


// let i=0;
// while(i<n){
//     console.log(i);
//     i++;
// }


// //function-it is used for seperate the logic

// function onePlus(x,y){
//     console.log('Done')
//     return Math.round(1+(x+y)/2);
// }
// const sum=(p,q)=>{
//     return p+q;
// }

// console.log(sum(2,9))
// let a=1;
// let b=2;
// let c=3;
// console.log("Plus",onePlus(a,b));
// console.log("Plus",onePlus(c,b));
// console.log("Plus",onePlus(a,c));


// // String

// //String interpulation 
// let boy1=`arpit`;
// let boy2=`mkmdfk`;
// let sentence=`${boy1} is a friend of ${boy2}`
// console.log(sentence)


//string are immutable


/*

arrays

let a=[1,2,3,4,null,false,"not present"]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a.length)
a[3]=4223;
a[4]=32;
console.log(typeof a);

--------------------------

let compare=(a,b)=>{
    return a-b;
}

let num=[2,3,4,5,6,7,8,8,9,342,23,657,56,544]
num.sort(compare)
num.reverse()
console.log(num);


splice-add to new item
let num=[7,3,35,3,35,35,3,353,3535,35,353]
num.splice[3,4,543,46,3,3634,,34,66346]
console.log(deletedValues);
console.log(num);


slice-part of the array
*/


/*
map-creates a new array
 filter-
  reduce-
 let arr=[123,432,34]
 arr.map((value, index)=>{
    console.log(value, index);
    return value+1;
 }
 )

 console.log(a);



filter: 

 let arr2=[32,432,534,5436546,564,7]
 let a2=arr2.filter((a)=>{
 return a<10;
 })
 console.log(a2);

----reduce

let arr3=[432,343,2,4325325,435,3,452352,235]
newarr3=arr3.reduce((h1,h2)=>{
    return h1 + h2;//arr[1]+arr[2]=res===> res+arr[3].......
})
console.log(newarr3);


 */

/*

alert("Hello Ia ma arpit")-uses for mini window invoking
prompt()-ak variable ke roop me leta hai value ko jo bhi input karne wale hai
confirm()-for confirmation

alert("enter")
let a=prompt("ENter valuee here")
document.write(a);


window-
DOM-document object model
BOM-browser object model
javascript core


window.console.log(window)
console.log(document.body);
document.body.style.background="yellow"
*/

//find the child node
// console.log(document.body.firstChild);
// let arr=Array.from(document.body.childNodes)
// console.log(arr);

// let b = document.body
// console.log("FIrst chiled  of b", b.firstChild)
// console.log("FIrst element chiled  of b", b.firstElementChild)

// let p1=new Promise((resolve,reject)=>{
//     console.log("promis is pending");
//     setTimeout(()=>{
//         console.log("I am promis and I am resolved");
//         resolve(true);
//     },5000)
// })

// let p2=new Promise((resolve,reject)=>{
//     console.log("promis is pending");
//     setTimeout(()=>{
//         console.log("I am promis and I am rejected");
//         reject(new Error("I am an error"))
//     },5000)
// })
// p1.then((value)=>{
//     console.log(value)
// }) 
// p2.catch((error)=>{
//     console.log("some error occured in P2");
// })

// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })


// async function arpit(){
//     return 3; 
// }
// arpit().then((x)=>{
//     alert(x); 
// })

// async function arpit(){
//     let delwe=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("27 aug")
//         },2000)
//     })

//     let bngnw=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("21 Degree")
//         },5000)
//     })

//     console.log("Fetching delhi weather please wait.....");
//     let delhw=await delwe;
//     console.log("fecherd delhi weather"+delhw);
//     console.log("FEtching.......");
//     let bangwww=await bngnw;
//     console.log("fecherd delhi weather"+bangwww);
//     return [delhw,bangwww];
// }

// console.log("Wellocome")
// let a=arpit()
// a.then((value)=>{
//     console.log(value)
// })


// try{
//     console.log(harry)
//     throw new ReferenceError("HArry is new")
// }catch(error){
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
// }

let url="https://kontests.net/api/v1/all"

let response=fetch(url)
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    console.log(contests)
    ihtml=""
    for(item in contests){
        console.log(contests[item])
        ihtml+=`
        <div class="card" style="width: 23.6rem;">
        <img class="card-img-top" src="https://thumbs.dreamstime.com/b/coding-challenge-text-written-programming-code-abstract-technology-background-software-developer-computer-script-concept-153538755.jpg" alt="Card image cap">
        <div class="card-body mx-2 my-4">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is:  ${contests[item].status} and site is ${contests[item].site}</p>
          <p class="card-text">In 24 Hours:  ${contests[item].in_24_hours}</p>
          <p>Starts at :${contests[item].start_time}
          <p>Ends at :${contests[item].end_time}
          <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML=ihtml 
})

