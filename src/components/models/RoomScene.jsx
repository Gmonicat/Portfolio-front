import React from 'react';
import { useGLTF } from '@react-three/drei'; 
import { BufferGeometry } from 'three';


const RoomScene = (props) =>{
    const { scene } = useGLTF('/Realone.glb')
    if (scene) {
        scene.traverse((object) => {
          if (object.isMesh) {
            object.material.depthWrite = true;
          }
        });
    }
    // console.log(scene)
    return (
        <>
            <primitive object={scene}/>
        </>
        )
}

export default RoomScene

