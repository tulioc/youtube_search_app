import React from 'react';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="collection-item avatar">
      <img src={imageUrl} alt="" className="circle" />
      <span className="title">{video.snippet.title}</span>
      <p>{}</p>

    </li>
  );
}

export default VideoListItem;
