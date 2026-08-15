import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-sm text-zinc-500">Level not found. Try A0, A1, A2 or B1.</p>
      <Link href="/general-english/A1" className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700">Go to A1</Link>
    </div>
  );
}
