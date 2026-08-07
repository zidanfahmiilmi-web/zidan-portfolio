"use client";


import AnimationWrapper from "./AnimationWrapper";

import {
useLanguage
} from "@/context/LanguageContext";



export default function Contact(){


const {
language
}=useLanguage();



return(


<AnimationWrapper>


<section
id="contact"
className="
py-24
px-6
bg-slate-950
text-white
"
>



<div
className="
max-w-6xl
mx-auto
text-center
"
>



<p
className="
text-blue-400
uppercase
tracking-[5px]
text-sm
"
>

Contact

</p>





<h2
className="
text-4xl
md:text-5xl
font-bold
mt-4
"
>

{

language==="en"

?

"Let's Connect"

:

"Mari Terhubung"

}

</h2>





<p
className="
mt-6
text-slate-400
max-w-2xl
mx-auto
"
>


{

language==="en"

?

"I am open to new opportunities in Customer Service, Customer Experience, and Relationship Management. Feel free to contact me for career opportunities or collaboration."

:

"Saya terbuka untuk kesempatan baru di bidang Customer Service, Customer Experience, dan Relationship Management. Silakan hubungi saya untuk peluang kerja maupun kolaborasi."

}



</p>







<div
className="
grid
md:grid-cols-3
gap-6
mt-12
"
>





{/* EMAIL */}

<div
className="
bg-slate-900
border
border-slate-800
rounded-2xl
p-6
hover:border-blue-400
transition
"
>


<h3 className="font-bold">

Email

</h3>


<p className="text-slate-400 mt-2">

Zidanfahmiilmi@gmail.com

</p>


</div>








{/* WHATSAPP */}

<div
className="
bg-slate-900
border
border-slate-800
rounded-2xl
p-6
hover:border-blue-400
transition
"
>


<h3 className="font-bold">

WhatsApp

</h3>


<p className="text-slate-400 mt-2">

WA.me/081220822693

</p>


</div>







{/* LOCATION */}

<div
className="
bg-slate-900
border
border-slate-800
rounded-2xl
p-6
hover:border-blue-400
transition
"
>


<h3 className="font-bold">

{

language==="en"

?

"Location"

:

"Lokasi"

}

</h3>


<p className="text-slate-400 mt-2">

West Java - Indonesia

</p>


</div>





</div>





</div>


</section>


</AnimationWrapper>


)


}