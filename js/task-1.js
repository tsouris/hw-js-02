// Task 1
// Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.

const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
};

function displayMovies(movies, genre) {
  switch (genre) {
    case "action":
      return movies.action;
    case "comedy":
      return movies.comedy;
    case "drama":
      return movies.drama;
    case "horror":
      return movies.horror;
  }
}

console.log(displayMovies(movies, "drama"));
