import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaAws } from 'react-icons/fa';
import { SiJavascript, SiDotNet, SiCsharp, SiMysql, SiMongodb } from 'react-icons/si';

const introduction = {
    name: "Sharad Shrestha",
    title: "Hi, I am Sharad",
    summary: `I'm a web designer / software developer based in Melbourne, Australia. I have a passion for web development 
    and love to create for web applications.I'm a web designer / software developer based in Melbourne, Australia. I have a 
    passion for web development and love to create for web applications.`
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
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
         Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
         Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
         Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
         Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
    ]

};

const skills = {
    title: "Technical Skills",
    frontend: {
        title: 'Frontend Development',
        skills: [
            {
                name: 'HTML',
                src: <FaHtml5 style={{ color: '#e44d26' }} size='3em' />,
                level: '95'
            },
            {
                name: 'CSS',
                src: <FaCss3Alt size='3em' style={{ color: '#1572b6' }} />,
                level: '80'
            },
            {
                name: 'JavaScript',
                src: <SiJavascript size='3em' style={{ color: '#efd81d' }} />,
                level: '90'
            },
            {
                name: 'React',
                src: <FaReact size='3em' style={{ color: '#00d1f7' }} />,
                level: '80'
            },

        ]
    },
    backend: {
        title: 'Backend Development',
        skills: [
            {
                name: 'C#',
                src: <SiCsharp size='3em' style={{ color: '#9c75d5' }} />,
                level: '85'
            },
            {
                name: '.NET Core',
                src: <SiDotNet size='3em' style={{ color: '#5c2992' }} />,
                level: '85'
            },
            {
                name: 'AWS',
                src: <FaAws size='3em' style={{ color: '#f79400' }} />,
                level: '70'
            },

            {
                name: 'MySQL',
                src: <SiMysql size='3em' style={{ color: '#005e87' }} />,
                level: '70'
            },
            {
                name: 'MongoDb',
                src: <SiMongodb size='3em' style={{ color: '#3e9737' }} />,
                level: '60'
            }
        ]
        
    }
}



export {
    introduction,
    socialMedia,
    whatCanIDo,
    skills
};