import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNotes = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate()
  const newNote = {
    title: title,
    body: body,
    category: category,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !body && !category) {
      return;
    }
    console.log("Form submitted");
    addNote(newNote);
    navigate('/')
    console.log(newNote);
  };

  return (
    <div className="bg-white h-full w-[80%] lg:w-[600px] mx-auto my-auto rounded-xl p-8 mt-4">
      <h1 className="bg-white text-center font-semibold text-2xl my-4 text-black">
        Add New Note
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-white h-full rounded-xl"
      >
        <div className="mb-5 bg-white">
          <label className="bg-white block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            id="title"
            className="bg-white shadow-sm  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter note's title"
            required
          />
        </div>
        <div className="mb-5 bg-white">
          <label className="bg-white block mb-2 text-sm font-medium text-gray-900 ">
            Content
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            name="body"
            className="bg-white shadow-sm  h-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5 bg-white flex flex-col gap-2 border-black">
          <label className="form-label bg-white">Note's category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="form-select rounded-md border"
            aria-label="Default select example"
            style={{ height: "40px" }}
          >
            <option selected>Pick a category</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
          </select>
        </div>

        <button
          type="submit"
          className="hover:cursor-pointer flex items-center gap-1 rounded-full px-8 py-2 text-sm border border-black bg-black text-white font-semibold hover:scale-110"
        >
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
