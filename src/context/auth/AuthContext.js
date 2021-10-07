import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { api } from '../../services/api'

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  const history = useHistory();
  const [ user, setUser ] = useState();
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(!token) {
      return
    }

    async function fetchUserData() {
      const { data } = await api.get('rest-auth/user/',{
        headers: {
          'Authorization': `Token ${token}` 
        }
      })
      setUser(data)
    }

    fetchUserData()

  }, [])

  async function signIn(formData) {
    
    if(!formData.username) {
      toast.error('Username é obrigatório')
      return
    }
  
    if(!formData.password) {
      toast.error('Senha é obrigatória')
      return
    }

    try {
      const response = await api.post('/rest-auth/login/', formData)
      
      if(response.status === 200) {
        const token = response.data.key
        localStorage.setItem('token', token)

        const { data, status} = await api.get('rest-auth/user/',{
          headers: {
            'Authorization': `Token ${token}` 
          }
        })

        if(status === 200) {
          setUser(data)
          history.push("/")
          return;
        }

        toast.error('Algo deu errado, tente novamente')
        return
      }

    } catch (err) {
      toast.error('Erro ao fazer login, tente novamente.')
    }
  }

  async function signOut() {
    await api.post('/rest-auth/logout/')
    localStorage.clear()
    history.push('/login')
  }

  return (
    <AuthContext.Provider value={{ signIn, user, setUser, isAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}