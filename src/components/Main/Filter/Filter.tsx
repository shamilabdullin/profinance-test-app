import React from 'react'

// Components
import FilterItem from '../FilterItem/FilterItem'
import { Paper } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

// CSS
import styles from './Filter.module.sass'

type FilterProps = {
  barCode: string,
  aticleNumber: string,
  size: string,
  setBarCode: React.Dispatch<React.SetStateAction<string>>,
  setAticleNumber: React.Dispatch<React.SetStateAction<string>>,
  setSize: React.Dispatch<React.SetStateAction<string>>,
}

function Filter({ 
  aticleNumber, 
  barCode, 
  size, 
  setAticleNumber, 
  setBarCode, 
  setSize 
}: FilterProps) {

  return (
    <div className={styles.filter}>
      <FilterItem name='Баркод' value={barCode} setValue={setBarCode} />
      <FilterItem name='Артикул' value={aticleNumber} setValue={setAticleNumber} />
      <FilterItem name='Размер' value={size} setValue={setSize} />
      <Paper className={styles.filter__category} elevation={0}>
        <div className={styles.filter__category__start}>Категория</div>
        <div className={styles.filter__category__end}>
          <span style={{ marginRight: '1rem' }}>Джинсы</span>
          <ArrowDropDownIcon />
        </div>
      </Paper>
    </div>
  )
}

export default Filter