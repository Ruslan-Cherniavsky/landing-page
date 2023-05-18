import { Card } from "./Card";




function CardList() {

    const projects = [

        {
            title: 'Movies Search',
            description: 'A platform for filtering and searching movies, games, and series. If you want to see your favorite movie, you can find it here ',
            imgUrl: 'https://i.postimg.cc/tRVdbWNz/react-Movies.png',
            projectLink: 'https://ruslan-cherniavsky.github.io/React-Movies/',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/React-Movies',
            technologies: "React",
            deploy: "GH Pages",

            id: Math.floor(Math.random() * 999)
        },
        {
            title: 'Vacations board',
            description: 'A web application that allows the user to select and filter vacations based on a database of the best places in the world',
            imgUrl: 'https://i.postimg.cc/ZRg7F5G9/vacation.png',
            projectLink: 'https://ruslan-cherniavsky.github.io/vacation-frontend/',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/vacation-frontend',
            gitHubLink2: 'https://github.com/Ruslan-Cherniavsky/vacations-backend',
            technologies: "React + Node.js + MySQL",
            deploy: "GH pages + Zeet + Clever Cloud",
            id: Math.floor(Math.random() * 999)
        },
        {
            title: 'Online Shop',
            description: 'A great online store with a huge product database that allows users to create their own unique cart',
            imgUrl: 'https://i.postimg.cc/D0Hxp8nH/444444.png',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/Sopping-Online--Full-Stack-Class-4/tree/To-Gal/angular-CLIENT',
            projectLink: '',
            gitHubLink2: 'https://github.com/Ruslan-Cherniavsky/Sopping-Online--Full-Stack-Class-4/tree/To-Gal/.SERVER',
            technologies: "Angular + Node.js + MongoDB",
            deploy: "No Deploy",

            id: Math.floor(Math.random() * 999)
        }
    ]
    //image.png

    return (
        <>
            <div className="container" >
                <div className="row">
                    {/* <div className="col s12 m5"> */}
                    {
                        // @ts-ignore
                        projects.map((e) => (<Card key={e.id} title={e.title} description={e.description} imgUrl={e.imgUrl} projectLink={e.projectLink} gitHubLink={e.gitHubLink} technologies={e.technologies} gitHubLink2={e.gitHubLink2} {...e}
                        />))
                    }
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export { CardList };