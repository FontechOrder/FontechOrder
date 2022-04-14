export const tryDB = async () => {
  console.log('tryDB')

  try {
    const response = await fetch(
      'http://localhost:3000/api/db'
    )

    const jsonData = await response.json()

    console.log('response jsonData: ', jsonData)
  } catch {
    console.log('tryDB error')
  }
}

export const requestUsers = async () => {
  const response = await fetch(
    'http://localhost:3000/api/requestUsers'
  )

  const jsonData = await response.json()

  return jsonData
}
