// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="/logo192.png" />
//     <!--
//       manifest.json provides metadata used when your web app is installed on a
//       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
//     -->
//     <link rel="manifest" href="/manifest.json" />
//     <link
//       rel="stylesheet"
//       type="text/css"
//       charset="UTF-8"
//       href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//     />
//     <link
//       rel="stylesheet"
//       type="text/css"
//       href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//     />
//     <!--
//       Notice the use of  in the tags above.
//       It will be replaced with the URL of the `public` folder during the build.
//       Only files inside the `public` folder can be referenced from the HTML.

//       Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
//       work correctly both with client-side routing and a non-root public URL.
//       Learn how to configure a non-root public URL by running `npm run build`.
//     -->
//     <title>Piyush Bora Portfolio</title>
//   </head>
//   <body>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root"></div>
//     <script type="module" src="/src/index.jsx"></script>
//     <!--
//       This HTML file is a template.
//       If you open it directly in the browser, you will see an empty page.

//       You can add webfonts, meta tags, or analytics to this file.
//       The build step will place the bundled scripts into the <body> tag.

//         To begin the development, run `npm start` or `yarn start`.
//         To create a production bundle, use `npm run build` or `yarn build`.
//       -->
//     <!-- <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script> -->
//     <script
//       type="module"
//       src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"
//     ></script>
//     <script
//       nomodule=""
//       src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"
//     ></script>
//     <!-- <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> -->
//   </body>
// </html>

import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
