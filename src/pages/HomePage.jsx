import Filter from "../components/Filter";
import Card from "../components/Card";
import Loader from "../components/Loader";

const HomePage = ({ notes, loading, handleFilterText }) => {
  return (
    <main>
      {notes.length < 1 ? (
        <p className="text-center my-auto absolute -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2 text-lg">No Notes found</p>
      ) : (
        <>
          <Filter handleFilterText={handleFilterText} />
          <h2 className="text-2xl font-bold text-center my-8 ">Your Notes</h2>
        </>
      )}

      <section className="flex items-center lg:flex-row  m-4 mx-auto justify-center gap-8 flex-wrap mb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {loading && <Loader loading={loading} />}
        </div>
        {notes.map((note) => (
          <Card key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
