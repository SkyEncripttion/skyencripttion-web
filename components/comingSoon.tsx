import Image from "next/image";
import { motion } from "framer-motion"
import SkyEncripttion from "../public/svg/SkyEncripttion.svg";

export default function ComingSoon()
{
    return (
        <>
            <motion.div
                className="w-32 mx-auto"
                whileHover={ { scale: 1.3 } }
                transition={ { ease: "easeOut", duration: 0.2 } }
            >
                <a href="https://youtube.com/SkyEncripttion" target="_blank" rel="noreferrer">
                    <Image src={ SkyEncripttion } alt="SkyEncripttion Logo" />
                </a>
            </motion.div>
            <div className="flex flex-col text-center text-white mt-6 space-y-2">
                <h1 className="font-secondary text-2xl">Coming Soon</h1>
                <p className="font-main font-bold text-gray-500">SkyEncripttion - Indonesia</p>
            </div>
        </>
    );
}