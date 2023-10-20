import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, body, author };

    fetch('http://localhost:8000/books/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    }).then(() => {
      // history.go(-1);
      history('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Book body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Book author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="vamsi">vamsi</option>
          <option value="brock">brock</option>
          <option value="smith">smith</option>
        </select>
        <button>Add Book</button>
      </form>
    </div>
  );
}
 
export default Create;