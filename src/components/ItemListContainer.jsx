import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refCollection;

    if (!id) {
      refCollection = collection(db, "items");
    } else {
      refCollection = query(
        collection(db, "items"),
        where("categoryId", "==", id)
      );
    }
    getDocs(refCollection).then((snapshot) => {
      const itemsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsData);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
