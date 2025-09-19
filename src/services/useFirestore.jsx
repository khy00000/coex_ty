import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const usefirestore = (names) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          names.map(async (name) => {
            const q =
              name === "mainnewsData"
                ? query(collection(db, name), orderBy("tabid", "asc"))
                : query(collection(db, name), orderBy("id", "asc"));

            const snapshot = await getDocs(q);

            const docs = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            return { [name]: docs };
          })
        );
        setData(Object.assign({}, ...results));
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [names]);

  return { data, loading };
};

export default usefirestore;