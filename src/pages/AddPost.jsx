import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNotifStore } from "../global-state/useNotif";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios1 from "../helpers/axios1";

export default function AddPost() {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setLoading(true);

      axios1
        .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((res) => {
          setTitle(res.data.title);
          setBody(res.data.body);
          setLoading(false);
        });
    }
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const { setNotif } = useNotifStore();

  const navigate = useNavigate();

  const submit = async () => {
    setLoading(true);

    try {
      if (params.id) {
        await axios1.put(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`,
          {
            title,
            body,
          }
        );

        setNotif("Berhasil edit data!");
      } else {
        await axios1.post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body,
        });

        setNotif("Berhasil tambah data!");
      }

      navigate("/");
    } catch {
      //
    }

    setLoading(false);
  };

  return (
    <>
      <Link to={`/`} className="text-blue-500 text-sm">
        &laquo; Kembali
      </Link>

      <p className="text-xl font-bold mb-4">
        {params.id ? "Edit" : "Tambah"} Postingan
      </p>

      <p className="text-sm font-bold mb-1">Judul</p>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Judul"
        className="border border-gray-500 py-1 px-2 w-full text-sm mb-4 rounded"
      />

      <p className="text-sm font-bold mb-1">Body</p>

      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Body"
        className="border border-gray-500 py-1 px-2 w-full text-sm mb-4 rounded"
      />

      <div className="flex items-center gap-4">
        <button
          className="text-sm text-white bg-blue-500 px-2 py-1 rounded"
          onClick={submit}
        >
          Simpan
        </button>

        {loading ? <p className="text-sm">Loading ...</p> : null}
      </div>
    </>
  );
}
