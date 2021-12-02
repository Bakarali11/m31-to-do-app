import { Item } from "./Item"

const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <Item key={index} item={item} />
    ))}
  </ul>
)

export default List
