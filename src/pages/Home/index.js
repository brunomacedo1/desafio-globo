import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useAuth } from "../../services/hooks/useAuth";
import { useHistory } from "react-router";


const cards = [
  {
    id: 1,// identificador
    texto: "Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo", // texto do card
    data_criacao:  new Intl.DateTimeFormat('pt-BR').format(new Date()), // data da criação do card
    data_modificacao: new Intl.DateTimeFormat('pt-BR').format(new Date()),// data da última alteração do card
    tags: {
      id: 1,
      name: "TEMPORADA",
    } // tags vinculas ao card
  },
  {
    id: 2,// identificador
    texto: "Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo", // texto do card
    data_criacao:  new Intl.DateTimeFormat('pt-BR').format(new Date()), // data da criação do card
    data_modificacao: new Intl.DateTimeFormat('pt-BR').format(new Date()),// data da última alteração do card
    tags: {
      id: 1,
      name: "TEMPORADA",
    } // tags vinculas ao card
  },
  {
    id: 3,// identificador
    texto: "Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo", // texto do card
    data_criacao:  new Intl.DateTimeFormat('pt-BR').format(new Date()), // data da criação do card
    data_modificacao: new Intl.DateTimeFormat('pt-BR').format(new Date()),// data da última alteração do card
    tags: {
      id: 1,
      name: "TEMPORADA",
    } // tags vinculas ao card
  },
  {
    id: 4,// identificador
    texto: "Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo", // texto do card
    data_criacao:  new Intl.DateTimeFormat('pt-BR').format(new Date()), // data da criação do card
    data_modificacao: new Intl.DateTimeFormat('pt-BR').format(new Date()),// data da última alteração do card
    tags: {
      id: 1,
      name: "TEMPORADA",
    } // tags vinculas ao card
  },
  {
    id: 5,// identificador
    texto: "Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo", // texto do card
    data_criacao:  new Intl.DateTimeFormat('pt-BR').format(new Date()), // data da criação do card
    data_modificacao: new Intl.DateTimeFormat('pt-BR').format(new Date()),// data da última alteração do card
    tags: {
      id: 1,
      name: "TEMPORADA",
    } // tags vinculas ao card
  },
]

export function Home() {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    //Criar requisição para popular os dados de card
  },[])
  
  if(!isAuthenticated) {

    setTimeout(() => {
      history.push("/login")
    }, 5000)

    return(
      <div>
        <h1>
          Faça login para visualizar página, <br/> você será redirecionado automaticamente
        </h1>
        <Link to="/login">
          <button>
            Login
          </button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <Header />
      <Card cards={cards}/>
    </>
  )
}