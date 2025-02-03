export default function Card({ text }: { text: string }) {

    return (
        <div className="max-w-sm w-full p-10 bg-white">
            <div className="p-3 flex flex-col justify-between border rounded border-gray-400 bg-white">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="flex items-center">
                    <img
                        src="https://ryds.se/wp-content/uploads/2022/12/Walkaround.jpg"
                        width={500}
                        height={500}
                        alt="null"
                        className="rounded"
                    />
                </div>
                <div className="mt-3 text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                </div>

            </div>
        </div>
    )
}