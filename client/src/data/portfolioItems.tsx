// MERN TO DO
import MernToDoMain from '@/Images/Portfolio/MernToDo/Main/MERNToDo.jpg'

// REACT WEATHER APP
import WeatherAppMain from '@/Images/Portfolio/ReactWeather/Main/reactWeather.jpg'

// WEBVIEW REACT GAME
import WebviewGameMain from '@/Images/Portfolio/FootballSweep/Main/footballSweep.jpg'
import WebviewGame1 from '@/Images/Portfolio/FootballSweep/2.jpg'
import WebviewGame2 from '@/Images/Portfolio/FootballSweep/3.jpg'
import WebviewGame3 from '@/Images/Portfolio/FootballSweep/4.jpg'
import WebviewGame4 from '@/Images/Portfolio/FootballSweep/5.jpg'

interface PortfolioItem {
    name: string
    displayImage: string
    subtitle: string
    images: React.ReactElement[]
    brief: string[]
    creation: string[]
    futureFeatures?: string[]
    technologies: string[]
    links?: {
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
            `Wanting to really test my skills with Express and React, I decided a 
            great way to do this would be a weather app. I looked at websites like 
            “BBC Weather” and “Met Office” to get some inspiration on the design.`
        ],
        creation: [
            `I started off by using Express on the backend and setting up the relevant routes, 
            installing webpack & Babel and any other relevant packages I knew I needed from the get-go.`,
            `Initially I set up an API call for current weather only, I created a search screen in order 
            to pass in the location as a parameter to call the API, this is done without a refresh on 
            the page using Ajax. I then expanded on this by getting the browser to request the users 
            location to automatically call on the API. (This was done using a separate URL as is used 
            coordinates as opposed to a location name.) This linked up to the “Current Weather” 
            box on the weather page.`,
            `Expanding upon what I had already created I created a weather forecast section. I had 
            to create a promise that would only call this API if the previous call was resolved. This 
            gave me back a result of 40 objects in an array, 1 forecast for every 3 hours. I had to 
            break this down into 5 days. I done this my looping over the result and targeting the 
            date/time string and splitting it at the time in order to just get the date. I added the 
            date into a new array which was checked each loop to see if it contained the next date being 
            checked and only adding the date to the array if the aforementioned wasn’t included. Next 
            I had to use the dates I had just got to loop back over the API result and if the result 
            object included the date it was added into an array, once every object was checked for 
            that date the array was pushed into another array. This resulted in an array of 5 arrays 
            (One for each day).`,
            `To get this information to render on the front end I mapped the array containing the days 
            and rendered a “WeatherForecastDay” component which passed in that days array as a prop. 
            This prop was then mapped to get the 3 hourly forecast you see on the front end.`,
            `The icons returned using the API were dull and boring so I found some 3D animated ones 
            that I used a switch statement to append the correct icon with the forecast.`
        ],
        futureFeatures: [
            `I would like to create a dark mode that automatically activates at night time depending 
            on where the user has requested the weather for. This would be done with the use of 2 of
             Googles API’s. One to turn the location into a geocode and then another to convert the 
             geocoded location into a local time zone, the time would then be worked out from “Universal 
             Time Coordinated (UTC)” and if the time was later than the sunset time, found using another 
             API: https://sunrise-sunset.org/api then dark mode would be activated. This would only be 
             needed on a defined search rather than geolocation API calls.`,
            `Another feature I would like to add, is a geolocation button to allow the user to use 
             their location if they previously declined the initial request.`,
            `The final feature I would like to add is the ability to change Celsius to Fahrenheit, 
            to accommodate users around the world.`
        ],
        technologies: [
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Node.JS',
            'Express',
            'REST API',
            'Webpack Module Bundler w/ Babel'
        ],
        links: {
            repo: 'https://github.com/RhysClarkWebDev/React-Weather-App',
            live: 'https://weather.rhys-clark.com/weather-result'
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
            WebviewGameMain,
            WebviewGame1,
            WebviewGame2,
            WebviewGame3,
            WebviewGame4
        ],
        brief: [
            `I had a client while freelancing that had a WebView based game that operated 
            on 2 screen (Left on the images is Operator, Right is Public) the basic premise 
            of the game is: A game is set up, background chosen, team names input; kick-off 
            time, ticket price and fees are all set. The idea is that someone comes up to the 
            bar, request a number and is given one randomly. The operator assigns their name 
            to the number which is clicked on later. The players are all playing for the 
            minute of the first goal in the game.`
        ],
        creation: [
            `The game had to be created in a way that allowed the internet to drop out after the 
            initial load and would still work, so for this reason I chose React. One of the added 
            benefits of this was that components could then be reused on the public display from 
            the operator screen.`,
            `With the WebView SDK I was given a few functions, one sent messages from the Operator 
            display over to the Public display. This is what was used for the majority of the games 
            creation. Another function I was given was the ability to save and load games, this was 
            very manual as upon loading I had to sort through every saved game and find if there 
            was a game that matched the Game Code given on the “Load Game” Screen, if not it returned 
            an error in a Modal.`,
            `One of the problems that arose is that each display had a different html file so I had 
            to build up and configure webpack in a custom way, I have never used “create-react-app” 
            in any of my projects. The reason behind this is because of the way the messaging function 
            works. Messages sent from the Operator Display to the Public Display are sent to the html 
            file itself rather than the JavaScript file, this meant that the use of sessionStorage 
            was needed to save game data upon load for the JavaScript to pick up via a listener 
            function that distributed all values back onto the public display.`,
            `I mentioned earlier that player names were saved into the number, this was to check 
            and validate a win. To check the operator clicks the number the player tells them and 
            a Model appears saying “Number {number} belongs to {name}”`,
            `To assign a winning number the operator gives this in the Admin panel at the bottom, 
            a confirmation modal appears and the operator can either confirm or deny.`,
            'If you would like to see a live demo of this game please ask.'
        ],
        technologies: [
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'React',
            'Node.JS',
            'Webpack Module Bundler w/ Babel',
            'Custom Webview SDK'
        ],
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
