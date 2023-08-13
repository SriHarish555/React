import './App.css'
import { useStateProvider } from "./Context/StateContext";

function App() {

  const [{ }, dispatch] = useStateProvider();
  console.log(useStateProvider())  //useStateProvider()  ALWAYS RETURNS UNDEFINED
  return (
    <>
      AppS
    </>
  )
}

export default App
