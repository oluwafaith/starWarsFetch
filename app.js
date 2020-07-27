
let data;
document.addEventListener('DOMContentLoaded', function() {
 
        fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then(({results}) => {
            console.log(results);   
            data = results;
            users = new User(results);
            // console.log(data[0].height)   
            let output = "";
            results.forEach(function(users) {                        
                output += `
                <div class="card" onclick="myFunction()" >
                <img src = "https://res.cloudinary.com/dhtxiw89g/image/upload/v1595572957/dummy-image.png" width="600" height= "400">
                
                <p class="view"> ${users.name}</p>
                </div>
                <div id="panel">
                <p>${users.name}</p>
                <p>${users.birth_year}</p>
                 <p>${users.height}</p>
                 <p>${users.gender}</p>
                 </div>
                `;
            });
            document.getElementById('output').innerHTML = output;

         
        })

})
function myFunction() {
   var  x  =  document.getElementById("panel");
   if(x.style.display === "none"){
       x.style.display = "block";
   }
   else{
       x.style.display = "none";
   }

  }


// class User{
//     constructor(name, birth_year, height, gender){
//         this.name = name;
//         this.birth_year = birth_year;
//         this.height = height;
//         this.gender = gender;
    
//     }
// }



