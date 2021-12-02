import { Item } from "./Item"

const List = ({ items, handleDelete }) => (
  <ul>
    {items.map((item, index) => (
      <Item key={index} item={item} handleDelete={handleDelete} />
    ))}
  </ul>
)

export default List
