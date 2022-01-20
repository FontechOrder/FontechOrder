import React from 'react'

import useOrdersFirestore from '@firebase-folder/hooks/useOrdersFirestore'
import CustomLink from '@components/CustomLink'

const OrderList: React.FC = () => {
  const { list } = useOrdersFirestore()
  return (
    <div>
      <div className="py-3 text-red-200">
        OrderList not isFinish:
        {JSON.stringify(
          list.filter(each => !each.finished)
        )}
      </div>

      <div>
        OrderList isFinish:
        {list
          .filter(each => each.finished)
          .map(each => (
            <CustomLink
              key={`order-item-${each.id}`}
              path={`/order/${each.id}`}
              title={each.id}
              isBlank
            />
          ))}
      </div>
    </div>
  )
}

export default OrderList
