
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    return (

        <div className=" p-6 rounded-md shadow-md">
            <Link to={`./book/${bookId}`}>
                <div className="flex row justify-center items-center bg-[#F3F3F3] w-80 h-56 rounded-xl ">
                    <img src={image} alt="" className="rounded-md w-28 h-40 dark:bg-gray-500" />
                </div>
                <div className='space-y-6'>
                    <div className=' text-[#23BE0A] font-medium space-x-8 '>
                        <span>{tags[0]}</span>
                        <span>{tags[1]}</span>


                    </div>

                    <h2 className="text-2xl font-bold tracking-wide">{bookName}</h2>
                    <p className='text-base text-[#131313cc]'>By: {author}</p>


                    <hr style={{ borderStyle: "dotted", color: "#13131326" }} />
                    <div className='flex flex-row justify-between items-center'>
                        <span>{category}</span>
                        <span className='flex flex-row justify-between items-center'>{rating} <CiStar /></span>
                    </div>
                </div>
            </Link>

        </div>

    );
};

export default Book;