function Creador( props ) {

    const tab =  Array(5).fill("\u00A0").join('') 
    return (
        <>
            <h7> 
                <strong>Creador:</strong>
                <small class="text-muted"> { props.name } { tab } </small>
            </h7>  
        </>
    )
}
export default Creador
