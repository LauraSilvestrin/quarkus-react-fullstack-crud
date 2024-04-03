import axios from "axios";
import { Link } from "react-router-dom";
import '../Static/Css/card.css'
import '../Static/Css/button.css'
import '../Button/button.jsx'

// Icones
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Card({ id, nome, numero, email, onDelete }) {

    const excluir = async () => {
        try {
            await axios.delete("http://localhost:8080/api/pessoas/" + id);
            onDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="card">
            <div className="dados highText">{nome}</div>
            <div className="dados text"><MdOutlineEmail /> {email}</div>
            <div className="dados text"><BsTelephone /> {numero}</div>
            <div className="opcoes">
                <Link className="button" to={`/edit/${id}`}><FaRegEdit />Editar</Link>
                <button className="button" onClick={excluir}><FaRegTrashAlt />Excluir</button>
            </div>
        </div>
    )

}

export default Card;