"use client"
import {
    Cylinder,
    FlyControls,
    OrbitControls,
    Stats, useHelper,
    CameraControls,
    PerspectiveCamera,
    Float,
    ContactShadows,
    Environment,
    Sky,
    OrthographicCamera,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { CylinderCollider, Physics, RigidBody } from '@react-three/rapier';
import { log } from 'console';
import { Suspense, useRef, useMemo } from 'react';
import { Gameboy } from './Gameboy';



const CameraDolly = () => {
    useFrame((state) => {
        state.camera.lookAt(0, 0, 0)
    })
    return null;
}


export default function App() {
    const testing = false;


    return (
        <Canvas>
            <OrthographicCamera
                makeDefault
                zoom={100}
                near={1}
                far={2000}
                position={[0, 0, 2]}
            />
            {testing ? <gridHelper args={[10, 10]} /> : null}
            {testing ? <axesHelper args={[2]} /> : null}
            {testing ? <Stats /> : null}
            {testing ? <OrbitControls /> : null}
            <Environment preset="city" />
            <pointLight position={[10, 10, 10]} />
            <ContactShadows frames={1} position={[0, -0.5, 0]} scale={10} opacity={0.4} far={1} blur={2} />
            <pointLight position={[10, 10, 10]} />

            <Suspense >
                {/* <fog attach={"fog"} args={["#ffffff16", 2, 2]} /> */}
                <Float>
                    <Gameboy />
                </Float>
            </Suspense>
            {/* <Sky /> */}
            <CameraDolly />
        </Canvas>
    );
};

