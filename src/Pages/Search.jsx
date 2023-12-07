import React from 'react';
import './Search.css';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import { ReactComponent as Logo2 } from '../Icons/Logo2.svg';
import { ReactComponent as SearchIcon } from '../Icons/Search.svg';

const SearchPage = () => {

    return (
        <div>
            <NavBar 
                Nav1={"Acceuil"}
                Nav2={"Favoris"}
                Nav3={"Profile"}
            />
            <div className="SearchContainer">
                <Logo2 className='Logo2'/>
                <SearchBar label={"Rechercher un article"} icon={<SearchIcon/>}/>
            </div>
        </div>

    );
}

export default SearchPage;