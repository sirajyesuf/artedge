"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import React from "react";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      company: t("kadiscoGeneralHospital.company"),
      text: t("kadiscoGeneralHospital.text"),
      rating: 5,
    },
    {
      company: t("kurbGeneralContractor.company"),
      text: t("kurbGeneralContractor.text"),
      rating: 5,
    },
    {
      company: t("luciEngineeringPlc.company"),
      text: t("luciEngineeringPlc.text"),
      rating: 5,
    },
    {
      company: t("chilalloEnterprise.company"),
      text: t("chilalloEnterprise.text"),
      rating: 5,
    },
    {
      company: t(
        "kolfeKeranioSubCityPublicPropertyAdministrationOffice.company"
      ),
      text: t("kolfeKeranioSubCityPublicPropertyAdministrationOffice.text"),
      rating: 5,
    },
    {
      company: "stPaulsHospitalMillenniumMedicalCollege.company",
      text: "stPaulsHospitalMillenniumMedicalCollege.company",
      rating: 5,
    },
    {
      company: t(
        "cggcOperationAndMaintenanceProjectDepartmentOfKalityWasteWaterTreatmentPlant.company"
      ),
      text: t(
        "cggcOperationAndMaintenanceProjectDepartmentOfKalityWasteWaterTreatmentPlant.text"
      ),
      rating: 5,
    },
    {
      company: t("seventhDayAdventistChurch.company"),
      text: t("seventhDayAdventistChurch.text"),
      rating: 5,
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">
            
            {t("title")}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

            {t("description")}
          </p>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Quote className="w-10 h-10 mb-4 text-yellow-400" />
                        <p className="text-lg text-gray-700 mb-4">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-current text-yellow-400"
                            />
                          ))}
                        </div>
                        <h3 className="font-bold text-blue-600 capitalize">
                          {testimonial.company}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  current - 1 === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
