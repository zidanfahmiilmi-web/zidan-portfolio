import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  LanguageProvider
} from "@/context/LanguageContext";


const inter = Inter({
  subsets:["latin"],
});



export const metadata: Metadata = {

title:
"Zidan Fahmi Ilmi | Customer Experience Professional",

description:
"Portfolio website of Zidan Fahmi Ilmi"

};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="en">


<body
className={inter.className}
>


<LanguageProvider>

{children}

</LanguageProvider>


</body>


</html>

);


}