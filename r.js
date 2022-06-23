//minimalist js injector?!
//var rAll = fetch("./r.json");

fetch('./r.json')
    .then(response => response.json())
    .then(data => {
                      const rAll = data;
                      workDetials ();
                    })
    .catch (error => console.log (error));

function workDetials (experienceArray) {
    console.log (rAll)
}

function main () {

}

