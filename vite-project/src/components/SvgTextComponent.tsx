import { ReactNode } from "react";
import TopWave from '../assets/top-wave.svg?react'
import BottomWave from '../assets/bottom-wave.svg?react'

interface PropsInterface {
    svg: ReactNode,
    isRight: boolean,
    title: string,
    description: string,
    titleColor: string,
    textColor: string,
    wave?: boolean,
    waveColor?: string,
    divColor?: string,
}


export default function SvgTextComponent(props: PropsInterface) {

    return (
        <div className="w-full h-auto">
            {props.wave && (
                <TopWave className={`w-full -mb-1  ${props.waveColor}`} />
            )}

            <div className={`pt-10 pb-20 px-20 flex justify-around items-center
                ${props.divColor} ${props.isRight ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}>
                <div className="h-64 max-w-full md:max-w-1/2">
                    {props.svg}
                </div>
                <div className="max-w-full md:max-w-1/2 mt-4">
                    <h3 className={`tracking-wide text-2xl font-bold ${props.titleColor}`}>{props.title}</h3>
                    <p className={`mt-1 text-sm font-semibold ${props.textColor}`}>{props.description}</p>
                </div>
            </div>

            {props.wave && (
                <BottomWave className={`w-full -mt-1 ${props.waveColor}`} />
            )}
        </div>
    );
}
