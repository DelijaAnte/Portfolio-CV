"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { useTranslations } from "@/lib/useTranslations";

const Page = () => {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button
            variant="ghost"
            className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer"
          >
            {t("navigation.back")} <BsArrowLeft className="ml-2" />
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            {t("about.title")}
          </h1>

          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>
              {t("about.description")}{" "}
              <a
                href="https://www.fesb.unist.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-80 transition-opacity"
              >
                {t("about.fesb")}
              </a>
              .
            </p>

            <p>{t("about.description2")}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              {t("about.education")}
            </h2>

            <div className="space-y-2">
              <p className="font-medium">{t("about.degree")}</p>
              <p className="text-neutral-500">{t("about.university")}</p>
            </div>
            <div className="space-y-2">
              <div className="space-y-2 flex items-center gap-2">
                <p className="font-medium">{t("about.course")}</p>
                <a
                  href="/diploma.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-600 transition-colors cursor-pointer"
                  title={t("about.diploma")}
                >
                  <FiPaperclip size={20} />
                </a>
              </div>
              <p className="text-neutral-500">{t("about.courseDescription")}</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">{t("about.highSchool")}</p>
              <p className="text-neutral-500">
                {t("about.highSchoolLocation")}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              {t("about.experience")}
            </h2>

            <div className="space-y-2">
              <p className="font-medium">{t("about.ericssonCompany")}</p>
              <p className="text-neutral-500">{t("about.ericssonPosition")}</p>
              <p className="text-neutral-400 text-sm">{t("about.ericssonPeriod")} · {t("about.ericssonContract")}</p>
              <p className="text-neutral-500">{t("about.ericssonDescription")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
