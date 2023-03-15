import netflix_clone from "../../assets/netflix-clone.png";

const NetflixClone = () => {
  return (
    <div className="projects__card">
      <h3>Full-Stack Netflix Clone</h3>
      <img src={netflix_clone} alt="Full-Stack Netflix Clone" />
      <p>
        Made using Google Firebase, Next.js, ChakraUI, TypeScript. User can
        SignUp/In using OAuth or E-Mail, join communities, add posts, upvote,
        downvote, comment.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/netflix-clone"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
        <a
          href="https://netflix-clone-six-mu-17.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default NetflixClone;
