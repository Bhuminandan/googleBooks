import React, { useEffect, useState } from "react";
import BooksContext from "./BooksContext";
import axios from "axios";


const BooksContextProvider = ({ children }) => {

    const [data, setdData] = useState([])

    async function fetchData() {
        try {
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
            console.log(res.data.items)
            setdData(res.data.items)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <BooksContext.Provider value={data}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider