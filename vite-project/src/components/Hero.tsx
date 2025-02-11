export default function HeroComponent() {

    return (
        <div className="bg-right bg-cover bg-[url('./hero-cover.jpg')] h-screen 
            flex items-center justify-center text-center">

            <div className="max-w-2xl px-6">
                <h1 className="text-5xl font-bold text-white">
                    Hitta ditt drömjobb enkelt
                </h1>
                <p className="text-lg text-gray-200 mt-4">
                    Anslut med arbetsgivare snabbt och smidigt. Börja din resa idag!
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Skapa konto
                    </button>
                    <button className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400">
                        Logga in
                    </button>
                </div>
            </div>
        </div>
    );
}
