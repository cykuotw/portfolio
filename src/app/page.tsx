import Icon from "@mdi/react";
import {
    mdiCellphone,
    mdiEmailOutline,
    mdiMapMarker,
    mdiGithub,
} from "@mdi/js";
import Link from "next/link";

const page = () => {
    return (
        <main className="flex flex-col row-start-2 items-center">
            <div className="flex flex-col items-center lg:max-w-8/10 gap-3">
                <h1 className="text-4xl font-bold">Chun-Yi Kuo</h1>
                <p className="italic text-xs">Pronounce like: Chun Yi Go</p>
                <p className="italic text-xs">
                    Chun Yi (俊逸) is my first name and Kuo (郭) is my last name
                </p>
                <div className="divider"></div>
                <h1 className="text-3xl font-bold">Contact</h1>
                <ul className="list-none">
                    <li className="flex items-center gap-2">
                        <Icon path={mdiCellphone} size={1} /> +1 (437) 974-8627
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon path={mdiEmailOutline} size={1} />{" "}
                        cykuotw45@gmail.com
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon path={mdiMapMarker} size={1} /> Toronto, Ontario,
                        Canada
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon path={mdiGithub} size={1} />{" "}
                        <Link
                            href={"https://github.com/cykuotw"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/cykuotw
                        </Link>
                    </li>
                </ul>
                <div className="divider"></div>
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="text-center md:text-justify text-lg lg:max-w-[800px]">
                    Hey there! It is Chun-Yi, a passionate Software Engineer.
                    <br /> I have 5+ years of experience designing scalable
                    microservices using C++, Go, and Python. Optimized
                    performance by 10x through multithreading and AWS cloud
                    migrations, delivering robust REST APIs. Highly
                    collaborative in Agile settings.
                </p>
                <div className="divider"></div>
                <h1 className="text-3xl font-bold">Technical Skills</h1>
                <ul className="list-disc text-left">
                    <li>
                        <p>
                            <strong> Languages: </strong>C++, Go, Python,
                            JavaScript, TypeScript, SQL
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong> Tools/Frameworks: </strong> Linux, Git,
                            GitHub, RESTful APIs, Gin, React, TailwindCSS
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong> Cloud & DevOps: </strong>AWS (EC2, Lambda,
                            SQS, etc), Azure, Docker, Terraform
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong> Databases: </strong>PostgreSQL, MySQL,
                            Redis
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong> Other: </strong>Multithreading, OOP, Cloud
                            Migration, System Optimization, API Design, Network
                            & Serial Protocols
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default page;
