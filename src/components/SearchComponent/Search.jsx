import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './searchComponent.css'
import '../../constants/CssConsts.css'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [cards, setCards] = useState([]);

    const searchIcon = <FontAwesomeIcon icon={faSearch} className="searchIcon" />
    
    useEffect(() => {
        setCards(document.getElementsByClassName('pokemonCard'));
    }, [searchQuery]);

    const handleChange = event => {
        let searchQRY = event.currentTarget.value;
        setSearchQuery(searchQRY);
        searchQRY === '' ? showAllCards() : searchForQuery(searchQRY);
    }

    function showAllCards() {
        Array.from(cards).forEach((card) => {
            showCard(card);
        });
    }

    function showCard(card){
        card.classList.remove('hidden');
    }

    function hideCard(card){
        card.classList.add('hidden');
    }
    
    function searchForQuery(searchQRY) {
        Array.from(cards).forEach((card) => {
            card.id.includes(searchQRY) ? showCard(card) : hideCard(card);
        });
    }

    return (
        <div className="searchDiv">
            {searchIcon}
            <input type="text" placeholder="Custom Search.." id="searchInput" onInput={handleChange}
                value={searchQuery} />
        </div >
    )
}
