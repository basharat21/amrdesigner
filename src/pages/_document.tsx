import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner">
            <span>Drag</span>
        </div>
        <button className="progress-wrap" aria-label="scroll indicator" title="go to top">
            <span></span>
            <svg
                className="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
        </button>
        <NextScript />
      </body>
    </Html>
  );
}
