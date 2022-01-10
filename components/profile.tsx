import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaGraduationCap } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative w-96 h-auto bg-sky-500 rounded-md pt-24 pb-8 px-4 shadow-2xl flex flex-col items-center">
                <div className="absolute w-28 h-28 p-2 z-10 -top-8">
                    <Image
                        src="https://pbs.twimg.com/profile_images/1324212936764661760/jKbbNgTM_400x400.jpg"
                        alt="Profile"
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                <label className="font-bold text-yellow-400 text-lg">
                    Makoto Hiramatsu
                </label>
                <p className="text-center text-gray-200 mt-2 leading-relaxed">
                    Software engineer who is interested in machine learning and human language technology.
                </p>
                <ul className="flex flex-row gap-2 mt-6">
                    <Link href="https://twitter.com/himkt"      passHref><FaTwitter   size="20px"/></Link>
                    <Link href="https://github.com/himkt"       passHref><FaGithub    size="20px"/></Link>
                    <Link href="https://instagram.com/himamako" passHref><FaInstagram size="20px"/></Link>
                    <Link href="https://scholar.google.com/citations?user=48jLQIwAAAAJ&hl=en&oi=ao" passHref>
                        <FaGraduationCap size ="20px"/>
                    </Link>
                </ul>
            </div>
        </div>
    )
}


export default Profile;
