function movies(moviesList){
    let newMovieList = [];
    for(let command of moviesList){
        if(command.includes('addMovie')){
            let [addMovieCommand, ...movieName] = command.split(' ');
            let movieNameAsString = movieName.join(' ');
            let movieObject = {
                name: movieNameAsString,
            };

            newMovieList.push(movieObject);
        } else if(command.includes('directedBy')){
            let tokens = command.split(' ');
            let movieNameToken = [];
            let directorNameToken = [];

            let directByIndex = tokens.findIndex(x => x === 'directedBy');
            for(let i = 0; i <directByIndex ; i++){
                movieNameToken.push(tokens[i]);
            }
            for(let i = directByIndex + 1; i < tokens.length; i++){
                directorNameToken.push(tokens[i]);
            }

            let name = movieNameToken.join(' ');
            let director = directorNameToken.join(' ');

            let movie = newMovieList.find(x => x.name === name);
            if(movie){
                movie.director = director;
            }
        } else {
            let tokens = command.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let movie = newMovieList.find(x => x.name === name);
            if(movie){
                movie.date = date;
            }
        }
    }

    for(let movie of newMovieList){
        if(movie.director && movie.date && movie.name){
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])