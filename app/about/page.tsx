import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

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

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            O meni
          </h1>

          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>
              Pozdrav, ja sam Ante Delija, student 3. godine preddiplomskog
              smjera računarstva na{" "}
              <a
                href="https://www.fesb.unist.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-80 transition-opacity"
              >
                FESB-u
              </a>
              .
            </p>

            <p>
              Željan sam novih izazova i prilika za rad i učenje, te se u
              slobodno vrijeme dodatno educiram i radim na osobnim projektima.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Obrazovanje
            </h2>

            <div className="space-y-2">
              <p className="font-medium">
                Sveučilišni prvostupnik inženjer računarstva
              </p>
              <p className="text-neutral-500">
                FESB, Sveučilište u Splitu, Hrvatska
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">
                Digitalna Dalmacija JUNIOR Dev – Next.js
              </p>
              <p className="text-neutral-500">
                Stručni tečaj primijenjenog programiranja u Next.js i React,
                održan u sklopu EDIT centra Digitalne Dalmacije s ciljem
                usavršavanja IT vještina i pripreme za posao u IT industriji.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Opća gimnazija</p>
              <p className="text-neutral-500">
                Srednja škola Dinka Šimunovića, Sinj
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Profesionalno iskustvo
            </h2>

            <p className="text-neutral-500 italic">
              Trenutno nemam profesionalnog iskustva, ali sam motiviran za
              učenje i razvoj.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
