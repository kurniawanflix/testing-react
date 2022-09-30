import axios from "axios";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/comments";

const DetailPage = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const { data } = await axios.get(API);
      setComments(data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between">
        <a href="/">
          <button type="button" className="btn btn-outline-primary">
            Back
          </button>
        </a>
        <h1>Comments List</h1>
        <div />
      </div>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark text-center">
            <th>Nomor</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment) => (
            <tr key={comment.id} className="table-secondary text-center">
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;
