import React from 'react';
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls} from '@react-three/drei'

import Model from './components/model'
import Creador from './components/creador';
import Titulo from './components/titulo';
import Boton from './components/boton';
import Descripcion from './components/descripcion';

function App() {

  const [ selector,setselector ] = useState(-1)
  const handlerChangeSelector = ( item ) =>  setselector( item )
  
  return (
    <>
        <div>

            <nav className="navbar navbar-light bg-light">

                <Titulo  titulo="Realhost.com.mx"  subtitulo="Prueba Tecnica"/>

                <div className="dropdown">
                    
                    <Creador name="@PauloPerozo"/>
                    
                    <Boton name="Selector De Paredes"/>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuMenu">
                      <button className="dropdown-item" type="button" onClick={ ()=> handlerChangeSelector(-1) }>Ninguno</button>
                      <button className="dropdown-item" type="button" onClick={ ()=> handlerChangeSelector(0) }>Frontal</button>
                      <button className="dropdown-item" type="button" onClick={ ()=> handlerChangeSelector(1) }>Posterior</button>
                      <button className="dropdown-item" type="button" onClick={ ()=> handlerChangeSelector(2) }>Lateral Derecho</button>
                      <button className="dropdown-item" type="button" onClick={ ()=> handlerChangeSelector(3) }>Lateral Izquierdo</button>
                    </div>
                    
                </div>
                
            </nav>

        </div>

        <Descripcion archivo="Barn_Testing.glb" /> 
      
        <Canvas camera={ { position: [25, 25, 25], fov:20 } }>
          <ambientLight />
          <Environment preset='city' />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls/>
          <Model positionX={0} positionY={0} positionZ={0}  selector={`${selector}`} />
          <perspectiveCamera position={[0, 0, 0]} />
        </Canvas>
        
    </>
  )
}

export default App
