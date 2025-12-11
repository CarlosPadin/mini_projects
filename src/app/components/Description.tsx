import Link from "next/link";

const Description = () => {
  return (
    <main className="flex mx-auto max-w-2xl">
      <div className="my-4">
        <p className="text-center text-lg">
          This is a page that shows the two types of
          rendering in Next.js 16 and a dynamic rendering
          mode that is also SSR but in a different way.{" "}
          <span className="text-sm text-gray-500">
            <Link
              href={
                "https://www.udemy.com/share/10cSNX3@jhpkNGCy1swEk9R6To8GjRGf6tuixykDMbqSeIMwtXhL4GWG873nEx9A2BQ3s5ePYQ==/"
              }
            >
              (by Jose Galdamez)
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Description;
