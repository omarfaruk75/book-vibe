// import { useLoaderData } from "react-router-dom";


// const bookDetail = () => {
//     const bookDetailCard = useLoaderData();
//     console.log(bookDetailCard)
//     return (
//         <div>
//             <div className=" flex flex-row justify-center items-center rounded-xl mb-5">
//                 <div className="bg-[#F3F3F3] w-80 h-80 flex flex-rol justify-center items-center rounded-xl ">
//                     <img src={image} alt="" />
//                 </div>

//                 <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 space-y-6">

//                     <h2 className="text-2xl font-bold leading-none">{bookName}</h2>
//                     <p className="font-base text-[#131313cc]">{author}</p>
//                     <div className="flex flex-row">
//                         <b>Tag </b>
//                         <div className="flex flex-row gap-6 ml-4 text-[#23BE0A]"><span className="bg-[#F3F3F3] px-2 rounded-lg "> #{tags[0]}</span> <span className="bg-[#F3F3F3] px-2 rounded-lg"> #{tags[1]}</span></div>
//                         <div className="flex flex-row ml-6 items-center gap-2"><span><CiLocationOn /></span> <span>Year of Publishing : {yearOfPublishing}</span> </div>
//                     </div>
//                     <div className="flex flex-row gap-6">
//                         <div className="flex flex-row items-center justify-center  gap-2"><span><IoMdPeople /></span> <span> Publisher : {author}</span> </div>
//                         <div className="flex flex-row items-center justify-center gap-2"> <span><MdOutlineContactPage /></span><span>Page : {totalPages}</span> </div>

//                     </div>

//                     <hr />
//                     <div className="flex flex-row gap-8 text-base">
//                         <span className="text-[#328EFF] bg-[#328EFF26] px-3 py-1 rounded-full">Category: {category}</span>
//                         <span className="text-[#23BE0A] bg-[#FFAC3326] px-3 py-1 rounded-full">Ratings: {rating}</span>

//                     </div>

//                 </div>
//             </div >
//         </div>
//     );
// };

// export default bookDetail;