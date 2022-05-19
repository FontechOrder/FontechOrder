import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material'

import authUserSignIn from '@supabase-folder/functions/authUserSignIn'

import UserLoginFormGoogleLoginButton from '@components/UserLoginForm/GoogleLoginButton'

import type { EmailPasswordObject } from '@other-support/types'

const CreateUserSchema = Yup.object().shape({
  email: Yup.string()
    .required('給我信箱喔')
    .email('這不是信箱'),
  password: Yup.string()
    .required('啊你的密碼咧？')
    .min(6, '太少6~')
    .max(20, '太多20吧~'),
})

const UserLoginForm: React.FC = () => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailPasswordObject>({
    resolver: yupResolver(CreateUserSchema),
  })

  const loginButtonClick =
    React.useCallback(() => {
      handleSubmit(async data => {
        if (isLoading) {
          return
        }

        setIsLoading(true)

        try {
          await authUserSignIn(data)

          reset({
            email: '',
            password: '',
          })

          setIsLoading(false)
        } catch {
          setIsLoading(false)
        }
      })()
    }, [handleSubmit, reset, isLoading])

  if (isLoading) {
    return <Box> Loading... </Box>
  }

  return (
    <Paper>
      <Box px={3} py={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              margin="dense"
              {...register('email')}
              error={!!errors.email}
            />
            <Typography
              className="h-6"
              variant="inherit"
              color="red"
            >
              {errors.email?.message ?? ' '}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              fullWidth
              margin="dense"
              {...register('password')}
              error={!!errors.password}
            />
            <Typography
              className="h-6"
              variant="inherit"
              color="red"
            >
              {errors.password?.message}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            className="flex justify-end sm:!flex-col sm:items-center sm:justify-center"
          >
            <Button
              className="self-end"
              variant="contained"
              color="primary"
              onClick={loginButtonClick}
            >
              LOGIN
            </Button>
          </Grid>

          <Grid
            className="flex"
            item
            xs={12}
            justifyContent="flex-end"
          >
            <UserLoginFormGoogleLoginButton />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default UserLoginForm
