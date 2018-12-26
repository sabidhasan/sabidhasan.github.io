const data = [
  {
    title: 'AP Computer Science Principles cs50x',
    url: 'https://www.edx.org/course/cs50s-apr-computer-science-principles-harvardx-cs50-ap',
    institution: 'Harvard (edX)',
    date: 'Oct 2017',
    description: `Introductory course to comp sci and programming, taught by professor David J. Malan. CS50x covers algorithms, data structures, encapsulation, resource management, and software engineering in C, Python, SQL, and JavaScript.`,
    image: 'images/projects/icon-harvard.png'
  },
  {
    title: 'FreeCodeCamp Front End Certification',
    url: 'https://learn.freecodecamp.org/',
    institution: 'FreeCodeCamp',
    date: 'Dec 2017',
    description: `FreeCodeCamp is a non-profit that consists of an interactive learning
    platform and online community that teaches HTML, CSS and Javascript.`,
    image: 'images/projects/icon-fcc.png'
  },
  // {
  //   title: 'FreeCodeCamp Javascript Algorithms and Data Structures',
  //   url: 'https://learn.freecodecamp.org/',
  //   institution: 'FreeCodeCamp',
  //   date: 'Oct 2018',
  //   description: `FCC helps people learn to code for free.`,
  //   image: 'images/projects/icon-fcc.png'
  // },
  {
    title: 'Udacity Google Web Accessibility',
    url: 'https://eu.udacity.com/course/web-accessibility--ud891',
    institution: 'Google (Udacity)',
    date: 'Jul 2018',
    description: `Covers how to build an accessible webpage, including screen readers,
    managing input focus, semantics, ARIA and accessible styling.`,
    image: 'images/projects/icon-google.png'
  },
  {
    title: 'Microsoft DEV281x: Introduction to ReactJS',
    url: 'https://www.edx.org/course/introduction-to-reactjs-2',
    institution: 'Microsoft (edX)',
    date: 'Oct 2018',
    description: `Overview of React, including JSX, components, state, lifecycle and lists/forms`,
    image: 'images/projects/icon-microsoft.png'
  },
  {
    title: 'M220JS - MongoDB for Javascript Developers',
    url: 'https://university.mongodb.com/courses/M220JS',
    institution: 'MongoDB',
    date: 'Sep 2018',
    description: 'Overview of MongoDB - from the document model, query language, clustering, aggregation and more',
    image: 'images/projects/icon-mongo.png'
  },
  {
    title: 'Colt Steele Web Developer Bootcamp',
    url: 'https://www.udemy.com/the-web-developer-bootcamp/',
    institution: 'Udemy',
    date: 'Jun 2018',
    description: 'Modern web development, including HTML5, CSS3, jQuery, NodeJS, Express, and MongoDB. This is the most taken course on web development on Udacity.',
    image: 'images/projects/icon-udemy.png'
  },
  {
    title: 'Agile Software Development',
    url: 'https://www.edx.org/course/agile-software-development',
    institution: 'ETH Zurich (edX)',
    date: 'Nov 2017',
    description: `Covers fundamental Agile concepts, from the manifesto to principles, roles and practices`,
    image: 'images/projects/icon-eth.png'
  },
];
const projectData = [
  {
    img: '',
    title: 'YelpCamp',
    text: '⛺ Discover campgrounds and RVing sites from across Canada 🍁',
    longText: `Full stack project for discovering and reviewing campgrounds from across
      Canada. Fully responsive, ARIA-compliant page featuring user auth and tested code.`,
    deployLink: '',
    githubLink: '',
    techStack: ['html', 'css', 'react', 'node', 'mongodb', 'responsive', 'firebase'],
    tags: ['SHOWCASE', 'FULLSTACK']
  },
  {
    img: '',
    title: 'NistPy',
    text: '🔬 Python module for interfacing with NIST Webbook (a chemistry resource)',
    longText: `Class for interfacing with NIST Webbook. Uses numpy, pandas
      and matplotlib for manipulating chemical data in a Pythonic manner. Uses requests,
      regex, and object oriented design.`,
    deployLink: '',
    githubLink: '',
    techStack: ['python'],
    tags: ['SHOWCASE', 'CHEMISTRY']
  },
  {
    img: '',
    title: 'VATSee',
    text: '🔍 Spy into the world of Vatsim',
    longText: `VATSIM is a non-profit that runs a flight-simulation network.
    VATSee displays a live view into VatSim. Backend features memoization and SQLite database`,
    deployLink: '',
    githubLink: '',
    techStack: ['python', 'flask', 'jquery', 'css', 'html', 'sql', 'bootstrap'],
    tags: ['SHOWCASE', 'FULLSTACK']
  },
  {
    img: '',
    title: 'Textrise',
    text: '📺 Textrise displays at-a-glance information in elevators',
    longText: `Work in progress: Built a free, no-advertisement, and stable elevator
    informational system, with a public API for writing custom widgets. Intended for 
    showing messages, weather, traffic, etc.`,
    deployLink: '',
    githubLink: '',
    techStack: ['typescript', 'vue', 'html', 'css', 'node'],
    tags: ['FULLSTACK']
  },
  {
    img: '',
    title: 'Goalstep',
    text: '☑️ Goalstep is goal tracking for nerds!',
    longText: `Helped with writing MVP for goal tracking software. A cross between a
      to-do list and full-fledged project management software. Features user auth,
      sign up and sharing tasks. CLOSED SOURCE.`,
    deployLink: null,
    githubLink: null,
    techStack: ['react', 'html', 'css', 'typescript', 'node', 'sql'],
    tags: ['FULLSTACK']
  },
  {
    img: '',
    title: 'METAR-Parser',
    text: '✈️ Parses aviation meteorological reports into 👨‍👩‍👧‍👦-friendly format',
    longText: `Responsive, friendly website for parsing aviation weather data.
      Handles incomplete data, worldwide airport codes and unit systems (meters/feet).`,
    deployLink: '',
    githubLink: '',
    techStack: ['html', 'css', 'javascript', 'responsive'],
    tags: ['FRONTEND']
  },
  {
    img: '',
    title: 'Old School Calculator',
    text: 'Simple LED calculator simulator, which supports basic arithmetic',
    longText: `Made as a part of FreeCodeCamp, basic calculator`,
    deployLink: '',
    githubLink: '',
    techStack: ['html', 'css', 'javascript', 'responsive', 'jquery'],
    tags: ['FRONTEND']
  },
  {
    img: '',
    title: 'Tic Tac Toe',
    text: 'Unbeatable tic tac toe game',
    longText: `Beaufiful tic tac toe game, that offers custom symbols, and three levels
      of difficulty (the highest is unbeatable, where the computer plays perfectly).`,
    deployLink: '',
    githubLink: '',
    techStack: ['html', 'scss', 'javascript'],
    tags: ['FRONTEND']
  },
  {
    img: '',
    title: 'Simon Game',
    text: 'Recreation of the classic Simon Says game',
    longText: `Features sound and buttons of the classic simon game from the 1980s.
      Strict mode available.`,
    deployLink: '',
    githubLink: '',
    techStack: ['html', 'scss', 'javascript', 'jquery'],
    tags: ['FRONTEND']
  },
  {
    img: '',
    title: 'Catch Of The Day',
    text: 'A front end for a ficticious React store that sells fish.',
    longText: `Created as a part of Wesbos React course, Catch of the Day is a 
      fish that features inventory control and support for multiple stores.`,
    deployLink: '',
    githubLink: '',
    techStack: ['gulp', 'css', 'javascript', 'react'],
    tags: []
  },
  {
    img: '',
    title: 'parsemol.js',
    text: 'Molecular formula parser for Javascript',
    longText: `Created for (defunct) cBase project, this class allows parsing and validation
      of complex, nested chemical formulae.`,
    deployLink: '',
    githubLink: '',
    techStack: ['javascript'],
    tags: ['CHEMISTRY']
  },
  {
    img: '',
    title: 'ChemScripts',
    text: 'Scripts for chemists, written by a chemist.',
    longText: `Scripts for aiding the medicinal chemist working with Dotmatics software.
      Tools for CNS Multiparameter Optimization, pKa, lipE, clogP, ligand efficiency,
      finding duplicates, and more.`,
    deployLink: '',
    githubLink: '',
    techStack: ['python'],
    tags: ['CHEMISTRY']
  },
  {
    img: '',
    title: 'Restful-Vatsim',
    text: 'RESTful service for accessing Vatsim data',
    longText: `RESTful API for serving live Vatsim data from the Vatsim flight sim network.
      Supports caching/memoization to reduce server load.`,
    deployLink: '',
    githubLink: '',
    techStack: ['python'],
    tags: ['FULLSTACK']
  },
]

