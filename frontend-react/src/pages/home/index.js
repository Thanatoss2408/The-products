import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight, FiX, FiPower } from "react-icons/fi";

import './style.css';
import api from '../../service/api'

export default function Home() {


  const [produts, setProduct] = useState([])
  const [produtDetail, setProductDetail] = useState([])
  const nameUser = localStorage.getItem('name')
  const id = localStorage.getItem('id')

  useEffect(() => {
    api.get('products').then(res => {
      setProduct(res.data)
    })
  }, [ id])

  async function handleDetail(id) {
    await api.get(`product/${id}`)
      .then(res => {
        setProductDetail(res.data)

      })
    document.getElementById('modal').classList.add('mostrar')
  }

  function closeDetail() {
    document.getElementById('modal').classList.remove('mostrar')
  }

  function formatPrice(price) {

    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)

  }

  async function handleDelete(id) {

    try {
      await api.delete(`product/${id}`)
      setProduct(produts.filter(product => product.id_product !== id))
      closeDetail()
    } catch (error) {
      alert('Erro ao deletar o produto')
    }

  }

  const history = useHistory()
  function handleLogout() {
    localStorage.clear()
    history.push('/')

  }

  return (
    <section className="home-container">
      <header>
        <h1> Bem vindo , {nameUser} </h1>

        <Link to="/newProducts" className="btn"> Cadastrar Novo Produto</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#1F53E4" />
        </button>
      </header>
      <div>
        <ul>

          {
            produts.map(product => (

              <li key={product.id_product}>
                <img src={product.image} alt="image{product.name}" />
                <h2> {product.name_product}</h2>
                <span> {formatPrice(product.value)}</span>
                <Link to="/home" onClick={() => handleDetail(product.id_product)} className="back-link">
                  Detalhes
                <FiArrowRight size={20} color="000" />
                </Link>

              </li>

            ))

          }

        </ul>

      </div>
      <aside id="modal">
        <section>
          <FiX color="000" size={18} onClick={() => closeDetail()} />
          <h3>Detalhe do produto{produtDetail.name_product}</h3>
          <div>
            <img src={produtDetail.image} alt="Produto" />
            <div className="content">
              <p>{produtDetail.description}</p>
              <span>{formatPrice(produtDetail.value)}</span>
              <Link to={`/editProduct/${produtDetail.id_product}`} className="btn">Editar produto</Link>
              <button className="btn btn-light" onClick={() => handleDelete(produtDetail.id_product)}>Excluir produto</button>
            </div>
          </div>
        </section>
      </aside>

    </section>

  );
}
