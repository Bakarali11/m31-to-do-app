import "./Item.css"

export const Item = ({ item, handleDelete, handleChecked }) => (
    <li className={`itemWrapper ${item.checked ? "checked" : ""}`}>
        <p>{item.value}</p>
        <input type="checkbox" checked={item.checked} onChange={handleChecked}/>
        <button onClick={handleDelete}>Remove</button>
    </li>
)

