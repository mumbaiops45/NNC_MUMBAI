import React from 'react'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/android-app-development-company-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import MobileAppCTA_React_Native from '@/components/React Native App Development in Mumbai/CTA';

const cardData = [
  {
    image: "/android-app-development-company-mumbai/Customer-Facing Service Booking Apps.png",
    heading: "Customer-Facing Service Booking Apps",
    paragraph:
      "Build intuitive service booking apps that allow customers to easily schedule appointments, manage bookings, and receive real-time notifications, improving engagement and convenience.",
  },
  {
    image: "/android-app-development-company-mumbai/On-Demand Delivery Apps.png",
    heading: "On-Demand Delivery Apps",
    paragraph:
      "Develop fast and reliable on-demand delivery apps that connect customers with nearby providers, offering features like real-time tracking, secure payments, and instant notifications.",
  },
  {
    image: "/android-app-development-company-mumbai/Healthcare Patient Apps.jpg",
    heading: "Healthcare Patient Apps",
    paragraph:
      "Create healthcare apps for patients to book appointments, access medical records, track health metrics, and communicate with doctors securely, enhancing patient care and convenience.",
  },
  {
    image: "/android-app-development-company-mumbai/Real Estate Property Search Apps.webp",
    heading: "Real Estate Property Search Apps",
    paragraph:
      "Develop apps that allow users to search, filter, and explore properties with ease, offering features like virtual tours, map-based search, and instant property updates.",
  },
  {
    image: "/android-app-development-company-mumbai/Event Management and Ticketing Apps.jpg",
    heading: "Event Management and Ticketing Apps",
    paragraph:
      "Build apps for seamless event planning, ticket booking, and attendee management, ensuring a smooth experience for organizers and participants alike.",
  },
  {
    image: "/android-app-development-company-mumbai/Learning and Ed-Tech Apps.jpg",
    heading: "Learning and Ed-Tech Apps",
    paragraph:
      "Create educational apps for online courses, interactive learning, quizzes, and progress tracking, providing a comprehensive learning experience for students and educators.",
  },
  {
    image: "/android-app-development-company-mumbai/Field Force and Logistics Apps.png",
    heading: "Field Force and Logistics Apps",
    paragraph:
      "Develop apps to manage field teams, track deliveries, optimize routes, and provide real-time updates, improving operational efficiency and productivity.",
  },
  {
    image: "android-app-development-company-mumbai/Loyalty and Rewards Apps.jpg",
    heading: "Loyalty and Rewards Apps",
    paragraph:
      "Build apps that engage users with loyalty programs, reward points, and referral benefits, boosting customer retention and brand loyalty effectively.",
  },
];

const processSteps = [
  {
    title: "Requirement Scoping and Feature List Sign-Off",
    description:
      "We gather detailed requirements and create a comprehensive feature list for your app, ensuring all stakeholders agree on the project scope before development begins.",
  },
  {
    title: "UI/UX Design and Prototype",
    description:
      "Our design team crafts intuitive user interfaces and interactive prototypes, allowing you to visualize the app experience and approve designs before development.",
  },
  {
    title: "Sprint-Based Android Development",
    description:
      "We develop your app using agile sprints, delivering incremental features, incorporating feedback, and ensuring timely progress toward project milestones.",
  },
  {
    title: "QA Testing on Multiple Android Devices",
    description:
      "Our QA team performs thorough testing across a variety of Android devices to ensure your app is responsive, stable, and delivers a flawless user experience.",
  },
  {
    title: "Play Store Account Setup and Submission",
    description:
      "We assist with creating or configuring your Play Store account, prepare all required assets, and handle the submission process for a smooth launch.",
  },
  {
    title: "Launch Support and Post-Live Monitoring",
    description:
      "After launch, we provide monitoring, performance analysis, bug fixes, and updates to ensure your app runs optimally and meets user expectations.",
  },
];
const faqData = [
  {
    question: "Do you handle Play Store submission for Mumbai clients?",
    answer:
      "Yes. We handle the full submission process including developer account setup, listing content, screenshots, and review handling.",
  },
  {
    question: "What is the cost of Android app development in Mumbai?",
    answer:
      "Simple Android apps start from Rs. 80,000. Feature-rich apps range from Rs. 2,00,000 to Rs. 10,00,000+ depending on the project scope and complexity.",
  },
];
const page = () => {
  return (
    <>
       <Hero
      title="Android App Development Company in "
      highlight="Mumbai"
      
      subtext="Delivering custom, high-performance Android apps that drive growth, engagement, and innovation for businesses in Mumbai and beyond."
      description="India has 750 million Android users. If your business doesn't have an Android app, you're invisible to most of the market. NNC is a trusted Android app development company in Mumbai with 80+ apps built and live on the Play Store. From simple utility apps to complex enterprise solutions, we build Android apps that users actually stick to."
      image="/React Native App Development in Mumbai/React Native App Development in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      
     <section id='what-we-build' className="what-we-build scroll-mt-10 w-full py-20 px-15">
             <div className="max-w-6xl mx-auto  flex items-center justify-center">
     
               <h2 className="mb-10 text-center text-gray-900">
                  <span className="text-[var(--primary)]"> Android Apps  </span> We Build for     <span className="text-[var(--primary)]">Mumbai    </span>Clients
               </h2>
     
             </div>
             <CardList cards={cardData} />
           </section>

      <section id='process' className="process scroll-mt-10 w-full py-20 px-6 bg-gradient-to-b from-[var(--primary)]/5 to-transparent ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">Our 
            <span className="text-[var(--primary)]"> Android App  </span>Launch   <span className="text-[var(--primary)]">  Process </span>in <span className="text-[var(--primary)]"> Mumbai  </span> 

          </h2>

        </div>
        <Process processSteps={processSteps} />
      </section>

      
      
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-15 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Need an 
 <span className="text-[var(--primary)]"> Android app   </span>built in    <span className="text-[var(--primary)]">Mumbai </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page