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
        state.camera.lookAt(0, 0, 0)
    })
    return null;
}

const Portal = () => {
    const map = useTexture('backgrounds/sky.png');
    const ref = useRef<any>();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y = -0.2 - (1 + Math.sin(t - 1.5)) / 20
        ref.current.rotation.x = (Math.cos(t / 4) / 8)
        ref.current.rotation.z = Math.sin(t / 4) / 8;
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })
    return (
        <group onClick={() => console.log('clicked')}>
            <ambientLight intensity={0.5} />
            <Environment preset='sunset' />
            <OrbitControls />
            <RoundedBox ref={ref} args={[2, 3, 0.1]}>
                <MeshPortalMaterial side={THREE.DoubleSide}>
                    <ambientLight intensity={0.5} />
                    <Environment preset='sunset' />
                    <mesh position={[0, 0, -10]}>
                        <sphereGeometry args={[5, 32, 32]} />
                        <meshStandardMaterial map={map} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    )
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
                {/* <Portal /> */}
                <CameraDolly />
            </Canvas>
        </Suspense>
    );
};

