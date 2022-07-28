import axios from "axios";
import { POKEMON_GET_REQUEST_API } from "../constants/fileWithConstants";


export default class PokemonsFetch {

    static fetchAll = async (offset) => {
        let result = {
            data: null,
            error: null
        };

        await axios.get(POKEMON_GET_REQUEST_API + offset)
            .then(resp => {
                console.log(POKEMON_GET_REQUEST_API + offset);
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
