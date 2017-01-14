import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';




const App = ()=>{
    return(
        <div className="container">
            <SearchBar />
        </div>
    );
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.getElementById('container'));
