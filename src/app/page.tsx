import Link from "next/link";

export default function Home() {
    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Link href="/about">
                    <button className="btn btn-primary">About</button>
                </Link>
            </main>
        </div>
    );
}
