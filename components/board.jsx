import BoardColor from './boardColor'

const _ = require('lodash')
export default function Board({color1,color2}){
    return(
        <>
            {
                _.times(4,index=>{
                    return(
                        <BoardColor key={index} color1={color1} color2={color2}/>
                    )
                })
            }
        </>
    )
}