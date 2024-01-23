import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

 const ModelViewer = () => {
//   useEffect(() => {
//     // Set up Three.js scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 0, 5); // Adjust camera position
//     camera.lookAt(0, 0, 0); // Set camera look at point

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000); 
//     document.body.appendChild(renderer.domElement);

//     // Add lighting
//     // const ambientLight = new THREE.AmbientLight(0x404040);
//     // scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     // Load the .glb model
//     const loader = new GLTFLoader();
//     loader.load(
//       process.env.PUBLIC_URL + '/assets/Realone.glb',
//       (gltf) => {
//         gltf.scene.scale.set(0.1, 0.1, 0.1);
//         scene.add(gltf.scene);
//       },
//       undefined,
//       (error) => {
//         console.error('Error loading model:', error);
//       }
//     );

//     // Set up animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Add your animation logic here

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resizing
//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     // Clean up Three.js scene on component unmount
//     return () => {
//       document.body.removeChild(renderer.domElement);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return null; // No need to render anything in the React component
 };

export default ModelViewer;