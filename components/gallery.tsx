import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  {
    src: "/newsphoto/2025_1.jpg",
    alt: "Gallery Image 1",
  },

  {
    src: "/newsphoto/2025_2.jpg",
    alt: "Gallery Image 2",
  },
  {
    src: "/newsphoto/2025_3.jpg",
    alt: "Gallery Image 3",
  },
  {
    src: "/newsphoto/2025_4.jpg",
    alt: "Gallery Image 4",
  },
  {
    src: "/newsphoto/2025_5.jpg",
    alt: "Gallery Image 5",
  },
  {
    src: "/newsphoto/2025_6.jpg",
    alt: "Gallery Image 6",
  },
  {
    src: "/newsphoto/2025_7.jpg",
    alt: "Gallery Image 7",
  },
  {
    src: "/newsphoto/2025_8.jpg",
    alt: "Gallery Image 8",
  },
  // {
  //   src: "/newsphoto/2024_1.jpg",
  //   alt: "Gallery Image 5",
  // },
  {
    src: "/newsphoto/2024_2.jpg",
    alt: "Gallery Image 6",
  },
  // {
  //   src: "/newsphoto/2024_3.jpg",
  //   alt: "Gallery Image 7",
  // },
  {
    src: "/newsphoto/2024_4.jpg",
    alt: "Gallery Image 8",
  },
  {
    src: "/newsphoto/2024_5.jpg",
    alt: "Gallery Image 9",
  },
  {
    src: "/newsphoto/2024_6.jpg",
    alt: "Gallery Image 6",
  },
  {
    src: "/newsphoto/2024_7.jpg",
    alt: "Gallery Image 7",
  },
  {
    src: "/newsphoto/2024_8.jpg",
    alt: "Gallery Image 8",
  },
  {
    src: "/gallery/3.png",
    alt: "Gallery Image 3",
  },
  {
    src: "/gallery/4.png",
    alt: "Gallery Image 4",
  },
  {
    src: "/gallery/5.png",
    alt: "Gallery Image 5",
  },
  {
    src: "/gallery/6.png",
    alt: "Gallery Image 6",
  },
  {
    src: "/gallery/8.png",
    alt: "Gallery Image 8",
  },
];

export default function ImageGallery() {
  const t = useTranslations("AboutUS");
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          {t("ourvissioninframes.title")}
        </h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {t("ourvissioninframes.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="p-2 flex items-center justify-center rounded-lg"
            >
              <div className="w-[400px] h-[400px] rounded-sm bg-gray-50 p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
