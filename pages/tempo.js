import Link from "next/link"

function Tempo(props){
    const dinamicDate = new Date();
    const dinamicDateString = dinamicDate.toGMTString()
    return (
        <div>
         <div>
            <h1>Tempo</h1>
            <b>{dinamicDateString}(Dinâmico)</b>
            <br/>
         </div>
         <div>
        <b>{props.staticDateString} (Estática)</b>
             <br/>
             <Link href="/">
             <a>Home</a>
             </Link>
         </div>
         </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString()
    
    return {
        props: {
            staticDateString
        }
    }
}
export default Tempo