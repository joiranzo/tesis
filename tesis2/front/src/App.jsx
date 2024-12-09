import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./component/NavBar";
import { Form1 } from "./component/form1";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route  path="/roles" 
                element={<Form1 titulo='Roles Funcionales' url='http://localhost:3000/api/roles' /> }>
        </Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
