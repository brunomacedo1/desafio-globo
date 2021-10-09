import { useState } from 'react';
import { useAuth } from '../../services/hooks/useAuth';
import styles from './styles.module.scss';
import { useModal } from '../../services/hooks/useModal';

export function Login() {
  const { signIn } = useAuth();
  const { handleOpenModal} = useModal()
  const [ username, setUserName] = useState('');
  const [ password, setPassword] = useState('');
 
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      username,
      password,
    }
    await signIn(formData);
  }

  return (
    <>
      <div className={styles.loginWrapper}>
        <form className={styles.loginContainer} onSubmit={handleSubmit}>
          <label>Usário:</label>
          <input
            type="text"
            name="username"
            onChange={e => setUserName(e.currentTarget.value)}
          />
          
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.currentTarget.value)}
          />

          <button type="submit">Entrar</button>
          <button type="button" onClick={handleOpenModal}>Registrar</button>
        </form>
      </div>
    </>
  )
}