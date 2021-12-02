export const Item = ({ item, handleDelete }) => (
    <li>
        <p>{item}</p>
        <button onClick={() => console.log("Done")}>Done</button>
        <button onClick={() => handleDelete(item)}>Remove</button>
    </li>
)

