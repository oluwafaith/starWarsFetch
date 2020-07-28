const getInput = document.querySelector(".landingPage");
let user;
const api = "https://swapi.dev/api/people/";

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

async function fetchApi(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    })
}
const addClick = () => {

     document.querySelectorAll(".user-character").forEach(data=> {
        data.addEventListener("click", displayUser);
        
    })
}
function displayUser(evt){
    evt.preventDefault();
    document.querySelectorAll(".user-character").forEach(user => user.childNodes[5].classList.remove("show"));
    this.childNodes[5].classList.toggle("show");
}

const buildUser = (user) => {
    return ( `
        <figure class = "user-character"  onclick = "addClick" data-id = ${user.id}> 
            <img src = ${user.imageUrl} alt = ${user.name}/>
            <figcaption>${user.name}</figcaption>
        
        <div class = "user-detail">
            <div>Name: ${user.name}</div>
            <div>Gender: ${user.gender}</div>
            <div>Height: ${user.height}</div>
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

const begin = async () =>{
    let userData = await fetchApi(api);
    let newUserData = userData.results.map((user, index) =>{
        user.id = index;
        user.imageUrl = imageUrls[index];
        return user;
    })

    users = new User(newUserData);
    console.log(" hello")
    displayDetails(newUserData);
}

begin();