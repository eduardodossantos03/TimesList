import './login.css';


function Login(props) {
    return (
        <div className="entrada">
            <label>{props.label}</label>
            <input 
            type="text" 
            value={props.valor} 
            onChange={(e) => props.aoAlterar(e.target.value)} 
/>

        </div>
    );
}

export default Login;



