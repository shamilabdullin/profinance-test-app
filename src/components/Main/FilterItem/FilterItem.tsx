import { Paper, TextField } from '@mui/material'
import React from 'react'
import styles from './FilterItem.module.sass'

type FilterItemProps = {
  name: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function FilterItem(props: FilterItemProps) {
  return (
    <Paper className={styles.filterItem} elevation={0} variant='outlined'>
      <div style={{ fontWeight: 500 }}>{props.name}</div>
      <TextField 
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        className={styles.filterItem__textField}       
        variant="outlined"
        sx={{
          "& fieldset": { border: 'none' },
        }}
      />
    </Paper>
  )
}

export default FilterItem