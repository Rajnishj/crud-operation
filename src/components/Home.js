import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContact, fetchData } from "../redux/StudentAction";

const Home = () => {
  const newData = useSelector((state) => state.student.students);
  console.log(newData);
  const dispatch = useDispatch();
  const deleteItem = (contact) => {
    dispatch(deleteContact(contact));
    toast.error("Item deleted successfully");
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-end mt-4">
          <Link to="/add" className="btn btn-outline-dark">
            AddContacts
          </Link>
        </div>
        <div className="col-md-10 text-center mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {newData.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteItem(contact)}
                      className="btn btn-danger btn-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
