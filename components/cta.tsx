import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          <Link href="/contactus">{t("contactus_now")}</Link>
        </Button>
      </div>
    </section>
  );
}
