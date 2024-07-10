import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomLoading from "../components/CustomLoading";
import axios1 from "../helpers/axios1";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios1.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  const deletePost = async () => {
    setLoading(true);

    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${deleteId}`
      );

      setDeleteId(0);
      navigate(0); // refresh page
    } catch {
      //
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Blog Simple CRUD</p>

        <Link
          to={`/add-post`}
          className="text-sm text-white bg-blue-500 px-2 py-1 rounded"
        >
          + Tambah
        </Link>
      </div>

      {loading ? <p className="text-sm">Loading ...</p> : null}

      {posts.map((post) => (
        <div key={`post-${post.id}`} className="mb-4">
          <p className="font-bold">{post.title}</p>
          <p className="mb-2">{post.body}</p>

          <div className="flex items-center gap-4">
            <Link
              to={`/detail-post/${post.id}`}
              className="text-blue-500 text-sm"
            >
              Lihat Detail
            </Link>

            <Link
              to={`/edit-post/${post.id}`}
              className="text-green-700 text-sm"
            >
              Edit
            </Link>

            <button
              className="text-red-700 text-sm"
              onClick={() => setDeleteId(post.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}

      {/* delete popup */}
      {deleteId ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded p-4">
            <p className="font-bold border-b pb-4">Peringatan!</p>
            <p className="border-b py-4">Anda yakin ingin menghapus?</p>

            <div className="flex gap-4 pt-4">
              <button
                className="text-sm text-white bg-blue-500 px-4 py-1 rounded"
                onClick={deletePost}
              >
                Ya
              </button>

              <button
                className="text-sm text-white bg-red-500 px-4 py-1 rounded"
                onClick={() => setDeleteId(0)}
              >
                Tidak
              </button>

              {loading ? <CustomLoading /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
