"use client";


import LanguageSwitcher from "./LanguageSwitcher";



export default function Navbar(){


return(


<nav
className="
fixed
top-0
left-0
w-full
z-50
bg-slate-950/80
backdrop-blur-md
border-b
border-slate-800
"
>


<div
className="
max-w-6xl
mx-auto
px-6
py-4
flex
justify-between
items-center
"
>


{/* LOGO */}

<h1
className="
text-xl
font-bold
text-white
"
>

Zidan Fahmi I

</h1>




{/* MENU */}

<div
className="
hidden
md:flex
items-center
gap-8
text-slate-300
"
>


<a
href="#about"
className="
hover:text-blue-400
transition
"
>
About
</a>



<a
href="#experience"
className="
hover:text-blue-400
transition
"
>
Experience
</a>




<a
href="#skills"
className="
hover:text-blue-400
transition
"
>
Skills
</a>




<a
href="#contact"
className="
hover:text-blue-400
transition
"
>
Contact
</a>



<LanguageSwitcher />


</div>



</div>



</nav>


)


}