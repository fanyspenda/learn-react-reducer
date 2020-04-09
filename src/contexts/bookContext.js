import React, { createContext, useReducer, useEffect } from "react";
import uuid from "uuid/v1";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();
const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		const result = localStorage.getItem("books");
		return result ? JSON.parse(result) : [];
	});

	useEffect(() => {
		localStorage.setItem("books", JSON.stringify(books));
	}, [books]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
