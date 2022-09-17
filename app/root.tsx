import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwind from "app/tailwind.css";

// Components
import Navbar from "./components/Navbar";
import Background from "./components/Background";

// ContextAPI
import ThemeContextProvider from "./context/ThemeContext";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rest-countries-challenge",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <Background>
          <Navbar />
          <main>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </main>
        </Background>
      </html>
    </ThemeContextProvider>
  );
}
