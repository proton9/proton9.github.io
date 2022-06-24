//minimalist js injector?!
//var rAll = fetch("./r.json");

// fetch('./r.json')
//     .then(response => response.json())
//     .then(data => {
//                       const rAll = data;
//                       workDetials (data);
//                     })
//     .catch (error => console.log (error));

function workDetials (experienceArray) {
   // console.log (rAll);
    var we = experienceArray.work;

    console.log (we.length)
    var exps = [];
    for (let i = 0; i< we.length; i++) {
        exps[i] = document.createElement("div");
        exps[i].classList.add('rb-experience-item');
        exps[i].append (createDetails (we[i][0]));
    }
    var expcon = document.getElementById('rbexpcon');
    console.log (exps);
    for (let j = 0 ; j < exps.length ; j++) {
        expcon.appendChild(exps[j]);
    }

//    console.log (exps);
}

function createDetails (detailsItem) {
    var details = document.createElement("details");
    var summary = document.createElement("summary");
    summary.innerHTML = detailsItem.company;
    var specifics = document.createElement ("div");
    specifics.innerHTML = detailsItem.summary;

    details.append(summary);
    details.append (specifics);
    console.log (details);
    return details;

}

function main () {
    var wjson = {"work" : [
                            [{
                                "company"       : "Capgemini",
                                "joinDate"      : "July 2015",
                                "endDate"       : "July 2016",
                                "designation"   : "Systems Associate",
                                "summary"       : "Assisted in design and development of a custom application with custom tables and automated reporting to measure productivity of agents. Developed scripts for creating bulk incident tickets, each unique, ondevelopment instances to showcase reporting capabilities for pre sales client demos. Developed and Deployed over 30 enhancements in the first 2 months."
                            }],
                            [{
                                "company"       : "Trikon Electronics",
                                "joinDate"      : "",
                                "endDate"       : "",
                                "designation"   : "Software Programmer",
                                "summary"       : "Worked on Multiple technologies from websites powered by c/c++ , perl to apache httpd. Administered servers hosting more than 90 Businesses.  Made enhancements to OwnMail - email service for business, based on top of sendmail. Conducted feasibility study for NextCloud integration with existing cloud based storage offerings. Also had a brief stint with Asterisk IVR programming, and text to speech modules"
                            }],
                            [{
                                "company"       : "TheHouseMonk",
                                "joinDate"      : "",
                                "endDate"       : "",
                                "designation"   : "Business Development Executive",
                                "summary"       : "Took the initiative to set up a knowledge base on renato for the SaaS tools that the company offered. Trained clients on how to use the tool and also worked closely with the developers to give them proper business requirements."
                            }]
                ]
            };
        workDetials (wjson);
}

window.addEventListener('load', (event) => {
    main();
  });
