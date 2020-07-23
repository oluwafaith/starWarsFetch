document.getElementById("container").addEventListener('click', getData);

function getData(){
    fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then(({results, next}) => {
        console.log(results, next);
                
        let output = '<h2> people list </h2>';
        results.forEach(function(url) {
            output += `
            <ul>
            <li> ${url.name}</li>
            </ul>
            
            `;
            document.getElementById('output').innerHTML = output;
        });

    })
}
