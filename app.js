//display list
let data;
document.getElementById("container").addEventListener('click', getData);
function getData(){
    fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then(({results, next}) => {
        console.log(results, next);
        data = results;
        let output = '<h2> people list </h2>';
        results.forEach(function(url) {
            output += `
            <ul>
            
            <li>   ${url.name}</li>
            </ul>
            
            `;
            document.getElementById('output').innerHTML = output;
        });

    })
}

//display image
// document.getElementById("showImage")
document.addEventListener('DOMContentLoaded', getImage)
function getImage(){
    fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then(({results, next}) => {
        console.log(results, next);
              
        let output = '<h2> people list </h2>';
        results.forEach(function(url) {
            output += `
            <div class="imageIcon">
            <img src = "https://res.cloudinary.com/dhtxiw89g/image/upload/v1595572957/dummy-image.png" width="70px" height= "70px">
             <p> ${url.name}</p>
            </div>
            
            `;
            document.getElementById('output').innerHTML = output;
        });

    })
}


// When we click on name, new User get called

//click on any name  click event
// info stored in new Class

document.getElementById("dispayName").addEventListener("click", function (e) {
  const user = new User(data);
     
})