import { SearchBox } from '../SearchBox'
import styles from './styles.module.scss'

export function Card({cards}) {
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
      <SearchBox className={styles.searchBox}/>
    </div>
  )
}