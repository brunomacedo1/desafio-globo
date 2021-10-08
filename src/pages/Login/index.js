import { useState } from 'react';
import { useAuth } from '../../services/hooks/useAuth';
import styles from './styles.module.scss';

export function Login() {
  const { signIn } = useAuth();
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
      </form>
    </div>
  )
}