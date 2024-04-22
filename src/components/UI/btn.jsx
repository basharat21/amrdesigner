import Link from "next/link"
export default function Btn({
    link,
    title
}) {
  return (
    <Link href={link} className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">{title}</Link>
  );
}
