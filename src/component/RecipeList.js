import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './recipe.css'
import Trash from '../assets/trash.svg'
import { projectFirestore } from '../../src/firebase/config'


export default function RecipeList({recipes}) {

  const { mode,color } = useTheme()

  if (recipes.length === 0) {
      return <div className='error'>No recipes to load... </div>
  }


  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
           <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <NavLink to={`/recipe/${recipe.id}`} style={{background: color}}>Cook This</NavLink>
            <img
            className='delete'
             src={ Trash }
             onClick ={() => handleClick(recipe.id)}
            />
           </div>  
        ))}
    </div> 
  )
}
