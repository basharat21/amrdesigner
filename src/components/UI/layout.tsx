import Footer from "@/components/UI/footer"
import Meta from "@/components/blog/Meta";
interface Props {
  preview: any;
  children: any;
}
export default function Layout({preview, children}:Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
