import stylesheet from "styles/global.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import PageNotFound from "~/components/four-oh-four";


export const links: LinksFunction = () => {
  return[
    {rel:"stylesheet" , href:stylesheet,},
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/05168aa044.js" crossOrigin="anonymous"></script>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Something weird happened...</title>
        <Meta />
        <Links />
      </head>
      <body>
        <PageNotFound />
        <Scripts />
      </body>
    </html>
  );
}
