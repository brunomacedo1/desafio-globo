import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Redirect, useHistory } from "react-router";
import { api } from '../../services/api'

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ user, setUser ] = useState(null);
  const history = useHistory();
  const  isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(!token) {
      <Redirect to="/login" />
    }

    async function fetchUserData() {
      try {
        const { data } = await api.get('rest-auth/user/',{
          headers: {
            'Authorization': `Token ${token}` 
          }
        })
        setUser(data)
      } catch (err) {
        toast.error(err.message)
      } finally {
        setIsLoading(false);
      }
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
        localStorage.setItem('token', response.data.key)

        const { data, status} = await api.get('rest-auth/user/',{
          headers: {
            'Authorization': `Token ${response.data.key}` 
          }
        })

        if(status === 200) {
          setUser(data)
          history.push("/")
          return;
        }

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
    <AuthContext.Provider value={{ signIn, user, setUser, isAuthenticated, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}