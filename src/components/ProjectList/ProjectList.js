import Project from './Project';

const ProjectList = () => {
    const finishedProjects = [
        {
            name: 'Sociaten',
            description: `Social blog where you can create an account, add post, comment them and find some
            new friends.`,
            techStack: ['HTML5/CSS3', 'ReactJS', 'Redux', 'Redux-Thunk', 'React-router', 'expressjs', 'MongoDB/mongoose'],
            pathToImg: '/img/projects/sociaten.png',
            links: [
                'https://github.com/MaksymPrudnik/social-blog',
                'https://sociaten.herokuapp.com/'
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
        },
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
    ]
    const inDevelopmentProjects = [
        {
            name: 'Twinstravel',
            description: `Project for travel agency. Main features that should be from the first launch
            are tours listing and filtering, possibility to contact and order tours. And also a good and
            intuitive admin interface for content makers.(in tech stack some technologies only WILL be 
            used so i marked them with +)`,
            techStack: [
                'HTML5/CSS3', 'ReactJS', 'Nextjs', 'PostgreSQL(+)',
                'Redis(+)', 'Knexjs(+)', 'Bcryptjs(+)', 'Redux(+)',
                'Redux-Thunk(+)', 'tachyons', 'API(+)', 'Responsive UI'
            ],
            pathToImg: '/img/projects/twinstravel.png',
            links: [
                'https://twinstravel.vercel.app/',
                'https://github.com/MaksymPrudnik/twinstravel'
            ],
            color: ' '
        }
    ]
    const color1 = 'b31493';
    const color2 = '4a0a3d';
    return (
        <div className='projects_section' id='projects_section'>
            {finishedProjects.map((project, i) => {
                if (i % 2) {
                    return <Project key={i} project={Object.assign({}, project, {color: color1})} />
                } else {
                    return <Project key={i} project={Object.assign({}, project, {color: color2})} />
                }
            })}
            <h3 
                style={{
                    height: '10vh', width: '100%',
                    textAlign: 'center', borderBottom: '2px solid black',
                    marginBottom: '0', fontWeight: '700',
                    fontSize: '1.4rem'
                }}
            >In development:</h3>
            {inDevelopmentProjects.map((project, i) => {
                if (i % 2) {
                    return <Project key={i} project={Object.assign({}, project, {color: color1})} />
                } else {
                    return <Project key={i} project={Object.assign({}, project, {color: color2})} />
                }
            })}
        </div>
    )
}

export default ProjectList;