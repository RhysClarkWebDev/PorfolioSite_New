// MERN TO DO
import MernToDoMain from '@/Images/Portfolio/MernToDo/Main/MERNToDo.jpg'

// REACT WEATHER APP
import WeatherAppMain from '@/Images/Portfolio/ReactWeather/Main/reactWeather.jpg'

// WEBVIEW REACT GAME
import WebviewGameMain from '@/Images/Portfolio/FootballSweep/Main/footballSweep.jpg'

interface PortfolioItem {
    name: string
    displayImage: string
    subtitle: string
    images: React.ReactElement[]
    brief: string[]
    creation: string[]
    futureFeatures: string[]
    technologies: string[]
    links: {
        live: string
        repo: string
    }
    tags: string[]
    meta: {
        title: string
        description: string
    }
}

  type PortfolioItemsTypes = Record<string, PortfolioItem>

const portfolioItems: PortfolioItemsTypes = {
    'mern-to-do': {
        name: 'MERN To Do App',
        displayImage: MernToDoMain,
        subtitle: 'With MongoDB Database - Typescript',
        images: [
            MernToDoMain
        ],
        brief: [
            `I wanted to really test myself and my ability to create a website with a 
            connected database. So, I thought a To Do App built using the MERN Stack 
            would be a great way to show off my abilities. This was also my project 
            to implement all I have learned about Typescript.`
        ],
        creation: [
            `After having done client work and work in my day job and further understanding 
            the inner working of the internet, and polishing off my skills with React; I got to work on this project.`,
            `I first built the initial app without the use of a database and used a simple array to pass the data into 
            my Components. Displaying these on the screen with the basic design was the first step. I added the buttons 
            into the design but with no functionality.`,
            `The next step was to set up a database and plan the routes I would be using. I done this by breaking down 
            the whole API into folders: Models, Routes and Controllers. This was really exciting to me as I am a bit 
            OCD with organisation and fully utilising JavaScript’s abilities of separating out content was right up my 
            street. After creating all of the routes I decided to pass all of my data through the request body as 
            opposed to URL Parameters as I feel like it is cleaner.`,
            `Calls from the front end rely on the data being sent back from the database and then using that to 
            populate a component. I done it this way to make sure the data was added to the database before 
            adding it to the screen.`,
            `For adding new items to the list I created a callback in the parent component that awaited data being 
            sent back from the database to the child component, this is something I always wondered about React, 
            how do I sent back data to a parent, it all makes sense now!`,
            'Any inputs received are filtered for illegal characters before being sent to the database.'
        ],
        futureFeatures: [
            `This first feature would be accounts, this way everyone would see their own To Do list and 
            be able to add and remove items that only they can see.`,
            `The second feature would be multiple to do lists that would create the route using a parameter set 
            in a “New List” box containing an Input field for the name and a button that would send the data 
            to the backend. These lists would be accessible through the use of a menu. Just like the items, 
            these would be fully editable, name changes, delete etc.`
        ],
        technologies: [
            'HTML',
            'CSS',
            'Javascript',
            'Typescript',
            'MongoDB',
            'Express',
            'React',
            'Node.JS',
            'Webpack Module Bundler w/ Babel'
        ],
        links: {
            repo: 'https://github.com/RhysClarkWebDev/ReactToDo',
            live: 'https://todo.rhys-clark.com/'
        },
        tags: [
            ''
        ],
        meta: {
            title: '',
            description: ''
        }
    },

    'react-weather': {
        name: 'React Weather App',
        displayImage: WeatherAppMain,
        subtitle: '',
        images: [
            WeatherAppMain
        ],
        brief: [
            ''
        ],
        creation: [
            ''
        ],
        futureFeatures: [
            ''
        ],
        technologies: [
            ''
        ],
        links: {
            repo: '',
            live: ''
        },
        tags: [
            ''
        ],
        meta: {
            title: '',
            description: ''
        }
    },

    'webview-game': {
        name: 'Webview React Game',
        displayImage: WebviewGameMain,
        subtitle: '',
        images: [
            WebviewGameMain
        ],
        brief: [
            ''
        ],
        creation: [
            ''
        ],
        futureFeatures: [
            ''
        ],
        technologies: [
            ''
        ],
        links: {
            repo: '',
            live: ''
        },
        tags: [
            ''
        ],
        meta: {
            title: '',
            description: ''
        }
    }

    // template: {
    //     name: '',
    //     displayImage: '',
    //     subtitle: '',
    //     images: [
    //         ''
    //     ],
    //     brief: [
    //         ''
    //     ],
    //     creation: [
    //         ''
    //     ],
    //     futureFeatures: [
    //         ''
    //     ],
    //     technologies: [
    //         ''
    //     ],
    //     links: {
    //         repo: '',
    //         live: ''
    //     },
    //     tags: [
    //         ''
    //     ],
    //     meta: {
    //         title: '',
    //         description: ''
    //     }
    // }
}



export default portfolioItems
