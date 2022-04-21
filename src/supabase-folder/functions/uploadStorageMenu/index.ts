import { supabase } from '@supabase-folder/client'

const uploadStorageMenu = async (
  file: File | undefined
): Promise<string> => {
  if (!file) {
    throw new Error('no input')
  }

  const fileName = file.name

  if (!fileName) {
    throw new Error('no fileName')
  }

  const { data: uploadData, error: uploadError } =
    await supabase.storage
      .from('menus')
      .upload('restaurant/' + fileName, file)

  if (uploadError) {
    throw uploadError
  }

  if (!uploadData) {
    throw new Error('update fail')
  }

  const { data, error } = await supabase.storage
    .from('menus')
    .getPublicUrl('restaurant/' + fileName)

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error('update fail')
  }

  return data.publicURL
}

export default uploadStorageMenu
