import { Link } from "nextra-theme-docs";

export const metadata = {
  description:
    "Build fast, customizable, and content-rich websites with Nextra. Powered by Next.js, it offers seamless Markdown support, customizable themes, file conventions, and easy integration with MDX, making it perfect for documentation, blogs, and static websites.",
};

const IndexPage = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Make beautiful websites <br className="max-sm:hidden" />
          with Next.js & MDX
        </h1>
        <p className="subtitle">
          Simple, powerful and flexible site generation framework{" "}
          <br className="max-md:hidden" />
          with everything you love from{" "}
          <Link href="https://nextjs.org" className="text-current">
            Next.js
          </Link>
          .
        </p>
        <p className="subtitle">
          <Link href="/docs">
            Get started <span>→</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
