import Link from "next/link";

const GoBack = () => {
  return (
    <div className="flex justify-end">
      <button className="mt-10 px-4 py-2 bg-slate-900 text-white rounded">
        <Link href="/dr-dynamic">Back to list</Link>
      </button>
    </div>
  );
};

export default GoBack;
