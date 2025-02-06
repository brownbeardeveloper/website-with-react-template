import WaveDivider from "../assets/footer-wave.svg?react";
import FacebookIcon from "../assets/facebook.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import Button from "./Button";

export default function Footer() {

    return (
        <div className="max-h-10">
            <div className="-mb-1 ">
                <WaveDivider className="bg-gray-100 dark:bg-slate-700" />
            </div>

            <div className="w-full min-h-screen flex items-center justify-center bg-purple-700 dark:bg-gray-900">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-7xl font-bold">
                        <h1 className="w-full md:w-2/3">How can we help you. get
                            in touch</h1>
                    </div>
                    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                        <p className="w-full md:w-2/3 text-gray-400">
                            To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged
                        </p>
                        <div className="w-44 pt-6 md:pt-0">
                            <Button text="Contact Us!" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mt-24 mb-12 flex-row justify-between">
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Services</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                            <div className="flex flex-row space-x-8 items-center justify-between">
                                <a>
                                    <FacebookIcon />
                                </a>
                                <a>
                                    <LinkedinIcon />
                                </a>
                                <a>
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />
                        <p className="w-full text-center my-8 text-gray-500 text-sm tracking-wide">
                            &copy; 2025 SkillSwipe. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}
