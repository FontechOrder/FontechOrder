export const tryDB = async () => {
  console.log('tryDB')

  try {
    const response = await fetch(`/api/db`)

    const jsonData = await response.json()

    console.log('response jsonData: ', jsonData)
  } catch {
    console.log('tryDB error')
  }
}

export const requestUsers = async () => {
  const response = await fetch(
    `/api/requestUsers`
  )

  const jsonData = await response.json()

  return jsonData
}

export const requestNewUser = async ({
  name,
  email,
  type,
}: {
  name: string
  email: string
  type: string
}) => {
  const response = await fetch(
    `/api/requestNewUser?name=${name}&email=${email}&type=${type}`
  )

  const jsonData = await response.json()

  return jsonData
}

export const createUserTable = async () => {
  const response = await fetch(
    `/api/database/createUserTable`
  )

  const jsonData = await response.json()

  return jsonData
}

export const dropUserTable = async () => {
  const response = await fetch(
    `/api/database/dropUserTable`
  )

  const jsonData = await response.json()

  return jsonData
}
