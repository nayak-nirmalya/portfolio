import emp_mgmt from "../../assets/emp_mgmt.png";

const EmployeeManagement = () => {
  return (
    <div className="projects__card">
      <h3>Employee Management</h3>
      <img src={emp_mgmt} alt="EmployeeManagement" />
      <p>
        It's a Full Stack Web App that performs basic CRUD operations. Made
        using Java, SpringBoot, MySQL, lombok, React, Vite, Tailwind CSS. User
        can edd, edit, delete Employee Details.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/java-emp-system-api"
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

export default EmployeeManagement;
