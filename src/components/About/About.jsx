import portrait from '../../assets/hugh-murphy.jpg';
import './About.css';

const About = () => (
  <section>
    <h2 className="about-title">About SELF</h2>

    <article className="about">
      <img
        src={portrait}
        alt="Hugh Murphy - SELF"
        className="portrait"
      />

      <div className="about-text">
        <p>
          Sinister Eye Life Films&apos; SELF is a film collection that examines and explores our
          own inner lives, how we see ourselves and others, and how others see us. The
          films are experimental and rarely straightforward, encouraging viewers to
          question everything we take for granted to be true and real.
        </p>

        <p>
          Colour, particularly the primary colors of red, yellow, and blue, is used
          repeatedly in the films, echoing the work of artists such as Piet Mondrian, Yves
          Klein, and Barnett Newman, as well as film directors such as Krzysztof
          Kielowski, Jean-Luc Godard, and Pedro Almodóvar.
        </p>

        <p>
          A common theme is the body and how it expresses or conceals emotion and
          self. Body dysmorphia is used to depict internal conflict and self-doubt. The
          outer body is a reflection of the inner psyche. Nothing is concealed.
        </p>

        <p>
          Hugh Murphy returned to college in his late fifties to &rdquo;do what he loved&rdquo;. His
          work has evolved from 2D print experiments to multifaceted conceptual
          pieces. His current work is digital and video-based, ranging from
          documentaries to more abstract videos about our own inner psyche.
        </p>
      </div>
    </article>
  </section>
);

export default About;
