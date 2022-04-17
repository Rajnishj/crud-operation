import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addContact } from "../redux/StudentAction";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const student = useSelector((state) => state.student.students);
  let navigate = useNavigate();
  console.log(student);
  const dispatch = useDispatch();
  const checkEmail = student.find((contact) => contact.email === email);
  const checkNumber = student.find(
    (contact) => contact.number === parseInt(number)
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
      id: Date.now(),
      name,
      email,
      number: parseInt(number),
    };
    console.log(data);

    dispatch(addContact(data));
    toast.success("Contact is added");
    navigate("/");
  };
  console.log(student);

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="row">
        <h1 className="display-3 text-center ">Add Students</h1>
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
                value="Add Student"
                className="btn w-100 btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
