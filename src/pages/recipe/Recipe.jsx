
import {useParams} from "react-router-dom"
import './Recipe.css'
import { useTheme } from "../../hooks/useTheme"
import { useEffect, useState } from "react"
import { projectFirestore } from '../../firebase/config'


export default function Recipe() {
  const { mode } = useTheme()
  const{ id } = useParams()
  const[recipes, setRecipes] = useState(null)
  const[isPending, setIsPending] = useState(false)
  const[error, setError] = useState(false)

    useEffect(()=>{
      setIsPending(true)
   const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
        if(doc.exists){
          setIsPending(false)
          setRecipes(doc.data())
        } else{
          setError('Could not find this recipe')
        }
      })

      return () => unsub()
    }, [id])
  
  // const handleClick = () =>{
  //   projectFirestore.collection('recipes').doc(id).update({
  //     title: 'Something completely different' 
  //   })
  // }
  
  return (
    <div className={` recipe ${mode}`}>
    {isPending && <p className="loading">Loading...</p>}
    {error && <p className="error">{error}</p>}
    {recipes && (
      <>
      <h2 className="page-title">{recipes.title}</h2>
      <p>Takes {recipes.cookingTime} to cook</p>
      <ul>
        {recipes.ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <p className="method">{recipes.method}</p>
  
      </>
    )}
    </div>
  )
}
