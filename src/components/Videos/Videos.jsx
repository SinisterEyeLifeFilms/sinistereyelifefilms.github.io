import Video from '../Video/Video';
import videoDetails from '../../videoDetails';

const Videos = () => (
  <section className="videoGallery">
    {videoDetails.map((video) => (
      <article key={video.id}>
        <Video video={video} />
      </article>
    ))}
  </section>
);

export default Videos;
