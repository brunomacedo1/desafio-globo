import { useState } from "react"
import styles from './styles.module.scss'
import toast from "react-hot-toast";

export function Form() {
  const [ insight, setInsight] = useState('');
  const [ category, setCategory ] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();

    if(!insight || insight.trim() === ''){
      toast.error('O insight é obrigatório. Tente novamente!')
      return;
    }

    if (insight.length > 400) {
      toast.error('O limite de caracteres é 400.')
      return;
    }

    //requisição a api.
    toast.success('Insight criado com sucesso!')
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formContent} >
        <label htmlFor="Insight">INSIGHT</label>
        <textarea 
          name="Insight"
          placeholder="Escreva aqui o seu insight..."
          value={insight} 
          onChange={e => setInsight(e.currentTarget.value)}
        />
        
        <div></div>

        <span>qtd de caracteres: {insight.length}</span>
        <span>limite de caracteres: 400</span>

        <label htmlFor="Categoria">CATEGORIA</label>
        <input 
          name="Categoria"
          value={category}
          onChange={e => setCategory(e.currentTarget.value)}
          type="text" 
          placeholder="Adicione uma categoria(opcional)..."
        />

        <div></div>
      </form>
      <button type="submit" onClick={handleSubmitForm}>PUBLICAR</button>
    </div>
  )
}