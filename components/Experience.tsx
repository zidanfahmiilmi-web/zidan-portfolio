"use client";


import AnimationWrapper from "./AnimationWrapper";

import {
useLanguage
} from "@/context/LanguageContext";



export default function Experience(){


const {
language
}=useLanguage();



const experiences = language === "en"

?

[

{
period:"2025 - 2026",
position:"Customer Service Representative",
company:"PT Agrabudi - GraPARI Telkomsel",
icon:"💬",

description:[
"Handled customer inquiries, complaints, and service requests by providing effective solutions.",
"Provided education about Telkomsel products, services, and digital solutions based on customer needs.",
"Supported sales activities by offering suitable products and services.",
"Maintained customer satisfaction through excellent communication and problem-solving skills."
]

},


{
period:"2024",
position:"Ground Staff",
company:"Lion Air",
icon:"✈️",

description:[
"Assisted passengers during airport operations including check-in, boarding, and flight services.",
"Provided information and guidance regarding flight procedures.",
"Ensured excellent service quality in a fast-paced airport environment.",
"Collaborated with airport teams to maintain smooth operations."
]

},


{
period:"2024",
position:"Marine Sales Associate",
company:"PT Internasional Asia Pasifik Sinergi",
icon:"📈",

description:[
"Managed customer relationships and provided product information to potential clients.",
"Supported sales activities by identifying customer needs.",
"Developed communication and negotiation skills through customer interaction."
]

},


{
period:"2022 - 2024",
position:"Customer Service Representative",
company:"PT Infomedia Nusantara - GraPARI Telkomsel",
icon:"📱",

description:[
"Handled customer complaints and provided solutions according to customer needs.",
"Educated customers regarding Telkomsel products, services, and promotions.",
"Supported sales targets through product recommendations and customer engagement.",
"Collaborated with internal teams to resolve customer issues."
]

},


{
period:"2021",
position:"Ground Handling Staff",
company:"Sriwijaya Air",
icon:"🛫",

description:[
"Assisted passengers during boarding and arrival processes.",
"Ensured passengers followed flight procedures safely and correctly.",
"Handled passenger needs professionally in airport environments."
]

}

]

:

[

{
period:"2025 - 2026",
position:"Customer Service Representative",
company:"PT Agrabudi - GraPARI Telkomsel",
icon:"💬",

description:[
"Menangani pertanyaan, keluhan, dan kebutuhan pelanggan dengan memberikan solusi yang efektif.",
"Memberikan edukasi mengenai produk, layanan, dan solusi digital Telkomsel sesuai kebutuhan pelanggan.",
"Mendukung aktivitas penjualan dengan menawarkan produk dan layanan yang sesuai.",
"Menjaga kepuasan pelanggan melalui komunikasi dan kemampuan problem solving."
]

},


{
period:"2024",
position:"Ground Staff",
company:"Lion Air",
icon:"✈️",

description:[
"Membantu proses operasional bandara seperti check-in, boarding, dan pelayanan penerbangan.",
"Memberikan informasi serta arahan kepada penumpang terkait prosedur penerbangan.",
"Menjaga kualitas pelayanan dalam lingkungan kerja yang cepat dan dinamis.",
"Berkolaborasi dengan tim bandara untuk memastikan operasional berjalan lancar."
]

},


{
period:"2024",
position:"Marine Sales Associate",
company:"PT Internasional Asia Pasifik Sinergi",
icon:"📈",

description:[
"Mengelola hubungan pelanggan serta memberikan informasi produk kepada calon pelanggan.",
"Mendukung aktivitas penjualan dengan memahami kebutuhan pelanggan dan memberikan solusi yang tepat.",
"Mengembangkan kemampuan komunikasi dan negosiasi melalui interaksi dengan pelanggan."
]

},


{
period:"2022 - 2024",
position:"Customer Service Representative",
company:"PT Infomedia Nusantara - GraPARI Telkomsel",
icon:"📱",

description:[
"Menangani berbagai keluhan pelanggan dan memberikan solusi sesuai kebutuhan pelanggan.",
"Memberikan edukasi mengenai produk, layanan, dan promo Telkomsel.",
"Mendukung pencapaian target penjualan melalui rekomendasi produk dan interaksi pelanggan.",
"Bekerja sama dengan tim internal untuk menyelesaikan permasalahan pelanggan."
]

},


{
period:"2021",
position:"Ground Handling Staff",
company:"Sriwijaya Air",
icon:"🛫",

description:[
"Membantu proses boarding dan kedatangan penumpang.",
"Memastikan penumpang mengikuti prosedur penerbangan dengan aman dan benar.",
"Menangani kebutuhan penumpang secara profesional."
]

}

];





return(


<AnimationWrapper>


<section

id="experience"

className="
py-20
px-6
bg-slate-950
text-white
"

>


<div

className="
max-w-6xl
mx-auto
"

>


<h2

className="
text-4xl
font-bold
mb-12
bg-gradient-to-r
from-blue-400
to-cyan-300
bg-clip-text
text-transparent
"

>


{

language==="en"

?

"Professional Experience"

:

"Pengalaman Profesional"

}


</h2>






<div

className="
relative
border-l
border-blue-400/40
ml-5
space-y-10
"

>



{

experiences.map((item,index)=>(


<div

key={index}

className="
relative
pl-10
"

>



{/* ICON */}


<div

className="
absolute
-left-5
top-0
w-10
h-10
rounded-full
bg-blue-500
flex
items-center
justify-center
text-xl
shadow-lg
"

>

{item.icon}

</div>





{/* CONTENT CARD */}


<div

className="
bg-slate-900
border
border-slate-800
rounded-2xl
p-6
hover:border-blue-400
transition
duration-300
"

>



<div

className="
flex
flex-col
md:flex-row
md:justify-between
gap-3
"

>



<div>


<h3

className="
text-2xl
font-semibold
"

>

{item.position}

</h3>



<p

className="
text-blue-400
mt-1
"

>

{item.company}

</p>


</div>





<span

className="
text-slate-400
text-sm
"

>

{item.period}

</span>



</div>






<ul

className="
mt-5
space-y-3
text-slate-300
list-disc
list-inside
"

>


{

item.description.map((desc,i)=>(


<li

key={i}

>

{desc}

</li>


))

}


</ul>



</div>





</div>


))


}



</div>




</div>


</section>


</AnimationWrapper>


)


}