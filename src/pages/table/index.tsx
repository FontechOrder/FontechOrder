import React from 'react'
import PageContentDefault from '@containers/PageContent/default'
import CustomButton from '@components/CustomButton'

import {
  requestUsers,
  requestNewUser,
  createUserTable,
  dropUserTable,
} from '@other-support/Database/db'

const consoleLogThenShowAlert = (
  message: string
) => {
  console.log(message)
  window.alert(message)
}

const Restaurant = () => {
  return (
    <PageContentDefault>
      <div className="flex flex-col">
        <CustomButton
          onClick={async () => {
            try {
              await createUserTable()
              consoleLogThenShowAlert(
                'createUserTable success'
              )
            } catch {
              consoleLogThenShowAlert(
                'asyncRequestUsers fail.'
              )
            }
          }}
        >
          create User Table
        </CustomButton>
        <CustomButton
          onClick={async () => {
            try {
              await dropUserTable()
              consoleLogThenShowAlert(
                'dropUserTable success'
              )
            } catch {
              consoleLogThenShowAlert(
                'asyncRequestUsers fail.'
              )
            }
          }}
        >
          drop User Table
        </CustomButton>
        <CustomButton
          onClick={async () => {
            try {
              const usersResponse =
                await requestUsers()

              const users =
                usersResponse.data.users
              consoleLogThenShowAlert(
                JSON.stringify(users)
              )
            } catch {
              consoleLogThenShowAlert(
                'asyncRequestUsers fail.'
              )
            }
          }}
        >
          show Users
        </CustomButton>
        <div className="flex flex-col bg-green-400 p-4">
          <form
            onSubmit={async event => {
              event.preventDefault()

              try {
                const target =
                  event.target as typeof event.target & {
                    name: { value: string }
                    email: { value: string }
                    type: { value: string }
                  }

                // const { name, email, type } =
                //   target

                const name = target.name.value
                const email = target.email.value
                const type = target.type.value

                // console.log('name: ', name)
                // console.log('email: ', email)
                // console.log('type: ', type)

                if (
                  [name, email, type].some(
                    value => !value
                  )
                ) {
                  throw new Error(
                    'invalid user info.'
                  )
                }

                await requestNewUser({
                  name,
                  email,
                  type,
                })

                consoleLogThenShowAlert(
                  'requestNewUser success'
                )
              } catch {
                consoleLogThenShowAlert(
                  'asyncRequestUsers fail.'
                )
              }
            }}
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
            />
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              name="email"
            />
            <label htmlFor="type">type:</label>
            <input
              type="text"
              id="type"
              name="type"
            />
            <CustomButton type="submit">
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    </PageContentDefault>
  )
}

export default Restaurant
