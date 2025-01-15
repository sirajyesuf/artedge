import Image from "next/image";

const images = [
  {
    src: "/gallery/3.jpg",
    alt: "Gallery Image 3",
  },
  {
    src: "/gallery/4.jpg",
    alt: "Gallery Image 4",
  },
  {
    src: "/gallery/5.jpg",
    alt: "Gallery Image 5",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Gallery Image 6",
  },
  {
    src: "/gallery/7.png",
    alt: "Gallery Image 6",
  },
  {
    src: "/gallery/8.jpg",
    alt: "Gallery Image 6",
  },
];

export default function ImageGallery() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center pb-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Gallery</h2>
        {/* <p className="text-xl text-gray-600">
          The skilled professionals driving excellence in security, cleaning,
          and service delivery.
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="p-2 flex items-center justify-center rounded-lg"
            >
              <div className="w-86 h-86 bg-gray-100 rounded-md p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={600}
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
