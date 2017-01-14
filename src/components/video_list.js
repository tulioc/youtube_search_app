import React from 'react';
import VideoListItem from './video_list_item.js'


const VideoList = (props) => {
  return (
      <div className="col s4">
        <ul className="collection">
          <VideoListItem />
        </ul>
      </div>
  );
}

export default VideoList;
