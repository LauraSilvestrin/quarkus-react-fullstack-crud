import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Static/Css/form.css'
import InputMask from 'react-input-mask';

function Create() {
    const [pessoa, setPessoa] = useState({
        nome: '',
        email: '',
        numero: ''
    });

    let navigate = useNavigate();

    const handleChange = (event) => {
        setPessoa({ ...pessoa, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8080/api/pessoas', pessoa);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="main">
                <h1>Cadastrar pessoa</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Nome:</label>
                    <input type="text" name="nome" onChange={(e) => handleChange(e)} />

                    <label>Email:</label>
                    <input name="email" onChange={(e) => handleChange(e)} />

                    <label>Telefone:</label>
                    <InputMask mask="(99) 99999-9999" name="numero" value={pessoa.numero} onChange={(e) => handleChange(e)} /><div className="opcoes">
                        <Link to='/'>
                            <button className="button" type="submit">Cancelar</button>
                        </Link>
                        <button className="button" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Create;