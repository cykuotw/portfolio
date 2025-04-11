import Icon from "@mdi/react";
import { mdiGithub, mdiTag } from "@mdi/js";
import Link from "next/link";

const page = () => {
    return (
        <main className="flex flex-col row-start-2 items-center">
            <div className="flex flex-col items-start lg:max-w-3/5 gap-3">
                <h1 className="text-4xl font-bold">Expense Tracker</h1>
                <div className="flex items-center gap-2">
                    <Icon path={mdiGithub} size={1} />
                    <Link
                        href={"https://github.com/cykuotw/expense-tracker"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/cykuotw/expense-tracker
                    </Link>
                </div>
                <div role="alert" className="alert alert-soft text-sm italic">
                    <Icon path={mdiTag} size={0.8} /> Go, React, Postgres, AWS
                </div>
                <ul className="list-disc md:text-justify text-lg">
                    <li>
                        Fullstack web app using RESTful architecture, developed
                        with Go and React, and deployed on AWS.
                    </li>
                    <li>
                        Tracked expenses, noting the payer and items bought.
                    </li>
                    <li>
                        Reduced transactions per person when settling expenses.
                    </li>
                </ul>

                <div className="divider"></div>

                <h1 className="text-4xl font-bold">Stocker</h1>
                <div className="flex items-center gap-2">
                    <Icon path={mdiGithub} size={1} />
                    <Link
                        href={"https://github.com/cykuotw/stocker"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/cykuotw/stocker
                    </Link>
                </div>
                <div role="alert" className="alert alert-soft text-sm italic">
                    <Icon path={mdiTag} size={0.8} /> Python, Flask, MySQL,
                    Redis, Crawler, AWS
                </div>
                <ul className="list-disc md:text-justify text-lg">
                    <li>
                        Automated system for collecting financial statements of
                        Taiwan-listed companies.
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
                        Reviewed and shared financial statements and news via
                        communication apps.
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default page;
