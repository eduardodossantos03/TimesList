import './listTimes.css';
import Colaboradores from '../colaboradores';


const ListTimes = (props) => {
    const times = [
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5',
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF',
        }
    ];

    return (
    (props.colaboradores.length)> 0 ? <div className="times">
        {times.map((time,index)=>(
        <div  
        key={time.nome} 
        style={{backgroundColor: time.corSecundaria, color: time.corPrimaria}}>
            <h3>{time.nome}</h3>
        {props.colaboradores.filter((preto)=> preto.time === time.nome).map((colaborador, index)=>
            (<Colaboradores
                key={index}
                imagem={colaborador.imagem}
                nome={colaborador.nome} 
                cargo={colaborador.cargo}/>
                ))}
        </div>
        ))}
    </div>
    : null
    );
};

export default ListTimes;
