import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useAuth } from "../../services/hooks/useAuth";
import { Redirect } from 'react-router-dom'


export function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const [ cards, setCards ] = useState([]);

  
  useEffect(() => {
    async function fetchCards() {
      const token = localStorage.getItem('token')
      try{
        const { data, status } = await api.get('api/cards/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });
        if(status === 200) {
          const card = data.map(card => {
            return {
              id: card.id,
              texto: card.texto,
              tag: card.tags
            }
          })

          setCards(card)
        }
      } catch(err){
        return
      }
    }

    fetchCards()
  },[])

  if(isLoading) {
    return(
      <div></div>
    )
  }
  
  return (
    <>
    { isAuthenticated ? (
        <>
          <Header />
          <Card cards={cards}/>
        </>
      ) : (
        <Redirect to="/login" />
      )
    }
    </>
  )
}