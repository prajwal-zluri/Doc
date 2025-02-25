import type { MetaRecord } from "nextra";

const GETTING_STARTED: MetaRecord = {
  "property-file": "",
};
export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    type: "page",
    title: "Documentation",
    items: {
      //   index: "",
      index: {
        display: "hidden",
      },
      filters: {
        display: "hidden",
      },
      "getting-started": "",
      "property-file": "",
    },
  },
  //   // You can use JSX elements to change the look of titles in the sidebar, e.g. insert icons
  //   contact: (
  //     <Italic className="my-class">
  //       <GitHubIcon height="20" />
  //       Contact Us
  //     </Italic>
  //   ),
  //   about: {
  //     // Alternatively, you can set title with `title` property
  //     title: "About Us",
  //     // ... and provide extra configurations
  //   },
};

// Custom component for italicized text
function Italic({ children, ...props }) {
  return <i {...props}>{children}</i>;
}
