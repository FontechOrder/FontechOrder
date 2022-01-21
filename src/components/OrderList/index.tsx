import React from 'react'

import useOrdersFirestore from '@firebase-folder/hooks/useOrdersFirestore'
import CustomLink from '@components/CustomLink'

enum RadioValue {
  All = 'All',
  Finished = 'Finished',
  NoFinish = 'No Finish',
}

const OrderList: React.FC = () => {
  const { list } = useOrdersFirestore()
  const [radioValue, setRadioValue] =
    React.useState<RadioValue>(
      RadioValue.NoFinish
    )

  const results = React.useMemo(() => {
    if (radioValue === RadioValue.NoFinish) {
      return list.filter(each => !each.finished)
    }

    if (radioValue === RadioValue.Finished) {
      return list.filter(each => each.finished)
    }

    return list
  }, [list, radioValue])

  return (
    <div>
      <div className="flex flex-row flex-wrap py-4">
        {[
          RadioValue.All,
          RadioValue.Finished,
          RadioValue.NoFinish,
        ].map((each, index) => (
          <div
            key={`order-radio-value-${index}`}
            className="mr-4"
          >
            <label className="flex items-center">
              <input
                type="radio"
                checked={radioValue === each}
                onChange={() =>
                  setRadioValue(each)
                }
              />
              <div className="ml-2 text-white">
                {each}
              </div>
            </label>
          </div>
        ))}
      </div>
      <div>
        OrderList:
        {results.map(each => (
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
