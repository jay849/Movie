import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 방법1
    /* useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
        )
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    }, []);
    console.log(movies); */

    // 방법2
    const getMovies = async () => {
        /* const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
        );
        const json = await response.json(); */
        // 위에 것을 짧게 줄이기
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
