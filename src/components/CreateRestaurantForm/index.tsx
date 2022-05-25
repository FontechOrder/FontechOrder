import React from 'react'
import classnames from 'classnames'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Paper,
  Box,
  Grid,
  TextField,
  Checkbox,
  IconButton,
  FormHelperText,
  Stack,
} from '@mui/material'

import { LoadingButton } from '@mui/lab'

import CloseIcon from '@mui/icons-material/Close'

import SelectRestaurantImageButton from '@components/SelectRestaurantImageButton'
import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'

import createRestaurants from '@supabase-folder/functions/createRestaurants'

type CreateRestaurantObject = {
  hidden: boolean
  name: string
  image_url: string
  telephone: string
  address: string
}

const textFieldKeys: Array<
  keyof CreateRestaurantObject
> = ['name', 'telephone', 'address']

const phoneRegExp =
  /^(\d{2,3}-?|\(\d{2,3}\))?\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})$/

const CreateRestaurantSchema = Yup.object().shape(
  {
    hidden: Yup.bool().transform(
      value => !!value
    ),
    name: Yup.string()
      .required('需要餐廳名')
      .min(2, '太少2~'),
    image_url:
      Yup.string().required('需要餐廳圖片'),
    telephone: Yup.lazy(value =>
      !value
        ? Yup.string()
        : Yup.string().matches(
            phoneRegExp,
            'Phone number is not valid'
          )
    ),
    address: Yup.string(),
  }
)

const CreateRestaurantForm: React.FC = () => {
  const [isLoading, setIsLoading] =
    React.useState(false)

  const {
    reset,
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRestaurantObject>({
    resolver: yupResolver(CreateRestaurantSchema),
  })

  const [watchImageUrl] = watch(['image_url'])

  const selectRestaurantImageButtonCallback =
    React.useCallback(
      (imageUrl: string) =>
        setValue('image_url', imageUrl, {
          shouldValidate: true,
        }),
      [setValue]
    )

  const selectImageContent = React.useMemo(() => {
    if (!watchImageUrl) {
      return (
        <SelectRestaurantImageButton
          imageUrlCallback={
            selectRestaurantImageButtonCallback
          }
        />
      )
    }

    return (
      <Box
        className={classnames(
          'relative m-auto mt-3 aspect-[3/4] w-[30%]'
        )}
      >
        <ZoomImageWithRelativeParent
          priority
          src={watchImageUrl}
          alt={'select-image-url'}
          layout="fill"
        />
        <IconButton
          className="!absolute !top-0 !right-0 !translate-x-1/2 !-translate-y-1/2"
          onClick={() =>
            setValue('image_url', '')
          }
        >
          <CloseIcon />
        </IconButton>
      </Box>
    )
  }, [
    watchImageUrl,
    setValue,
    selectRestaurantImageButtonCallback,
  ])

  return (
    <Paper className="p-2">
      <Grid container spacing={1}>
        <Grid
          className="!my-auto flex flex-row"
          item
          xs={6}
          sm={5}
          md={5}
        >
          <Checkbox
            size="small"
            required
            id="hidden"
            {...register('hidden')}
          />

          <Stack>
            {textFieldKeys.map(key => (
              <TextField
                key={`create-restaurant-form-${key}`}
                required={key === 'name'}
                id={key}
                label={key}
                fullWidth
                variant="standard"
                {...register(key)}
                error={!!errors[key]}
                helperText={
                  errors[key]?.message ?? ' '
                }
              />
            ))}
          </Stack>
        </Grid>
        <Grid
          className="!my-auto flex flex-row"
          item
          xs={6}
          sm={5}
          md={5}
        >
          {selectImageContent}
          <FormHelperText error>
            {errors.image_url?.message ?? ' '}
          </FormHelperText>
        </Grid>
        <Grid
          className="!my-auto"
          item
          xs={12}
          sm={2}
          md={2}
        >
          <LoadingButton
            loading={isLoading}
            className="xs:w-auto w-full"
            variant="contained"
            onClick={handleSubmit(data => {
              const asyncCreateRestaurants =
                async () => {
                  if (isLoading) {
                    return
                  }
                  setIsLoading(true)

                  try {
                    await createRestaurants([
                      data,
                    ])

                    reset({
                      hidden: false,
                      name: '',
                      image_url: '',
                      telephone: '',
                      address: '',
                    })
                  } catch {
                    console.log(
                      'asyncCreateRestaurants error'
                    )
                  }

                  setIsLoading(false)
                }
              asyncCreateRestaurants()
            })}
          >
            CREATE
          </LoadingButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CreateRestaurantForm
