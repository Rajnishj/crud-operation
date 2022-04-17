import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateContact } from "../redux/StudentAction";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const studentInfo = useSelector((state) => state.student.students);
  const filterData = studentInfo.find((contact) => contact.id === parseInt(id));
  useEffect(() => {
    if (filterData) {
      setName(filterData.name);
      setEmail(filterData.email);
      setNumber(filterData.number);
    }
  }, [filterData]);
  console.log(name, email, number);
  const checkEmail = studentInfo.find(
    (contact) => contact.id !== parseInt(id) && contact.email === email
  );
  const checkNumber = studentInfo.find(
    (contact) =>
      contact.id !== parseInt(id) && contact.number === parseInt(number)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number) {
      const notify = () => toast.warning("Please Enter valid data!");
      notify();
      return;
    }
    if (checkEmail) {
      const notify = () => toast.error("This email already exist!");
      notify();
      return;
    }
    if (checkNumber) {
      const notify = () => toast.error("This number already exist!");
      notify();
      return;
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      number: parseInt(number),
    };
    console.log(data);

    dispatch(updateContact(data));
    toast.success("Contact is updated");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center ">Edit Students {id}</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group pb-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group pb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group pb-3">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <input
                type="submit"
                value="Update Student"
                className="btn  btn-dark"
              />
              <Link to="/" className="btn btn-danger ms-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
