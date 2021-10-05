import { useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

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
  useEffect(() => {
    //Criar requisição para popular os dados de card
  },[])

  return (
    <>
      <Header />
      <Card cards={cards}/>
    </>
  )
}