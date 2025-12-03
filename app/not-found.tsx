"use client";

import React from "react";
import { Home, MapPin, Search } from "lucide-react";

// shadcn/ui components (assumes your project has them at this path)
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-slate-50 p-6">
      <div className="max-w-3xl">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600/10 text-indigo-600 p-3 rounded-lg">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Səhifə tapılmadı
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Axtardığın elan aktiv olmaya bilər vəya daşınmış ola bilər.
              </p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-5">
              <p className="text-sm text-slate-700 mb-4">
                Sənin üçün oxşar elanları axtaraq. Bölgəni, id nömrənisini və ya
                şəhərini daxil etməklə onu tez bir zamanda tapa bilərsiniz.
              </p>

              <form action="#" className="flex items-center gap-3 w-full">
                <Input id="search" placeholder="Axtar ..." className="flex-1" />
                <Button>
                  <Search className="w-5 h-5" />
                </Button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="ghost" className="gap-2">
                  <MapPin className="w-4 h-4" /> Yaxınımdakılar
                </Button>

                <Button variant="outline" className="gap-2 capitalize">
                  Bütün elanlar
                </Button>

                <Button
                  className="ml-auto capitalize"
                  onClick={() => (window.location.href = "/")}
                >
                  Ana səhifə
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-slate-500">
            Hələ də problem varsa,{" "}
            <a href="/contact" className="underline">
              bizimlə əlaqə
            </a>{" "}
            saxlayın və ya yenidən axtarmağa çalışın.
          </p>
        </div>
      </div>

      {/* Small footer note for SEO / UX */}
      <div className="sr-only" aria-hidden>
        404 - Not Found - RealEstate
      </div>
    </main>
  );
}
