import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
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
  );
}
