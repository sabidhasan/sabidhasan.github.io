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

