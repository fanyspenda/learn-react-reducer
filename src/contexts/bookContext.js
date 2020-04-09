import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();
const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "title 1", author: "auth1", id: 1 },
		{ title: "title 2", author: "auth2", id: 2 },
	]);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
