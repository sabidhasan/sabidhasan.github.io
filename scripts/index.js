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