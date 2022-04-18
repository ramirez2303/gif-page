import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  style: {
    global: {
      "html, body": {
        height: "100vh",
        backgroundColor: "#161a1d",
      },
    },
  },
  fonts: {
    heading: "'Source Code Pro', monospace",
    body: "'Source Code Pro', monospace",
  },
});
