function Titulo( props ) {

    return (
        <>
            <a className="navbar-brand" href="#">
                <h6>
                    <strong> { props.titulo} </strong>
                    <small class="text-muted">{ props.subtitulo }</small>
                </h6>
            </a> 
        </>
    )
}
export default Titulo



