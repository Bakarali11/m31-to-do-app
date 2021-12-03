import { Item } from "./Item"

const List = ({ items, handleDelete }) => (
  <ul>
    {items.map((item, index) => (
      <Item key={index} item={item} handleDelete={handleDelete} index={index} />
    ))}
  </ul>
)

export default List
