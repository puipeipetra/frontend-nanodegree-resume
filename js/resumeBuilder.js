
/*
var funThoughts= awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);
*/

/*
var name="Petra";
var role='Product Designer';

var formattedName=HTMLheaderName.replace("%data%",name);
var formattedRole=HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/


/*
var bio= {
  "name": "Petra",
  "role": "Product Designer",
  "contacts": {
    "mobile":"812-123-4567",
    "email":"123@gmail.com",
  },
  "picture_url": "images/fry.jpg",
  'welcome_message': "welcome welcome. this is a test.welcome welcome. this is a test.welcome welcome. this is a test.",
  "skills": ["awesomeness", "sketch", "sing"]
}


var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedName=HTMLheaderName.replace("%data%",bio.name);

var formattedContact=HTMLcontactGeneric.replace("%data%","222");
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);


var formattedBioPic=HTMLbioPic.replace("%data%",bio.picture_url);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcome_message);

var formattedSkills=HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedContact);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);

$("#topContacts").append(formattedBioPic);
$("#topContacts").append(formattedWelcomeMsg);

$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);
*/

/*
var work = {};
  work.position = "Product Designer";
  work.employer = "Solutionreach";
  work.years = "2";
  work.city = "Lehi, Utah";

var education = {};
education["name"] = "Indiana University";
education["years"] = "2013";
education["city"] = "Bloomington, Indiana";

$("#main").append(work["position"]);
$("#main").append(education.name);
*/

var bio= {
  "name": "Petra",
  "role": "Product Designer",
  "contacts": {
    "mobile":"812-123-4567",
    "email":"123@gmail.com",
    "github": "puipeipetra",
    "twitter": "@puipeipetra",
    "location": "Salt Lake City, Utah"
  },
  "biopic": "images/fry.jpg",
  'welcome_message': "welcome welcome. this is a test.welcome welcome. this is a test.welcome welcome. this is a test.",
  "skills": ["awesomeness", "sketch", "sing"]
}

var work={
    "jobs" :[
      {
        "position" = "UX Designer",
        "employer" = "Solutionreach",
        "dates" = 2015,
        "location" = "Lehi, Utah"
        "description": "it's ok. not that fun i guess. looking for another job"
      },
      {
        "position" = "UX Design Intern",
        "employer" = "Solutionreach",
        "dates" = 2014,
        "location" = "Lehi, Utah"
        "description": "was fun. my first ux job"
      },
      {
        "position" = "User Researcher",
        "employer" = "Lenovo Research Center",
        "dates" = 2012,
        "location" = "Beijing, China"
        "description": "research is super cool. interview was not."
      }
    ]
}

var education={
  "schools" : [
    {
      "name": "Peking University",
      "city": "Beijing",
      "majors": ["Psychology", "Sociology"],
      "graduation": 2013
    },
    {
      "name": "Indiana University",
      "city": "Bloomington",
      "majors": ["Human Computer Interaction"],
      "graduation": 2015
    }
  ],
  "onlineCourses" :[
    {
      "title": "JS",
      "school": "Udacity",
      "dates": 2017,
      "url": "www.udacity.com"
    }
  ]
}

var project= {
  "projects": [
    {
      "title": "SRSR",
      "date": 2017,
      "description": "ios app"
      "image": "image/197x148.jpg"
    },
    {
      "title": "SR Schedule",
      "date": 2017,
      "description": "web app"
      "image": "image/197x148.jpg"
    }
  ]
}
