 const API_KEY_MOVIE = process.env.REACT_APP_API_KEY_MOVIE

export const getNomadaURl = () => 'https://whois.nomada.cloud/upload'

export const getActorInfo = (actorName) => `https://api.themoviedb.org/3/search/person?api_key=${API_KEY_MOVIE}&language=en-US&query=${actorName}&page=1&include_adult=false`