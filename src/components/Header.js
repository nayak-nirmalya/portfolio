// Import Assets
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Nirmalya Nayak" />

      <div className="header__content">
        <h1>Hi, I'm Nirmalya Nayak</h1>
        <p>Full Stack / Blockchain Developer</p>
        <h4>
          E-Mail:{" "}
          <a href="mailto:nayak.nirmalya@hotmail.com">
            nayak.nirmalya@hotmail.com
          </a>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>{" "}
          <div class="tooltip">
            <i
              className="fa fa-copy"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText("nayak.nirmalya@hotmail.com");
              }}
            ></i>
            <span class="tooltiptext">Copy to Clipboard.</span>
          </div>
        </h4>
        <h4>
          Contact No.: <a href="tel:+917008944644">+91-7008944644</a>
        </h4>
        <h4>Odisha, India</h4>
      </div>
    </section>
  );
};

export default Header;
