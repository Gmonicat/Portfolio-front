import React,{useRef,useEffect, useMemo} from 'react';
import * as THREE from 'three';
import '../styles/home.css'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import RoomScene from './models/RoomScene.jsx'


const Home = () =>{
    const modelRef = useRef()
    const rendererRef = useRef();

    return(
        <>
            <Canvas frameloop="demand" camera={{ position: [-8,3,5], fov: 45, near: 0.1, far: 200 }}> 
                {/* <ambientLight intensity={1} /> */}
                <directionalLight color="white" position={[5, 5, 10]} />
                {/* <mesh>
                    <boxGeometry args={[2,2,2]}/>
                    <meshStandardMaterial/>
                </mesh> */}
                <RoomScene/>
                <OrbitControls/>
            </Canvas>        
        </>
    )

}

export default Home