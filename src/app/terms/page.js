import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Nakshatra Namaha Creations",
  description:
    "Read the Terms of Service for NNC Digital (Nakshatra Namaha Creations Pvt. Ltd.). Learn about project scope, payments, IP rights, warranty, and legal policies.",
keywords: [
    // Core Services - Mumbai
    "Website Development Company in Mumbai",
    "Mobile App Development Company in Mumbai",
    "Web Design Company in Mumbai",
    "Custom Web Development Mumbai",
    "React Native App Development Mumbai",
    "E-commerce Website Development Mumbai",
    "CRM Development Company Mumbai",
    "Website Redesign Services Mumbai",
    "Android App Development Company Mumbai",
    "Software Development Company in Thane Mumbai",

    // Nearby & Regional Targeting
    "Website Development Company in Thane",
    "Mobile App Development Company Thane",
    "Web Design Company Thane",
    "Software Company in Thane",
    "IT Company in Thane",
    "Website Development Navi Mumbai",
    "Mobile App Development Navi Mumbai",
    "Web Design Navi Mumbai",
    "Software Development Navi Mumbai",

    // Extended Mumbai Region SEO
    "Top Web Development Company Mumbai",
    "Best Website Development Company Mumbai",
    "IT Company Mumbai",
    "Software Development Services Mumbai",
    "App Development Company Mumbai",
    "Full Stack Development Company Mumbai",
    "Frontend Developer Mumbai",
    "Backend Development Company Mumbai",

    // Business Intent Keywords
    "Hire Web Developer Mumbai",
    "Hire App Developer Mumbai",
    "Freelance Web Developer Mumbai",
    "Custom Software Solutions Mumbai",
    "Enterprise Software Development Mumbai",

    // Industry Keywords
    "Digital Agency Mumbai",
    "Tech Company Mumbai",
    "IT Services Mumbai",
    "Startup Development Company Mumbai",
    "UI UX Design Company Mumbai"
  ],
};

export default function TermsOfService() {
  return (
    <>
     <Navbar />
    <main className="py-16 ">
      <h1 className="text-4xl font-bold mb-6 text-center  bg-gradient-to-r from-[#041027] to-[var(--primary)] text-white py-20">
        Terms of Service
      </h1>

      {/* <p className="mb-8 text-center text-gray-600">
        Last Updated: April 2026
      </p> */}
      <div className="mx-auto max-w-4xl px-6 py-10">
         {/* 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Agreement</h2>
        <p>
          By engaging NNC Digital (Nakshatra Namaha Creations Pvt. Ltd.) for any
          service including website development, mobile app development, CRM
          software, digital marketing, graphic design or video production, you
          ("Client") agree to be bound by these Terms of Service. These terms
          govern all projects, proposals and engagements between NNC Digital and
          the Client.
        </p>
      </section>

      {/* 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Project Scope & Fixed Pricing
        </h2>
        <p>
          All projects are delivered against a mutually agreed fixed-price scope
          document. Work begins only after scope, timeline and price are
          confirmed in writing. Any additions to scope after project
          commencement will be quoted and approved separately. We do not bill
          hourly or raise surprise invoices outside the agreed scope.
        </p>
      </section>

      {/* 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Payment Terms</h2>
        <p>
          Projects are structured with advance payment followed by milestone or
          completion-based payments. All payments are non-refundable once
          deliverables are submitted. We reserve the right to pause work if
          payments are delayed.
        </p>
      </section>

      {/* 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Intellectual Property & Source Code
        </h2>
        <p>
          Upon final payment, full ownership of deliverables including source
          code, designs, databases and credentials is transferred to the Client.
          We retain no ownership rights. Projects may be showcased in our
          portfolio unless explicitly restricted in writing before starting work.
        </p>
      </section>

      {/* 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Client Responsibilities</h2>
        <p>
          Clients must provide accurate content, branding assets, and timely
          feedback. Delays in content or approvals may impact delivery timelines.
          We are not responsible for delays caused by the Client.
        </p>
      </section>

      {/* 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Warranty & Support</h2>
        <p>
          We provide a 30-day post-delivery warranty covering bugs within the
          agreed scope. Issues arising from third-party tools, hosting changes or
          client modifications are not included. Extended support is available
          under maintenance agreements.
        </p>
      </section>

      {/* 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Confidentiality</h2>
        <p>
          Both parties agree to maintain confidentiality of all shared business
          information. We do not disclose client data or strategy without written
          consent. This obligation continues even after project completion.
        </p>
      </section>

      {/* 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          8. Limitation of Liability
        </h2>
        <p>
          Our total liability is limited to the amount paid for the specific
          project. We are not liable for indirect damages such as revenue loss,
          data loss or business interruption.
        </p>
      </section>

      {/* 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes will fall
          under the jurisdiction of courts in Bengaluru, Karnataka.
        </p>
      </section>

      {/* 10 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
        <p>
          For any questions regarding these Terms, contact us at:
          <br />
          <span className="font-medium">Email:</span> info@nakshatranamahacreations.com
          <br />
          <span className="font-medium">Phone:</span> +91 99005 66466
          <br />
          <span className="font-medium">Address:</span> Lodha Signet, 302, Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607
        </p>
      </section>
      </div>

     

    
    </main>
    <Footer />
    </>
   
  );
}