import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemons} from "../store/pokemonSlice";


const PokemonCards = () => {

    const dispatch = useDispatch()
    const {cards, loading, error} = useSelector(state => state.pokemonReducer)

    useEffect(() => {
        dispatch(getPokemons())
    }, []);

    if (loading) return <div>loading...</div>
    if (error) return <div>error: {error}</div>


    return (
        <div className='card-wrapper'>
            {
                cards.map((card, index) =>
                <div className='card'>
                    <img key={index}  src={card.url} alt={card.name} />
                    <h2>{card.name}</h2>
                </div>)
            }
        </div>
    )
}

export default PokemonCards;