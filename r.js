//minimalist js injector?!
//var rAll = fetch("./r.json");
window.addEventListener('load', function (data){
    fetch('./r.json')
    .then(response => response.json())
    .then(data => {
            main(data);
        })
    .catch (error => console.log (error));

})


function workDetials (experienceArray) {
    var we = experienceArray;
    we.reverse();

    console.log (we.length)
    var experienceArray = [];
    for (let i = 0; i< we.length; i++) {
        experienceArray[i] = document.createElement("div");
        experienceArray[i].classList.add('rb-experience-item');
        experienceArray[i].append (createWorkDetails (we[i][0]));
    }
    var expcon = document.getElementById('rbexpcon');
    for (let j = 0 ; j < experienceArray.length ; j++) {
        expcon.appendChild(experienceArray[j]);
    }

//    console.log (experienceArray);
}

function createWorkDetails (item) {
    var details = document.createElement("details");
   
   
    var designation = document.createElement ("div");
    designation.innerHTML = item.designation ;
    designation.style.fontWeight = "bold";

    var summary = document.createElement("summary");
    summary.style.padding = "1em";
    summary.innerHTML = item.company + '&nbsp;--&nbsp' +'<b>'+item.designation+'</b>';

    var specifics = document.createElement ("div");
    specifics.style.padding = ".7em";
    specifics.innerHTML = item.summary;
    
    var duration = item.joinDate + " - " + item.endDate;
    var workedFor = document.createElement ("div");
    workedFor.style.padding = ".7em";
    workedFor.innerHTML = duration;

    details.append (summary);
    
    details.append (workedFor);
    details.append (specifics);

    return details;

}

function educationDetails (education) {
    console.log (education);
    var educationArray = []
    for (let i = 0; i< education.length; i++) {
        educationArray[i] = document.createElement ("div");
        educationArray[i].classList.add("rb-education-item");
        educationArray[i].append (createEducationDetails (education[i][0]) );
    }
    
    var educationContainer = document.getElementById("rbeducon"); 
    for (let j = 0 ; j < educationArray.length; j++) {
        educationContainer.appendChild (educationArray[j]);
    }

}

function createEducationDetails (item) {
    var details = document.createElement("details");

    var summary = document.createElement("summary");
    summary.style.padding = "1em";
    summary.innerHTML = item.institution;

    var specifics = document.createElement ("div");
    specifics.style.padding = ".7em";
    specifics.innerHTML = item.grade;
    
    var passoutYear = document.createElement ("div");
    passoutYear.style.padding = ".7em";
    passoutYear.innerHTML = item.year;

    details.append (summary);
    details.append (passoutYear);
    details.append (specifics);

    return details;

}

function bio (bio) {
    console.log (bio);
    var domBio = document.getElementById ('rbbio');
    domBio.innerHTML = bio;
}

function main (data) {
    workDetials(data.person.work);
    educationDetails (data.person.education);
    //bio (data.person.bio);

}

