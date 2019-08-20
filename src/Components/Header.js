import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';


const Header = (props) => {
    return (
        <header>
            <div>
            <h2>Flickr Search</h2>
            <SearchForm onSearch={props.onSearch} />
            </div>
            <div>
            <Nav onClick={props.onSearch}/>
            </div>
        </header>
    )
}

export default Header;