function addCurrentYearToNode(element = '') {
  const domNode = document.querySelector(element);
  if (domNode) domNode.innerText = new Date().getFullYear();
}

class DomNodeCreator {
  createElementWithClass(elementType, cssClass = '') {
    const element = document.createElement(elementType);
    element.className = cssClass;
    return element;
  };

  createText(text) {
    return document.createTextNode(text);
  }

  addChildren(parentElement, childrenNodes) {
    if (!Array.isArray(childrenNodes)) {
      childrenNodes = [childrenNodes];
    };
    childrenNodes.forEach(node => {
      parentElement.appendChild(node);
    });
    return parentElement;
  }

  setAttributes(element, attributesObject) {
    for (let item in attributesObject) {
      element.setAttribute(item, attributesObject[item]);
    }
    return element;
  }
}
////////////
// COURSES//
////////////

class Courses extends DomNodeCreator {
  constructor() {
    super();
    return data.map(course => {
      const title = this.makeTitleElement(course);
      const institution = this.makeInstitutionElement(course.institution);
      const date = this.makeDateElement(course.date);
      const text = this.makeCardElement(course.description);

      return this.addChildren(this.createElementWithClass('div', 'courses__card'), [title, institution, date, text]);
      });
  }

  makeTitleElement({ title, image, institution, url }) {
    const name = this.addChildren(this.createElementWithClass('span'), this.createText(title));
    const attributes = { 'src': image, 'alt': institution }
    const img = this.setAttributes(this.createElementWithClass('img', 'courses__img'), attributes);

    const link = this.setAttributes(this.createElementWithClass('a', 'courses__card-title'), { 'href': url });
    const header = this.addChildren(link, this.createElementWithClass('h1', 'courses__card-title'));
    return this.addChildren(header, [name, img]);
  }

