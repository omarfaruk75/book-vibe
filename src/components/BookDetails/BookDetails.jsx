
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook } from "../../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId == idInt);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book || {};


    const [read, setRead] = useState([]);
    const [wishBook, setWsihBook] = useState([]);

    const handleBookRead = () => {
        saveReadBook(idInt)
        toast('you have added book successfully')
    }
    const handleWishBook = () => {
        toast('you have added Wishbook successfully')
    }
    return (
        <div>

            <div className=" flex flex-row justify-center items-center rounded-xl mb-5">
                <div className="bg-[#F3F3F3] w-[573px] h-[721px]  flex flex-rol justify-center items-center rounded-xl ">
                    <img className="w-[426px] h-[564px] p-12" src={image} alt="" />
                </div>

                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 space-y-6">

                    <h2 className="text-[40px] font-bold leading-none">{bookName}</h2>

                    <p className="font-xl font-medium text-[#131313]">{author}</p>
                    <hr />
                    <h4 className="font-medium text-xl text-[#131313CC] ">Fiction</h4>
                    <hr />
                    <p><b>Review : </b>{review} </p>
                    <div className="flex flex-row">
                        <b>Tag </b>
                        <div className="flex flex-row gap-6 ml-4 text-[#23BE0A]"><span className="bg-[#F3F3F3] px-2 rounded-lg "> #{tags}</span> <span className="bg-[#F3F3F3] px-2 rounded-lg"> #{tags}</span></div>

                    </div>


                    <hr />
                    <p className="flex flex-row gap-12"><span className="text-[131313B3]">Number of Pages: </span><b>{totalPages}</b></p>
                    <p><span className="text-[131313B3]">Publisher: </span><b>{author}</b></p>
                    <p><span className="text-[131313B3]">Year of Publishing :</span > <b>{yearOfPublishing}</b></p>
                    <p><span className="text-[131313B3]">Number of Pages: </span><b>{rating}</b></p>
                    <div className="flex flex-row gap-4 font-bold">

                        <button onClick={() => handleBookRead()} className="btn bg-transparent">Read</button>
                        <button onClick={() => handleWishBook()} className="btn bg-[#50B1C9] text-white">Whitelist</button>

                    </div>
                    <ToastContainer />

                </div>
            </div >


        </div>
    );
};

export default BookDetails;