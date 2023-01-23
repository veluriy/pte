//theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "white",
                color: "black"
            },
            html: {
                height: "100%"
            }
        }
    },
    fonts: {
        heading: `"Avenir", "Corbel", "BIZ UDGothic", sans-serif`,
        body: `"Avenir", "Corbel", "BIZ UDGothic", sans-serif`
    }
});