  makeInstitutionElement(institution) {
    const institutionElem = this.createElementWithClass('span', 'courses__card-institution');
    return this.addChildren(institutionElem, this.createText(institution));
  }

  makeDateElement(date) {
    const dateElem = this.createElementWithClass('span', 'courses__card-date');
    return this.addChildren(dateElem, this.createText(date));
  }

  makeCardElement(description) {
    const textElem = this.createElementWithClass('span', 'courses__card-text');
    return this.addChildren(textElem, this.createText(description));
  }
}

//////////////
// PROJECTS //
//////////////
class Projects extends DomNodeCreator {
  constructor() {
    super();
    this.filteredResults = projectData;
    this.DOMNodes = [];

    this.makeDOMNodes();
    this.attachDOMNodes();
  }

  attachDOMNodes() {
    const parentElem = document.querySelector('.projects__tile-container');
    this.DOMNodes.forEach(val => {
      parentElem.appendChild(val);
      val.addEventListener('click', () => {
        val.classList.toggle('projects__tile-flipped');
      });
    });

  }

  makeDOMNodes() {
    this.DOMNodes = this.filteredResults.map(node => {

      const attributes = { 'src': node.img, 'alt': node.title, }
      const screenshot = this.setAttributes(this.createElementWithClass('img', 'courses__img'), attributes);

      let title = this.createElementWithClass('h1', 'projects__tile-title');
      title = this.addChildren(title, this.createText(node.title));

      let shortText = this.createElementWithClass('p', 'projects__tile-text');
      shortText = this.addChildren(shortText, this.createText(node.text));

      let front = this.createElementWithClass('div', 'projects__tile-front');
      front = this.addChildren(front, [title, screenshot, shortText])

      // BACK
      let backTitle = this.createElementWithClass('h1', 'projects__tile-title');
      backTitle = this.addChildren(backTitle, this.createText(node.title));

      let longSummary = this.createElementWithClass('p', 'projects__tile-text');
      longSummary = this.addChildren(longSummary, this.createText(node.longText));

      let codeLink = this.createElementWithClass('a', 'project__tile-links');
      codeLink = this.setAttributes(codeLink, { 'href': node.githubLink });
      codeLink = this.addChildren(codeLink, this.createElementWithClass('i', 'fas fa-external-link-alt'));

      let deployLink = this.createElementWithClass('a', 'project__tile-links');
      deployLink = this.setAttributes(deployLink, { 'href': node.deployLink });
      deployLink = this.addChildren(deployLink, this.createElementWithClass('i', 'fab fa-github'));

      let techStack = this.createElementWithClass('ul', 'projects__tile-icons');
      node.techStack.forEach(tech => {
        const techElement = this.addChildren(this.createElementWithClass('li'), this.createText(tech));
        techStack = this.addChildren(techStack, techElement);
      })

      let back = this.createElementWithClass('div', 'projects__tile-back');
      back = this.addChildren(back, [backTitle, longSummary, techStack, codeLink, deployLink])

      const projectTile = this.createElementWithClass('div', 'projects__tile');
      return this.addChildren(projectTile, [front, back]);
    })
  }

  filter(type) {
    if (!type) {
      this.filteredResults = projectData;
    } else {
      this.filteredResults = projectData.filter(project => project.techStack.includes(type));
    }
  }
}

////////////
// SLIDER //
////////////
class Slider {
  constructor(slider = '', list = '') {
    this.slider = document.querySelector(slider);
    this.nodes = Array.from(document.querySelectorAll(list));
    this.selectedPosition = 0;
    // Move to initial position
    this.move();
  }

  move(position = this.selectedPosition) {
    this.selectedPosition = position;
    // Find pos'th node, and set left of element
    this.slider.style.width = `${this.nodes[position].offsetWidth}px`;
    this.slider.style.left = `${this.nodes[position].offsetLeft}px`;
    // add ARIA labelling
    this.slider.setAttribute('aria-valuenow', (position + 1).toString());
    this.slider.setAttribute('aria-valuetext', this.nodes[position].textContent);    
  }
}

// PROJECTS
new Projects();
// COURSES STUFF
const coursesContainer = document.querySelector('.courses__container');
const courses = new Courses();
courses.forEach(course => coursesContainer.appendChild(course));
// SLIDER STUFF
const slider = new Slider('.projects__slider', '.projects__filters-list li');
// ADD YEAR TO FOOTER
addCurrentYearToNode('.footer__copyright-year');
// EVENT LISTENERS
window.onresize = () => {
  slider.move();
}
const nodes = document
  .querySelectorAll('.projects__filters-list li')
  .forEach((n, index) => {
    n.addEventListener('click', () => slider.move(index));
  });