import React, { Fragment } from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Fragment>
    <td>{data.name}</td>
    <td>{data.telephone}</td>
    <td>{data.city}, {data.state}</td>
    <td>{data.genre}</td>
  </Fragment>
)

export default ListItem

/*<Link href="/users/[id]" as={`/users/${data.id}`}>
<a>
{data.id}: {data.name}
</a>
</Link>
*/
