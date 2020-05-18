<<<<<<< HEAD
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

//cadastro dos usuarios
export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {name, email, whatsapp, city, uf}

        try{
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        }catch(err){
            alert(`Erro no cadastro. Tente de novo`)
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                
                <img src={logoImg} alt="Pet Resgate"/>
                <h1>Register</h1>
                <p>Faça seu cadastro e ajude pessoas a encontrar heróis</p>
                <Link className="back-link" to="/">
                       <FiArrowLeft size={16} color="#E02041"/>
                       Retornar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>

                <div className="input-group">
                    <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                    <input placeholder="UF" value={uf} onChange={e => setUF(e.target.value)} style={{ width: 80 }}/>
                </div>

                <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>

    )
=======
import React from 'react'
import './styles.css'

export default function Register(){
    return <h1>Register</h1>
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
}