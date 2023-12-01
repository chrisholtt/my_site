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
    MeshPortalMaterial,
    useTexture,
    RoundedBox,
    Circle
} from '@react-three/drei';
import { Canvas, SceneProps, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { Gameboy } from './Gameboy';
import * as THREE from 'three';
import LoadingStars from './home-page/LoadingStars';

const CameraDolly = () => {
    useFrame((state) => {
        state.camera.lookAt(0, 0, 0);
    })
    return null;
}


export default function Scene() {
    const testing = false;
    return (
        <Suspense fallback={<LoadingStars />}>
            <Canvas style={{ position: 'fixed', zIndex: -1 }}>
                <OrthographicCamera
                    makeDefault
                    zoom={100}
                    near={0.1}
                    far={2000}
                    position={[0, 0, 40]}
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
        </Suspense>
    );
};

