const initialState = {
  students: [],
};

export const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        students: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        students: state.students.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE_CONTACT":
      const updateList = state.students.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        students: updateList,
      };
    default:
      return state;
  }
};
