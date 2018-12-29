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
    img: '/images/projects/project-yelpcamp.gif',
    title: 'YelpCamp',
    text: '⛺ Discover campgrounds and RVing sites from across Canada 🍁',
    longText: `Full stack project for discovering and reviewing campgrounds from across
      Canada. Fully responsive, ARIA-compliant page featuring user auth and tested code.`,
    deployLink: 'http://yelpycamp.herokuapp.com',
    githubLink: 'https://github.com/sabidhasan/yelp-camp',
    techStack: ['html', 'css', 'react', 'node', 'mongo', 'responsive', 'firebase'],
    tags: ['SHOWCASE', 'FULL STACK']
  },
  {
    img: '/images/projects/project-nistpy.gif',
    title: 'NistPy',
    text: '🔬 Python module for interfacing with NIST Webbook (a chemistry resource)',
    longText: `Class for interfacing with NIST Webbook. Uses numpy, pandas
      and matplotlib for manipulating chemical data in a Pythonic manner. Uses requests,
      regex, and object oriented design.`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/NistPy',
    techStack: ['python'],
    tags: ['SHOWCASE', 'CHEMISTRY']
  },
  {
    img: '/images/projects/project-vatsee.gif',
    title: 'VATSee',
    text: '🔍 Spy into the world of Vatsim',
    longText: `VATSIM is a non-profit that runs a flight-simulation network.
    VATSee displays a live view into VatSim. Backend features memoization and SQLite database`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/VATSee',
    techStack: ['python', 'flask', 'jquery', 'css', 'html', 'mysql', 'bootstrap'],
    tags: ['SHOWCASE', 'FULL STACK']
  },
  {
    img: '/images/projects/project-textrise.gif',
    title: 'Textrise',
    text: '📺 Textrise displays at-a-glance information in elevators (work-in-progress)',
    longText: `Work in progress: In a team of two, building a free, no-advertisement 
    elevator informational system, with a public API for writing custom widgets.
    Intended for showing messages, weather, traffic, etc.`,
    deployLink: null,
    githubLink: 'https://gitlab.com/abidhasan/textrise',
    techStack: ['ts', 'vue', 'html', 'css', 'node'],
    tags: ['FULL STACK']
  },
  {
    img: '/images/projects/project-goalstep.gif',
    title: 'Goalstep',
    text: '☑️ Goalstep is goal tracking for nerds (work-in-progress)!',
    longText: `Helped with writing MVP for goal tracking software (team of two).
    A cross between a to-do list and project management software. Features user auth,
      sign up and sharing tasks. CLOSED SOURCE.`,
    deployLink: null,
    githubLink: null,
    techStack: ['react', 'html', 'css', 'ts', 'node', 'mysql'],
    tags: ['FULL STACK']
  },
  {
    img: '/images/projects/project-metarparser.gif',
    title: 'METAR-Parser',
    text: '✈️ Parses aviation meteorological reports into 👨‍👩‍👧‍👦-friendly format',
    longText: `Responsive, friendly website for parsing aviation weather data.
      Handles incomplete data, worldwide airport codes and unit systems (meters/feet).`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/metar-parser',
    techStack: ['html', 'css', 'js', 'responsive'],
    tags: ['FRONT END']
  },
  {
    img: '/images/projects/project-calculator.gif',
    title: 'Old School Calculator',
    text: 'Simple LED calculator simulator, which supports basic arithmetic',
    longText: `Made as a part of FreeCodeCamp, basic calculator with support for arithmetic,
      memory recall and full keyboard support.`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/FreeCodeCamp',
    techStack: ['html', 'css', 'js', 'responsive', 'jquery'],
    tags: ['FRONT END']
  },
  {
    img: '/images/projects/project-tictactoe.gif',
    title: 'Tic Tac Toe',
    text: 'Unbeatable tic tac toe game',
    longText: `Beaufiful tic tac toe game, that offers custom symbols, and three levels
      of difficulty (the highest is unbeatable, where the computer plays perfectly).`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/FreeCodeCamp',
    techStack: ['html', 'sass', 'js'],
    tags: ['FRONT END']
  },
  {
    img: '/images/projects/project-simongame.gif',
    title: 'Simon Game',
    text: 'Recreation of the classic Simon Says game',
    longText: `Features the sounds and buttons of the classic Simon game from the 1980s.
      Also has Strict Mode, like the real game.`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/FreeCodeCamp',
    techStack: ['html', 'sass', 'js', 'jquery'],
    tags: ['FRONT END']
  },
  // {
  //   img: '',
  //   title: 'Catch Of The Day',
  //   text: 'A front end for a ficticious React store that sells fish.',
  //   longText: `Created as a part of Wesbos React course, Catch of the Day is a 
  //     fish that features inventory control and support for multiple stores.`,
  //   deployLink: '',
  //   githubLink: 'https://github.com/sabidhasan/catch-of-the-day',
  //   techStack: ['css', 'js', 'react'],
  //   tags: ['FRONT END']
  // },
  {
    img: '/images/projects/project-parsemol.gif',
    title: 'parsemol.js',
    text: 'Comprehensive molecular formula parser for Javascript',
    longText: `Created for my cBase project, this function allows parsing and validation
      of complex, nested chemical formulae.`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/chemical-formula',
    techStack: ['js'],
    tags: ['CHEMISTRY']
  },
  {
    img: '/images/projects/project-chemscripts.gif',
    title: 'ChemScripts',
    text: 'Scripts for chemists, written by a chemist.',
    longText: `Scripts for aiding the medicinal chemist working with Dotmatics software.
      Tools for CNS Multiparameter Optimization, pKa, lipE, clogP, ligand efficiency,
      finding duplicates, and more.`,
    deployLink: null,
    githubLink: 'https://github.com/sabidhasan/ChemScripts',
    techStack: ['python'],
    tags: ['CHEMISTRY']
  },
  // {
  //   img: '',
  //   title: 'Restful-Vatsim',
  //   text: 'RESTful service for accessing Vatsim data',
  //   longText: `RESTful API for serving live Vatsim data from the Vatsim flight sim network.
  //     Supports caching/memoization to reduce server load.`,
  //   deployLink: '',
  //   githubLink: 'https://github.com/sabidhasan/restful-vatsim',
  //   techStack: ['python'],
  //   tags: ['FULL STACK']
  // },
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
///////////
//COURSES//
///////////

