import React from 'react';
import FeatherIcon from 'feather-icons-react';
import "./SearchBar.css";

const SearchBar = props => {
    return (
        
        <div className="search-bar">
            <div className="header">
                <FeatherIcon className="IG-logo" icon="instagram" />
                <h1 className="line-divider">|</h1>
                {/* <img src="instagram.png"></img> */}
                <h1>Instagram</h1>
            </div>
            

            
                <h4 className="search">Search</h4>
            
            


            <div className="navigation">
                <FeatherIcon className="IG-logo" icon="compass" />
                <FeatherIcon className="IG-logo" icon="heart" />
                <FeatherIcon className="IG-logo" icon="user" />
            </div>
            
        </div>
    );
  };
  
  
  
  export default SearchBar;