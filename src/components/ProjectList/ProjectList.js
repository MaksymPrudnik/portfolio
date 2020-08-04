import Project from './Project';

const ProjectList = () => {
    const projectArray = [
        {
            name: 'Robofriends',
            description: `Project using main features of Reactjs, API calls (robohash.org
                and jsonplaceholder.typicode.com) and responsive design.
                Using react props and state has very fast user interactions.`,
            techStack: ['HTML5/CSS3', 'ReactJS', 'Redux', 'Redux-Thunk', 'tachyons', 'API', 'Responsive UI'],
            pathToImg: '/img/projects/robofriends.png',
            links: [
                'https://maksymprudnik.github.io/robofriends/',
                'https://github.com/MaksymPrudnik/robofriends'
            ],
            color: ' '
        },
        {
            name: 'SmartBrain',
            description: `SmartBrain is the app, where user can create an account, login/logout,
                submit url of some picture and app will detect faces on it (using Clarifai API).
                Also app keeps count of all submited pictures.`,
            techStack: [
                'HTML5/CSS3', 'Reactjs', 'Redux',
                'Expressjs', 'Knexjs', 'PostgreSQL',
                'Tachyons', 'API', 'Responsive UI'
            ],
            pathToImg: '/img/projects/smartbrain1.png',
            links: [
                'https://smartreco.herokuapp.com/',
                'https://github.com/MaksymPrudnik/smartbrain'
            ],
            color: ' '
        }
    ]
    return (
        <div className='projects_section' id='projects_section'>
            {projectArray.map((project, i) => {
                if (i % 2) {
                    return <Project key={i} project={Object.assign({}, project, {color: '062752'})} />
                } else {
                    return <Project key={i} project={Object.assign({}, project, {color: '520652'})} />
                }
            })}
        </div>
    )
}

export default ProjectList;