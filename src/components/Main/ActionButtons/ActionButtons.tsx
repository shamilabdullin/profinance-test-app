'use client'
import React, { Dispatch, SetStateAction } from 'react'

// Components
import Button from '../../ui/Button'
import IosShareIcon from '@mui/icons-material/IosShare'

// Stores, utils, libs
import { downloadFile } from '@/utils/downloadFiles'
import { Products } from '@/types/Products'

// CSS
import styles from './ActionButtons.module.sass'

type ActionButtonsProps = {
  data: Products[],
  setProducts: Dispatch<SetStateAction<Products[]>>,
  barCode: string,
  aticleNumber: string,
  size: string
}

function ActionButtons({ aticleNumber, barCode, data, setProducts, size }: ActionButtonsProps) {

  const handleFilterData = () => {
    const filteredProducts = data
      .filter(product => product.id === barCode.trim() 
        && product.article === aticleNumber.trim() 
        && product.size === size.trim()
      )
    setProducts(filteredProducts)
  }

  const handleExportData = () => {
    const obj = data
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    downloadFile(blob, 'Новый файл')
  }

  return (
    <div className={styles.actionButtons}>
      <Button 
        variant='contained' 
        className={styles.actionButtons__first}
        onClick={handleFilterData}
      >
        Сформировать
      </Button>
      <Button 
        variant='contained' 
        className={styles.actionButtons__second}
        startIcon={<IosShareIcon style={{ marginBottom: '4px' }} />}
        onClick={handleExportData}
      >
        Экспорт
      </Button>
    </div>
  )
}

export default ActionButtons