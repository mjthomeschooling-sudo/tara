import HeroSection from "@/components/HeroSection";
import SuperpowersSection from "@/components/SuperpowersSection";
import ReinforcementSection from "@/components/ReinforcementSection";
import GrowthStory from "@/components/GrowthStory";
import TechStrategiesTimeline from "@/components/TechStrategiesTimeline";
import TransformationalPrinciples from "@/components/TransformationalPrinciples";
import TPACKFramework from "@/components/TPACKFramework";
import FooterSection from "@/components/FooterSection";

import heroImage from '@assets/generated_images/Hero_educational_technology_classroom_ad9fdcfa.png';
import cyberImage from '@assets/generated_images/Cybersecurity_challenge_visualization_3796b880.png';
import legoImage from '@assets/generated_images/LEGO_education_kit_activity_8f861fc6.png';
import dataImage from '@assets/generated_images/Data_organizing_activity_concept_99bbcbee.png';
import nurtureImage from '@assets/generated_images/Nurture_principle_illustration_a04244c9.png';
import guideImage from '@assets/generated_images/Guide_principle_illustration_39b552ac.png';
import empowerImage from '@assets/generated_images/Empower_principle_illustration_3a172da8.png';

export default function Home() {
  const activities = [
    {
      title: "Cybersecurity Challenge",
      description: "In the cybersecurity challenge, you would expect to be able to trust your team. I liked that because of that aspect and the fun we had doing the activity, I believe that it will help remind us that threats can come even from those you are 'supposed' to trust, and to always be on your guard to ensure your safety.",
      image: cyberImage,
      keyTakeaway: "Trust is important, but vigilance is essential—even trusted sources can pose threats."
    },
    {
      title: "Lego Education Kit Challenge",
      description: "This challenge was meant to get us to follow the Technical Knowledge Acquisition Strategies. It was fun to see that pretty much everyone utilized these without realizing it. It was also great to see the various ways people overcame their obstacles.",
      image: legoImage,
      keyTakeaway: "We naturally use problem-solving strategies when faced with hands-on challenges."
    },
    {
      title: "Data Organizing Activity",
      description: "My favorite parts of this activity were learning that even a few seconds of time can save a lot of time later and that there isn't just one right way to organize things. Those who spent even just 20 seconds doing some basic organizing did better finding their items compared to those that did not.",
      image: dataImage,
      keyTakeaway: "A small investment in organization pays massive dividends in efficiency."
    }
  ];

  const principles = [
    {
      title: "Nurture",
      description: "Building relationships so students feel safe and confident to try new things in order to grow.",
      image: nurtureImage,
      asStudent: "Feeling as though they see me and listen to the things I say and are receptive to the questions I ask. I personally like to see progress visually—using a program that can show that progression, but also has a place where the teacher can give encouragement, praise, and constructive criticism.",
      asEducator: "Every student feeling like they are being seen and heard, where they understand that they can make mistakes and it's ok. Class Dojo and other programs have visuals to help in a fun way how the students mood is or how they are feeling. Playing games like Kahoot can allow them to try and not be too upset if they answer a question wrong."
    },
    {
      title: "Guide",
      description: "Helping students grow by showing them how to ask questions and investigate, rather than just being given answers.",
      image: guideImage,
      asStudent: "Learning the process of discovery and problem-solving, not just receiving information. Understanding how to find resources and apply strategies independently.",
      asEducator: "Teaching students to become resourceful learners who can navigate challenges. Modeling the Technical Knowledge Acquisition Strategies and encouraging exploration."
    },
    {
      title: "Empower",
      description: "Encouraging independent thought and taking ownership over their thoughts and ideas.",
      image: empowerImage,
      asStudent: "Building confidence to tackle new challenges independently. Feeling capable of making decisions and trusting my own learning process.",
      asEducator: "Creating opportunities for students to make choices, lead activities, and share their unique perspectives. Celebrating their growth and achievements."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection heroImage={heroImage} />
      <GrowthStory />
      <SuperpowersSection />
      <ReinforcementSection activities={activities} />
      <TechStrategiesTimeline />
      <TransformationalPrinciples principles={principles} />
      <TPACKFramework />
      <FooterSection />
    </div>
  );
}
