function Boton( props ) {

    return (
        <>
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { props.name }
            </button>
        </>
    )
}
export default Boton
