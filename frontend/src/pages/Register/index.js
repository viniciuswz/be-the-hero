import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImage from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [UF, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            UF
        };

       

        try{
            const response = await api.post('ongs',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/')
        } catch {
            alert('Erro no cadastro, tente novamente')
        }

        


    }
    return (
       <div className="register-container">
           <dv className="content">
               <section>
                <img src={logoImage} alt="Bethe hero"/>
                <h1>cadastro</h1>
                <p>faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02410"/>
                    Já tenho cadastro
                </Link>
               </section>
               <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={ email }
                    onChange={ e=> setEmail(e.target.value) }
                />
                <input
                    type="text"
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={ e => setWhatsapp(e.target.value)}
                />
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Cidade"
                        value={ city }
                        onChange={ e=> setCity(e.target.value)}
                    />
                    <input
                        type="text" 
                        placeholder="UF" 
                        style={{width:80}}
                        value={UF}
                        onChange={ e=> setUf(e.target.value) }
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button>
               </form>
           </dv>
       </div>
    );
}