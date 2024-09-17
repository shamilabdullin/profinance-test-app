'use client'
import React from 'react'
import Button from '../../ui/Button'
import styles from './ActionButtons.module.sass'
import IosShareIcon from '@mui/icons-material/IosShare';
import { Products } from '@/app/page';
import { downloadFile } from '@/utils/downloadFiles';

type ActionButtonsProps = {
  data: Products[],
}

function ActionButtons(props: ActionButtonsProps) {

  const handleExportData = () => {
    const obj = props.data
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    downloadFile(blob, 'Новый файл')
    console.log('work')
  }

  return (
    <div className={styles.actionButtons}>
      <Button variant='contained' className={styles.actionButtons__first}>Сформировать</Button>
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