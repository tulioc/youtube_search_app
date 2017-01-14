import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';



const App = ()=>{
    return(
        <div className="row">
            <SearchBar />
            <VideoDetail />
            <VideoList />
        </div>
    );
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.getElementById('container'));
