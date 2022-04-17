import axios from "axios";

export const fetchData = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/contacts");
  const data = res.data;
  dispatch({
    type: "FETCH_DATA",
    payload: data,
  });
};
export const addContact = (contact) => async (dispatch) => {
  const request = {
    ...contact,
  };
  const res = await axios.post("http://localhost:5000/contacts", request);
  const data = res.data;
  dispatch({
    type: "ADD_CONTACT",
    payload: data,
  });
};

export const updateContact = (contact) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/contacts/${contact.id}`,
    contact
  );
  const data = res.data;
  dispatch({
    type: "UPDATE_CONTACT",
    payload: data,
  });
};

export const deleteContact = (contact) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/contacts/${contact.id}`);

  dispatch({
    type: "DELETE_CONTACT",
    payload: contact,
  });
};
