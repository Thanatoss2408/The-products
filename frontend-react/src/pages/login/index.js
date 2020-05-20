import React from 'react';
import { useForm } from 'react-hook-form'
import banner from '../../assets/bannerLogin.svg'
import api from '../../service/api';
import './style.css';
import { useHistory } from "react-router-dom";

export default function Login() {

  const { register, handleSubmit } = useForm()

  const history = useHistory()

  async function submitLogin(data) {
    try {

      await api.post('login', data)
      history.push('home')
      
    } catch (error) {
      alert('Erro ao tentar logar')
    }

  }
  return (
    <main className="login-container">
      <form onSubmit={handleSubmit(submitLogin)}>
        <input
          name="username"
          placeholder="Nome do Usuario"
          ref={register}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          ref={register}
        />

        <button className="btn btn-color">Entrar</button>
      </form>

      <img src={banner} alt="Banner Login" />
    </main>
  );
}

