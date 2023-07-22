import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const Video = ({ video }) => {
  const {
    videoLink,
    title,
    description,
  } = video;

  const opts = {
    height: '180',
    width: '300',
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
      <h2>{title}</h2>
      <p>{description}</p>
      <YouTube videoId={getYoutubeVideoId(videoLink)} opts={opts} />
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
