import { memo } from 'react'
import { SearchBox } from '../SearchBox'
import styles from './styles.module.scss'
import dotsImg from '../../assets/three_dots.svg'

export function CardComponent({cards, handleFetchMoreInsights, handleSearch}) {
  return (
    <div  className={styles.cardContainer}>
      {
        cards?.cards?.map(card=> {
          return (
            <div key={card.id} className={styles.cardContent}>
              <p>
                {card.texto}
              </p>
              {
                card.tags && (
                  <div>
                    <strong>{card.tags.name}</strong>
                  </div>
                )
              }
            </div>
          )
        })
      }

      { cards?.next && (
        <div className={styles.cardButtons}>
          <img src={dotsImg} alt="Pontos" />
          <button type="button" onClick={handleFetchMoreInsights}>Toque para exibir mais Insights</button>
        </div>
      )}

      <SearchBox className={styles.searchBox} handleSearch={handleSearch}/>
    </div>
  )
}

export const Card = memo(CardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.cards, nextProps.cards)
})
