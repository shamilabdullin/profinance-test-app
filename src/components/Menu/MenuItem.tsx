import React from 'react'

// Components
import { Button, SvgIconTypeMap } from '@mui/material'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import { OverridableComponent } from '@mui/material/OverridableComponent'

// CSS
import styles from './MenuItem.module.sass'

type MenuItemProps = {
  children: string,
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

function MenuItem(props: MenuItemProps) {
  return (
    <Button 
      className={styles.menuItem}
      startIcon={<props.icon style={{ marginLeft: '8px' }} />}
      endIcon={<ArrowDropDownSharpIcon style={{ position: 'absolute', right: '10', top: '14' }} />}
    >
      {props.children}
    </Button>
  )
}

export default MenuItem