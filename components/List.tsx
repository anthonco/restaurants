import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <table>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <ListItem data={item} />
        </tr>
      ))}
    </tbody>
  </table>
)

export default List

/*
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
*/
