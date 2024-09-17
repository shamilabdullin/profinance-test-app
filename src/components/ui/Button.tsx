'use client'
import React from 'react'
import { Button as MButton, styled } from '@mui/material';

export const Button = styled(MButton)(({ theme, variant }) => ({
  textTransform: 'none',
  borderRadius: 20,
  boxShadow: 'none'
}));

export default Button