import Link from "next/link";

const Links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/todos", label: "Tasks" },
];

const Navbar = () => {
  return (
    <header className="bg-inherit border-b-2 border-purple-400/20 flex justify-between items-center">
      <h2 className="text-nowrap py-4 px-8">Todo App using NEXT.JS</h2>
      <ul className="w-full flex gap-6 justify-end px-8 2">
        {Links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="inline-flex gap-2 items-center hover:text-purple-400 hover:shadow-purple-400 hover:scale-[1.2] transition"
          >
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
