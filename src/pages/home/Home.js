import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';

//styles
import './Home.css';

//components
import RecipeList from "../../componenets/RecipeList";


export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsPending(true);

      const unsub = projectFirestore.collection('recipes')                                    //connects to a collection in our firestore app that we created
            .onSnapshot         //used for realtime data collection  //snapshot returns a snapshot of the collection anytime a process occurz, it takes two arguments: a function, and an error function                                     //gets all the data from that collection (its an asynchronous operation that returns a promise)
            ((snapshot) => {                                                         //snapshot is a recent copy of the data in the collection
            if(snapshot.empty){
                setError('No recipes to load');
                setIsPending(false);
            }else{
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()}); //doc.data() is a function returned from the call tht holds all the data key and values
                })
                setData(results);
                setIsPending(false);
            }
        }, (err) => {
            setError(err.message);
            setIsPending(false);
        })

        return () => unsub();
    
    }, [])

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}


