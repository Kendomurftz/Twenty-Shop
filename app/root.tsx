import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Twenty Shop",
  viewport: "width=device-width,initial-scale=1",
  description: "Twenty Shop, un equipo para optimizar tu pc y darle el maximo rendimiento",
  "og:keywords": "Optimizar, Twenty Shop, Twenty, Rendimiento, Discord, Lento, Solucion",
  "og:site_name": "Twenty Shop",
  "og:type": "website",
"twitter:card": "summary_large_image",
  "og:image": "https://cdn.discordapp.com/attachments/941959975641686036/1053699685203853353/Twenty_shop.png"
  
});
import css from  "s/global.css";
export function links() {
  return [
    {
      rel: "Stylesheet", href: css
    }
  ];
}
export function scripts(){
  return [
    {
      
    }
  ];
}
export default function App() {
  return (
    <html lang="en">
      <head>
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
