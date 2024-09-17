import React, { Dispatch, SetStateAction, useState } from 'react'

// Components
import Filter from './Filter/Filter'
import ActionButtons from './ActionButtons/ActionButtons'
import Actions from './Actions/Actions'
import Button from '../ui/Button'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

// Stores, utils, libs
import { Products } from '@/types/Products'

// CSS
import styles from './Main.module.sass'

type MainProps = {
  products: Products[],
  setProducts: Dispatch<SetStateAction<Products[]>>
}

function Main(props: MainProps) {

  const [barCode, setBarCode] = useState('5643242134323099')
  const [aticleNumber, setAticleNumber] = useState('ДжЖСинМом0823')
  const [size, setSize] = useState('44')

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
      <Filter
        barCode={barCode}
        size={size}
        aticleNumber={aticleNumber}
        setAticleNumber={setAticleNumber}
        setBarCode={setBarCode}
        setSize={setSize}
      />
      <ActionButtons 
        data={props.products} 
        setProducts={props.setProducts}
        barCode={barCode}
        aticleNumber={aticleNumber}
        size={size}
      />
      <Actions setProducts={props.setProducts} />
    </div>
  )
}

export default Main