import BlobDivider from "../assets/blob.svg?react";

export default function AboutPage() {
    return (
        <main className="border w-full h-screen max-w-screen-xl mx-auto flex flex-col items-center justify-center p-6 relative">
            <div className="bottom-20 left-10">
                <h1 className="text-4xl md:text-8xl font-bold text-gray-800">About Us</h1>
                <p className="my-5 text-md md:text-2xl max-w-2xl">
                    Welcome to our website! We are committed to providing high-quality
                    products and services to our customers. Our team works hard to ensure
                    that every project meets the highest standards of excellence.
                </p>
            </div>

            <div id="blob-div" className="absolute top-[12%] right-[10%]">
                <BlobDivider className=" w-full h-32 md:h-100" />
            </div>

            <div className="w-full flex flex-col p-4">
                <h3>Hello, World!</h3>
            </div>

        </main>
    );
}
