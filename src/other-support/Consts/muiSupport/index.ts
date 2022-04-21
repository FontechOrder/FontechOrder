import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme()
export const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
