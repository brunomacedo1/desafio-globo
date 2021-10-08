import { Redirect } from "react-router";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { useAuth } from "../../services/hooks/useAuth";
import toast from "react-hot-toast";
import { api } from "../../services/api";

export function AddInsight() {

  const { isAuthenticated, isLoading, token } = useAuth();

  if(isLoading) {
    return (
      <div></div>
    )
  }
  
  async function handleSubmitForm(formData) {

    const { texto } = formData;

    if(!texto || texto.trim() === ''){
      toast.error('O insight é obrigatório. Tente novamente!')
      return;
    }
    
    if (texto.length > 400) {
      toast.error('O limite de caracteres é 400.')
      return;
    }

    try {
      const {status} = await api.post('api/cards/', formData, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      if(status === 200) {
        toast.success('Insight criado com sucesso!')
        return;
      }
    } catch (err) {
      toast.error('Erro ao criar insight, tente novamente.')
      return;
    }
  }

  return (
    <>
      { isAuthenticated ? (
        <>
          <Header />
          <Form handleSubmitForm={handleSubmitForm}/>
        </>
      ) : (
        <Redirect to="/login"/>
      )}
    </>
  )
}