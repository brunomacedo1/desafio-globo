import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useAuth } from "../../services/hooks/useAuth";
import { Redirect } from 'react-router-dom'
import toast from "react-hot-toast";

export function Home() {
  const { isAuthenticated, isLoading, token } = useAuth();
  const [ cards, setCards ] = useState({});

  useEffect(() => {
    async function fetchCards() {
      try {
        const { data } = await api.get('api/cards/', {
            headers: {
              'Authorization': `Token ${token}`
            }
        });
        setCards({cards: data.results, next: data.next})
      } catch (err) {
        console.log(err)
      }
    }
    
    
    fetchCards() 
    
    
  }, [token])

  async function handleFetchMoreInsights() {
    try {
      const { data } = await api.get(cards.next, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const newArray = [ ...cards.cards, data.results]
      setCards({cards: newArray.flat(), next: data.next})
    } catch (err) {
      console.log(err)
    }
  }

  async function handleSearch(value) {
    try {
      const { data, status} = await api.get(`api/cards/${value}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })

      if(status === 200) {
        setCards({cards: data, next: null})
      }

      if(status === 204) {
        toast('Nenhum resultado disponível para pesquisa, digite outra categoria.')
      }
    } catch (err) {
      toast.error('Nenhum resultado disponível')
    }
  }

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
          <Card cards={cards} handleFetchMoreInsights={handleFetchMoreInsights} handleSearch={handleSearch}/>
        </>
      ) : (
        <Redirect to="/login" />
      )
    }
    </>
  )
}