import React,{useEffect,useState} from 'react';
import axios from 'axios'
const URL = "http://openlibrary.org/search.json?title=power";


const New = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);


   useEffect(()=>{
    axios.get(URL).then((res)=>{
        setBooks(res.data)
    })
   })
    console.log(books)


    return (
      <div>

      </div>
    );
};

export default New


