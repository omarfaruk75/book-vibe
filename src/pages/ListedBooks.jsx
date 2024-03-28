import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Read from "../components/Read/Read";
import Wishlist from "../components/Wishlist/Wishlist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { getStoredReadBook } from "../utility/localstorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const listedBooks = useLoaderData();
    const [saveBook, setSaveBook] = useState([]);
    const [showRead, setShowRead] = useState([]);
    const handleBookFilter = filter => {

        if (filter === "rating") {
            const ratingBook = saveBook.filter(book => parseInt(book.rating).sort((a, b) => b - a))
            setShowRead(ratingBook)
        } else if (filter === "totalPages") {
            const totalPage = saveBook.filter(book => parseInt(book.totalPages).sort((a, b) => b - a))
            setShowRead(totalPage)
        } else if (filter === "yearOfPublishing") {
            const pulishYear = saveBook.filter(book => parseInt(book.yearOfPublishing).sort((a, b) => b - a))
            setShowRead(pulishYear)
        }
    }

    useEffect(() => {
        const storedReadBookIds = getStoredReadBook();



        if (listedBooks.length) {
            const readedBook = listedBooks.filter(book => storedReadBookIds.includes(book.bookId));

            setSaveBook(readedBook);

        }
    }, [])



    return (
        <div>
            <h2 className='text-[40px] font-bold text-center py-4 bg-[#1313130d] rounded-2xl'>Books</h2>

            <div className="flex flex-col justify-center items-center  mt-8 mb-32">
                <details className="dropdown  ">
                    <summary className="m-1 btn bg-[#23BE0A] px-3 py-1  text-lg rounded-xl text-white font-medium">Sort By<IoIosArrowDown /> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#1313130d] text-[#131313cc] rounded-box w-40 text-center">
                        <li onClick={() => handleBookFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBookFilter('totalPages')}><a>Number of pages</a></li>
                        <li onClick={() => handleBookFilter('yearOfPublishing')}><a>Publisher Year</a></li>
                    </ul>

                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>


                <TabPanel>

                    {saveBook.map(book => <Read key={book.bookId} book={book}></Read>)}


                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>




        </div >
    );
};

export default ListedBooks;