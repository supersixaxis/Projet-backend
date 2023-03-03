import { useRoutes } from 'react-router-dom'
import { RouteURl } from './router/index'

function App(){
    let main = useRoutes(RouteURl)
    return(
        <>
            {main}
        </>
    )
}
export default App

