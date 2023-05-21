import React from "react";

import todo_dapp from "../../assets/todo_dapp.png";

const ToDoDApp = () => {
  return (
    <div className="projects__card">
      <h3>ETH ToDo List DApp</h3>
      <img src={todo_dapp} alt="ETH ToDo List DApp" />
      <p>
        A simple ToDo list app, the difference is it's decentralized. User can add various tasks to
        the list, once the task is complete user can mark it is as completed.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/todo-eth"
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

export default ToDoDApp;
