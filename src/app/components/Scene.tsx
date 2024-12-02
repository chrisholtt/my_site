"use client";
import {
    Cylinder,
    FlyControls,
    OrbitControls,
    Stats,
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
import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Gameboy } from './Gameboy';
import * as THREE from 'three';
import LoadingStars from './home-page/LoadingStars';

export default function Scene() {
    const testing = false;
    const originalScale: number = 0.5;
    const minScale: number = 0.5; // Set the minimum scale
    const [scale, setScale] = useState(originalScale);
    const [zoom, setZoom] = useState(200); // Add zoom state

    const adjustSize = () => {
        const scaleFactor = window.innerWidth * 0.0005;
        const newScale = originalScale * scaleFactor;

        // Apply the minimum scale constraint
        setScale(Math.max(newScale, minScale));

        setZoom(200 * (window.innerWidth / 1000)); // Adjust zoom based on window width
    };

    useEffect(() => {
        // Adding event listener
        window.addEventListener("resize", adjustSize);
        adjustSize(); // Adjust size immediately on mount

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", adjustSize);
        };
    }, []);

    return (
        <Suspense fallback={<LoadingStars />}>
            <Canvas style={{ zIndex: -1 }} color={"#ffff"}>
                <OrthographicCamera
                    makeDefault
                    zoom={zoom} // Dynamically set zoom
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
                <Gameboy scale={scale} />
            </Canvas>
        </Suspense>
    );
}
