//alert("it is working")
              
//normal function
// function greet() {
//     alert("welcome user")
// }
// greet();





//functions that takes peramiters
              
// function greet(user) {
//     alert("hello"+ user)
// }
// greet("mike");






//function with return value
            
// function add(a,b) {
//     return a + b;
// }
// alert(add(1, 3))

// const add = (a,b) => a * b;
// alert(add(60,7));

// setTimeout(() => {
//     alert("Execute after 2s ")
// }, 5000);
// const title = document.getElementById("title");

// console.log(title.innerHTML)

// const para = document.getElementsByClassName("paragraph");

// console.log(title.innerText)

// const title = document.querySelector("#tilte")
// console.log(title.innerHTML)
// const para = document.querySelector(".para")
// console.log(para.innerHTML)
// const p = document.querySelectorAll("p")
// console.log(Gold.innerHTML)


// const tittle = document.querySelector("#title");
// title.textContent = "welcome to Nigeria";


// document.querySelector("button").setAttribute("disabled", false)


// document.querySelector("h1").style.color = "red"


// function greet(){
//     console.log("hello world")
// }

// greet()

// const paragraph = document.querySelector("p");

// function greet(){
//     // paragraph.textContent = "welcome ghost"
//      paragraph.style.color = "blue"
//       paragraph.textContent = "welcome ghost"
// }

const btn = document.querySelector("button")
const greet = document.querySelector("p")

btn.addEventListener("mouseover",function(){
    // greet.style.color = "blue"

    //  const name = document.createElement("h1");
    //  name.textContent = "THE DEVIL IS HERE"
    //  document.body.appendChild(name)

    // greet.remove()

    const name = document.createElement("h1");
      name.textContent = "product"
      document.body.appendChild(name)

      const button = document.querySelector("button");

      btn.addEventListener("click",function(){
        const buttonValue = button.value;
        if (username === "appclickict" && password === "appclick1234") {
            alert("user login")
        } else {
            alert("Wrong input")
        }
        
      })

});

