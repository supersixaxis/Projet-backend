import React, { useState } from 'react'
import { useNavigate } from "react-router";
import Button from '../../component/Button';
import styles from "./styles.module.css";

export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici, vous pouvez appeler une API pour envoyer les informations d'identification au serveur
    console.log(`Nom d'utilisateur: ${username}, Mot de passe: ${password}`);
  };

  return (
    <div className={styles.container_login}>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Nom d'utilisateur : </label>
          <input
             required={true} 
             type="text"
             id="username"
             value={username}
             placeholder= {"Nom d'utilisateur"}
             onChange={(event) => setUsername(event.target.value)}
             />
        </div>
        <div>
        <label htmlFor="password">Mot de passe : </label>
        <input
          required={true}
          type="password"
          id="password"
          value={password}
          placeholder= {"Mot de passe"}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button
      color= "login"
      type="submit"
      clickAction={() => navigate("/home")}
        >
        Se connecter</Button>
      </form>
      <Button
      color= "login"
      clickAction={() => navigate("/inscription")}
        >
        Creer un compte</Button>
      <a href='/'>Mot de passe oublié ?</a>
    </div>
  );
}
