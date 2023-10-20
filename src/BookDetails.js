import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/books/' + book.id, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { book && (
        <article>
          <h2>{ book.title }</h2>
          <p className="book">Written by { book.author }</p>
          <div className="book">{ book.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BookDetails;