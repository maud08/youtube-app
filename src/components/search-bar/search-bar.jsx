import style from './search-bar.module.scss'
import { useState } from "react";

const SearchBar = ({onSearch}) => {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //On récuper la methode du parenet via les props 
        //Set de la query pour l'envoyer au parent 
        onSearch(query);;
        setQuery('');
    }

    return(
        <form onSubmit={handleSubmit} className={style.search}>
            <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button type="submit">Rechercher</button>
        </form>
    );
}

export default SearchBar;