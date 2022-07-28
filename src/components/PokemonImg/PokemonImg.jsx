import './pokemonImg.css'

export default function PokemonImg(props) {

    return (
        <div className="pokemonImgFrame">
            <img className="pokemonImg" src={props.pokemonImgUrl} alt="Pokemon Image" />
        </div>)
}
