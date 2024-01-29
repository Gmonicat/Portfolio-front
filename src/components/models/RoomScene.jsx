import React from 'react';
import { useGLTF } from '@react-three/drei'; 
import { BufferGeometry } from 'three';
import * as THREE from 'three';


const RoomScene = (props) =>{
    const { scene, nodes, materials } = useGLTF('/FirstG3.glb')
    
    if (scene) {
      scene.traverse((object) => {
        console.log(materials)  
        if (object.isMesh) {
            object.material.depthWrite = true;
          }
        });
    }
    // console.log(scene)
    return (
        <>
            <primitive object={scene}/>
            <ambientLight color="white" position={[0, 0,0]} intensity={0.5}/>
        </> 
        )
}

export default RoomScene

