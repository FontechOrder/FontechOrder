import React from 'react'

import useRestaurantsFirestore from '@firebase-folder/hooks/useRestaurantsFirestore'

import CustomButton from '@components/CustomButton'
import AsyncStoragePathImage from '@components/AsyncStoragePathImage'

const RestaurantList: React.FC = () => {
  const { list, deleteRestaurantWithId } =
    useRestaurantsFirestore()

  // console.log('list: ', JSON.stringify(list))

  // React.useEffect(() => {
  //   list.forEach(each =>
  //     console.log(
  //       `each=>id: ${each.id}, name: ${each.name} `
  //     )
  //   )

  //   console.log(
  //     '-----------------------------------------'
  //   )
  // }, [list])

  return (
    <div id="restaurant-list">
      <div>Restaurant List</div>
      {list.map((item, index) => (
        <div
          key={`restaurant_${index}`}
          className="relative flex flex-col lg:flex-row items-center py-2"
        >
          <button
            className="hover-none"
            onClick={() =>
              console.log('PathImagebutton press')
            }
          >
            <div className="relative flex flex-0 flex-col min-w-[60vw] sm:min-w-[50vw] lg:min-w-[160px] lg:w-[160px] aspect-square bg-yellow-100">
              <AsyncStoragePathImage
                slackImage={item['storage-path']}
                alt="storage-path-image"
              />
            </div>
          </button>
          <div className="flex flex-1 flex-col w-[calc(100%-160px-16px)] m-2">
            {[
              {
                title: 'name ' + index,
                text: item.name,
              },
              {
                title: 'slack-image',
                text: item['slack-image'],
              },
              {
                title: 'storage-path',
                text: item['storage-path'],
              },
            ].map((titleText, ind) => (
              <div
                key={`titleText_${ind}`}
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
          </div>
          <CustomButton
            className="absolute top-4 left-2"
            onClick={() =>
              deleteRestaurantWithId({
                id: item.id,
              })
            }
          >
            Delete
          </CustomButton>
        </div>
      ))}
    </div>
  )
}

export default RestaurantList
