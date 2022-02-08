export default function BoardPiece(props){
    return(
        <div style={{
            height: 100,
            width:  100,
            backgroundColor: props.color,
            display:'inline-flex',
            marginBottom:-4,
        }}></div>
    )
}
