// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ffc107, #fd7e14, #28a745, #007bff, #6f42c1, #6610f2",
  firstName: "Eglis",
  middleName: "",
  lastName: "Dogjani",
<<<<<<< HEAD
  message: "M E R N Stack Developer who likes cofee and code",
=======
  message: "Full Stack Developer who turns cofee into code",
>>>>>>> parent of 6536d457 (optimal Updates)
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Eglis-dogjani",
    },
    {
      image: "fa-linkedin",
      url: "https://linkedin.com/in/eglis-dogjani-de",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/egli_d7",
    },
    {
      image: "fa-superpowers",
      url: "#",
    },
    {
      image: "fa-snapchat",
      url: "https://snapchat.com/t/pPW1UHBW",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ed.jpg"),
<<<<<<< HEAD
  imageSize: 399,
=======
  imageSize: 299,
>>>>>>> parent of 6536d457 (optimal Updates)
  message:
    "Motivated student with a strong academic background and passion for Business Development and Technology. Eager to apply theoretical knowledge gained through coursework to real-world challenges. Seeking an entry-level position to gain hands-on experience and contribute positively to a dynamic team environment while continuing to learn and grow.",
  resume: "#",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Eglis-dogjani", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/eglisdogjani.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/eglisdogjani.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 65 },
    { name: "Java", value: 60 },
    { name: "Python", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "jQuery", value: 75 },
    { name: "Photoshop", value: 75 },
    { name: "Object Oriented Programming", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 85 },

  ],
  softSkills: [
    { name: "Communication", value: 75 },
    { name: "Adaptability", value: 80 },
    { name: "Creativity", value: 85 },
    { name: "Problem solving", value: 90 },
    { name: "Time management", value: 85 },
    { name: "Collaboration", value: 75 },
    { name: "Teamwork", value: 75 },
    { name: "Curiosity", value: 85 },
    { name: "Results-Oriented", value: 90 },
    { name: "Leadership", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Development or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "eglisdogjani@gmail.com",
};



const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
