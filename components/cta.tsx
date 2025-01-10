import { Button } from "@/components/ui/button";
import Link from "next/link";

// import { ArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Experience Excellence?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can help secure and maintain your
          space
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </div>
    </section>

    // <section className="py-8 bg-gray-900 text-white">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col md:flex-row items-center justify-between">
    //       <p className="text-lg mb-4 md:mb-0">
    //         Discover how we can protect what matters most to you
    //       </p>
    //       <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    //         Learn More
    //         <ArrowRight className="ml-2 w-5 h-5" />
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
}
