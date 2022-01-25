import React from 'react'
import classnames from 'classnames'

import type { SelectedRestaurantType } from '@components/OrderCreateComponent/types'

interface SelectedRestaurantContentProps {
  selectedDeleteRestaurants: SelectedRestaurantType[]
  selectedRestaurantOnClick: (
    each: SelectedRestaurantType
  ) => void
}

const SelectedRestaurantContent = ({
  selectedDeleteRestaurants,
  selectedRestaurantOnClick,
}: SelectedRestaurantContentProps) => {
  return (
    <div className="flex flex-1 flex-col">
      <div>restaurants: </div>
      {selectedDeleteRestaurants.map(
        (each, index) => (
          <div
            key={`restaurant-${each.documentDataSnapshot.id}`}
            className="flex flex-row pl-2"
          >
            <button
              className={classnames(
                'pr-2',
                each.delete && 'line-through'
              )}
              onClick={() =>
                selectedRestaurantOnClick(each)
              }
            >
              <p
                className={classnames(
                  each.delete && 'line-through',
                  each.delete && 'text-gray-400'
                )}
              >
                {index + 1}.{' '}
                {each.documentDataSnapshot.id}
              </p>
            </button>
          </div>
        )
      )}
    </div>
  )
}

export default SelectedRestaurantContent
