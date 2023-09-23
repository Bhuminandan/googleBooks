import './App.css';
import BooksList from './Components/BooksList';
import Navbar from './Components/Navbar';
import TopThree from './Components/TopThree';
import BooksContextProvider from './Context/BooksContextProvider';

function App() {


  return (
    <BooksContextProvider>
      <Navbar />
      <TopThree />
      <BooksList />
    </BooksContextProvider>
  );
}

export default App;
