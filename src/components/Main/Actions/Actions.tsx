import React, { Dispatch, SetStateAction } from 'react'
import Button from '@/components/ui/Button'
import { Divider } from '@mui/material'
import { Products } from '@/app/page'
import products from '../../../../data.json'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Actions.module.sass'

type ActionsProps = {
  setProducts: Dispatch<SetStateAction<Products[]>>
}

function Actions(props: ActionsProps) {

  const handleSetData = () => {
    props.setProducts(products)
  }

  return (
    <div className={styles.actions}>
      <Divider />
        <div className={styles.actions__blocks}>
          <div className={styles.actions__blocks__start}>
            <Button 
              className={styles.actions__blocks__start__button__1}
              onClick={handleSetData}
              startIcon={<DriveFolderUploadIcon style={{ marginBottom: '4px' }} />}
            >
              Загрузить данные из csv
            </Button>
            <Button 
              className={styles.actions__blocks__start__button__2}
              startIcon={<CreateNewFolderIcon style={{ marginBottom: '4px' }} />}
            >
              Изменить данные
            </Button>
          </div>
          <div className={styles.actions__blocks__end}>
            <Divider orientation="vertical" flexItem variant="middle" />
            <Button 
              className={styles.actions__blocks__end__button}
              endIcon={<CloseIcon style={{ marginBottom: '2px' }} />}
              onClick={() => props.setProducts([])}
            >
              Очистить
            </Button>
          </div>
        </div>
      <Divider />
    </div>
  )
}

export default Actions