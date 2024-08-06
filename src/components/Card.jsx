import { MdDateRange } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom";


const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${formattedDate} at ${formattedTime}`;
}

const card = ({note}) => {
  let body = note.body .split(" ").splice(0, 20).join(" ");
  const formattedDateTime = formatDateTime(note.updated_at);

  return (
    <Link to={`notes/${note.id}`}>
    <div className='bg-white mx-auto h-80 w-96 md:w-[600px] lg:w-96 rounded-xl p-8 hover:scale-105 hover:shadow-md hover:cursor-pointer'>
      <h1 className='bg-white font-semibold text-lg flex gap-2 items-start justify-between'>{note.title} <FaNoteSticky className="mt-2"/></h1>
      <p className='mt-1 bg-white text-gray opacity-75 text-sm flex gap-2 items-center'><MdDateRange className="bg-white"/>{formattedDateTime}</p>
      <br />

      <p className='bg-white'>{body}...</p>
      <br />
      <h6 className='bg-white font-[450] flex gap-2 items-center lowercase'>{note.category}</h6>
    </div>
    </Link>
  )
}

export default card