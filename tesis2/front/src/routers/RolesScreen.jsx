
import { UserFetch } from "../hooks/Userfetch.js";

export const RolesScreen = () => {
  const { data, isloading, errors } = UserFetch(
    "http://localhost:3000/api/roles"
  );
  
  return (
    <>
      <h1 className="text-center">Roles de los usuarios</h1>
      {isloading ? (
        <h4>Cargando....</h4>
      ) : errors ? (
        <h4>{errors}</h4>
      ) : (
        <table className="table container-sm">
          <thead>
            <tr>
              
              <th scope="col">Rol</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          {
            <tbody>
              {data.map((user) => {
                return (
                  <tr key={user._id}>
              
                    <label className="text-capitalize">{user._id}</label>
                    <td>
                      <button className="btn btn-primary">Editar</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Borrar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          }
        </table>
      )}
    </>
  );
};
