"use client";


import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

import {
useLanguage
} from "@/context/LanguageContext";



export default function Hero(){


const {
language
}=useLanguage();



return(


<AnimationWrapper>


<section
className="
min-h-screen
flex
items-center
px-6
bg-slate-950
text-white
"
>



<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
"
>




{/* LEFT */}


<div>


<p
className="
uppercase
tracking-[6px]
text-blue-400
mb-4
"
>


{
language==="en"
?
"Customer Experience Professional"
:
"Profesional Customer Experience"
}


</p>





<h1
className="
text-5xl
md:text-7xl
font-bold
bg-linear-to-r
from-blue-400
to-cyan-300
bg-clip-text
text-transparent
"
>

Zidan Fahmi Ilmi

</h1>





<h2
className="
text-2xl
md:text-3xl
mt-5
text-slate-300
"
>

{
language==="en"

?

"Customer Service | Customer Experience | Relationship Management"

:

"Customer Service | Pengalaman Pelanggan | Manajemen Relasi"

}


</h2>





<p
className="
mt-6
max-w-xl
text-slate-400
leading-relaxed
"
>


{

language==="en"


?

`
Professional with experience in customer service,
handling complaints, product education, and sales support.
Passionate about creating positive customer experiences.
`


:

`
Profesional dengan pengalaman dalam customer service,
menangani keluhan pelanggan, edukasi produk,
serta mendukung aktivitas penjualan.
Berfokus menciptakan pengalaman pelanggan yang positif.
`


}


</p>





{/* BUTTON */}


<div
className="
flex
gap-4
mt-8
"
>



<a
href="/CV-Zidan-Fahmi-Ilmi.pdf"
download

className="
px-7
py-3
rounded-xl
bg-blue-500
hover:bg-blue-600
transition
font-semibold
"
>

{

language==="en"

?

"Download CV"

:

"Unduh CV"

}


</a>





<a
href="#contact"

className="
px-7
py-3
rounded-xl
border
border-blue-400
text-blue-400
hover:bg-blue-400
hover:text-slate-950
transition
font-semibold
"
>


{

language==="en"

?

"Contact Me"

:

"Hubungi Saya"

}


</a>




</div>




</div>






{/* IMAGE */}


<div
className="
flex
justify-center
"
>


<div
className="
relative
w-72
h-72
md:w-96
md:h-96
"
>


<Image

src="/profile.png"

alt="Zidan Fahmi Ilmi"

fill

priority

className="
object-cover
rounded-3xl
border
border-blue-400/30
shadow-xl
"

 />


</div>


</div>




</div>


</section>


</AnimationWrapper>


)


}