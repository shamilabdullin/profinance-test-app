'use client'
import React from 'react'

// Components
import { Card, CardContent, Typography } from '@mui/material'
import MenuItem from './MenuItem'
import Button from '../ui/Button'
import CloseSharpIcon from '@mui/icons-material/CloseSharp'
import SettingsIcon from '@mui/icons-material/Settings'
import EditNoteIcon from '@mui/icons-material/EditNote'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

// CSS
import styles from './Menu.module.sass'

function Menu() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.card__content__header}>
          <Typography gutterBottom sx={{ fontSize: 14 }} component={'span'}>
            <div className={styles.card__content__header__logo}>
              <div className={styles.card__content__header__logo__start}>ФИН</div> 
              <div className={styles.card__content__header__logo__end}>Контроль</div>
            </div>
          </Typography>
          <Button 
            className={styles.card__content__header__button}
            endIcon={<CloseSharpIcon style={{ fontSize: '14' }} />}
          >
            Меню
          </Button>
        </div>
        <div className={styles.card__content__body}>
          <MenuItem children='Настройки' icon={SettingsIcon}></MenuItem>
          <MenuItem children='Внесение данных' icon={EditNoteIcon}></MenuItem>
          <MenuItem children='Отчеты' icon={StickyNote2Icon}></MenuItem>
          <MenuItem children='База знаний' icon={LibraryBooksIcon}></MenuItem>
        </div>
      </CardContent>
    </Card>
  )
}

export default Menu