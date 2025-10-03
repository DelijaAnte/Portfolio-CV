"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail } from "react-icons/md";
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
            {t("contact.title")}
          </h1>
        </div>

        <div className="space-y-6">
          <p className="text-pretty text-neutral-200 tracking-tight">
            {t("contact.description")}
          </p>

          <div className="space-y-4">
            {" "}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <MdMail className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">{t("contact.email")}</h3>
                <a
                  href="mailto:adelij00@fesb.hr"
                  className="text-neutral-500 hover:text-emerald-400 transition-colors"
                >
                  adelij00@fesb.hr
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {" "}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <BiPhone className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">{t("contact.phone")}</h3>
                <a
                  href="tel:0976477706"
                  className="text-neutral-500 hover:text-emerald-400 transition-colors"
                >
                  097 6477706
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {" "}
              <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                <BiMapPin className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-medium">{t("contact.location")}</h3>
                  <a
                    href="https://www.google.com/maps?q=Sinj,+Hrvatska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-emerald-400 transition-colors"
                  >
                    Sinj, Hrvatska
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
