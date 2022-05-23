// import { supabase } from '@supabase-folder/client'

// import type { PostgrestFilterBuilderEqualType } from '@supabase-folder/types'

// import fetchDataDefault from '@supabase-folder/fetchData/default'

// import fetchDataEach from '@supabase-folder/fetchData/each'
// import fetchDataId from '@supabase-folder/fetchData/id'

// import {
//   DatabaseOrderInterface,
//   MenuItemWithItemOptionInterface,
//   EachOrderInterface,
//   EachOrderItemDataInterface,
//   MenuItemOptionInterface,
// } from '@supabase-folder/types'

// import { menuItemOptionListGroupBy } from '@other-support/consts'

// const fetchOrderList = async (): Promise<
//   Array<DatabaseOrderInterface>
// > => {
//   const data =
//     await fetchDataDefault<DatabaseOrderInterface>(
//       {
//         databaseString: 'orders',
//       }
//     )

//   return data
// }

// const fetchEachOrder = async (
//   orderId: number
// ): Promise<EachOrderInterface> => {
//   const order =
//     await fetchDataId<EachOrderInterface>({
//       databaseString: 'orders',
//       selectString:
//         '*,restaurant(id,hidden,image_url,name)',
//       eqs: [
//         {
//           id: orderId,
//           eqString: 'id',
//         },
//       ],
//     })

//   // console.log('fetchEachOrder order: ', order)

//   return order
// }

// const fetchEachOrderItemList = async (
//   orderId: number,
//   restaurantId: number
// ): Promise<Array<EachOrderItemDataInterface>> => {
//   // console.log(
//   //   'fetchEachOrderItemList orderId: ',
//   //   orderId
//   // )
//   // console.log(
//   //   'fetchEachOrderItemList restaurantId: ',
//   //   restaurantId
//   // )

//   // const { data: orderItems, error } =
//   //   await supabase
//   //     .from('order_items')
//   //     .select(
//   //       '*,user(id,name,email),order!inner(id,restaurant!inner(id))'
//   //     )
//   //     .eq('order.id', orderId)
//   //     .eq('restaurant', restaurantId)

//   return await fetchOrderItemList({
//     eqs: [
//       {
//         id: orderId,
//         eqString: 'order.id',
//       },
//       {
//         id: restaurantId,
//         eqString: 'restaurant',
//       },
//     ],
//   })

//   // if (error) {
//   //   throw error
//   // }

//   // if (!orderItems) {
//   //   throw new Error('no orderItems')
//   // }

//   // // console.log(
//   // //   'fetchEachOrder orderItems: ',
//   // //   orderItems
//   // // )

//   // return orderItems
// }

// const fetchOrderItemList = async ({
//   selectString = '*,user(id,name,email),order!inner(id,restaurant!inner(id))',
//   eqs = [],
// }: {
//   selectString?: string
//   eqs?: Array<
//     PostgrestFilterBuilderEqualType<EachOrderItemDataInterface>
//   >
// }): Promise<
//   Array<EachOrderItemDataInterface>
// > => {
//   const orderItems =
//     await fetchDataEach<EachOrderItemDataInterface>(
//       {
//         databaseString: 'order_items',
//         selectString,
//         eqs,
//       }
//     )

//   // console.log('fetchEachOrder order: ', order)

//   return orderItems
// }

// const fetchMenuItemWithItemOptions = async (
//   restaurantId: number
// ): Promise<
//   Array<MenuItemWithItemOptionInterface>
// > => {
//   const menuItemOptionList =
//     await fetchDataEach<MenuItemOptionInterface>({
//       databaseString: 'menu_item_options',
//       selectString:
//         '*,restaurant(id),menu_item(id,hidden,name,cost,type)',
//       eqs: [
//         {
//           id: restaurantId,
//           eqString: 'restaurant.id',
//         },
//       ],
//     })

//   // console.log(
//   //   'fetchEachOrder menuItemOptionList: ',
//   //   menuItemOptionList
//   // )

//   const menuItemWithItemOptions =
//     menuItemOptionListGroupBy(menuItemOptionList)

//   // console.log(
//   //   'fetchEachOrder menuItemWithItemOptions: ',
//   //   menuItemWithItemOptions
//   // )

//   return menuItemWithItemOptions
// }

// interface OrderDetailInterface {
//   order: EachOrderInterface
//   orderItems: Array<EachOrderItemDataInterface>
//   menuItemWithItemOptions: Array<MenuItemWithItemOptionInterface>
// }

// export {
//   // fetchOrderList,
//   // fetchEachOrder,
//   // fetchEachOrderItemList,
//   // fetchOrderItemList,
//   fetchMenuItemWithItemOptions,
// }

export * from '@supabase-folder/fetchData/fetchOrderList'

export * from '@supabase-folder/fetchData/fetchEachOrder'

export * from '@supabase-folder/fetchData/fetchEachOrderItemList'

export * from '@supabase-folder/fetchData/fetchOrderItemList'

export * from '@supabase-folder/fetchData/fetchMenuItemWithItemOptions'
