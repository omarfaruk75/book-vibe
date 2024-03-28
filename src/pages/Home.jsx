import { Link, useLoaderData } from 'react-router-dom';
import Book from '../components/Book/Book';
import bookImg from '../assets/images/pngwing 1.png'


const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className=" md:w-7/12">
                        <h1 className=" text-3xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={'listedbooks'} className="btn bg-[#23BE0A] text-white font-bold text-xl">View The List</Link>
                    </div>
                    <div className="md:5/12">
                        <img src={bookImg} />
                    </div>
                </div>
            </div>
            <div className='my-6'>
                <h2 className='text-[40px] font-bold text-center py-4'>Books</h2>
                <div className='grid md:grid-cols-3 md:gap-4'>
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;