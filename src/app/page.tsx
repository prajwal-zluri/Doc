import { Link } from "nextra-theme-docs";

export const metadata = {
  description:
    "Build fast, customizable, and content-rich websites with Nextra. Powered by Next.js, it offers seamless Markdown support, customizable themes, file conventions, and easy integration with MDX, making it perfect for documentation, blogs, and static websites.",
};

const PrimitiveColors = {
  blue: {
    "100": "#E8F0FC",
    "200": "#EFF8FF",
    "300": "#E1E8F8",
    "400": "#B1C8F3",
    "500": "#82A7ED",
    "600": "#5287E8",
    "700": "#2266E2",
    "900": "#001E54",
    "1000": "#001131",
  },
  maroon: {
    "100": "#FAE8EE",
    "200": "#FFF0F4",
    "300": "#F3CFDA",
    "400": "#E18CA5",
    "500": "#C65477",
    "600": "#A73658",
    "700": "#801736",
    "900": "#400013",
    "1000": "#26000B",
  },
  forest_green: {
    "100": "#E6F0EF",
    "200": "#EEFAF9",
    "300": "#DDEBE9",
    "400": "#B6CCCA",
    "500": "#829C9A",
    "600": "#637D7B",
    "700": "#2E3A39",
    "900": "#1B272E",
    "1000": "#001521",
  },
  grey: {
    "0": "#fff",
    "100": "#F6F7FA",
    "200": "#EBEBEB",
    "300": "#DDDDDD",
    "400": "#A8A8A8",
    "500": "#717171",
    "600": "#484848",
    "700": "#222222",
  },
  sky_blue: {
    "200": "#E6F5FF",
    "300": "#A0D8FF",
    "400": "#5ABAFF",
    "500": "#1176BE",
  },
  red: {
    "200": "#FFE9E5",
    "300": "#FFA99D",
    "400": "#FE6955",
    "500": "#BB2915",
  },
  green: {
    "200": "#E7F8E8",
    "300": "#A3E4A6",
    "400": "#5FCF64",
    "500": "#009307",
  },
  amber: {
    "200": "#FFF6DC",
    "300": "#FFDC7A",
    "400": "#FFA217",
    "500": "#C97B07",
  },
  purple: {
    "200": "#C87AFF",
    "300": "#C87AFF",
    "400": "#9E17FF",
    "500": "#7807C9",
  },
};

const SemanticColors = {
  primary: PrimitiveColors.blue[700],
};

const IndexPage = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Make beautiful websites <br className="max-sm:hidden" />
          with Next.js & MDX
        </h1>
        <h1 className="tw:text-2xl tw:text-red-500 tw-font-bold tw-underline">
          Hello world!
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
