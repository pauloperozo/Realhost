function Descripcion( props ) {

    return (
        <>
            <blockquote class="blockquote text-center">
            <p class="mb-0">Modelo 3D {props.archivo}</p>
            <footer class="blockquote-footer mb-3"> Nota: use el mouse para control de direccion del modelo. </footer>
            </blockquote>
        </>
    )
}
export default Descripcion
