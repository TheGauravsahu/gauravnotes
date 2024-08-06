import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate} at ${formattedTime}`;
};

const NotesDetails = ({deleteNote}) => {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const formattedDateTime = formatDateTime(note.created_at);
  const UpdateformattedDateTime = formatDateTime(note.updated_at);
  const [isOpen, setIsOpen] = useState(false)

  const handleIsopen = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios
      .get(`https://gnotes.pythonanywhere.com/api/notes/${id}/`)
      .then(function (response) {
        console.log(response);
        setNote(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} deleteNote={()=>deleteNote(id)}/>}

      <div className="m-8 w-[80%] lg:w-[70vw] mx-auto bg-white h-full rounded-md p-8">
        <h1 className="font-bold text-xl bg-white">{note.title}</h1>
        <p className="mt-1 opacity-75 font-semibold text-sm bg-white">
          Created at : {formattedDateTime}
        </p>
        <div className="flex gap-2 items-center bg-white mt-2">
          <Link className="bg-white " to={`/edit/${note.id}`}>
            <button className="lg:bg-white bg-black text-white lg:text-black hover:cursor-pointer flex items-center gap-1 rounded-full px-4 py-2 text-sm border border-black hover:bg-black hover:text-white font-semibold hover:scale-110">
              <FaRegEdit className="bg-inherit" /> Edit Note
            </button>
          </Link>

          <button
            onClick={handleIsopen}
            type="button"
            className="lg:bg-white bg-black text-white lg:text-black hover:cursor-pointer flex items-center gap-1 rounded-full px-4 py-2 text-sm border border-black hover:bg-black hover:text-white font-semibold hover:scale-110"
          >
            <MdOutlineDeleteOutline className="bg-inherit" />
            Delete
          </button>
        </div>
        <br />
        <p className="bg-white">{note.body}</p>
        <br />
        <p className="mt-1 opacity-75 font-semibold text-sm bg-white">
          Last updated at : {UpdateformattedDateTime}
        </p>
      </div>
    </>
  );
};

export default NotesDetails;
