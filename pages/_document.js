// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        <link href='https://promedica.tfaforms.net/dist/form-builder/5.0.0/wforms-layout.css?v=c9ffa70238c7739bfa873c10f586d47adbfab7a2' rel="stylesheet" type="text/css" />

 

<link href='https://promedica.tfaforms.net/uploads/themes/theme-24.css' rel="stylesheet" type="text/css" />

<link href='https://promedica.tfaforms.net/dist/form-builder/5.0.0/wforms-jsonly.css?v=c9ffa70238c7739bfa873c10f586d47adbfab7a2' rel="alternate stylesheet" title="This stylesheet activated by javascript" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}