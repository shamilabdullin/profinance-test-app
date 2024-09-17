import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

type UserProps = {
  name: string,
  avatarUrl: string
}

function User(props: UserProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {props.avatarUrl ? <img src={props.avatarUrl} alt="" /> : <AccountCircleIcon />}
      <div style={{ marginLeft: '0.25rem' }}>{props.name}</div>
    </div>
  )
}

export default User