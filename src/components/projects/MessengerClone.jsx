import messenger_clone from "../../assets/messenger_clone.png";

const MessengerClone = () => {
  return (
    <div className="projects__card">
      <h3>Real-Time Messenger</h3>
      <img src={messenger_clone} alt="MessengerClone" />
      <p>
        Full Stack Responsive, Real-Time Messenger Clone made with Next.js 13,
        App Router, React, Tailwind, React Hook Form, Headless UI, Prisma,
        MongoDB, NextAuth, Pusher.
      </p>
      <div className="centered">
        <a
          href="https://messenger-clone-drab.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/messenger-clone"
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

export default MessengerClone;
