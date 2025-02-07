import BlobDivider from "../assets/blob.svg?react";

export default function ContactPage() {

    const lbl = "block text-sm font-medium text-gray-700 dark:text-gray-200"
    const inpt = "block w-full px-4 py-3 border rounded-md shadow-sm outline-none \
        border-gray-300 bg-gray-50 dark:border-gray-300 dark:border-gray-200"

    return (
        <main className="border w-full h-screen max-w-screen-xl mx-auto flex flex-col items-center justify-center p-6 relative">
            <div className="">
                <form id="contact-form" noValidate className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-2">
                        <label htmlFor="firstname" className={lbl}>
                            Namn *
                        </label>
                        <div className="mt-1">
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                autoComplete="given-name"
                                className={inpt} />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className={lbl}>
                            Företag *
                        </label>
                        <div className="mt-1">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className={inpt}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className={lbl} >
                            Email *
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={inpt}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className={lbl}>
                            Telefon (Om du vill bli kontaktad)
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="Tex. 070255255255"
                            className={inpt}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className={lbl}>
                            Meddelande *
                        </label>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">Max 2000 tecken</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Antal tecken: 0</span>
                        <div className="mt-1">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className={inpt}
                                placeholder="Skriv ditt meddelande här"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <p className="text-base text-gray-500 dark:text-gray-200">
                            När du skickar denna kontaktförfrågan godkänner du att vi behandlar och lagrar dessa uppgifter.
                        </p>
                    </div>

                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium 
                            text-white duration-300 scale-100 bg-black border border-transparent rounded-md 
                            shadow-sm outline-none hover:bg-gray-900 hover:scale-[1.03]"
                        >
                            Skicka meddelande
                        </button>
                    </div>
                </form>

            </div>

            <div id="blob-div" className="absolute top-[12%] right-[10%]">
                <BlobDivider className=" w-full h-32 md:h-100" />
            </div>



        </main>
    );
}
