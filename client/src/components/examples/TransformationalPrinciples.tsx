import TransformationalPrinciples from '../TransformationalPrinciples';
import nurtureImage from '@assets/generated_images/Nurture_principle_illustration_a04244c9.png';
import guideImage from '@assets/generated_images/Guide_principle_illustration_39b552ac.png';
import empowerImage from '@assets/generated_images/Empower_principle_illustration_3a172da8.png';

export default function TransformationalPrinciplesExample() {
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

  return <TransformationalPrinciples principles={principles} />;
}
