import { useState } from 'react';
import searchIcon from '../../assets/search.svg'

export function SearchBox({className, handleSearch}) {
  const [ search, setSearch ] = useState('');

  function handleSearchSubmit() {
    handleSearch(search)
    setSearch('')
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSearch(search)
    setSearch('')
  }
  return(
    <div  className={className}>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder="Pesquise por termos ou categorias..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </form>
      <button onClick={handleSearchSubmit}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  )
}