import { requestOnlyMessageWithDatabaseCallBack } from '../core/requestWithDatabaseCallBack'

const createUserTable =
  requestOnlyMessageWithDatabaseCallBack(
    async db => {
      const createUser = db.prepare(`
        CREATE TABLE Users (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name text NOT NULL,
           email text NOT NULL UNIQUE,
           type text
        );
      `)

      return createUser.run()
    }
  )

export default createUserTable
