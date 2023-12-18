import "./registr.css";

function Registracia() {
  return (
    <div className="registr_container">
      <div className="registr_options">
        <div className="registr_title">
          <h1>Вход</h1>
          <h2>Добро пожаловать!</h2>
          <div className="registr_input">
            <input name="email" type="text" placeholder="Почта" />
            <input name="password" type="password" placeholder="Пaроль" />
            <a href="url">Забыли пороль?</a>
            <button className="button">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registracia;
