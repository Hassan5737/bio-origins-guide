import team1 from "@/assets/team-1.jpeg";
import team2 from "@/assets/team-2.jpeg";
import team3 from "@/assets/team-3.jpeg";
import team4 from "@/assets/team-4.jpeg";
import team5 from "@/assets/team-5.jpeg";
import team6 from "@/assets/team-6.jpeg";
import team7 from "@/assets/team-7.jpeg";

export interface Teacher {
  id: string;
  name: string;
  title: string;
  bio: string;
  subjects: string[];
  image: string;
  experience: string;
  education: string;
  email: string;
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Mr. Hassan Ahmed Hassan",
    title: "Professor of Plant Biology",
    bio: "With a strong background in biology, Hassan, born in 2004, studied at Zagazig University and has experience teaching in STEM-focused schools. He specializes in making complex biological concepts accessible and engaging, creating lessons that spark curiosity and critical thinking. His interactive approach ensures students not only understand the material but also develop a genuine passion for science.",
    subjects: ["Plant Biology", "Cell Biology", "Botany"],
    image: team1,
    experience: "15+ years",
    education: "Ph.D. in Plant Biology, Stanford University",
    email: "hasanhazem2016@gmail.com",
  },
  {
    id: "2",
    name: "Mrs. Rawan Mohamed Farag Mohamed",
    title: "Senior Lecturer in Genetics",
    bio: "With a strong background in biology, Rawan Mohamed Farag Mohamed studied at Zagazig University and has experience teaching in STEM-focused schools. She excels at simplifying complex biological concepts, turning them into engaging lessons that inspire curiosity and critical thinking. Her interactive teaching style ensures students not only grasp the material but also develop a genuine love for science.",
    subjects: ["Genetics", "Molecular Biology", "Biochemistry"],
    image: team2,
    experience: "20+ years",
    education: "Ph.D. in Molecular Genetics, MIT",
    email: "rewanfarag200@gmail.com",
  },
  {
    id: "3",
    name: "Mrs. Nourhan Samir Kamal",
    title: "Ecology Instructor",
    bio: "With a strong background in biology, Nourhan Samir Kamal studied at Zagazig University and has experience teaching in STEM-focused schools. She is passionate about transforming complex biological concepts into clear, engaging lessons that spark curiosity and critical thinking. Her interactive teaching style helps students not only understand the material but also develop a lasting love for science.",
    subjects: ["Ecology", "Environmental Science", "Conservation"],
    image: team3,
    experience: "8+ years",
    education: "M.S. in Ecology, UC Berkeley",
    email: "nourhansamer142004@gamail.com",
  },
  {
    id: "4",
    name: "Mrs. Somya Ibrahim Mohamed",
    title: "Microbiology Specialist",
    bio: "With a strong background in biology, Somya Ibrahim Mohamed studied at Zagazig University and has gained experience teaching in STEM-focused schools. She is passionate about transforming complex biological concepts into clear, engaging lessons that spark curiosity and critical thinking. Her interactive teaching style helps students not only understand the material but also develop a lasting love for science.",
    subjects: ["Microbiology", "Immunology", "Bacteriology"],
    image: team4,
    experience: "12+ years",
    education: "Ph.D. in Microbiology, Johns Hopkins University",
    email: "somayanabawi@gmail.com",
  },
  {
    id: "5",
    name: "Mrs. Shimaa Ashraf Thabet",
    title: "Anatomy & Physiology Professor",
    bio: "Shimaa Ashraf Thabet is a biology graduate from Zagazig University with solid experience in teaching within STEM-oriented schools. She enjoys making challenging biological topics easy to understand through creative and student-centered learning approaches. Her goal is to encourage curiosity, strengthen scientific thinking, and help students build a genuine passion for science through interactive and meaningful lessons.",
    subjects: ["Human Anatomy", "Physiology", "Histology"],
    image: team5,
    experience: "18+ years",
    education: "M.D., Ph.D. in Anatomy, Harvard Medical School",
    email: "Shimooashraf000@gmail.com",
  },
  {
    id: "6",
    name: "Mrs. Menna Allah Elsayed Mohamed",
    title: "Marine Biology Researcher",
    bio: "With a strong background in biology, Menna Allah Elsayed Mohamed studied at Zagazig University and has gained valuable experience teaching in STEM-focused schools. She is passionate about transforming complex biological concepts into clear, engaging lessons that inspire curiosity and critical thinking. Her interactive teaching style helps students not only understand the material but also develop a lasting love for science.",
    subjects: ["Marine Biology", "Oceanography", "Aquatic Ecology"],
    image: team6,
    experience: "10+ years",
    education: "Ph.D. in Marine Biology, University of Hawaii",
    email: "Mohamedredayousf@gmail.com",
  },
  {
    id: "7",
    name: "Mrs. Amira Hassan Ahmed",
    title: "Biochemistry Department Head",
    bio: "Amira Hassan Ahmed holds a strong academic foundation in biology from Zagazig University and has developed valuable teaching experience in STEM-based educational environments. She is dedicated to presenting biological concepts in a simple, exciting way that motivates students to explore and think deeply. Through an engaging and interactive teaching approach, she helps learners build both understanding and a lasting appreciation for science.",
    subjects: ["Biochemistry", "Enzymology", "Metabolism"],
    image: team7,
    experience: "22+ years",
    education: "Ph.D. in Biochemistry, Oxford University",
    email: "hassanamira938@gmail.com",
  },

];
