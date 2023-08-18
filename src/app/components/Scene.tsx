"use client"
import {
    Cylinder,
    FlyControls,
    OrbitControls,
    Stats, useHelper,
    CameraControls,
    PerspectiveCamera,
    ContactShadows,
    Environment,
    Sky,
    OrthographicCamera,
    Scroll,
    ScrollControls,

} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { CylinderCollider, Physics, RigidBody } from '@react-three/rapier';
import { Suspense, useRef, useMemo } from 'react';
import { Gameboy } from './Gameboy';
import Hero from './Hero'
import Skills from './Skills'



const CameraDolly = () => {
    useFrame((state) => {
        state.camera.lookAt(0, 0, 0)
    })
    return null;
}


export default function Scene() {
    const testing = false;

    return (
        <Canvas style={{ position: 'absolute', zIndex: -1 }}>
            <OrthographicCamera
                makeDefault
                zoom={100}
                near={1}
                far={2000}
                position={[0, 0, 4]}
            />
            {testing ? <gridHelper args={[10, 10]} /> : null}
            {testing ? <axesHelper args={[2]} /> : null}
            {testing ? <Stats /> : null}
            {testing ? <OrbitControls /> : null}
            <Environment preset="city" />
            <pointLight position={[10, 10, 10]} />
            <ContactShadows frames={1} position={[0, -0.5, 0]} scale={10} opacity={0.4} far={1} blur={20} />
            <pointLight position={[10, 10, 10]} />
            <Gameboy />
            <CameraDolly />
        </Canvas>
    );
};

