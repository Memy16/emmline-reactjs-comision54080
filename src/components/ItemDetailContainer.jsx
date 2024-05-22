import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!item)
    return (
      <div className="spinnerSt">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  return <ItemDetail {...item} />;
};
