import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-2xl">
                    Chun-Yi Kuo
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className="btn btn-ghost text-xl">
                            Intro
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experiences"
                            className="btn btn-ghost text-xl"
                        >
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="btn btn-ghost text-xl"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Navbar;
