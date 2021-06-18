import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaJava, FaAngular, FaGitlab, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiDotNet, SiCsharp, SiMysql, SiMongodb, SiSpring } from 'react-icons/si';
import { DiJira } from 'react-icons/di'

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
                level: '70'
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
                name: 'Java',
                src: <FaJava size='3em' style={{ color: '#507997' }} />,
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
            responsibility: `MVP Studo is an incubator for software start-ups and tech product development company.
            I am working on Project Bit.Country which is a decentralised platform enabling individual to create their
            own metaverse.`,
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
            responsibility: `CLPS is a global information technology, consulting and solutions service provider
             focused on delivering services to global institutions in banking, insurance and the financial sectors, 
             both in China and globally.`,
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
                    name:"Spring",
                    src:<SiSpring size='3em' style={{color:'#6cb33e'}}/>
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
            responsibility: `F1Soft Group is an ecosystem of digital products and services that facilitates Nepali
             consumers’ access to financial services and enables their inclusion in the formal digital economy, 
             in simple, affordable and secure ways`,
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
                    name: 'Java',
                    src: <FaJava size='3em' style={{ color: '#507997' }} />
                },
                {
                    name:"Spring",
                    src:<SiSpring size='3em' style={{color:'#6cb33e'}}/>
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
            description: `Bit.Country is a decentralised platform enabling
            individual to create their own metaverse. An individual can choose his own token, with a
            specific token economy structure in his/her metaverse. The framework also supports NFTs. The
            project is supported by Web3 foundation grant and has secured $4M in first round of funding.`,
            link: "https://bit.country/"
        },
        {
            name: "Project Esewa",
            image: "../../images/esewa.png",
            description: `ESewa is Nepal’s first digital wallet enabling
            customers to make various bill payments. The customers can load funds through most of the
            banks in Nepal and make payments for different services.`,
            link: "https://esewa.com.np/#/home"
        }
    ]
};

const otherProjects = {
    title: "Other Projects",
    githubapi: "https://api.github.com/users/invincibleelf/repos",
    repos: ["portfolio-react", "genericApi", "toy-robot", "OpERP"],
    github: "https://github.com/invincibleelf?tab=repositories&q=&type=&language=&sort=stargazers"
}

const education = {
    title: "Education",
    universities: [
        {
            name: "Deakin University",
            location: "Burwood, VIC, Australia",
            logo: "../../images/deakin.png",
            course: "Master of Information Technology",
            duration: "Jun 2015 - Jul 2017",
            description: `Achieved high distinction with major in Software Development`,
            transcript:'https://drive.google.com/file/d/1Jn0fCcR52wyygyvXp6XzX1C1M081rGye/view?usp=sharing'
        },
        {
            name: "Tribhuwan University",
            location: "Kathmandu, Nepal",
            logo: "../../images/tribhuwan.png",
            course: "Bachelor of Computer Engineering",
            duration: "Jun 2010 - Nov 2013",
            description: `Achieved distinction with major in Software Engineering`,
            transcript:'https://drive.google.com/file/d/16Xk-fQXVj-iLw__H9cUyLMfT5AlW4RMp/view?usp=sharing'
        }
    ]
};

const certification = {
    title: "Certification and Programs",
    certificates: [
        {
            name: "Software Developer Job Ready Program",
            image: "../../images/ic.png",
            description: `Job ready program giving hands on experience with commercial projects.`,
        },
        {
            name: "ACS Professional Year Program",
            image: "../../images/pe.png",
            description: `Professional development program combining formal learning and workplace 
            experience.`,
            transcript:'https://drive.google.com/file/d/1Tv_Bf2204mMC2uiexqySxvaq9KhriQsj/view?usp=sharing'
        },
        {
            name: "Web Design For Everybody",
            image: "../../images/coursera.png",
            description: `Interactive website design with HTML, CSS and Javascript`,
            transcript:'https://drive.google.com/file/d/1k73W7VHMI6wjUneeLnOU2t32BZJIVLhW/view?usp=sharing'
        }
    ]
};

const contacts = {
    title: "Contact Me",
    subtitle: "#Developer #Programmer #Engineer #Gamer",
    image: "../../images/profile.jpg",
    location: "Melbourne, Australia",
    opportunity: "Open for opportunity : Yes"
}


export {
    introduction,
    socialMedia,
    whatCanIDo,
    skills,
    experiences,
    projects,
    education,
    certification,
    contacts,
    otherProjects
};