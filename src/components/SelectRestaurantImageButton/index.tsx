import React from 'react'

import {
  Button,
  Modal,
  Box,
  Grid,
  IconButton,
} from '@mui/material'

import { LoadingButton } from '@mui/lab'

import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'

import useStorageMenus from '@supabase-folder/hooks/useStorageMenus'
import uploadStorageMenu from '@supabase-folder/functions/uploadStorageMenu'

import ZoomImageWithRelativeParent from '@components/ZoomImageWithRelativeParent'

interface SelectRestaurantImageButtonProps {
  imageUrlCallback: (imageUrl: string) => void
}

const SelectRestaurantImageButton: React.FC<
  SelectRestaurantImageButtonProps
> = ({ imageUrlCallback }) => {
  const [uploadLoading, setUploadLoading] =
    React.useState(false)
  const [open, setOpen] = React.useState(false)

  const { recall, storageMenus } =
    useStorageMenus()

  const handleOpen = () => {
    recall()
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  // React.useEffect(() => {
  //   if (open) {
  //     return
  //   }
  //   recall()
  // }, [open, recall])

  const inputOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const asyncInputOnChange = async () => {
        if (uploadLoading) {
          return
        }

        setUploadLoading(true)
        try {
          const publicURL =
            await uploadStorageMenu(
              e.target.files?.[0]
            )

          handleClose()
          imageUrlCallback(publicURL)
        } catch {
          handleClose()
        }

        setUploadLoading(false)
      }
      asyncInputOnChange()
    },
    [uploadLoading, imageUrlCallback]
  )

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
      >
        SELECT RESTARUANT IMAGE
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-y-1/2  -translate-x-1/2 overflow-y-auto rounded bg-white p-4 shadow-xl lg:h-[40rem]  lg:max-h-[90%] lg:w-[60rem]">
          <IconButton
            className="float-right"
            color="primary"
            aria-label="close modal"
            component="span"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} md={3}>
              <label htmlFor="contained-button-file">
                <input
                  className="hidden"
                  accept="image/jpeg, image/png, image/jpg"
                  id="contained-button-file"
                  type="file"
                  onChange={inputOnChange}
                />
                <LoadingButton
                  loading={uploadLoading}
                  className="aspect-[3/4] w-full"
                  variant="outlined"
                  component="span"
                >
                  <AddIcon />
                </LoadingButton>
              </label>
            </Grid>
            {storageMenus.map(storageMenu => (
              <Grid
                key={`storage-menu-${storageMenu.name}`}
                item
                xs={6}
                sm={4}
                md={3}
              >
                <Box className="w-full">
                  <Button
                    startIcon={<CheckIcon />}
                    onClick={() => {
                      handleClose()
                      imageUrlCallback(
                        storageMenu.publicURL
                      )
                    }}
                  >
                    選我！
                  </Button>

                  <Box className="relative aspect-[3/4] w-full">
                    <ZoomImageWithRelativeParent
                      priority
                      src={storageMenu.publicURL}
                      alt={storageMenu.name}
                      layout="fill"
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default SelectRestaurantImageButton
