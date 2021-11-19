// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(films) {
  const directors = films.map((film) => {
  return film.director
  })
  uniqueDir = [...new Set(directors)]
  return uniqueDir
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(films) {
  const dramas = films.filter((film) => {
      return film.genre.includes('Drama') 
  })

  const spielbergFilms = dramas.filter((flick) => {
      return flick.director === 'Steven Spielberg'
  })
  return spielbergFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(films) {
  const avgScore = films.reduce((acc, film) => {
    if (!film.score) film.score = 0;
    return acc + film.score / films.length
  }, 0)
  return parseFloat(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(films) {
  const dramas = films.filter((film) => {
      return film.genre.includes('Drama') 
  })

  const avgScore = dramas.reduce((acc, drama) => {
      if (!drama.score) drama.score = 0;
      return acc + drama.score / dramas.length
    }, 0)
    return parseFloat(avgScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {
  const copyOfFilms = [...films]
  const sortedByYear = copyOfFilms.sort((film1, film2) => {
      if (film1.year < film2.year) return -1
      if (film1.year > film2.year) return 1
      if (film1.year === film2.year) {
          if (film1.title < film2.title) return -1
          if (film1.title > film2.title) return 1
      } 
  })
  return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
  const copyOfFilms = [...films]
  const sortByTitle = copyOfFilms.sort((film1, film2) => {
      if (film1.title < film2.title) return -1
      if (film1.title > film2.title) return 1
      return 0
  })  
  const firstTwenty = []
  if (sortByTitle.length < 20) {
      for (i=0; i<sortByTitle.length; i++){
          firstTwenty.push(sortByTitle[i].title)
      } 
  }
  else {
      for (i=0; i<20; i++){
          firstTwenty.push(sortByTitle[i].title)
      } 
  }
  return firstTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(films) {
  const copyOfFilms = [...films]
  const times = copyOfFilms.map((film)=> {
      let minutes = ''
      let minute1 = 0
      let minute2 = 0
      const hourIndex = (film.duration.indexOf('h'))
      let hour = film.duration[hourIndex-1]
      const minuteIndex = (film.duration.indexOf('min'))
      if (minuteIndex === -1) {
          minute1 = 0
          minute2 = 0
      }
      else {
          minute1 = film.duration[minuteIndex-2]
          minute2 = film.duration[minuteIndex-1]
      }
      minutes = parseInt(minute1 + minute2)
      let durationInMin = hour * 60 + minutes
      film.duration = durationInMin
      return film.duration
  })
  return copyOfFilms
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
