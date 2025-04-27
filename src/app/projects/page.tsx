import Icon from "@mdi/react";
import { mdiGithub, mdiTag } from "@mdi/js";
import Link from "next/link";

const page = () => {
    return (
        <main className="flex flex-col row-start-2 items-center">
            <div className="flex flex-col items-start lg:max-w-1/2 gap-3">
                <h1 id="exp-tracker" className="text-4xl font-bold">
                    Expense Tracker
                </h1>
                <div className="flex items-center gap-2">
                    <Icon path={mdiGithub} size={1} />
                    <Link
                        className="underline text-blue-500"
                        href={"https://github.com/cykuotw/expense-tracker"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/cykuotw/expense-tracker
                    </Link>
                </div>
                <div role="alert" className="alert alert-soft text-sm">
                    <Icon path={mdiTag} size={0.8} /> Go, React, TypeScript,
                    Postgres, AWS
                </div>
                <ul className="list-disc md:text-justify text-lg">
                    <li>
                        Fullstack web app using RESTful architecture, developed
                        with Go and React, and deployed on AWS.
                    </li>
                    <li>
                        Enabled users to track shared expenses, split bills, and
                        settle debts in real time.
                    </li>
                    <li>
                        Designed a custom transaction-matching algorithm and
                        handled edge cases in asynchronous updates.
                    </li>
                </ul>

                <div className="divider"></div>

                <h1 id="stocker" className="text-4xl font-bold">
                    Stocker
                </h1>
                <div className="flex items-center gap-2">
                    <Icon path={mdiGithub} size={1} />
                    <Link
                        className="underline text-blue-500"
                        href={"https://github.com/cykuotw/stocker"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/cykuotw/stocker
                    </Link>
                </div>
                <div role="alert" className="alert alert-soft text-sm">
                    <Icon path={mdiTag} size={0.8} /> Python, Flask, MySQL,
                    Redis, Crawler, AWS
                </div>
                <ul className="list-disc md:text-justify text-lg">
                    <li>
                        Developed an automatic data collection system to crawl
                        financial statements in the Taiwan Stock Exchange and
                        successfully reduced 66% of daily research time.
                    </li>
                    <li>
                        Reduced daily research time by 66% with automated data
                        collection.
                    </li>
                    <li>
                        Crawled financial statements from TWSE seasonally and
                        gathered daily news.
                    </li>
                    <li>
                        Streamlined financial data delivery by integrating
                        communication tools like Discord, Telegram, and Slack to
                        share financial statements and news in real time.
                    </li>
                </ul>

                <div className="divider"></div>

                <h1 id="rwr" className="text-4xl font-bold">
                    Radar Warning Receiver
                </h1>
                <div className="flex items-center gap-2"></div>
                <div role="alert" className="alert alert-soft text-sm">
                    <Icon path={mdiTag} size={0.8} /> C++11/17, Multithreaded,
                    Real-Time System, System Integration, Defense Technology
                </div>
                <ul className="list-disc md:text-justify text-lg">
                    <li>
                        Spearheaded the full-cycle development of a Radar
                        Warning Receiver (RWR) system in C++, designed to detect
                        and analyze radar signals for national defense
                        applications.
                    </li>
                    <li>
                        Implemented a multithreaded real-time architecture,
                        enabling the system to track hundreds of radar targets
                        simultaneously without performance loss.
                    </li>
                    <li>
                        Led end-to-end system integration with software and
                        hardware, ensuring smooth operation across Linux,
                        Windows, and embedded system.
                    </li>
                    <li>
                        Developed automated fault detection and self-recovery
                        mechanisms to maximize system uptime and reliability.
                    </li>
                    <li>
                        Facilitated rigorous lab and field testing directly with
                        clients, refining system performance under real-world
                        conditions.
                    </li>
                    <li>
                        Contributed to a major company milestone, generating
                        over $2M in revenue from successful deployment and
                        long-term usage by end users.
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default page;
