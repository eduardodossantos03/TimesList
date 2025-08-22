import './formulario.css'
import { useState } from 'react';
import Login from '../login'
import ListaSuspensa from '../listaSuspensa';
import Botao from '../botao';

const Formulario = (props) => {
    const times = ['Front-End', 'Data Science', 'Devops','UX e Design','Mobile',' Inovação e Gestão'];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const prevencao = (e) => {
        e.preventDefault();
        props.listColaboradores({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('');
        setCargo('');
        setImagem('');
    }

    return (
        <div className="formulario">
            <form onSubmit={prevencao}>
                <Login  label="Nome" placeholder="Digite seu nome" valor={nome}  aoAlterar={setNome}/>
                <Login  label="Função" placeholder="Digite seu cargo" valor={cargo}  aoAlterar={setCargo}/>
                <Login label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterar={setImagem}/>
                <ListaSuspensa label="Times de Programação" itens={times} valor={time} aoAlterar={setTime}/>
                <Botao>Criar Card</Botao>
            </form>
        </div>
    );
};

export default Formulario;
