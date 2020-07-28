const getInput = document.querySelector(".landingPage");
let user;

//the url of images
const imageUrls = [
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

//fetching the url
async function fetchApi(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    })
}
//adding the click event
const addClick = () => {

     document.querySelectorAll(".user-character").forEach(data=> {
        data.addEventListener("click", displayUser);
        
    })
}
//displaying the user
function displayUser(event){
    event.preventDefault();
    document.querySelectorAll(".user-character").forEach(user => user.childNodes[5].classList.remove("show"));
    this.childNodes[5].classList.toggle("show");
}


const buildUser = (user) => {
    return ( `
        <figure class = "user-character"  onclick = "addClick" data-id = ${user.id}> 
            <img src = ${user.imageUrl} alt = ${user.name}/>
            <figcaption>${user.name}</figcaption>
        
        <div class = "user-detail">
            <div>My name is - ${user.name}</div>
            <div>I am a - ${user.gender}</div>
            <div>with a height of - ${user.height}</div>
            <div> my age is - ${user.birth_year}</div>
        </div>
        </figure>
        `
    )
}


const displayDetails = async(users) => {
    let output = "";
    users.forEach(user => {
        output += buildUser(user);
    })
    getInput.innerHTML = output;
    addClick();

}

//this is where the api is being called from "https://swapi.dev/api/people/"
//
const begin = async () =>{
    let userData = await fetchApi("https://swapi.dev/api/people/");
    let newUserData = userData.results.map((user, index) =>{
        user.id = index;
        user.imageUrl = imageUrls[index];
        return user;
    })

    users = new User(newUserData);
    console.log( users)
    displayDetails(newUserData);
}

begin();