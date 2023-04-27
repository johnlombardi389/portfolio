import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #080e1d;
    overflow-y: scroll;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000' opacity='0.5' %3E%3Cg %3E%3Ccircle fill='%23101B37' cx='50' cy='0' r='50'/%3E%3Cg fill='%23111d3b' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23121f3f' cx='50' cy='100' r='50'/%3E%3Cg fill='%23132144' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23152448' cx='50' cy='200' r='50'/%3E%3Cg fill='%2316264c' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23172851' cx='50' cy='300' r='50'/%3E%3Cg fill='%23182a55' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23192c5a' cx='50' cy='400' r='50'/%3E%3Cg fill='%231b2f5e' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%231c3163' cx='50' cy='500' r='50'/%3E%3Cg fill='%231d3367' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%231e356c' cx='50' cy='600' r='50'/%3E%3Cg fill='%23203871' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23213a75' cx='50' cy='700' r='50'/%3E%3Cg fill='%23233c7a' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23243f7f' cx='50' cy='800' r='50'/%3E%3Cg fill='%23254184' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23274388' cx='50' cy='900' r='50'/%3E%3Cg fill='%2328468d' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%232A4892' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: contain;
  }
`;

export default GlobalStyles;
