import React from 'react'
import Button from '../ui/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function HeaderButtons() {
  return (
    <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
      <Button 
        variant='outlined' 
        style={{ height: 40, color: 'var(--dark-900)', borderColor: 'var(--dark-900)' }}
      >
          Выйти
        </Button>
      <Button 
        variant='contained' 
        style={{ backgroundColor: 'var(--orange-400)', height: 40, fontSize: 14 }}
        endIcon={<ArrowForwardIcon />}
        size='small'
      >
        О нас
      </Button>
    </div>
  )
}

export default HeaderButtons