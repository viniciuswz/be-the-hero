import React , {useState} from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import logoImage  from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident(){

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    if(ongId == null){
        alert('Você precisa estar logado para acessar essa área');
        history.push('/');
    }


    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value,setValue] = useState();

    const data = {
        title,
        description,
        value,
    }
    async function handleSubmit(e){
        e.preventDefault();
        try{
        
            await api.post('incidents',data,{
                headers:{
                    Authorization: ongId,
                }
            });

            alert('Caso cadastrado com sucesse.')
            history.push('/profile');
            
        }catch(err){
            alert('Erro ao cadatrar');
        }
    }



    return (
        <div className="new-incident-container">
            <dv className="content">
                <section>
                 <img src={logoImage} alt="Bethe hero"/>
                 <h1>Cadastrar novo caso</h1>
                 <p>descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                 <Link className="back-link" to="/profile">
                     <FiArrowLeft size={16} color="#E02410"/>
                     voltar para a home
                 </Link>
                </section>
                <form onSubmit={handleSubmit}>

                 <input 
                    type="text" 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={ e=> setTitle(e.target.value)}
                />
                 <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                />

                 <input 
                    type="text"
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />

                 <button className="button" type="submit">Cadastrar</button>
                </form>
            </dv>
        </div>
     );
}
