import Link from "next/link";
export default function NavLink({
    name,
    href
}) {
  return (
    <>
    <Link href={href} className="hover:text-[#ff4867] p-3 xl:p-5 block group-hover:text-[#ea552b]">{name}</Link>
    </>
  );
}
