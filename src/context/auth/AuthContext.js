import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Redirect, useHistory } from "react-router";
import { api } from '../../services/api'

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ user, setUser ] = useState(null);
  const [ token, setToken ] = useState(null);
  const history = useHistory();
  const  isAuthenticated = !!user;

  useEffect(() => {
    setToken(localStorage.getItem('token'))

    if(!token) {
      return (<Redirect to="/login" /> )
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
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData()

  }, [token])

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
          setToken(response.data.key)
          setUser(data)
          history.push("/")
        }
      }

    } catch (err) {
      console.log(err)
      toast.error(' ao fazer login, tente novamente.')
    }
  }

  async function signOut() {
    setIsLoading(true)
    try {
      await api.post('/rest-auth/logout/')
      localStorage.clear()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
      setToken(null)
      history.push('/login')
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, setUser, isAuthenticated, signOut, isLoading, token }}>
      {children}
    </AuthContext.Provider>
  )
}