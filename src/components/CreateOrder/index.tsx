import React from 'react'
import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

const CreateOrder: React.FC = () => {
  const { list } = useRestaurantsFirestore()

  return (
    <div>
      {JSON.stringify(
        list.map(item => item.name)
      )}
    </div>
  )
}

export default CreateOrder
