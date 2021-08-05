import Image from "next/image";
import SkyEncripttion from "../public/svg/SkyEncripttion.svg";

export default function ComingSoon()
{
    return (
        <>
            <div className="w-32 mx-auto">
                <a href="https://youtube.com/SkyEncripttion" target="_blank" rel="noreferrer">
                    <Image src={ SkyEncripttion } alt="SkyEncripttion Logo" />
                </a>
            </div>
            <div className="flex flex-col text-center text-white mt-6 space-y-2">
                <h1 className="font-primary text-2xl">Coming Soon</h1>
                <p className="font-main font-bold text-gray-500">SkyEncripttion - Indonesia</p>
            </div>
        </>
    );
}