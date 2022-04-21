import React from 'react'
import { supabase } from '@supabase-folder/client'
import type { RealtimePayloadCallback } from '@supabase-folder/types'
import { emptyCallback } from '@other-support/consts'

const useSubscription = <T>({
  path,
  insertCallback = emptyCallback,
  updateCallback = emptyCallback,
  deleteCallback = emptyCallback,
}: {
  path: string
  insertCallback?: RealtimePayloadCallback<T>
  updateCallback?: RealtimePayloadCallback<T>
  deleteCallback?: RealtimePayloadCallback<T>
}) => {
  React.useEffect(() => {
    const mySubscription = supabase
      .from(path)
      .on('INSERT', insertCallback)
      .on('UPDATE', updateCallback)
      .on('DELETE', deleteCallback)
      .subscribe()

    return () => {
      supabase.removeSubscription(mySubscription)
    }
  }, [
    path,
    insertCallback,
    updateCallback,
    deleteCallback,
  ])

  return {}
}

export default useSubscription
