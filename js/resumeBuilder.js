/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
This is empty on purpose! Your code to build the resume will go here.
 */
inName(name);
var bio=
{
	"name":"Kannan T",
 	"role":"Front-End Developer" ,
 	"contacts":
 	{
 		"mobileno": 09600936102,
	 	"emailid": "kannant92@yahoo.in",
	 	"twitter":"kannankannu",
	 	"blog":"Techiefellows",
	 	"github":"kannan007",
	 	"location":"Arani,TamilNadu,India"
	},
 	"welcomemessage": "Welcome to my Resume",
 	"biopic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14072_794059800631445_7072515640796208267_n.jpg?oh=bf5c0c09511af96cad1a2eb0e27b1a46&oe=58CB6528",
 	"skills":["Who knows","Will add soon"],
};
bio.display=function()
{
	var formattedname=HTMLheaderName.replace("%data%",bio.name);
	var formattedrole=HTMLheaderRole.replace("%data%",bio.role);
	var formattedmobile=HTMLmobile.replace("%data%",bio.contacts.mobileno);
	var formattedemailid=HTMLemail.replace("%data%",bio.contacts.emailid);
	var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedblog=HTMLblog.replace("%data%",bio.contacts.blog);
	var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedbiopic=HTMLbioPic.replace("%data%",bio.biopic);
	var formattedmsg=HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
	$("#header").prepend(formattedrole);
	$("#header").prepend(formattedname);
	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemailid);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedblog);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedbiopic);
	$("#header").append(formattedmsg);
	if(bio.skills.length>0)
	{
	 	$("#header").append(HTMLskillsStart);
	 	for(var i=0;i<bio.skills.length;i++)
	 	{
	 		var formattedskill=HTMLskills.replace("%data%",bio.skills[i]);
	 		$("#skills").append(formattedskill);
	 	}
	}
}
bio.display();
var work=
{
 	"jobs":
 	[
 		{
 			"employer":"PI Axis",
 			"title":"Front-End Developer",
 			"location":"Bangalore,India",
 			"dates":"June 23 to August",
 			"description":"Worked as front-end developer taken care of entire front side by myself"
 		}
 	]
};
work.display=function()
{
	$("#workExperience").append(HTMLworkStart);
	for(var items=0;items<work.jobs.length;items++)
	{
	 	var formattedworkemployer=HTMLworkEmployer.replace("%data%",work.jobs[items].employer);
	 	var formattedworktitle=HTMLworkTitle.replace("%data%",work.jobs[items].title);
	 	var formattedworkdates=HTMLworkDates.replace("%data%",work.jobs[items].dates);
	 	var formattedworklocation=HTMLworkLocation.replace("%data%",work.jobs[items].location);
	 	var formatteddescription=HTMLworkDescription.replace("%data%",work.jobs[items].description);
	 	var formattedfull= formattedworkemployer + formattedworktitle;
	 	$(".work-entry:last").append(formattedfull + formattedworkdates + formattedworklocation + formatteddescription);
	}
}
 var education=
 {
 	"college":
 	[
 		{
 			"name": "VIT",
 			"degree": "MCA",
 			"dates": "July 2012 - May 2015",
 			"location": "Vellore",
 			"major": ["Software Testing","Open source Programming"]
 		},
 		{
 			"name": "VIT",
 			"degree": "BCA",
 			"dates": "July 2009 - May 2012",
 			"location": "Vellore",
 			"major": ["C","C++"]
 		}
 	],
 	"onlineCourses":
 	[
 		{
 			"title":"Front-End Developer NanoDegree",
 			"school": "Udacity",
 			"dates": "Dec 2016 - June 2017",
 			"url": "www.udacity.com"
 		}
 	]
 }
 education.display=function()
 {
 	$("#education").append(HTMLschoolStart);
	for(var items=0;items<education.college.length;items++)
	{
		var formattedschoolname=HTMLschoolName.replace("%data%",education.college[items].name);
		var formattedsschooldegree=HTMLschoolDegree.replace("%data%",education.college[items].degree);
		var formattedschooldates=HTMLschoolDates.replace("%data%",education.college[items].dates);
		var formattedschoolocation=HTMLschoolLocation.replace("%data%",education.college[items].location);
		var formattedschoolmajor=HTMLschoolMajor.replace("%data%",education.college[items].major);
		$(".education-entry").append(formattedschoolname + formattedsschooldegree + formattedschooldates + formattedschoolocation + formattedschoolmajor);
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for(var items=0;items<education.onlineCourses.length;items++)
	{
		var formattedonlinetitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[items].title);
		var formattedonlineschool=HTMLonlineSchool.replace("%data%",education.onlineCourses[items].school);
		var formattedonlinedates=HTMLonlineDates.replace("%data%",education.onlineCourses[items].dates);
		var formattedonlineurl=HTMLonlineURL.replace("%data%",education.onlineCourses[items].url);
		var assignclass=formattedonlinetitle + formattedonlineschool + formattedonlinedates + formattedonlineurl;
		$(".education-entry:last").append(assignclass);
	}
 }
 education.display();
 var projects=
 {
 	"project":
 	[
	 	{
	 		"title":"Badminton",
	 		"duration":2015,
	 		"description":"TO make an Badminton highlights automatically",
	 		"image":["images/Project1.png","images/project2.jpg"]
 		}
 	]
 }
 projects.display=function()
 {
 	$("#projects").append(HTMLprojectStart);
 	for(var items=0;items<projects.project.length;items++)
 	{
	 	var formattedprojecttitle=HTMLprojectTitle.replace("%data%",projects.project[items].title);
	 	var formattedprojectduration=HTMLprojectDates.replace("%data%",projects.project[items].duration);
	 	var formattedprojectdescription=HTMLprojectDescription.replace("%data%",projects.project[items].description);
	 	$(".project-entry").append(formattedprojecttitle + formattedprojectduration + formattedprojectdescription);
	 	for(var i=0;i<projects.project[items].image.length;i++)
	 	{
	 		var formattedimg=HTMLprojectImage.replace("%data%",projects.project[items].image[i]);
	 		$(".project-entry").append(formattedimg);
	 	}
 	}

}
work.display();
projects.display();
function inName(name)
{
	var len=name.length;
	var x=name.split(" ");
	x[1].toUpperCase();
	x=x.join(" ");
	var fullname=x[0].toLowerCase()+x.slice(1,len);
}
$("#mapDiv").append(googleMap);