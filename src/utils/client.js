const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTNjNmYzNzhhMWFjODJlMmUyMzQyYTgzYTVhYTFjNyIsInN1YiI6IjYxNzQ2Mjk0YTA5N2RjMDAyYTllMGI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DIsBBJYYMmPWmH4PONYdETXCjRerdzwb94HKhSfcjME",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
        .then((result) => result.json())
}