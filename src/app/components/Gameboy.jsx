import React, { useRef } from 'react'
import { useGLTF, RoundedBox, MeshStandardMaterial, Text, Sparkles } from '@react-three/drei'

export function Gameboy(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} />

      <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0, 1.3, 1]}
      >
        <Text
          scale={[0.1, 0.1, 0.1]}
          color="lime" // default
          anchorX="center" // default
          anchorY="middle" // default
          position={[0.15, 0, -0.4]}
          maxWidth={12}

        >
          $ --- WELCOME ---                  $ npx create-next-app potfolio_site                            $ yarn install three drie spring socket.io                 $yarn run dev
        </Text>
        <meshPhongMaterial color="#f3f3f3" wireframe />
      </RoundedBox>
      {/* <Sparkles
        count={64}
        scale={2}
        size={4}
        speed={0.4}
        color={'#77ff77'}
        position={[0, 2, 0]}

      /> */}
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
