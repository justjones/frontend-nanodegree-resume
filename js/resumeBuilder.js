/*var name = "Lori Jones";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
var bio = {
	"name" : "Lori Jones",
	"role" : "Front End Web developer",
	"contacts" : {
		"mobile" : "941-462-0683",
		"email" : "firstdiem@gmail.com",
		"github" : "justjones",
		"twitter" : "@justjonesweb",
		"location" : "Chattanooga"
	},
	"welcomeMessage" : "Hello, I am a Web Developer from Chattanooga, TN",
	"skills" : ["Javascript", "CSS", "HTML", "Graphic Design", "jQuery"],
	"bioPic" : "images/me.jpg"
}

function displayBio(){

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	/*var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);*/
		$("#header").append(formattedPicture);
		/*$("#header").append(formattedWelcomeMsg);*/

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		if(bio.skills){
			$("#header").append(HTMLskillsStart);
			for(i in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}

}

displayBio();



var education = {
	"schools" : [
		{
			"name" : "University of Phoenix",
			"location" : "Pheonix, AZ, US",
			"degree" : "BS",
			"majors" : ["Information Technology And Communication"],
			"dates" : "2009-2011",
			"url" : "http://phoenix.edu"
		},
		{	"name" : "Univertiy College of Denver",
			"location" : "Denver, CO, US",
			"degree" : "Masters",
			"majors" : ["Web Development"],
			"dates" : "2014-2016",
			"url" : "http://du.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Development Nano Degree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://udacity.com"
		},
		{
			"title" : "Wireframing With HTML5 & CSS3",
			"school" : "Udemy",
			"date" : "2014",			
			"url" : "http://udemy.com"
		}
	]
}

function displayEducation(){
	for (school in education.schools){
		//create new div for schools
		$("#education").append(HTMLschoolStart);
		//concat school and title
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolTitle);
	}
}
displayEducation();

var work = {
	"jobs": [
		{
			"employer" : "Amazon",
			"title" : "Packer",
			"location" : "Chattnooga, TN",
			"dates" : "2014-current",
			"description" : "Inspecting and preparing products for shipment."
		},
		{
			"employer" : "Manatee Memorial Hospital",
			"title" : "IS Helpdesk Support",
			"location" : "Bradenton, FL",
			"dates" : "2013 - 2014",
			"description" : "Assist end users with software and hardware"
		},
		{
			"employer" : "Gould and Lamb",
			"title" : "Cost Analyst",
			"location" : "Bradenton, FL",
			"dates" : "2006-2012",
			"description" : "Create cost of care over life expectancy of cliamant"
		}
	]
}
function displayWork(){
for (job in work.jobs){
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;    
    $(".work-entry:last").append(formattedEmployerTitle);

    //format employment dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    //format job description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    
	}
}
displayWork();

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2015",
			"description" : "Shankle venison kevin pancetta. Beef picanha cupim pork kielbasa bresaola tenderloin andouille shoulder capicola sausage ham pork belly short loin. Jerky turducken porchetta, boudin shankle flank spare ribs. T-bone doner jerky pig strip steak frankfurter ham hock ground round, cow brisket tri-tip. Hamburger flank corned beef chuck, ham hock tenderloin leberkas pork belly biltong. Ribeye jowl meatball tri-tip.",
			"images" : ["https://images should go here"]
		}
	]
}



/*function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));*/

var charEscape = function(_html){
	var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");

	return newHTML;
};
$("#mapDiv").append(googleMap);