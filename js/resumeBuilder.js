/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Maggie Zhou");
var name1 = "Maggie Zhou";
var role = "Web Developer";

var bio = {
    name: "Maggie Zhou",
    role: "Web Developer",
    contacts: {
        mobile: "2145320250",
        email: "minzhou123@gmail.com",
        github: "maggiezh",
        location: "Plano, Texas"
    },
    welcomeMessage: "Welcome to my resume page!",
    skills: {
        SkillsAtGlance: [
            "SQL Server 2012", "ASP.NET MVC5", "AngularJS 1.6", "Entity Framework 4.0","C#",
            "SSRS", "CodeCloud-Git"
        ],
        DB_Management: [
            "SQL Server 2012", 
            "Microsoft SQL Server management studio",
            "ORACLE"
        ],
        Web: [
            "ASP.NET MVC5",
            "AngularJS 1.6",
            "Entity Framework 4.0",
            "AJAX",
            "HTML5",
            "JavaScript"
        ],
        Languages: [
            "C#", "T-SQL", "C/C++", "JQuery"
        ],
        Operating_System: [
            ".NET", "Windows XP", "Unix"
        ],
        Reporting_Tools: [
            "SSRS", "Report Builder 3.0"
        ],
        Version_Control: [
            "CodeCloud-Git", "Ankh-SVN"
        ]
    }
}

var work = {
    jobs: [
        {
            employer: "AT&T",
            title: "Developer",
            location: "Richardson, Texas",
            dateWorked: "04/2016 - current",
            description: [
                "Working on developing Contract Rerate web tool. This web platform pulls data from different billing systems and mechanizes the contract rerate process for Telco LEC circuits. My role is a web developer to develop web pages, add new functionalities to enhance the application. MVC 5, Angular JS, JavaScript and Node are heavily used in the development; GIT is used for version control."
            ]
        },
        {
            employer: "AT&T",
            title: "SR SPECIALIST-APPLICATIONS DEVELOPER ",
            location: "Richardson, Texas",
            dateWorked: "07/2013 - 03/2016",
            description: [ 
                "Designed and developed technical solution independently for Timely Feed of DTV Adjustments project, worked with application users to analyze business requirement, provided solutions and developed high level design, collaborated with business teams for testing;", 
                "Independently worked on BDS File Layout Change project, identified issues and proposed solutions, tracked project timeline, coordinated testing with IT and production support team;",
                "Worked extensively and independently on developing web tool to provide discounting process on AT&T telecommunication services for eligible schools and libraries (e-Rate program). Primary role is web developer using C#, ASP.NET, AJAX control toolkit, JQuery, CSS and Master Pages. Worked in Agile(Scrum) environment which includes short term goals, iterative development and daily stand-ups; SVN was used for version control;",                                                             
                "Designed, developed and implemented a full-scale reporting solution for issue tracking system using MS SQL Server 2008 and MS SSRS 2008. This web tool is used for issue management including submitting issues, tracking ongoing issues and reporting capabilities for AT&T internal clients. My role is to assemble and convert user requirements from multiple business clients and application users into standard reports, create multi parameterized reports in MS SSRS 2008, allowing users the ability to make selections before executing reports to provide user friendly interface. Worked on the backend of the application in SQL Server 2008 to write queries, views and stored procedures. MS Report viewer is used to display reports from web. Generated release documents to facilitate production deployment; Used SVN for version control;"
          ]          
        }
    ]
}

var projects = {
    projects: [
        {
            title: "CRC Web Tool",
            date: "2016",
            description: "Working on developing Contract Rerate web tool. This web platform pulls data from different billing systems and mechanizes the contract rerate process for Telco LEC circuits. My role is a web developer to develop web pages, add new functionalities to enhance the application. MVC 5, Angular JS, JavaScript and Node are heavily used in the development; GIT is used for version control."
        },
        {
            title: "DTV Adjustment Tool",
            date: "2013",
            description: "Designed and developed technical solution independently for Timely Feed of DTV Adjustments project, worked with application users to analyze business requirement, provided solutions and developed high level design, collaborated with business teams for testing;",
        },
        {
            title: "eRate Web Tool",
            date: "2013",
            description: "Worked extensively and independently on developing web tool to provide discounting process on AT&T telecommunication services for eligible schools and libraries (e-Rate program). Primary role is web developer using C#, ASP.NET, AJAX control toolkit, JQuery, CSS and Master Pages. Worked in Agile(Scrum) environment which includes short term goals, iterative development and daily stand-ups; SVN was used for version control",
        },
        {
            title: "FIT Issue Tracker Reporting System",
            date: "2013",
            description: "Designed, developed and implemented a full-scale reporting solution for issue tracking system using MS SQL Server 2008 and MS SSRS 2008. This web tool is used for issue management including submitting issues, tracking ongoing issues and reporting capabilities for AT&T internal clients. My role is to assemble and convert user requirements from multiple business clients and application users into standard reports, create multi parameterized reports in MS SSRS 2008, allowing users the ability to make selections before executing reports to provide user friendly interface. Worked on the backend of the application in SQL Server 2008 to write queries, views and stored procedures. MS Report viewer is used to display reports from web. Generated release documents to facilitate production deployment; Used SVN for version control",
        }
    ]
}

var education = {
    schools: [
        {
            name: "University of Texas at Dallas",
            location: "Richardson, Texas",
            degree: "M.S. in Information System",
            major: "Information System",
            dates: "2000"
        }
    ],
    onlineCourses: [
        {
            title: "",
            school: "",
            dates: "",
            url: ""
        }
    ]

}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


if(bio.skills != null) {
    displaySkills ();
}

if (work.jobs.length !== 0 ) {
    displayWork();
}

// if (projects.projects.length > 0) {
//     projects.display;
// }

// $("#main").append(internationalizeButton);
projects.display = function () {
    projects.projects.forEach(element => {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", element.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", element.date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
        $(".project-entry:last").append(formattedDescription);
    });
}

if (projects.projects.length > 0) {
    projects.display();
}

$("#mapDiv").append(googleMap);

function inName(name) {
    name = name.trim().split(" ");
    // var bioName = split(bio.name, " ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

function locationizer(work_obj){
    if (work_obj.jobs.length > 0)
    {
        var jobLocations = [];
        for (var key in work_obj.jobs) {
            var location = work_obj.jobs[key].location;
            jobLocations.push(location);
        }
        return jobLocations
    }//
}

function displaySkills () {
    $("#header").append(HTMLskillsStart);
    for (key in bio.skills.SkillsAtGlance) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills.SkillsAtGlance[key]);
         $("#skills").append( formattedSkills );
    }
}

function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for (key in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDateWorked = HTMLworkDates.replace("%data%", work.jobs[key].dateWorked);
        $(".work-entry:last").append(formattedDateWorked);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
        $(".work-entry:last").append(formattedWorkLocation);
        //var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
        var descriptions = work.jobs[key].description;
        for (i in descriptions){
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", descriptions[i]);
            $(".work-entry:last").append(formattedWorkDescription);
        }
       
    }
}
