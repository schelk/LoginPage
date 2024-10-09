import React from "react";
import "./styles/SignIn.css";

const SignIn = () => {
  return (
    <div className="signInContainer">
      <h1>Sign In</h1>

      <div className="inputsContainer">
        <form action="">
          <label>
            Insira seu e-mail ou usuário
            <input
              type="text"
              name=""
              id="email"
              placeholder="Email / Usuário"
            />
          </label>
        </form>

        <form action="">
          <label>
            Insira sua senha
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Senha"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
