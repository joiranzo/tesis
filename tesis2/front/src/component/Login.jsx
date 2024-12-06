import { useForm } from "../hooks/useForm";

export const Login = () => {
    const initialForm={
        userName:'',
       userPassword:''
     }
  
    const { userName, userPassword, onInputChange } = useForm(initialForm);
        
    

  const onSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="userName">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="userName"
          placeholder="Ingrese su direción de correo"
          value={userName}
          onChange={onInputChange}
        />
        {/* <div id="emailHelp" className="form-text">
          <p>We ll never share your email with anyone else.</p>
        </div> */}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="usaePassword">
          Password{" "}
        </label>
        <input
          type="password"
          className="form-control"
          name="userPassword"
          placeholder="Ingrese su contraseña"
          value={userPassword}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
