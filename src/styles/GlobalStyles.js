import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --color-green-200: hsl(148, 38%, 91%);
    --color-green-600: hsl(169, 82%, 27%);

    --color-red: hsl(0, 66%, 54%);
    --color-white: hsl(0, 0%, 100%);
    --color-grey-500: hsl(186, 15%, 59%);
    --color-grey-900: hsl(187, 24%, 22%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Karla", sans-serif;
}
`;

export default GlobalStyles;
