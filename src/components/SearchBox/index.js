import searchIcon from '../../assets/search.svg'
export function SearchBox({className}) {
  return(
    <div type="button" className={className}>
      <input 
        type="text" 
        placeholder="Pesquise por termos ou categorias..."
        onChange={e => console.log(e.currentTarget.value)}
      />
      <button onClick={() => console.log('oi')}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  )
}