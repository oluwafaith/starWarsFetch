
const getInput = document.querySelector(".landingPage");

let user;

//fetching the data from api
//this is where the api is being called from "https://swapi.dev/api/people/"
const begin = async () =>{
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


const fetchApi = async (response) =>{
    return fetch(response)
    .then(res => res.json())
    .then(data => {
        return data;
    })
}
//adding the click event
const addClick = () => {

     document.querySelectorAll(".user-character").forEach(data=> {
        data.addEventListener("click", displayUser);
        
    })
}
//displaying the user on click
function displayUser(event){
     event.preventDefault();
     document.querySelectorAll(".user-character").forEach(user => user.childNodes[5].classList.remove("show"));
     this.childNodes[5].classList.toggle("show");
}

//
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


const displayDetails = async(users) => {
    let output = "";
    users.forEach(user => {
        output += populateUser(user);
    })
    getInput.innerHTML = output;
    addClick();

}


//the url of images
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


begin();