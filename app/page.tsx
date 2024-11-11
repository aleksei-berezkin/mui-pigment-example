'use client'

import { Typography } from '@mui/material';
import { css, useTheme } from '@mui/material-pigment-css';
import { Theme } from '@mui/material/styles';

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: Theme;
  }
}

const myClass = css(({ theme }) => ({
  padding: theme.spacing(1)
}))

export default function Home() {
  const theme = useTheme()

  console.log(theme)

  return (
    <Typography className={ myClass }>MUI + pigment example</Typography>
  );
}
