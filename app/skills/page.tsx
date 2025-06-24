import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import skillsData from "../data/skills.json";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { FaRegComments, FaGlobeAmericas } from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  firebase: SiFirebase,
  c: SiC,
  cplusplus: SiCplusplus,
  github: SiGithub,
  jira: SiJira,
  communication: FaRegComments,
  language: FaGlobeAmericas,
};

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button
            variant="ghost"
            className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer"
          >
            Natrag <BsArrowLeft className="ml-2" />
          </Button>
        </Link>

        <div className="space-y-6 ">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Moje vještine
          </h1>
        </div>

        <div className="space-y-8">
          {skillsData.categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-2xl">{category.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || null;
                  return (
                    <div
                      key={skill.name}
                      className="p-4 rounded-lg border border-gray-700/50 bg-black/40 flex items-center gap-3"
                    >
                      {Icon && <Icon className="text-3xl text-emerald-400" />}
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