class Courses extends DomNodeCreator {
  constructor() {
    super();
    return data.map(course => {
      const parentElement = this.createElementWithClass('div', 'courses__card');
      const title = this.makeTitleElement(course);
      const institution = this.makeInstitutionElement(course.institution);
      const date = this.makeDateElement(course.date);
      const text = this.makeCardElement(course.description);
      
      let button = this.createElementWithClass('button', 'courses__card-button');
      button = this.addChildren(button, this.createText('Show Course Description'));
      button.addEventListener('click', () => parentElement.classList.add('courses__card-expanded'));
      
      return this.addChildren(parentElement, [title, institution, date, text, button]);
      });
  }

  makeTitleElement({ title, image, institution, url }) {
    const name = this.addChildren(this.createElementWithClass('span'), this.createText(title));
    const attributes = { 'src': image, 'alt': institution }
    const img = this.setAttributes(this.createElementWithClass('img', 'courses__img'), attributes);

    const link = this.setAttributes(this.createElementWithClass('a', 'courses__card-title'), { 'href': url });
    return this.addChildren(link, [name, img]);
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
  constructor(data) {
    super();
    this.DOMNodes = this.makeDOMNodes(data);
    this.attachDOMNodes();
  }

  attachDOMNodes() {
    const parentElem = document.querySelector('.projects__tile-container');
    this.DOMNodes.forEach(val => {
      parentElem.appendChild(val);
      const flipButton = val.querySelector('.projects__tile-button');
      flipButton.addEventListener('click', function () {
        val.classList.toggle('projects__tile-flipped');
        this.classList.toggle('projects__tile-button-flipped');
        this.innerText = this.innerText === '...' ? 'X' : '...';
      });
    });

  }

  makeDOMNodes(data) {
    return data.map(node => {
      const attributes = { 'src': node.img, 'alt': node.title, };
      const image = this.createElementWithClass('img', 'projects__tile-screenshot');
      const screenshot = this.setAttributes(image, attributes);

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

      let codeLink = this.createElementWithClass('a', `project__tile-links${!node.githubLink ? ' project__links-disabled' : ''}`);
      const codeLinkAttributes = { 'href': node.githubLink || '#', 'aria-disabled': (!node.githubLink).toString() };
      codeLink = this.setAttributes(codeLink, codeLinkAttributes);
      codeLink = this.addChildren(codeLink, this.createElementWithClass('i', 'fas fa-external-link-alt'));

      let deployLink = this.createElementWithClass('a', `project__tile-links${!node.deployLink ? ' project__links-disabled' : ''}`);
      const linkAttributes = { 'href': node.deployLink || '#', 'aria-disabled': (!node.deployLink).toString() };
      deployLink = this.setAttributes(deployLink, linkAttributes);
      deployLink = this.addChildren(deployLink, this.createElementWithClass('i', 'fas fa-external-link-alt'));

      let techStack = this.createElementWithClass('ul', 'projects__tile-icons');
      node.techStack.forEach(techString => {
        let techIcon = this.createElementWithClass('img', 'projects__tile-img');
        techIcon = this.setAttributes(techIcon, { 'src': `/images/tech/tech-${techString}.png`, alt: ''});
        const techElement = this.addChildren(this.createElementWithClass('li'), techIcon);
        techStack = this.addChildren(techStack, techElement);
      })

      let back = this.createElementWithClass('div', 'projects__tile-back');
      back = this.addChildren(back, [backTitle, longSummary, techStack, codeLink, deployLink])

      // Button
      let button = this.createElementWithClass('span', 'projects__tile-button');
      button = this.addChildren(button, this.createText('...'));
      button = this.setAttributes(button, { 'aria-label': 'Close details' });

      let projectTile = this.createElementWithClass('div', 'projects__tile');
      projectTile = this.setAttributes(projectTile, { 'data-type': node.tags.join(' ') })
      return this.addChildren(projectTile, [button, front, back]);
    });
  }

  filter(type) {
    this.DOMNodes.forEach(node => {
      // show if it needs to be shown
      if (!type || type == 'ALL' || node.dataset.type.includes(type)) {
        node.classList.remove('projects__tile-hidden');
      } else {
        node.classList.add('projects__tile-hidden');
      }
    });
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
    this.slider.style.top = `${this.nodes[position].offsetTop}px`;
    // add ARIA labelling
    this.slider.setAttribute('aria-valuenow', (position + 1).toString());
    this.slider.setAttribute('aria-valuetext', this.nodes[position].textContent);    
  }
}

// PROJECTS
const projects = new Projects(projectData);

// COURSES STUFF
const coursesContainer = document.querySelector('.courses__container');
const courses = new Courses();
courses.forEach(course => coursesContainer.appendChild(course));

// SLIDER STUFF
let slider = new Slider('.projects__slider', '.projects__filters-list li');

// ADD YEAR TO FOOTER
addCurrentYearToNode('.footer__copyright-year');

// EVENT LISTENERS
window.onresize = slider.move();

const sections = Array.from(document.querySelectorAll('section')).reverse();
const navLinks = document.querySelectorAll('.nav__link');
function updateNavScroll() {
  const foundSection = sections.findIndex((section, index) => (
    section.getBoundingClientRect().top < window.innerHeight / 1.5
  ));
  if (foundSection === -1) {
    navLinks.forEach(link => link.classList.remove('nav__link-selected'));
  } else {
    const indexToUpdate = sections.length - 1 - foundSection;
    navLinks.forEach((link, index) => {
      if (index === indexToUpdate) {
        link.classList.add('nav__link-selected');
      } else {
        link.classList.remove('nav__link-selected');
      }
    })
  }
};
window.onscroll = updateNavScroll;
window.onorientationchange = updateNavScroll;

const nodes = document
  .querySelectorAll('.projects__filters-list li')
  .forEach((n, index) => {
    n.addEventListener('click', () => {
      slider.move(index)
      projects.filter(n.innerText)
    });
  });