"use client";

import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { setUserLocale } from "@/app/locale";
import { useLocale } from "next-intl";
import type { Locale } from "@/app/i18n/config";
import Image from "next/image";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: "en", name: "English", flag: "US.svg" },
    { code: "am", name: "Amharic", flag: "ET.svg" },
  ];

  const selectedLanguage =
    languages.find((lang) => lang.code === locale) ?? languages[0];

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[140px] justify-between"
          disabled={isPending}
        >
          <Image
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            width={40}
            height={40}
          />

          {selectedLanguage?.name}

          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[140px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => onChange(language.code)}
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                locale === language.code ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={language.flag}
              alt={language.name}
              width={40}
              height={40}
            />

            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
