import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault(); // preve a acao do cadastro, com isso não recarregando a pagina 

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`); //para colocar variáveis em uma resposta de texto, colocar todo o texto entre acrase e $ antes da variavel

            history.push('/'); // Logo depois de ter o ID, ele te redirecionara para a pagina principal '/'
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>  
                        Não tenho cadastro
                    </Link>
                </section>
                    

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)} // uma Arrow function - funcao reduzida js - para armazenar os dados
                    />        
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />        
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />       

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div> 

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}