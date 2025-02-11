interface PropsInterface {
    logo: string;
    title: string;
    location: string;
}

export default function Card(props: PropsInterface) {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl text-center">
            <div className="flex justify-center items-center h-40">
                <img src={props.logo} className="w-full h-full object-cover object-center rounded-t" alt={props.title} />
            </div>
            <div className="my-3">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">{props.title}</p>
                <p className="text-gray-500 dark:text-gray-400">{props.location}</p>
            </div>
        </div>

    )
}
