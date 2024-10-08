import React from 'react'

// Components
import Button from '../ui/Button'
import SmsIcon from '@mui/icons-material/Sms'

// CSS
import styles from './LinkButton.module.sass'

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