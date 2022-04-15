import useEachRestaurant from '@supabase-folder/hooks/useEachRestaurant'
import useEachRestaurantMenuWithItemOptions from '@supabase-folder/hooks/useEachRestaurantMenuWithItemOptions'

const useEachRestaurantContent = (id: number) => {
  const {
    isInit,
    isLoading,
    error,
    // recall,
    restaurant,
  } = useEachRestaurant(id)

  const {
    restaurantMenuWithItemOptions,

    menuInit,
    menuIsLoading,
    menuError,
  } = useEachRestaurantMenuWithItemOptions(id)

  return {
    isInit,
    isLoading,
    error,

    menuInit,
    menuIsLoading,
    menuError,

    restaurant,
    restaurantMenuWithItemOptions,
  }
}

export default useEachRestaurantContent
