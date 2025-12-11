import Link from "next/link";

const Menu = () => {
  return (
    <menu className="w-72 mx-auto text-center pt-10">
      <ul>
        <li>
          <Link
            href="/ssr-landing"
            className="mb-3 p-3 block w-full bg-slate-200 rounded hover:bg-slate-500"
          >
            <h5 className="font-bold">Landing Page</h5>
            <p>SSR (Server Side Rendering)</p>
          </Link>
        </li>
        <li>
          <Link
            href="/csr-passwords"
            className="mb-3 p-3 block w-full bg-slate-200 rounded hover:bg-slate-500"
          >
            <h5 className="font-bold">
              Password Generator
            </h5>
            <p>CSR (Client Side Rendering)</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dr-dynamic"
            className="mb-3 p-3 block w-full bg-slate-400 rounded hover:bg-slate-500"
          >
            <h5 className="font-bold">
              DragonBall Characters from API
            </h5>
            <p>DR (Dynamic Rendering)</p>
          </Link>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
