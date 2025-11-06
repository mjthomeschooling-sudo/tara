import ReinforcementSection from '../ReinforcementSection';
import cyberImage from '@assets/generated_images/Cybersecurity_challenge_visualization_3796b880.png';
import legoImage from '@assets/generated_images/LEGO_education_kit_activity_8f861fc6.png';
import dataImage from '@assets/generated_images/Data_organizing_activity_concept_99bbcbee.png';

export default function ReinforcementSectionExample() {
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

  return <ReinforcementSection activities={activities} />;
}
