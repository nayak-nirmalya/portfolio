import tmdb from "../../assets/tmdb.png";

const TMDB = () => {
  return (
    <div className="projects__card">
      <h3>The Movie Database App</h3>
      <img src={tmdb} alt="TMDB" />
      <p>
        This is a repository for TMDB app that show popular, upcoming Movies &
        TV shows, made with React Native, TypeScript, TailWindCSS, The Movie DB
        API, & React Navigation.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/tmdb_app_react_native"
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

export default TMDB;
