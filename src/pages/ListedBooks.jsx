import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard/BookCard";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const listedBooks = useLoaderData();


    return (
        <div>

            <h2 className='text-[40px] font-bold text-center py-4 bg-[#1313130d] rounded-2xl'>Books</h2>

            <div className="flex flex-col justify-center items-center  mt-8 mb-32">
                <details className="dropdown  ">
                    <summary className="m-1 btn bg-[#23BE0A] px-3 py-1  text-lg rounded-xl text-white font-medium">Sort By<IoIosArrowDown /> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#1313130d] text-[#131313cc] rounded-box w-40 text-center">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>

                </details>
            </div>
            <div className='flex flex-col '>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </a>


                </div>
                <div>
                    {
                        listedBooks.map(book => <BookCard key={book.bookName} book={book}></BookCard>)
                    }
                </div>



            </div>

        </div>
    );
};

export default ListedBooks;