import axios from "axios";
/*baseURL to make request to the movie database */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;

// Axios is a "library" that helps us make "http requests" to external resources.
//  In our React applications we often need to retrieve data from external APIs so it can be displayed in our web pages
