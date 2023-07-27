import Video from '../Video/Video';
import videoDetails from '../../videoDetails';
import './Videos.css';

const Videos = () => (
  <section className="videoGallery">
    {videoDetails.map((video) => (
      <article key={video.id} className="videoItem">
        <Video video={video} />
      </article>
    ))}
  </section>
);

export default Videos;
