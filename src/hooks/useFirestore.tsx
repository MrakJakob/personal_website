import { useState, useEffect } from "react";
import { appFirestore } from "../firebase/config";
type Docs = {

  
  createdAt: string;
  url: string;
}



export const useFirestore = (collection: any) => {
  const [docs, setDocs] = useState<Docs[]>([]);

  useEffect(() => {
    const unsubscribe = appFirestore.collection(collection)
    .orderBy("createdAt", "desc")
    .onSnapshot((snap) => {
      let documents: any[]= [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsubscribe();  // unsubscribes from collection when we no longer need it

  }, [collection]);

  return { docs };
};
