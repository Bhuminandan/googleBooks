import React, { useEffect, useState } from "react";
import BooksContext from "./BooksContext";
import axios from "axios";

const BooksContextProvider = ({ children, searchedTerm }) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        let term = searchedTerm != '' ? searchedTerm : "harry+potter";
        console.log(term);
        try {
            const API_KEY = `AIzaSyDYiV954fqlqsVcj4t0gLr_bgta7x-ZJuE`;
            const res = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API_KEY}`
            );
            console.log(res.data.items);
            setData(res.data.items);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Run fetchData when the component is mounted and whenever searchedTerm changes
        fetchData();
    }, [searchedTerm]);

    return (
        <BooksContext.Provider value={data}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;
