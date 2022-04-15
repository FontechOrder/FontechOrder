import { supabase } from '@supabase-folder/client'
import type { StorageMenuListType } from '@supabase-folder/types'

const fetchStorageMenus =
  async (): Promise<StorageMenuListType> => {
    const { data: menus, error } =
      await supabase.storage
        .from('menus')
        .list('restaurant')

    if (error) {
      throw error
    }

    if (!menus) {
      throw new Error('no menus')
    }

    const storageMenus = await Promise.all(
      menus.map(async storageMenu => {
        if (!storageMenu.name) {
          throw new Error('no menu name')
        }

        const { data, error } =
          await supabase.storage
            .from('menus')
            .getPublicUrl(
              'restaurant/' + storageMenu.name
            )

        if (error) {
          throw error
        }

        if (!data) {
          throw new Error('no publicUrl')
        }

        return {
          id: storageMenu.id,
          name: storageMenu.name,
          publicURL: data.publicURL,
        }
      })
    )

    return storageMenus
  }

export default fetchStorageMenus
