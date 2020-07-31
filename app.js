class User {

    constructor(details){
        this.details = details;
    }
    user() {
    const {name, height, gender, birth_year} = this.details
    return{
        name,
        height,
        gender,
        birth_year
    }
    }
    
}

const getInput = document.querySelector(".landingPage");

let user;

//fetching the data from api


const fetchApi = async () =>{
   try{ const response = await fetch("https://swapi.dev/api/people/")
    const  data  = await response.json()
        return data.results;
 }catch(e){
    console.log(e)
 }
}

const getUser = async () =>{
    const dataUsed = await fetchApi();
    
    let dataOfUser = dataUsed.map((user, index) =>{
        user.id = index;
        user.image = images[index];
        console.log(user);
        
        return user;
    })
console.log(dataOfUser);

   // user = new User(dataOfUser);
    displayDetails(dataOfUser);
}




//displaying the  image and details of the user on the ui
const populateUser = (user,images) => {
    return  `
       <div class = "user-character"   data-id = ${user.id}> 
           <img src = ${images} alt = ${user.name}/>
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
const addClick = () => {
     document.querySelectorAll(".user-character").forEach(data=> {
        data.addEventListener("click", displayUser);
        
    })
}

function displayUser(event){
     event.preventDefault();
     const character = document.querySelectorAll(".user-character")
     character.forEach(user => user.childNodes[5].classList)
     this.childNodes[5].classList.toggle("show");
}
function hideDisplay(e){
    e.preventDefault(e);
    const character = document.querySelectorAll(".user-character")
     character.forEach(user => user.childNodes[5].classList)
    this.childNodes[5].classList.toggle("hide");
    
}
const displayDetails = async(users) => {
    let output = "";
    users.map((user,index) => {
        const obj = new User(user);
        // console.log(obj);
        
        output += populateUser(obj.user(),images[index]);
    })
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
    "./image/Darth-Vader.jpeg" 
]



getUser();