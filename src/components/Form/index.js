import { useState } from "react"
import styles from './styles.module.scss'


export function Form({handleSubmitForm}) {
  const [ insight, setInsight] = useState('');
  const [ category, setCategory ] = useState('');

  function resetForm() {
    setInsight('');
    setCategory('')
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      texto: insight,
      tag_name: category,
    }

    handleSubmitForm(formData);
    resetForm()
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
      <button type="submit" onClick={handleSubmit}>PUBLICAR</button>
    </div>
  )
}