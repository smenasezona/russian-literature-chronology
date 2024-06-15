import React from 'react'
import {Canvas} from "@react-three/fiber";
import {periods} from "../../data/periods.ts";
import Period from "../Period/Period.tsx";

const Timeline: React.FC = () => {
    return (
        <Canvas camera={{position: [0, 0, 10]}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1}/>
            {periods.map((period, index) => (
                <Period key={period.id} period={period} index={index}/>
            ))}
        </Canvas>
    )
}

export default Timeline
