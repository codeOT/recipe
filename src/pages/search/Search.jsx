import { useLocation } from 'react-router-dom'
import { useFetch } from "../../hooks/4.1 useFetch"
import RecipeList from '../../component/RecipeList'
import { useTheme } from "../../hooks/useTheme"
import './Search.css'
// import { projectFirestore } from '../../firebase/config'   

export default function Search() {
  const { mode } = useTheme()
  
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const url = 'http://localhost:3000/recipes?q=' + query 
  const { error, isPending, data } = useFetch(url)
  return (
    <div className={` search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
