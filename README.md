# Software Developer Portfolio⚡️ [![GitHub](https://img.shields.io/github/license/invincibleelf/portfolio-react?color=blue)](https://github.com/invincibleelf/portfolio-react/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/invincibleelf/portfolio-react)](https://github.com/invincibleelf/portfolio-react/stargazers)

An Elegant and Responsive portfolio template for developers. Just change file src/portfolio.js with your personal details to get your own portfolio.

## Portfolio Sections
✔️ Introduction\
✔️ Skills\
✔️ Work Experience\
✔️ Projects\
✔️ Education\
✔️ Certifications\
✔️ Contact me\

To view a demo example, **[click here](https://sharadshrestha.netlify.app/)**.

## Customise sections as needed
#### Modify`/src/portfolio.js` to obtain personalised content as per your need. You will also need to modify index.html to change the metadata to reflect the title you want for your personal portfolio.
```javascript
/* Change this file to get your Personal Porfolio */

const introduction = {
    name: "Sharad Shrestha",
    title: "Hi, I am Sharad",
    summary: `I'm a web designer / software developer based in Melbourne, Australia, with a passion of 
    developing innovative programs and applying technical expertise to ensure
    production and delivery of products and services that meets the client requirements. With high achievements during 
    mu university and excellent professional experience, I have strong technical skills and programming knowledge.`,
    resume: `https://drive.google.com/file/d/14fEW_kxCRbRs9kcTsHw8asPUQpcJNQ2C/view?usp=sharing`
};

const socialMedia = {
    twitter: "https://twitter.com/invinciblelf",
    github: "https://github.com/invincibleelf",
    linkedin: "https://www.linkedin.com/in/sharad-shrestha-0182b2aa/",
    stackOverflow: "https://stackoverflow.com/users/3425569/invincibleelf",
    gmail: "invinciblesharad@gmail.com",
};

const whatCanIDo = {
    title: "What Can I Do",
    //TODO Change contents
    summary: `Full stack developer keen to expore latest technologies`,
    list: [
        `Write and maintain program code to meet system requirements, system
        designs and technical specifications in accordance with quality standards`,
        `Develop highly interactive user interfaces and APIs for web applications`,
        `Host applicaiton and services to the cloud platform`
    ]

};


const skills = { .... }

const experiences = { .... }

const projects = { .... }

const otherprojects = { .... }

```
## Deployment
You can deploy project as Github pages or at Netlify. Pleae read through [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) and [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify) docs for React. 

## Technologies Used 

- [React](https://reactjs.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Pencil](https://pencil.evolus.vn/wiki/devguide/Introduction.html) to design wire frames 
