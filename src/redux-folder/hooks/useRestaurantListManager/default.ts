import {
  useSelector,
  shallowEqual,
} from 'react-redux'

const useRestaurantListManager = () => {
  const { restaurantList } = useSelector(
    state => ({
      restaurantList:
        state.restaurantListManagerState
          .restaurantList,
    }),
    shallowEqual
  )

  return {
    restaurantList,
  }
}

export default useRestaurantListManager
