import { memo } from 'react'
import { SearchBox } from '../SearchBox'
import styles from './styles.module.scss'

export function CardComponent({cards}) {
  
  return (
    <div  className={styles.cardContainer}>
      {
        cards?.map(card=> {
          return (
            <div key={card.id} className={styles.cardContent}>
              <p>
                {card.texto}
              </p>
              {
                card.tag && (
                  <div>
                    <strong>{card.tag.name}</strong>
                  </div>
                )
              }
          </div>
          )
        })
      }
      <SearchBox className={styles.searchBox}/>
    </div>
  )
}

export const Card = memo(CardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.cards, nextProps.cards)
})
