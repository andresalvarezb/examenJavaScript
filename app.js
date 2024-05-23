// - Filtrar películas por año de lanzamiento.
async function getMoviesByYear(year) {
    const movies = await fetch(
        `https://justwatch.imdbot.workers.dev/?q=originalReleaseYear=${year}`
    );

    const {
        data: {
            popularTitles: { edges },
        },
    } = movies.json();

    const data = []

    edges.forEach((movie) => {
        const {
            node: {
                id,
                objectType,
                content: { title, originalReleaseYear },
            },
        } = movie;

        data.push({
            id,
            objectType,
            title,
            originalReleaseYear,
        });
    });

    return data
}

console.log(getMoviesByYear(2024));

// async function getMovies() {
//     const data = await fetch(
//         "https://justwatch.imdbot.workers.dev/?q=Niram&L=en_IN"
//     );
//     return data.json();
// }

// async function getMovieById(id) {
//     const data = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
//     return data.json();
// }

// async function getBasicMovieInfo() {
//     const data = await fetch("https://search.imdbot.workers.dev/?q=Niram");
//     return data.json();
// }

// async function getMoviesId() {
//     const {
//         data: {
//             popularTitles: { edges },
//         },
//     } = await getMovies();

//     return edges.map((movie) => {
//         const {
//             node: { id },
//         } = movie;
//         return id;
//     });
// }

// // async function getActorsByMovie(id){
// //     const {short:{actor}} = await getMovieById(id)

// //     return Promise.all(actor.map(el => el.name))
// // }



// // - Filtrar películas por año de lanzamiento.
// async function releaseYear() {
//     const {
//         data: {
//             popularTitles: { edges },
//         },
//     } = await getMovies();

//     const moviesPerYear = {};

//     edges.forEach((movie) => {
//         const {
//             node: {
//                 content: { title, originalReleaseYear },
//             },
//         } = movie;
//         if (Object.keys(moviesPerYear).includes(originalReleaseYear)) {
//             moviesPerYear[originalReleaseYear].push(title);
//         } else {
//             moviesPerYear[originalReleaseYear] = [title];
//         }
//     });
//     return moviesPerYear;
// }

// // - Filtrar películas por actor.
// async function movieAuthor(character) {
//     const { description } = await getBasicMovieInfo();

//     const moviesByActor = {};

//     description.forEach((movie) => {
//         const actores = movie["#ACTORS"].split(",");

//         actores.forEach((actor) => {
//             if (!Object.keys(moviesByActor).includes(actor)) {
//                 moviesByActor[actor.trim()] = [movie["#TITLE"]];
//             } else {
//                 moviesByActor[actor.trim()].push(movie["#TITLE"]);
//             }
//         });
//     });

//     return moviesByActor[character];
// }

// // - Filtrar películas por ranking de IMDb.
// async function getRackingMovies(){
//     const { description } = await getBasicMovieInfo()
//     const movies = {}
//     const ranking = {}

//     description.forEach(movie =>{
//         movies[movie['#RANK']] = movie['#TITLE']
//     })

//     const valuesSorted = Object.keys(movies).sort((a, b) => a - b)

//     valuesSorted.forEach(value=> {
//         ranking[value] = movies[value]
//     })

//     return ranking;
// }

// // - Consulta los títulos de todas las películas.

// async function moviesTitle() {
//     const { description } = await getBasicMovieInfo();
//     const titles = [];
//     description.forEach((movie) => {
//         titles.push(movie["#TITLE"])
//     });

//     return titles;
// }

// // - Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV).

// // - Consulta los identificadores y títulos de todas las películas.
// // - Consulta las URL completas y los tipos de objetos (películas y programas de TV).
// // - Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas.
