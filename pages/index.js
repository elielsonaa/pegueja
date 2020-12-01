import {useState} from 'react'
import Link from "next/link"

function Home(){
    return (
         <div>
             <h1>Home 2</h1>
             <Contador/>
             <Link href="/sobre">
                <a>Sobre nós</a>
            </Link>
         </div>
         
    )
}
function Contador(){
const [contador,setContador] = useState(1);

  function adicionarContador(){
      setContador(contador + 1);
  }
  return(
      <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar mais 1</button>
      </div>
  )
}
export default Home