import netflix_clone from "../../assets/netflix-clone.png";

const NetflixClone = () => {
  return (
    <div className="projects__card">
      <h3>Full-Stack Netflix Clone</h3>
      <img src={netflix_clone} alt="Full-Stack Netflix Clone" />
      <p>
        Made using Next.js, TailwindCSS, TypeScript, MongoDB, Prisma. User can
        SignUp/In using OAuth or E-Mail, select movies, add to favourite and
        play movies. Fully Responsive UI.
      </p>
      <div className="centered">
        <a
          href="https://netflix-clone-six-mu-17.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/netflix-clone"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default NetflixClone;
