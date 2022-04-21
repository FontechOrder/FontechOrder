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
}

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

          <TextField
            required
            id="name"
            fullWidth
            variant="standard"
            {...register('name')}
            error={!!errors.name}
            helperText={
              errors.name?.message ?? ' '
            }
          />
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
              // console.log(
              //   `data: ${JSON.stringify(data)}`
              // )
              const asyncCreateRestaurants =
                async () => {
                  if (isLoading) {
                    return
                  }
                  setIsLoading(true)

                  try {
                    const restaurants =
                      await createRestaurants([
                        data,
                      ])

                    const updatedRestaurant =
                      restaurants[0]

                    if (!updatedRestaurant) {
                      throw new Error(
                        'Invalid Restaurant'
                      )
                    }

                    reset({
                      hidden: false,
                      name: '',
                      image_url: '',
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
