import BoardRow from "./boardRow"

export default function BoardColor({color1,color2}){  
    return(
      <>
          <BoardRow color1={color1} color2={color2}/>
          <BoardRow color1={color2} color2={color1}/>
      </>
)}
