import { useState } from "react";

const UserInput = ({ handleForm }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="added" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default UserInput