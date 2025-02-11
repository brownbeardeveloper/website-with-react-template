import { ReactNode } from "react";
import TopWave from '../assets/top-wave.svg?react'
import BottomWave from '../assets/bottom-wave.svg?react'

interface PropsInterface {
    svg: ReactNode,
    isRight: boolean,
    header: string,
    description: string,
    wave: boolean,
    waveColor?: string,
    divColor?: string,
}


export default function svgTextComponent(props: PropsInterface) {

    return (
        <div className="w-full border">
            {props.wave && (
                <TopWave className={`w-full -mb-1  ${props.waveColor}`} />
            )}

            <div className={`flex py-10 justify-between h-60 items-center
                ${props.divColor} ${props.isRight ? "flex-row-reverse" : "flex-row"}`}>
                <div className="border h-64 w-auto">
                    {props.svg}
                </div>
                <div className="border">
                    <h3 className="text-lg font-semibold">{props.header}</h3>
                    <p className="text-sm text-gray-600">{props.description}</p>
                </div>
            </div>

            {props.wave && (
                <BottomWave className={`w-full -mt-1 ${props.waveColor}`} />
            )}
        </div>
    );
}
