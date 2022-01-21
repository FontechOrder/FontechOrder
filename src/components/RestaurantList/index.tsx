import React from 'react'
import classnames from 'classnames'

import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

import CustomButton from '@components/CustomButton'
import CustomLink from '@components/CustomLink'

import AsyncStoragePathImageLink from '@components/AsyncStoragePathImageLink'

const RestaurantList: React.FC = () => {
  const { list, hiddenRestaurantWithId } =
    useRestaurantsFirestore()

  return (
    <div
      id="restaurant-list"
      className="h-[500px] overflow-y-scroll lg:h-auto lg:overflow-y-auto my-[10px]"
    >
      <div className="text-white">
        Restaurant List
      </div>
      {list.map((item, index) => {
        const itemStoragePath =
          item['storage-path']

        return (
          <div
            key={`restaurant-${index}-${item.name}`}
          >
            <div className="flex flex-col lg:flex-row items-center py-2">
              <div
                className={classnames(
                  'relative flex flex-0 flex-col w-[60vw] sm:w-[50vw] lg:w-[160px] lg:w-[160px] aspect-square ',
                  !itemStoragePath &&
                    'bg-yellow-100'
                )}
              >
                {itemStoragePath && (
                  <AsyncStoragePathImageLink
                    slackImage={itemStoragePath}
                    alt="storage-path-image"
                  />
                )}
                <CustomButton
                  className="absolute top-2 left-2 bg-red-800"
                  onClick={() =>
                    hiddenRestaurantWithId({
                      id: item.id,
                    })
                  }
                >
                  Delete
                </CustomButton>
              </div>

              <div className="flex flex-1 flex-col w-[calc(100%-160px-16px)] m-2">
                {[
                  {
                    title: 'name ' + (index + 1),
                    text: item.name,
                  },
                  {
                    title: 'slack-image',
                    text: item['slack-image'],
                  },
                  {
                    title: 'storage-path',
                    text: itemStoragePath,
                  },
                ].map((titleText, i) => (
                  <div
                    key={`titleText-${i}-${titleText.title}`}
                    className="relative flex flex-col lg:flex-row items-center w-full text-white"
                  >
                    <div className="hidden lg:flex lg:w-[130px] lg:min-w-[130px]">
                      {titleText.title}
                    </div>
                    <div className="flex flex-1 lg:w-[calc(100%-130px)] break-all">
                      {titleText.text}
                    </div>
                  </div>
                ))}
                <CustomLink
                  className="self-end mt-2"
                  path={`/restaurant/${item.name}`}
                  isBlank
                  title="Detail ..."
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RestaurantList
