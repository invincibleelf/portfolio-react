import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaJava, FaAngular, FaGitlab, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiDotNet, SiCsharp, SiMysql, SiMongodb } from 'react-icons/si';
import { DiJira } from 'react-icons/di'

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
            {
                name: 'Angular',
                src: <FaAngular size='3em' style={{ color: '#e23237' }} />,
                level: '80'
            }

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
};

const experiences = {
    title: "Experiences",
    jobs: [
        {
            company: "MVP Studio",
            logo: "../../images/mvp-studio.png",
            title: "Software Developer Intern",
            duration: "March 2021 - Current",
            responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
            tools: [
                {
                    name: "HTML",
                    src: <FaHtml5 style={{ color: '#e44d26' }} size='3em' />,
                },
                {
                    name: "CSS",
                    src: <FaCss3Alt style={{ color: '#1572b6' }} size='3em' />,
                },
                {
                    name: 'JavaScript',
                    src: <SiJavascript size='3em' style={{ color: '#efd81d' }} />
                },
                {
                    name: "React",
                    src: <FaReact size='3em' style={{ color: '#00d1f7' }} />,
                },
                {
                    name: '.NET Core',
                    src: <SiDotNet size='3em' style={{ color: '#5c2992' }} />
                },
                {
                    name: 'MongoDb',
                    src: <SiMongodb size='3em' style={{ color: '#3e9737' }} />
                },
                {
                    name: 'AWS',
                    src: <FaAws size='3em' style={{ color: '#f79400' }} />,
                },
                {
                    name: 'Gitlab',
                    src: <FaGitlab size='3em' style={{ color: '#f46a25' }} />,
                },
                {
                    name: 'Jira',
                    src: <DiJira size='3em' style={{ color: '#25476d' }} />,
                }
            ]
        },
        {
            company: "Chinalink Professional Services",
            logo: "../../images/clps.png",
            title: "Software Developer",
            duration: "Jun 2018 - Feb 2019",
            responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
            tools: [
                {
                    name: "HTML",
                    src: <FaHtml5 style={{ color: '#e44d26' }} size='3em' title="html" />,
                },
                {
                    name: "CSS",
                    src: <FaCss3Alt style={{ color: '#1572b6' }} size='3em' />,
                },
                {
                    name: 'JavaScript',
                    src: <SiJavascript size='3em' style={{ color: '#efd81d' }} />
                },
                {
                    name: 'Bootstrap',
                    src: <FaBootstrap size='3em' style={{ color: '#533b78' }} />
                },
                {
                    name: '.NET Core',
                    src: <SiDotNet size='3em' style={{ color: '#5c2992' }} />
                },
                {
                    name: 'MySQL',
                    src: <SiMysql size='3em' style={{ color: '#005e87' }} />,
                },
                {
                    name: 'Github',
                    src: <FaGithub size='3em' style={{ color: '#000000' }} />,
                }


            ]
        },
        {
            company: "F1Soft International",
            logo: "../../images/f1soft.png",
            title: "Java Developer",
            duration: "Dec 2013 - May 2015",
            responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
            tools: [
                {
                    name: "HTML",
                    src: <FaHtml5 style={{ color: '#e44d26' }} size='3em' title="html" />,
                },
                {
                    name: "CSS",
                    src: <FaCss3Alt style={{ color: '#1572b6' }} size='3em' />,
                },
                {
                    name: 'JavaScript',
                    src: <SiJavascript size='3em' style={{ color: '#efd81d' }} />
                },
                {
                    name: 'Bootstrap',
                    src: <FaBootstrap size='3em' style={{ color: '#533b78' }} />
                },
                {
                    name: 'Java',
                    src: <FaJava size='3em' style={{ color: '#507997' }} />
                },
                {
                    name: 'MySQL',
                    src: <SiMysql size='3em' style={{ color: '#005e87' }} />,
                },
            ]
        }

    ]
};

const projects = {
    title: "Projects",
    project: [
        {
            name: "Project Bit.Country",
            image: "../../images/bitcountry.png",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
            link: "https://bit.country/"
        },
        {
            name: "Project Esewa",
            image: "../../images/esewa.png",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`,
            link: "https://esewa.com.np/#/home"
        }
    ]
};

const education = {
    title: "Education",
    universities: [
        {
            name: "Deakin University",
            location: "Burwood, VIC, Australia",
            logo: "../../images/deakin.png",
            course: "Master of Information Technology",
            duration: "Jun 2015 - Jul 2017",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
        },
        {
            name: "Tribhuwan University",
            location: "Kathmandu, Nepal",
            logo: "../../images/tribhuwan.png",
            course: "Bachelor of Computer Engineering",
            duration: "Jun 2010 - Nov 2013",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
        }
    ]
};

const certification = {
    title: "Certification and Programs",
    certificates: [
        {
            name: "Software Developer Job Ready Program",
            image: "../../images/ic.png",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
        },
        {
            name: "Professional Year Program",
            image: "../../images/pe.png",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
        },
        {
            name: "Web Design For Everybody",
            image: "../../images/coursera.png",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor lacus. 
            Phasellus tempor, lorem sed finibus ultrices, nisl odio cursus odio, vitae vestibulum mauris nibh eu lectus.`
        }
    ]
}


export {
    introduction,
    socialMedia,
    whatCanIDo,
    skills,
    experiences,
    projects,
    education,
    certification
};