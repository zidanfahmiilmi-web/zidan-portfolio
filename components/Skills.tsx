"use client";


import {
useLanguage
} from "@/context/LanguageContext";



export default function Skills(){


const {
language
}=useLanguage();



const skills = language==="en"

?

[

{
icon:"💬",
title:"Communication",
desc:"Strong communication skills developed through daily interaction with customers and teams."
},


{
icon:"🤝",
title:"Customer Relationship Management",
desc:"Ability to build positive relationships and maintain customer satisfaction."
},


{
icon:"🎯",
title:"Complaint Handling",
desc:"Experienced in understanding customer issues and providing effective solutions."
},


{
icon:"💼",
title:"Sales & Negotiation",
desc:"Able to identify customer needs and recommend suitable products or services."
},


{
icon:"🧩",
title:"Problem Solving",
desc:"Skilled in analyzing problems and finding practical solutions."
},


{
icon:"📱",
title:"Product Knowledge",
desc:"Experienced in explaining products, services, and digital solutions."
},


{
icon:"👥",
title:"Team Collaboration",
desc:"Able to work effectively with different teams to achieve goals."
},


{
icon:"⚡",
title:"Adaptability",
desc:"Quick learner who can adapt to new environments and systems."
}


]

:

[


{
icon:"💬",
title:"Komunikasi",
desc:"Kemampuan komunikasi yang kuat melalui pengalaman berinteraksi dengan pelanggan dan tim."
},


{
icon:"🤝",
title:"Manajemen Hubungan Pelanggan",
desc:"Mampu membangun hubungan positif dan menjaga kepuasan pelanggan."
},


{
icon:"🎯",
title:"Penanganan Keluhan",
desc:"Berpengalaman memahami masalah pelanggan dan memberikan solusi yang efektif."
},


{
icon:"💼",
title:"Penjualan & Negosiasi",
desc:"Mampu memahami kebutuhan pelanggan dan menawarkan produk atau layanan yang sesuai."
},


{
icon:"🧩",
title:"Problem Solving",
desc:"Mampu menganalisis masalah dan menemukan solusi yang tepat."
},


{
icon:"📱",
title:"Pengetahuan Produk",
desc:"Berpengalaman memberikan edukasi mengenai produk, layanan, dan solusi digital."
},


{
icon:"👥",
title:"Kerja Sama Tim",
desc:"Mampu bekerja sama dengan berbagai tim untuk mencapai target."
},


{
icon:"⚡",
title:"Adaptasi",
desc:"Cepat mempelajari sistem baru dan beradaptasi dengan lingkungan kerja."
}


];



return(


<section

id="skills"

className="
py-20
px-6
bg-slate-900
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

"Professional Skills"

:

"Keahlian Profesional"

}


</h2>





<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

skills.map((skill,index)=>(


<div

key={index}

className="
p-6
rounded-2xl
bg-slate-950
border
border-slate-800
hover:border-blue-400
hover:-translate-y-2
transition
duration-300
"

>


<div

className="
text-4xl
mb-4
"

>

{skill.icon}

</div>




<h3

className="
text-xl
font-semibold
mb-3
"

>

{skill.title}

</h3>




<p

className="
text-slate-400
text-sm
leading-relaxed
"

>

{skill.desc}

</p>



</div>


))


}


</div>



</div>


</section>


)


}