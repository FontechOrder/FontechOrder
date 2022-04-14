import {
  NextApiRequest,
  NextApiResponse,
} from 'next'

// @ts-ignore
import Database from 'better-sqlite3-multiple-ciphers'

const tryApiDB = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log('try ApiDB')
  try {
    // const db = new Database(
    //   '../../other-support/Database/fontech-order.sqlite',
    //   {}
    // )

    const db = new Database(
      '../fontech-order.sqlite',
      {
        fileMustExist: true,
        verbose: console.log,
      }
    )

    // throw new Error(JSON.stringify(db))

    // const createUser = db.prepare(`
    //   CREATE TABLE Users (
    //      id INTEGER PRIMARY KEY AUTOINCREMENT,
    //      name text NOT NULL,
    //      email text NOT NULL,
    //      type text
    //   );
    // `)

    // console.log(createUser.run())
    // res.json('???')

    // const stmt = db.prepare(
    //   'INSERT INTO Users (name, email, type) VALUES (?, ?, ?)'
    // )
    // const info = stmt.run(
    //   'test',
    //   'test@fontech.com.tw',
    //   'fontech'
    // )

    // console.log(info.changes) // => 1
    // res.json(info.changes)

    const users = db.prepare(
      'SELECT * FROM Users'
    )

    console.log(users.all())
    res.status(200).json({ users: users.all() })

    // res.json('success')
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'try ApiDB faile'

    console.log(
      'ApiDB errorMessage: ',
      errorMessage
    )

    res.json(errorMessage)
  }

  // res.json('fail')
}

export default tryApiDB
