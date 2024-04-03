import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import '../Static/Css/form.css'
import '../Static/Css/button.css'

function Edit() {
    const [pessoa, setPessoa] = useState({
        id: 0,
        nome: '',
        email: '',
        numero: ''
    });

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchPessoa = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/pessoas/' + id);

                setPessoa(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPessoa();
    }, []);

    const handleChange = (event) => {
        setPessoa({ ...pessoa, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put('http://localhost:8080/api/pessoas/' + id, pessoa);
            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="main">
            <h1>Editar Informações</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Nome:</label>
                <input type="text" name="nome" value={pessoa.nome} onChange={(e) => handleChange(e)} />

                <label>Email:</label>
                <input name="email" value={pessoa.email} onChange={(e) => handleChange(e)} />

                <label>Telefone:</label>
                <InputMask mask="(99) 99999-9999" name="numero" value={pessoa.numero} onChange={(e) => handleChange(e)} />

                <div className="opcoes">
                    <Link  to='/'>
                        <button className="button" >Cancelar</button>
                    </Link>
                    <button className="button" type="submit">Enviar</button>        
                </div>
            </form>
        </div>
    )
}
export default Edit;
