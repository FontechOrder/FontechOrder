import { requestWithDatabaseCallBack } from './core/requestWithDatabaseCallBack'

const requestUsers = requestWithDatabaseCallBack(
  async db => {
    const users = db.prepare(
      'SELECT * FROM Users'
    )

    console.log(users.all())
    return { users: users.all() }
  }
)

export default requestUsers
