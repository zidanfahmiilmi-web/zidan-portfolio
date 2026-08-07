"use client";


import {
useLanguage
} from "@/context/LanguageContext";



export default function LanguageSwitcher(){


const {
language,
setLanguage
}=useLanguage();



return (

<div
className="
flex
gap-2
items-center
"
>


<button

onClick={()=>setLanguage("id")}

className={`
px-3
py-1
rounded-lg
text-sm
transition

${
language==="id"
?
"bg-blue-500 text-white"
:
"text-slate-400 hover:text-white"
}

`}

>

ID

</button>





<button

onClick={()=>setLanguage("en")}

className={`
px-3
py-1
rounded-lg
text-sm
transition

${
language==="en"
?
"bg-blue-500 text-white"
:
"text-slate-400 hover:text-white"
}

`}

>

EN

</button>



</div>


)


}