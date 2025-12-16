import Link from "next/link";

const TopBar = () => {
  return (
    <header className="bg-slate-900 text-white p-5 text-center">
      <Link href={"/"}>
        <h1>UDEMY mini projects</h1>
      </Link>
    </header>
  );
};

export default TopBar;
