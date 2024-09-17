import React from 'react'
import { Divider } from '@mui/material'
import styles from './InfoCard.module.sass'

function InfoCard() {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCard__header}><h5>Техническая поддержка</h5></div>
      <div className={styles.infoCard__links}>
        <div className={styles.infoCard__links__item}>
          <div className={styles.title}>Номер поддержки:</div>
          <div className={styles.content}>8 (999) 999 99 99</div>
        </div>
        <div className={styles.infoCard__links__item}>
          <div className={styles.title}>Почта поддержки:</div>
          <div className={styles.content}>pf1@werthesest.ru</div>
        </div>
      </div>
      <div className={styles.infoCard__workTime}>
        <div className={styles.title}>Часы работы:</div>
        <div className={styles.content}>Пн-Пт с 9:00 до  19:00 мск</div>
      </div>
      <div className={styles.infoCard__list}>
        <div className={styles.infoCard__list__item}>Пользовательское соглашение</div>
        <Divider style={{ backgroundColor: 'var(--dark-500)' }}/>
        <div className={styles.infoCard__list__item}>Политика конфиденциальности</div>
        <Divider style={{ backgroundColor: 'var(--dark-500)' }}/>
        <div className={styles.infoCard__list__item}>Юридическая информация</div>
        <Divider style={{ backgroundColor: 'var(--dark-500)' }}/>
        <div className={styles.infoCard__list__item}>Публичная оферта</div>
      </div>
    </div>
  )
}

export default InfoCard