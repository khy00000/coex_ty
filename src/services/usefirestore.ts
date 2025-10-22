import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function usefirestore<T extends Record<string, any[]>>(names: string[]) {
  const [data, setData] = useState<Partial<T>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

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
      } catch(err){
        console.error("Firestore 데이터 로드 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAll();
  }, [names]);

  return { data: data as T, loading, error };
};

export default usefirestore;