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

      let codeLink = this.createElementWithClass('a', 'project__tile-links');
      codeLink = this.setAttributes(codeLink, { 'href': node.githubLink });
      codeLink = this.addChildren(codeLink, this.createElementWithClass('i', 'fab fa-github'));

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
window.onresize = () => {
  // Move slider
  slider.move();
}

const sections = Array.from(document.querySelectorAll('section')).reverse();
const navLinks = document.querySelectorAll('.nav__link');
window.onscroll = () => {
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
}

const nodes = document
  .querySelectorAll('.projects__filters-list li')
  .forEach((n, index) => {
    n.addEventListener('click', () => {
      slider.move(index)
      projects.filter(n.innerText)
    });
  });