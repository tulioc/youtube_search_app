import React from 'react';

const VideoDetail = () => {
  return (
    <div className="row">
      <div className="video-detail col s8">
        <div className="video-container">
          <iframe width="853" height="480"
          src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
          frameborder="0"
          allowfullscreen>
          </iframe>
        </div>
        <div className="details">
          <div className="title"> Video Title</div>
          <div className="description"> Video Description</div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
