import React from 'react'
import styles from './Header.module.sass'
import { Paper } from '@mui/material'
import User from './User'
import HeaderButtons from './HeaderButtons'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Header() {
  return (
    <Paper className={styles.header} elevation={0}>
      <div className={styles.header__leftBlock}>
        <User name='Иванов И.И' avatarUrl={''}/>
        <div className={styles.header__leftBlock__label}>
          <CalendarMonthIcon />
          <span>Тариф до 15.04.2024</span>
        </div>
      </div>
      <HeaderButtons />
    </Paper>
  )
}

export default Header