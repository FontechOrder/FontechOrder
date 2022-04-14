import { requestOnlyMessageWithDatabaseCallBack } from './core/requestWithDatabaseCallBack'

const requestNewUser =
  requestOnlyMessageWithDatabaseCallBack(
    async (db, req) => {
      const stmt = db.prepare(
        'INSERT INTO Users (name, email, type) VALUES (?, ?, ?)'
      )

      const { name, email, type } = req.query

      if (
        [name, email, type].some(value => !value)
      ) {
        throw new Error('invalid user info.')
      }

      return stmt.run(name, email, type)
    }
  )

export default requestNewUser
