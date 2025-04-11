import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

import Icon from "@mdi/react";
import { mdiBriefcaseOutline, mdiFileOutline, mdiHomeOutline } from "@mdi/js";

const Navbar = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <Link href="/" className="btn btn-ghost text-2xl">
                            Chun-Yi Kuo
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link
                                    href="/"
                                    className="btn btn-ghost text-xl"
                                >
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
            </div>

            <div className="md:hidden">
                <div className="dock dock-xl">
                    <button>
                        <Link href="/" className="flex flex-col items-center">
                            <Icon path={mdiHomeOutline} size={1} />
                            Intro
                        </Link>
                    </button>
                    <button>
                        <Link
                            href="/experiences"
                            className="flex flex-col items-center"
                        >
                            <Icon path={mdiBriefcaseOutline} size={1} />
                            <span>Experiences</span>
                        </Link>
                    </button>

                    <button>
                        <Link
                            href="/projects"
                            className="flex flex-col items-center"
                        >
                            <Icon path={mdiFileOutline} size={1} />
                            Projects
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
