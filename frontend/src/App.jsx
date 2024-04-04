import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./components/Card/Card";
import { FaPlus } from "react-icons/fa";


function App() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pessoas');
        setPessoas(response.data);
      }

      catch (error) {
        console.log(error);
      }
    }

    fetchPessoas();
  }, []);

  function handleDelete(id) {
    const updatedPessoas = pessoas.filter(pessoa => pessoa.id !== id);
    setPessoas(updatedPessoas);
  }

  return (
    <main className="main">
      <h1>Lista de pessoas</h1>
      <div className="list">
        {
          pessoas.map(
            (pessoa, index) => (
              <Card
                key={index}
                id={pessoa.id}
                nome={pessoa.nome}
                email={pessoa.email}
                numero={pessoa.numero}
                onDelete={handleDelete}
              />
            )
          )
        }
      </div>
      <Link className="floatButton" to={'/create/'}><FaPlus/></Link>
    </main>
  )
}

export default App;