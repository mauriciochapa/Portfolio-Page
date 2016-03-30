var work = {
	"jobs" : [
		{
			"employer": "Meltwater",
			"title": "Key Account Manager",
			"location": "Montreal, QC",
			"dates": "March 2014 - Present",
			"description": "• Top 3 Account Manager for North America in Q4 2015, achieved by growing my portfolio by 40% year-over-year <br>• Manage a portfolio of over 2M USD, composed of 75+ clients<br> • Responsible for finding upsell opportunities, preparing and presenting technical solutions and demos to clients <br> • Negotiate contract renewals with the goal of increasing market share and portfolio size, all while focusing on long term relationships" 
		},
		{
			"employer": "Randstad",
			"title": "Staffing Consultant",
			"location": "Toronto, ON",
			"dates": "September 2013 - March 2014",
			"description": "• Prospect for new clients through cold calling and customized service presentations<br>• Adapt our various services to our clients changing needs in order to reflect their industries’ reality <br>• Gained exclusivity on several major accounts by gaining our clients’ trust through consistent results"
		}
	]
}

var projects = {
	"project" : [
		{
			"title": "P1 Mokup to Article",
			"dates": "March 2016",
			"description": "Translate a muckup to HTML.",
			"image" : ["images/p1pic1.jpg"]
		},
		{
			"title": "P2 Building a Portfolio Site",
			"dates": "March 2016",
			"description": "Replicate a design mockup in HTML and CSS. Develop a responsive website that will display images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree.",
			"image" : ["images/p2pic1.jpg", "images/p2pic2.jpg"]
		}
	]
}

var bio = {
	"name" : "Mauricio Chapa",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "514-795-1306", 
		"email" : "mauriciogzzch@gmail.com",
		"github" : "mauriciochapa",
		"location" : "Montreal, QC", 
		"blog" : "mauriciochapa"
	},
	"bioPic" : "images/profile_pic.jpg",
	"welcomeMessage" : "Mauricio is a Key Account Manager at a software company in Montreal.",
	"skills" : [
		"HTML5", "JS", "CSS3", "PHP", "MySQL", "Bootstrap"
		]
}

var education = {
	"schools" : [
		{
			"name": "McGill University",
			"location": "Montreal, Canada",
			"degree": "BA",
			"major": "Economics & Philosophy",
			"dates": "2010-2013",
			"url": "http://www.mcgill.ca"
		}
	],
	"onlineCourses" : [ 
			{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "March 2016 - Present",
			"url": "http://www.udacity.com/nanodegree"
			}
		]
}

work.display = function(){
		for (job in work.jobs) { 
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
}

work.display();

projects.display = function(){
	for (project in projects.project) { 
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append(formattedDescription);
			for (image in projects.project[project].image) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].image[image]);
				$(".project-entry:last").append(formattedImage);		
		}
	}	
};

projects.display();

bio.display = function(){	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#footerContacts").append(formattedBlog);
	var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedContact);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMessage);
	if(bio.skills.length > 0 ){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",  education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",  education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%",  education.schools[school].url);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation); 
        $(".education-entry:last").append(formattedMajor); 
        $(".education-entry:last").append(formattedSchoolURL);
    }
    for (var course in education.onlineCourses) {
    	$("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education["onlineCourses"][course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};


education.display();

$("#mapDiv").append(googleMap);