import React, { Dispatch, SetStateAction } from 'react'
import styles from './Main.module.sass'
import Filter from './Filter/Filter'
import ActionButtons from './ActionButtons/ActionButtons'
import Actions from './Actions/Actions'
import Button from '../ui/Button'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Products } from '@/app/page'

type MainProps = {
  products: Products[],
  setProducts: Dispatch<SetStateAction<Products[]>>
}

function Main(props: MainProps) {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <h1>Остатки сформированы на 01.04.2023 г.</h1>
        <Button 
          className={styles.main__title__button} 
          startIcon={<LibraryBooksIcon />}
        >
          Инструкции
        </Button>
      </div>
      <Filter />
      <ActionButtons data={props.products} />
      <Actions setProducts={props.setProducts} />
    </div>
  )
}

export default Main