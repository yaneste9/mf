import * as React from 'react';

export interface LayoutProps {
  staticVersion: number;
}

const Layout: React.FC<LayoutProps> = ({ staticVersion }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href={`/static/main.css?${staticVersion}`} />
      <title>app-1</title>
    </head>
    <body>
      <div className="app-container-two" />
    </body>
    <script src={`/client.js?${staticVersion}`} />
  </html>
);

export default Layout;
