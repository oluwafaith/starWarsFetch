
// let data;
document.addEventListener('DOMContentLoaded', function() {
 
        fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then(({results}) => {
            // console.log(results);   
            // data = results;
            users = new User(results);
            // console.log(data[0].height)   
            let output = "";
            results.forEach(function(users) {                        
                output += `
                <div class="card" onclick="myFunction()" >
                <img src = "https://res.cloudinary.com/dhtxiw89g/image/upload/v1595572957/dummy-image.png" width="600" height= "400">
                
                <p class="view"> ${users.name}</p>
                </div>
                <div class="panel">
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
  const myFunction = ()=> {
     var  x  =  document.querySelector(".panel");
    // x.map(element => {
        if(x.style.display === "none"){
            x.style.display = "block";
         }
         else{
            x.style.display = "none";
        } 
    // });
    

  }




