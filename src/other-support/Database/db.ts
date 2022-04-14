export const requestUsers = async () => {
  const response = await fetch(
    `${process.env.pathPrefix}/api/requestUsers`
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
    `${process.env.pathPrefix}/api/requestNewUser?name=${name}&email=${email}&type=${type}`
  )

  const jsonData = await response.json()

  return jsonData
}

export const createUserTable = async () => {
  const response = await fetch(
    `${process.env.pathPrefix}/api/database/createUserTable`
  )

  const jsonData = await response.json()

  return jsonData
}

export const dropUserTable = async () => {
  const response = await fetch(
    `${process.env.pathPrefix}/api/database/dropUserTable`
  )

  const jsonData = await response.json()

  return jsonData
}
