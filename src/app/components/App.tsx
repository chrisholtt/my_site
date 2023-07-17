"use client"
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Floor(props) {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
        </mesh>
    );
}

export default function App() {
    return (
        <Canvas>
            <OrbitControls />
            <Floor />
        </Canvas>
    );
};

