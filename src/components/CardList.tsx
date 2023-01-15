import { Card } from "./Card";




function CardList() {

    const projects = [

        {
            title: 'Movies Search',
            description: 'This site can make search of in big database of movies',
            imgUrl: 'https://i.postimg.cc/tRVdbWNz/react-Movies.png',
            projectLink: 'https://ruslan-cherniavsky.github.io/React-Movies/',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/React-Movies',

            id: Math.floor(Math.random() * 999)
        },
        {
            title: 'Vacations bord',
            description: 'This site can make search of in big database of movies',
            imgUrl: 'https://i.postimg.cc/tRVdbWNz/react-Movies.png',
            projectLink: 'https://ruslan-cherniavsky.github.io/React-Movies/',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/React-Movies',
            id: Math.floor(Math.random() * 999)
        },
        {
            title: 'Online Shop',
            description: 'This site can make search of in big database of movies',
            imgUrl: 'https://i.postimg.cc/tRVdbWNz/react-Movies.png',
            gitHubLink: 'https://github.com/Ruslan-Cherniavsky/React-Movies',
            projectLink: 'https://ruslan-cherniavsky.github.io/React-Movies/',
            id: Math.floor(Math.random() * 999)
        }
    ]


    return (
        <>
            <div className="container" >
                <div className="row">
                    {/* <div className="col s12 m5"> */}
                    {
                        // @ts-ignore
                        projects.map((e) => (<Card key={e.id} title={e.title} description={e.description} imgUrl={e.imgUrl} projectLink={e.projectLink} gitHubLink={e.gitHubLink} {...e}
                        />))
                    }
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}

export { CardList };