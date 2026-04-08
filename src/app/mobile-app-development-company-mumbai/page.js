import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Mobile App Development Company in Mumbai/CTA';
const cardData = [
  {
    image: "/Mobile App Development Company in Mumbai/React Native.svg",
    heading: "React Native Cross-Platform Apps for Android and iOS",
    paragraph:
      "We build high-performance mobile applications using React Native, enabling seamless cross-platform functionality for both Android and iOS. Our solutions ensure faster development, cost efficiency, and a consistent user experience across devices.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/QA Team.png",
    heading: "Dedicated QA Team for Bug-Free App Releases",
    paragraph:
      "Our dedicated quality assurance team rigorously tests every mobile application to ensure it is secure, bug-free, and performs flawlessly. We follow industry-standard testing practices to deliver reliable and high-quality apps.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/App Store and Play Store.png",
    heading: "App Store and Play Store Submission Handled by Experts",
    paragraph:
      "We take care of the complete app deployment process, including submission to the Apple App Store and Google Play Store. Our team ensures compliance with all guidelines for a smooth and successful app launch.",
  },
  {
    image: "/Website Development Company in Mumbai/Post-launch support.png",
    heading: "Post-Launch Support and Maintenance Plans",
    paragraph:
      "Our services extend beyond development with comprehensive post-launch support, regular updates, performance monitoring, and maintenance to keep your mobile app running efficiently and securely.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/clarity, trust, and flexibility.png",
    heading: "Transparent Milestone-Based Billing Process",
    paragraph:
      "We follow a transparent billing structure based on project milestones, ensuring clarity, trust, and flexibility. You only pay as progress is achieved, making the development process smooth and risk-free.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Apps Built for Healthcare, Logistics, Real Estate & E-commerce.webp",
    heading: "Apps Built for Healthcare, Logistics, Real Estate & E-commerce",
    paragraph:
      "We develop custom mobile applications tailored for industries like healthcare, logistics, real estate, and e-commerce. Our solutions are designed to improve efficiency, user engagement, and business growth.",
  },
];
const leftSlideService = [
  {
    image: "/Mobile App Development Company in Mumbai/Android App Development.png",
    heading: "Android App Development",
    paragraph:
      "Build high-performance Android applications tailored to your business needs, ensuring smooth functionality, scalability, and a seamless user experience across all Android devices.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/iOS App.svg",
    heading: "iOS App Development",
    paragraph:
      "Develop premium iOS applications with intuitive design, robust performance, and seamless integration, delivering an exceptional user experience for iPhone and iPad users.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/React Native Cross-Platform Apps.svg",
    heading: "React Native Cross-Platform Apps",
    paragraph:
      "Create cross-platform mobile applications using React Native, enabling faster development, cost efficiency, and consistent performance across both Android and iOS platforms.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Healthcare Mobile Apps.webp",
    heading: "Healthcare Mobile Apps",
    paragraph:
      "Design and develop secure, user-friendly healthcare mobile applications with features like appointment booking, telemedicine, and patient management systems for improved care delivery.",
  },
];
const rightSlideService = [
  {
    image: "/Mobile App Development Company in Mumbai/E-commerce Mobile Apps.png",
    heading: "E-commerce Mobile Apps",
    paragraph:
      "Develop feature-rich e-commerce mobile applications with seamless product browsing, secure payment gateways, and user-friendly interfaces to enhance customer engagement and drive online sales.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/CRM Mobile Apps.webp",
    heading: "CRM Mobile Apps",
    paragraph:
      "Build powerful CRM mobile applications that help businesses manage customer relationships, track interactions, and streamline sales processes for improved productivity and growth.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Booking and Scheduling Apps.webp",
    heading: "Booking and Scheduling Apps",
    paragraph:
      "Create intuitive booking and scheduling mobile apps with real-time availability, automated reminders, and easy appointment management for businesses and service providers.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Admin Dashboard Apps.webp",
    heading: "Admin Dashboard Apps",
    paragraph:
      "Design and develop robust admin dashboard applications that provide complete control over data, analytics, user management, and operations through a clean and efficient interface.",
  },
];

const faqData = [
  {
    question: "How much does mobile app development cost in Mumbai?",
    answer: "A standard app starts from Rs. 1,00,000. Complex multi-feature apps range from Rs. 3,00,000 to Rs. 15,00,000+.",
  },
  {
    question: "Do you handle Play Store and App Store submission?",
    answer: "Yes. We handle the full submission process including screenshots, descriptions, and compliance checks.",
  },
  {
    question: "What is your app development timeline in Mumbai?",
    answer: "Phase 1 of most apps is delivered within 45 to 60 days.",
  },
];
const page = () => {
  return (
    <>
       <Hero
      title="Mobile App Development Company in"
      highlight="Mumbai"
      description="NNC is a trusted mobile app development company in Mumbai with a proven track record of building Android and iOS apps for startups, SMEs, and large enterprises. We develop apps using React Native for cross-platform delivery, keeping your timeline short and your budget in check."
      subtext="Android apps. iOS apps. Cross-platform builds. Built by a Mumbai team that has delivered 80+ apps."
      image="/Mobile App Development Company in Mumbai/hero.webp"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      <section id='Why_Us' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            Why Choose  <span className="text-[var(--primary)]">NNC  </span>for Mobile App Development in   <span className="text-[var(--primary)]">Mumbai   </span>Businesses Trust
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='Services' className="Services scroll-mt-10 w-full py-20 px-6 bg-gradient-to-b from-[var(--primary)]/10 to-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]">Mobile App </span>  Development <span className="text-[var(--primary)]">Services  </span> We Offer

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section>
      
      <section id='FAQ' className="FAQ  w-full py-20 md:px-15 px-6 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA s w-full pb-20 pt-10 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
Want a   <span className="text-[var(--primary)]">mobile app  </span>built in   <span className="text-[var(--primary)]">Mumbai? </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page