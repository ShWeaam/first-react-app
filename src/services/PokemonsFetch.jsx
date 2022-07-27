import axios from "axios";


export default class PokemonsFetch {

    static fetchAll = async (fetchURL) => {
        let result = {
            data: null,
            error: null
        };

        await axios.get(process.env.REACT_APP_POKEMON_API_URL + fetchURL)
            .then(resp => {
                if (resp.status === 200) {
                    result.data = resp.data;
                }
            })
            .catch(err => {
                result.error = err.response.data;
            });
        return result;
    }

    static fetchSpecific = async (fetchURL) => {
        let result = {
            data: null,
            error: null
        };

        await axios.get(fetchURL)
            .then(resp => {
                if (resp.status === 200) {
                    result.data = resp.data;
                }
            })
            .catch(err => {
                result.error = err.response.data;
            });
        return result;
    }
}
