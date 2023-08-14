import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import './Video.css';

const Video = ({ video }) => {
  const {
    videoLink,
    title,
    description,
  } = video;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let videoHeight;
  let videoWidth;

  if (windowSize.width < 375) {
    videoHeight = '150';
    videoWidth = '240';
  } else if (windowSize.width < 768) {
    videoHeight = '180';
    videoWidth = '300';
  } else if (windowSize.width < 1024) {
    videoHeight = '300';
    videoWidth = '500';
  } else {
    videoHeight = '420';
    videoWidth = '700';
  }

  const opts = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      showinfo: 1,
      loop: 0,
      iv_load_policy: 1,
      mute: 1,
    },
  };

  const getYoutubeVideoId = (videoLink) => {
    const urlParams = new URLSearchParams(new URL(videoLink).search);
    return urlParams.get('v');
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <YouTube videoId={getYoutubeVideoId(videoLink)} opts={opts} />
      <p className="description">{description}</p>
    </>
  );
};

Video.propTypes = {
  video: PropTypes.shape({
    videoLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Video;
