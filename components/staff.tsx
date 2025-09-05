"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "yared beyene",
    position: "general manager",
    image: "/staff/yared.jpg",
  },
  {
    name: "tagel minwuyelet",
    position: "deputy general Manager",
    image: "/staff/tagel_minwuyelet.jpg",
  },
  {
    name: "girmay teklu",
    position: "finance manager",
    image: "/staff/girmay_teklu.jpg",
  },
  {
    name: "shiferaw ejigu ",
    position: "human resource manager",
    image: "/staff/shiferaw_ejigu.jpg",
  },
  {
    name: "danayit amsalu",
    position: "administration and finance",
    image: "/staff/danayit_amsalu.jpg",
  },
];

export default function Staff() {
  const topMembers = teamMembers.slice(0, 2);
  const bottomMembers = teamMembers.slice(2);
  const t = useTranslations("AboutUS");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            {t("meetourteam.title")}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("meetourteam.description")}
          </p>
        </div>

        {/* Top row - 2 members centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 max-w-5xl mx-auto">
          {topMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl border-0 shadow-lg transition-shadow duration-300 w-full md:max-w-[300px]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="font-bold text-lg capitalize">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-100 capitalize">
                    {member.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          {bottomMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl border-0 shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="font-bold text-lg capitalize">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-100 capitalize">
                    {member.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
