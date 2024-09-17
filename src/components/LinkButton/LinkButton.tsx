import React from 'react'
import styles from './LinkButton.module.sass'
import Button from '../ui/Button'
import SmsIcon from '@mui/icons-material/Sms';

function LinkButton() {
  return (
    <Button 
      className={styles.linkButton}
      variant='contained'
      size='large'
      startIcon={<SmsIcon />}
    >
      Связаться с нами
    </Button>
  )
}

export default LinkButton