# React Portfolio

![License Badge](https://img.shields.io/badge/License-MIT-blue)  
[Deployed Application](https://atmason90.github.io/portfolio-react/)  
[GitHub Repository](https://github.com/atmason90/portfolio-react)

## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Code Examples](#code-examples)
- [Technologies Used](#core-technologies-used)
- [Questions](#questions)
- [License](#license)

## Description

The purpose of this project was to create a professional portfolio using React as the core technology used. This application features sections for Home, About Me, Projects, Resume, and Contact information. Tailwindcss was used to give this application custom and unique styling.

## Screenshot

## Code Examples

This example shows each of my components being imported and used in my App.js file

```jsx
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
```

This example shows how I built out my navbar menu and used the react-scroll package to give my page it's smooth scrolling navigation feature.

```jsx
<ul className="hidden sm:flex">
  <li className="hover:text-[#ff66c4]">
    <Link to="home" smooth={true} duration={500}>
      Home
    </Link>
  </li>
  <li className="hover:text-[#ff66c4]">
    <Link to="about" smooth={true} duration={500}>
      About Me
    </Link>
  </li>
  <li className="hover:text-[#ff66c4]">
    <Link to="resume" smooth={true} duration={500}>
      Resume
    </Link>
  </li>
  <li className="hover:text-[#ff66c4]">
    <Link to="projects" smooth={true} duration={500}>
      Projects
    </Link>
  </li>
  <li className="hover:text-[#ff66c4]">
    <Link to="contact" smooth={true} duration={500}>
      Contact
    </Link>
  </li>
</ul>
```

## Technologies Used

![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
![CSS Badge](https://img.shields.io/badge/Language-CSS-blue)
![Tailwind CSS badge](https://img.shields.io/badge/Framework-TailwindCSS-green)
![React badge](https://img.shields.io/badge/Frontend-React-informational)
![react-scroll Badge](https://img.shields.io/badge/NPM-ReactScroll-red)
![getform Badge](https://img.shields.io/badge/Forms-GetForm-yellowgreen)

## Questions

If you have any questions regarding this project, please reach out to me via email at [atmason90@gmail.com](mailto:atmason90@gmail.com).

You can view my other projects on GitHub by visiting my [profile](https://github.com/atmason90).

## License

MIT License

Copyright (c) 2022 Andrew Mason

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
