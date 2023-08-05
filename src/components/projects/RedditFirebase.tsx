import React from "react";

import reddit_clone from "@assets/reddit_clone.png";

const RedditFirebase = () => {
  return (
    <div className="projects__card">
      <h3>Reddit Clone - Firebase</h3>
      <img src={reddit_clone} alt="RedditFirebase" />
      <p>
        Made using Google Firebase, Next.js, ChakraUI, TypeScript. User can SignUp/In using OAuth or
        E-Mail, join communities, add posts, upvote, downvote, comment.
      </p>
      <div className="centered">
        <a
          href="https://reddit-clone-full-stack.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/reddit-clone-full-stack"
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

export default RedditFirebase;
