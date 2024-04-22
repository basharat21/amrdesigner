import Link from "next/link";
export default function NavSubLink({
    name,
    href
}) {
  return (
    <>
    <Link href={href} className="hover:text-[#ff4867] px-5 py-2 block border-t hover:bg-[#ea552b] hover:text-white">{name}</Link>
    </>
  );
}
