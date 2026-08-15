import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/general-english/A1" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white">EP</span>
          <span className="text-sm font-semibold tracking-tight">ESL Pals IL</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-600">
          <Link href="/general-english/A1" className="hover:text-zinc-900">General English</Link>
          <a href="https://eslpals.com/general-english/A1" target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-zinc-900">
            eslpals.com <span className="text-[12px]">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
