// export const environment = {
//     production: false,
//     API_URL: 'https://freeapi.miniprojectideas.com/api/ClientStrive/'
// };

import { secret } from "./environment.secret";

export const environment = {
    production: false,
    API_URL: 'https://api.themoviedb.org/3',
    API_TOKEN: secret.API_TOKEN,
}
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: ''
    }
};