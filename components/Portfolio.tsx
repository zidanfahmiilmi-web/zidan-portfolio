"use client";

import {
  Smartphone,
  Plane,
  Handshake,
  Video,
} from "lucide-react";

import { motion } from "framer-motion";


type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
};


const portfolios: PortfolioItem[] = [

  {
    title: "Telkomsel Customer Experience",
    category: "Customer Service",
    description:
      "Experience in handling customer inquiries, resolving complaints, providing product education, and supporting digital product sales to create better customer experiences.",
    icon: Smartphone,
    tags: [
      "Customer Handling",
      "Complaint Resolution",
      "Digital Services",
    ],
  },


  {
    title: "Aviation Operational Experience",
    category: "Airport Operation",
    description:
      "Supporting passenger services, flight operations, passenger data management, and ensuring operational activities run according to SOP standards.",
    icon: Plane,
    tags: [
      "Ground Staff",
      "Passenger Service",
      "Operational Support",
    ],
  },


  {
    title: "Sales & Client Relationship",
    category: "Business Development",
    description:
      "Building relationships with clients, supporting negotiation processes, and identifying business opportunities through effective communication and sales strategies.",
    icon: Handshake,
    tags: [
      "Sales",
      "Negotiation",
      "Client Management",
    ],
  },


  {
    title: "Digital Content Creation",
    category: "Creative Project",
    description:
      "Developing personal branding through digital content creation, storytelling, and visual communication to engage audiences.",
    icon: Video,
    tags: [
      "Content Creation",
      "Storytelling",
      "Personal Branding",
    ],
  },

];



export default function Portfolio() {

  return (

    <section
      id="portfolio"
      className="py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-blue-500">
            Portfolio
          </p>


          <h2 className="text-5xl font-black mt-5">
            Professional Showcase
          </h2>


          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Highlighting my professional journey,
            experiences, and skills developed throughout my career.
          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">


          {portfolios.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}


                whileHover={{
                  y: -8,
                }}


                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-slate-900/70
                border
                border-slate-800
                p-8
                transition
                hover:border-blue-500
                "

              >


                {/* Glow Effect */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-blue-500/10
                  opacity-0
                  group-hover:opacity-100
                  blur-2xl
                  transition
                  "
                />



                <div className="relative">


                  {/* Icon */}

                  <div
                    className="
                    w-14
                    h-14
                    rounded-xl
                    bg-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                    mb-6
                    "
                  >

                    <Icon size={30}/>

                  </div>




                  <p className="text-blue-400 text-sm mb-2">
                    {item.category}
                  </p>



                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>



                  <p className="text-gray-400 mt-4 leading-7">
                    {item.description}
                  </p>




                  {/* Tags */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {item.tags.map((tag)=>(

                      <span
                        key={tag}
                        className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-blue-500/20
                        text-blue-300
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>



                </div>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}