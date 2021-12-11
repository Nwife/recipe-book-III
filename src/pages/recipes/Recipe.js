import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { projectFirestore } from '../../firebase/config';

//hooks
import { useTheme } from '../../hooks/useTheme'

//styles
import './Recipe.css';

export default function Recipe() {
    const { id } = useParams();
    const { mode } = useTheme();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setIsPending(true);

        //doc is a method which accepts the id of a document in a collection
        const unsub = projectFirestore.collection('recipes').doc(id)//.get().then
        .onSnapshot((doc) => { 
            if(doc.exists){
                setIsPending(false);
                setRecipe(doc.data());
            } else {
                setIsPending(false);
                setError('Could not find that recipe');
            }
        })  

        return () => unsub();
    }, [id])

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({ //updates the ui
            title: 'Something New'
        })
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe &&  (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                    <button onClick={handleClick}>Update recipe</button>
                </>
            )}
        </div>
    )
}
