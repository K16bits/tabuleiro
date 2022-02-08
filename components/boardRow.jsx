import BoardPiece from "./boardPiece";
const _ = require('lodash')

export default function BoardRow({color1,color2}){
    return(
        _.times(4,index=>{
            return(
                <div key={index} style={{display:"inline"}}>
                    <BoardPiece color={color1}/>
                    <BoardPiece color={color2}/>
                </div>
            )
        })
    )
}