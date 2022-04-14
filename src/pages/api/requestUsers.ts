import { requestWithDatabaseCallBack } from './core/requestWithDatabaseCallBack'

const requestUsers = requestWithDatabaseCallBack(
  async db => {
    const users = db.prepare(
      'SELECT * FROM Users'
    )

    return { users: users.all() }
  }
)

export default requestUsers
