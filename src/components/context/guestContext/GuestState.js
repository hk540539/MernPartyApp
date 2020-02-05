import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT
} from "../types";

const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search: null,
    editAble: null,
    guests: [
      {
        id: 1,
        name: "Hemanth Kumar",
        phone: "123 456 789",
        dietary: "Vegan",
        isConfirmed: false
      },
      {
        id: 2,
        name: "A Kumar",
        phone: "123 456 789",
        dietary: "Non-Veg",
        isConfirmed: true
      },
      {
        id: 3,
        name: "B Kumar",
        phone: "123 456 789",
        dietary: "Pesacatarian",
        isConfirmed: false
      }
    ]
  };
  const [state, dispatch] = useReducer(guestReducer, initialState);
  const toggleFilter = () => {
    dispatch({ type: TOGGLE_FILTER });
  };

  const searchGuest = guest => {
    dispatch({ type: SEARCH_GUEST, payload: guest });
  };
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };
  const addGuest = guest => {
    guest.id = Date.now();
    guest.isConfirmed = false;
    dispatch({
      type: ADD_GUEST,
      payload: guest
    });
  };
  const removeGuest = id => {
    dispatch({ type: REMOVE_GUEST, payload: id });
  };
  const updateGuest = guest => {
    dispatch({ type: UPDATE_GUEST, payload: guest });
  };
  const editGuest = guest => {
    dispatch({ type: EDIT_GUEST, payload: guest });
  };
  const clearEdit = guest => {
    dispatch({ type: CLEAR_EDIT });
  };

  return (
    <GuestContext.Provider
      value={{
        toggleFilter,
        guests: state.guests,
        filterGuest: state.filterGuest,
        editAble: state.editAble,
        searchGuest,
        clearSearch,
        search: state.search,
        addGuest,
        removeGuest,
        updateGuest,
        editGuest,
        clearEdit
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};
export default GuestState;
