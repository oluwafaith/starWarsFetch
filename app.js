//import User from './newApp.js'
const getInput = document.querySelector(".landingPage");

let user;

//fetching the data from api
//i made a call to the api  "https://swapi.dev/api/people/" 

const fetchApi = async (response) =>{
    return fetch(response)
    .then(res => res.json())
    .then(data => {
        return data;
    })
}

const getUser = async () =>{
    const dataUsed = await fetchApi("https://swapi.dev/api/people/");
    
    let dataOfUser = dataUsed.results.map((user, index) =>{
        user.id = index;
        user.image = images[index];
        return user;
    })

    users = new User(dataOfUser);
    console.log( users)
    displayDetails(dataOfUser);
}




//displaying the  image and details of the user on the ui
const populateUser = (user) => {
    return  `
       <div class = "user-character"   data-id = ${user.id}> 
           <img src = ${user.image} alt = ${user.name}/>
           <div class= "name"> ${user.name}</div>
       
       <div class = "user-detail">
       <div>My name is - ${user.name}</div>
           <div>I am a - ${user.gender}</div>
           <div>with a height of - ${user.height}</div>
           <div> my age is - ${user.birth_year}</div>
       </div>
       </div>
       `
   
}

//adding the click event and removing the event
//the first thing to do is to target the parameter which in this case is the user character
//then add an event listener click, the other functions shows or hide the value

const addClick = () => {
     document.querySelectorAll(".user-character").forEach(data=> {
        data.addEventListener("click", displayUser);
        
    })
}

function displayUser(event){
     event.preventDefault();
     document.querySelectorAll(".user-character").forEach(user => user.childNodes[5].classList);
     this.childNodes[5].classList.toggle("show");
}
function hideDisplay(e){
    e.preventDefault(e);
    document.querySelectorAll(".user-character").forEach(user => user.childNodes[5].classList);
    this.childNodes[5].classList.toggle("hide");
    
}
const displayDetails = async(users) => {
    let output = "";
    users.map(user => {
        output += populateUser(user);
    }).join("")
    getInput.innerHTML = output;

    addClick();
}

//the this is an arrray of images to be added to the display details
const images = [
    "./image/luke_Skywalker.png",
    "./image/Darth-Vader.jpeg",
    "./image/luke_Skywalker.png",
    "./image/Darth-Vader.jpeg",
    "./image/luke_Skywalker.png",
    "./image/Darth-Vader.jpeg",
    "./image/luke_Skywalker.png",
    "./image/Darth-Vader.jpeg",
    "./image/luke_Skywalker.png",
    "./image/Darth-Vader.jpeg", 
]


getUser();