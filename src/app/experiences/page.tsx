import Icon from "@mdi/react";
import { mdiMapMarker, mdiBriefcase, mdiCalendar, mdiTag } from "@mdi/js";

const page = () => {
    return (
        <main className="flex flex-col row-start-2 items-center">
            <div className="flex flex-col items-start lg:max-w-3/5 gap-3">
                <h1 className="text-4xl font-bold">
                    Programmer/Analyst Co-op Fullstack
                </h1>
                <ul className="list-none text-left ">
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiMapMarker} size={1} /> Toronto, ON,
                        Canada
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiBriefcase} size={1} /> Toronto Transit
                        Commission (TTC)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiCalendar} size={1} /> Jan 2023 - Aug 2023
                        ( 8 months )
                    </li>
                </ul>
                <div role="alert" className="alert alert-soft text-sm italic">
                    <Icon path={mdiTag} size={0.8} /> Fullstack, CMS, SQL, Cloud
                    Migration, Scrum
                </div>
                <ul className="list-disc text-justify text-lg">
                    <li>
                        Enhanced CMS performance by 10x through SQL indexing and
                        code refactoring, significantly improving report
                        generation efficiency that benefited 20+ internal users.
                    </li>
                    <li>
                        Conducted a cloud migration proof-of-concept with Azure,
                        setting timelines and prototyping the backend.
                    </li>
                    <li>
                        Maintained SharePoint, HTML, CSS, and JavaScript for a
                        smooth user experience.
                    </li>
                    <li>
                        Created technical documentation for system changes,
                        facilitating collaboration and onboarding despite VBA
                        version control limitations.
                    </li>
                    <li>
                        Collaborated in a Scrum team to create and validate
                        deliverables that aligned with the team goals.
                    </li>
                </ul>

                <div className="divider"></div>

                <h1 className="text-4xl font-bold">Software Engineer</h1>
                <ul className="list-none text-left">
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiMapMarker} size={1} /> Taipei (台北),
                        Taiwan (台灣)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiBriefcase} size={1} /> T&C Technologies
                        Inc.
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <Icon path={mdiCalendar} size={1} /> Jan 2017 - Oct 2021
                        ( 4 years 10 months )
                    </li>
                </ul>
                <div role="alert" className="alert alert-soft text-sm italic">
                    <Icon path={mdiTag} size={0.8} /> C++, Multithreading,
                    Read-time, Fault Tolerance, Cross Disciplinary Communication
                </div>
                <ul className="list-disc text-justify text-lg">
                    <li>
                        Designed an event-driven, multithreaded C++ Radar
                        Warning Receiver (RWR) capable of tracking hundreds of
                        radar targets in real-time with GB-level data
                        throughput.
                    </li>
                    <li>
                        Engineered the system for continuous, long-term
                        operation, ensuring reliable high-volume data processing
                        over extended periods, contributing to over $2M in
                        revenue.
                    </li>
                    <li>
                        Analyzed and isolated radar signals, identified
                        recurring patterns, and generated comprehensive reports
                        to support end-user decision-making.
                    </li>
                    <li>
                        Implemented fault tolerance to detect high resource
                        usage events and enable self-recovery.
                    </li>
                    <li>
                        Facilitated integration of network and serial protocols
                        for cross-platform communication.
                    </li>
                    <li>
                        Introduced Git and GitFlow for streamlined workflows and
                        utilized Python scripts for automation.
                    </li>
                    <li>
                        Collaborated with clients and stakeholders to ensure
                        seamless integration.
                    </li>
                    <li>
                        Managed compliance testing for military standards,
                        establishing best practices and design protocols.
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default page;
