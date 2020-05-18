<<<<<<< HEAD
import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
=======
import React from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

<<<<<<< HEAD
import api from '../../services/api'

=======
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){
<<<<<<< HEAD
    const [id, setId] = useState('')
    const history = useHistory()

    //validar se a ong existe
    async function handleLogin(e){
        e.preventDefault()
    
    
        try{
            const response = await api.post('sessions', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        }catch(err){
        alert('Falha no login')
        }
    }

=======
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
    return(
       <div className="logon-container">
           <section className="form">
               <img src={logoImg} alt="Pet Resgate" />

<<<<<<< HEAD
               <form onSubmit={handleLogin}>
                   <h1>Faça logon</h1>
                   <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                   <button className="button" type="submit">Entrar</button>

                   <Link className="back-link" to="/register">
=======
               <form>
                   <h1>Faça logon</h1>
                   <input placeholder="Sua ID" />
                   <button className="button" type="submit">Entrar</button>

                   <Link to="/register">
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
                       <FiLogIn size={16} color="#E02041"/>
                       Não tenho cadastro
                    </Link>
               </form>

           </section>

       <img src={heroesImg} />

       </div>
    )
}