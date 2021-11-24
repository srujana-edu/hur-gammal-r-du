let main = document.getElementById("root");
let container = document.createElement("div");
 
//adding header to the page
let header = document.createElement("h1")
header.innerText = "Enter your Age."
header.className = "myHeader"
container.append(header);

//adding age input 
let myAge = document.createElement("input");
myAge.placeholder = "Enter Your Age";
myAge.id = "myAge";

//adding button
let button = document.createElement("button");
button.innerText = "check";
main.append(container, myAge,button);


//adding function
button.addEventListener("click", function(){
    let myAge =document.getElementById("myAge").value;
    var correctAge=parseInt(myAge, 10);
    console.log(correctAge);

    if(correctAge<18){

        alert("you are young!");
        console.log("young people");
    
    }else if(correctAge>=18 && correctAge<65){
        alert("welcome");
        console.log("perfet");
    
    }else{
        alert("you are old!");
    }
});
