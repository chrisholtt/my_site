import { Sphere } from "@react-three/drei"

export default function Ball() {
    return (
        <group>
            <Sphere args={[1, 15, 16, 0, 6.28, 0, 3.141]} receiveShadow>
                <meshStandardMaterial color="#CCCCCC" />
            </Sphere>
        </group>

    )
}