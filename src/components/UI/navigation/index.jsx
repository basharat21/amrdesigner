import Link from "next/link";
import NavLink from "@/components/UI/navigation/navlink";
import NavSubLink from "@/components/UI/navigation/navsublink";
export default function Navigation() {
  return (
    <>
    <nav className="navigation">
        <ul className="flex items-center text-[#000] text-[18px] font-semibold">
            <li className="group relative"><NavLink href="/" name="Website Designer" />
                <ul className="absolute left-0 top-[100%] text-nowrap text-[16px] bg-white drop-shadow-md flex flex-col rounded-b-md hidden group-hover:block">
                    <li><NavSubLink href="/" name="WordPress Website Designer"/></li>
                    <li><NavSubLink href="/" name="Shopify Website Designer"/></li>
                    <li><NavSubLink href="/" name="Webflow Website Designer"/></li>
                    <li><NavSubLink href="/" name="Weebly Website Designer"/></li>
                    <li><NavSubLink href="/" name="Wix Website Designer"/></li>
                </ul>
            </li>
            <li className="group relative"><NavLink href="/" name="E-Commerce Developer" />
                <ul className="absolute left-0 top-[100%] text-nowrap text-[16px] bg-white drop-shadow-md flex flex-col rounded-b-md hidden group-hover:block">
                    <li><NavSubLink href="/" name="WordPress Woocommerce Website Designer"/></li>
                    <li><NavSubLink href="/" name="Shopify Website Designer"/></li>
                    <li><NavSubLink href="/" name="Bigcommerce Website Designer"/></li>
                </ul>
            </li>
            <li className="group relative"><NavLink href="/" name="Frontend Developer" />
                <ul className="absolute left-0 top-[100%] text-nowrap text-[16px] bg-white drop-shadow-md flex flex-col rounded-b-md hidden group-hover:block">
                    <li><NavSubLink href="/" name="HTML Frontend Developer"/></li>
                    <li><NavSubLink href="/" name="Next.JS Frontend Developer"/></li>
                    <li><NavSubLink href="/" name="Bootstrap CSS Frontend Developer"/></li>
                    <li><NavSubLink href="/" name="Tailwind CSS Frontend Developer"/></li>
                    <li><NavSubLink href="/" name="Figma To HTML"/></li>
                    <li><NavSubLink href="/" name="Photoshop To HTML"/></li>
                    <li><NavSubLink href="/" name="Adobe XD To HTML Developer"/></li>
                </ul>
            </li>
        </ul>
    </nav>
    </>
  );
}
