import {
  NextApiRequest,
  NextApiResponse,
} from 'next'

// @ts-ignore
import Database from 'better-sqlite3-multiple-ciphers'

type DatabaseCallBackType = (
  db: any,
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<any>

export const requestWithDatabaseCallBack =
  (databaseCallBack: DatabaseCallBackType) =>
  async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    console.log('try ApiDB')
    try {
      const db = new Database(
        '../fontech-order.sqlite',
        {
          fileMustExist: true,
          verbose: console.log,
        }
      )

      const data = await databaseCallBack(
        db,
        req,
        res
      )

      res.status(200).json({ data })
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
  }

export const requestOnlyMessageWithDatabaseCallBack =

    (databaseCallBack: DatabaseCallBackType) =>
    async (
      req: NextApiRequest,
      res: NextApiResponse
    ) => {
      console.log('try ApiDB')
      try {
        const db = new Database(
          '../fontech-order.sqlite',
          {
            fileMustExist: true,
            verbose: console.log,
          }
        )

        await databaseCallBack(db, req, res)

        res
          .status(200)
          .json({ message: 'success' })
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'try ApiDB faile'

        console.log(
          'ApiDB errorMessage: ',
          errorMessage
        )

        res.status(404).json({ message: 'fail' })
      }
    }
