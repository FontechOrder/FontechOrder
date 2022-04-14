import { requestOnlyMessageWithDatabaseCallBack } from '../core/requestWithDatabaseCallBack'

const dropUserTable =
  requestOnlyMessageWithDatabaseCallBack(
    async db => {
      const dropUser = db.prepare(`
        DROP TABLE Users;
      `)

      return dropUser.run()
    }
  )

export default dropUserTable
