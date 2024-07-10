import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function DetailPost() {
  const params = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Link to={`/`} className="text-blue-500 text-sm">
        &laquo; Kembali
      </Link>

      <p className="text-xl font-bold mb-4">{post.title}</p>

      {loading ? <Loading /> : null}

      <p>{post.body}</p>
    </>
  );
}
