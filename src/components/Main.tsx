import { GraphCanvas } from '@components/atoms/GraphCanvas'
import { Layout } from '@components/templates/Layout'
import { GetUsersQuery, GetUsersQueryVariables } from '@generatedTypes'
import clsx from 'clsx'
import gql from 'graphql-tag'
import { useRef } from 'react'
import { useQuery } from 'urql'

const UsersQuery = gql`
  query GetUsers {
    users {
      id
      name
      birthday
    }
  }
`

export default function Main() {
  const [result, reexecuteQuery] = useQuery<
    GetUsersQuery,
    GetUsersQueryVariables
  >({
    query: UsersQuery,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <Layout>
      <h1 className={clsx('text-center')}>main</h1>
      <ul>
        {data!.users.map((user) => (
          <li key={user.id}>
            {user.name}: {user.birthday}
          </li>
        ))}
      </ul>
      <GraphCanvas />
    </Layout>
  )
}
