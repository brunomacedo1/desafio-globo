import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { api } from "../../services/api";
import { useModal } from "../../services/hooks/useModal";
import styles from './styles.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1F2029'
  },
};

export function RegistrationModal() {

  const { isModalOpen, handleCloseModal } = useModal();
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password1, setPassword ] = useState('');
  const [ password2, setPasswordConfirmation ] = useState('');

  function resetForm() {
    setEmail('')
    setUsername('')
    setPassword('')
    setPasswordConfirmation('')
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if(!username) {
      toast.error('Usuário obrigatório.')
      return
    }
    if(!email) {
      toast.error('Email obrigatório.')
      return
    }
    if(!password1) {
      toast.error('Senha obrigatória.')
      return
    }
    if(!password2) {
      toast.error('Confirmção de senha obrigatória.')
      return
    }

    if(password1 !== password2){
      toast.error('Senhas diferentes, favor corrigir.')
      return
    }

    const formData = {
      username,
      email,
      password1,
      password2,
    }

    try {
      const { status } = await api.post('/rest-auth/registration/', formData)

      if(status === 201) {
        handleCloseModal();
        resetForm();
        toast.success('Usuário criado com sucesso.')
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return(
    <Modal 
      isOpen={isModalOpen} 
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Registre seu usuário</h1>
      <form onSubmit={handleSubmit} className={styles.registrationContent}>
        <label>Usuário:</label>
        <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)}/>

        <label>Email:</label>
        <input type="email" value={email} onChange={ e=> setEmail(e.currentTarget.value)}/>

        <label>Senha:</label>
        <input type="password" value={password1} onChange={e => setPassword(e.currentTarget.value)}/>

        <label>Confirmar senha:</label>
        <input type="password" value={password2} onChange={e => setPasswordConfirmation(e.currentTarget.value)}/>

        {password1 !== password2 &&(
          <span>As senhas estão diferentes, favor corrigir.</span>
        )}

        <button type="submit">Enviar</button>
      </form>
    </Modal>
  )
}