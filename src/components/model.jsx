
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

function Model( props ) {

    const gltf = useLoader(GLTFLoader, 'Barn_Testing.glb')
    const meshs = ["LoftedBarn_6Wall_10x12_None_Wall3","LoftedBarn_6Wall_10x12_None_Wall1","LoftedBarn_6Wall_10x12_None_Wall2","LoftedBarn_6Wall_10x12_None_Wall4"] /* Frente, derecho,atras,izquierdo */

    const color_original =  new THREE.MeshBasicMaterial({ color: 'rgb(223, 227, 255)' })
    const color_modificado = new THREE.MeshBasicMaterial({ color: 'rgb(140, 171, 125)' }) 

    if( props?.selector )
    {
        for( let name of meshs)
        {
            const mesh = gltf.scene.getObjectByName( name )
            mesh.material  = name == meshs[ props.selector ] ? color_modificado : color_original 
        }
    }

    return (
        <>
            <primitive 
            position-x={props.positionX}
            position-y={props.positionY} 
            position-z={props.positionZ} 
            object={gltf.scene} />
           
        </>
    )
}
export default Model