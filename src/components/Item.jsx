export const Item = ({ item, handleDelete, index }) => (
    <li>
        <p>{item}</p>
        <button onClick={() => console.log("Done")}>Done</button>
        <button onClick={() => handleDelete(index)}>Remove</button>
    </li>
)

