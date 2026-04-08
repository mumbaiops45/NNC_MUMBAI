import React from 'react'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Web Design Company in Mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import MobileAppCTA_React_Native from '@/components/React Native App Development in Mumbai/CTA';

const cardData = [
  {
    image: "/React Native App Development in Mumbai/Development Cost.png",
    heading: "Single Codebase for Android and iOS Saves 30% to 40% in Development Cost",
    paragraph:
      "React Native allows us to use a single codebase for both Android and iOS platforms, significantly reducing development time and saving up to 30–40% in overall project cost.",
  },
  {
    image: "/React Native App Development in Mumbai/Faster Time to Market Compared to Separate Native Builds.png",
    heading: "Near-Native Performance with Fast UI Rendering",
    paragraph:
      "Our React Native apps deliver near-native performance with smooth animations and fast UI rendering, ensuring a seamless and responsive user experience.",
  },
  {
    image: "/React Native App Development in Mumbai/Time to Market Compared to Separate Native Builds.png",
    heading: "Faster Time to Market Compared to Separate Native Builds",
    paragraph:
      "By developing both platforms simultaneously, we accelerate your app launch timeline, helping you reach the market faster than traditional native development approaches.",
  },
  {
    image: "/React Native App Development in Mumbai/Easier maintenance with one shared codebase.png",
    heading: "Easier Maintenance with One Shared Codebase",
    paragraph:
      "With a unified codebase, updates, bug fixes, and feature enhancements can be implemented quickly across both platforms, reducing maintenance efforts and costs.",
  },
  {
    image: "/React Native App Development in Mumbai/Large Component Ecosystem Speeds Up Development.png",
    heading: "Large Component Ecosystem Speeds Up Development",
    paragraph:
      "React Native offers a vast ecosystem of reusable components and libraries, enabling faster development and reducing the need to build features from scratch.",
  },
  {
    image: "/React Native App Development in Mumbai/Backed by Meta's Open-Source Framework.png",
    heading: "Backed by Meta's Open-Source Framework",
    paragraph:
      "React Native is maintained by Meta and supported by a strong global developer community, ensuring long-term stability, continuous updates, and reliable performance.",
  },
];

const processSteps = [
  {
    title: "Requirement scoping and architecture design",
    description:
      "We analyze your app idea, business goals, and user requirements to define a clear project scope and design a scalable, future-ready architecture.",
  },
  {
    title: "UI/UX wireframes and design approval",
    description:
      "Our team creates intuitive wireframes and visually engaging UI designs, ensuring a seamless user experience before moving into development.",
  },
  {
    title: "Sprint-based development with regular demos",
    description:
      "We follow an agile development process, delivering features in sprints with regular demos so you can track progress and provide feedback in real-time.",
  },
  {
    title: "QA testing on real Android and iOS devices",
    description:
      "We perform rigorous testing on actual devices to ensure your app is bug-free, responsive, and performs flawlessly across platforms.",
  },
  {
    title: "App Store and Play Store submission",
    description:
      "Our team handles the complete deployment process, including preparing assets and successfully submitting your app to both the App Store and Google Play Store.",
  },
  {
    title: "Post-launch maintenance and updates",
    description:
      "We provide ongoing support, performance monitoring, and regular updates to keep your app secure, optimized, and up to date.",
  },
];
const faqData = [
  {
    question: "Is React Native good for enterprise apps?",
    answer:
      "Yes. Companies like Facebook, Instagram, and Walmart use React Native in production. It is fully capable of building scalable, secure, and enterprise-grade mobile applications.",
  },
  {
    question: "Can React Native access device features like camera and GPS?",
    answer:
      "Yes. React Native provides access to native device features such as camera, GPS, push notifications, biometrics, and more, ensuring full functionality similar to native apps.",
  },
];
const page = () => {
  return (
    <>
       <Hero
      title="React Native App Development in "
      highlight="Mumbai"
      
      subtext="Empower your business with fast, cost-effective React Native app development in Mumbai , designed for performance, scalability, and user engagement."
      description="React Native lets you ship one codebase to both Android and iOS, cutting your development time and cost by up to 40%. NNC's React Native team in Mumbai has built 80+ apps across healthcare, logistics, real estate, and e-commerce verticals. One build. Two platforms. Full native performance."
      image="/React Native App Development in Mumbai/React Native App Development in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      
     <section id='why-react-native' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
             <div className="max-w-6xl mx-auto  flex items-center justify-center">
     
               <h2 className="mb-10 text-center text-gray-900">Why Choose 
                  <span className="text-[var(--primary)]"> React Native   </span> for Your    <span className="text-[var(--primary)]">Mumbai    </span>App Project
               </h2>
     
             </div>
             <CardList cards={cardData} />
           </section>

      <section id='Process' className="Services scroll-mt-10 w-full py-20 px-6 ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">How We Deliver 
            <span className="text-[var(--primary)]">  React Native </span>Apps in <span className="text-[var(--primary)]">  Mumbai </span>

          </h2>

        </div>
        <Process processSteps={processSteps} />
      </section>

      
      
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 md:px-15 px-6 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Planning a 
 <span className="text-[var(--primary)]"> React Native app  </span>in     <span className="text-[var(--primary)]">Mumbai </span>?
          </h2>

        </div>
        <MobileAppCTA_React_Native />
      </section>
     

    </>
  )
}

export default page