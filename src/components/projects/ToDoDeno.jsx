import todo_deno from '../../assets/todo_deno.png'

const ToDoDeno = () => {
  return (
    <div className="projects__card">
      <h3>ToDo List App - Deno</h3>
      <img src={todo_deno} alt="ToDo List App - Deno" />
      <p>
        A simple ToDo list app. User can add various tasks to the list edit
        task, once the task is complete user can delete task. Created using
        MongoDB, Deno, TypeScript and React.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/deno-react.git"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default ToDoDeno
