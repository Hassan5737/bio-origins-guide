import plantAnatomyImage from "@/assets/plant-anatomy.jpg";
import lesson3Image from "@/assets/lesson3.jpeg";
import lesson3Image2 from "@/assets/lesson3-Collenchyma.jpeg";
import lesson3Image3 from "@/assets/lesson3-img3.jpeg";
import lesson3Image4 from "@/assets/lesson3-img4.jpeg";

export interface Lesson {
  id: string;
  title: string;
  week: number;
  chapterId: string;
  objectives: string[];
  keyConcepts: string[];
  essentialQuestions: string[];
  content: string;
  activities: string[];
  image?: string;
  video?: string;
  activitiesContent?: string;
  quizzes?: string;
}

export interface Chapter {
  id: string;
  title: string;

}

export const chapters: Chapter[] = [
  {
    id: "plant-anatomy",
    title: "Plant Anatomy and Physiology",

  },
];

export const lessons: Lesson[] = [
  {
    id: "plant-anatomy-1",
    title: "Plant Tissues : meristematic and permanent ",
    week: 1,
    chapterId: "plant-anatomy",
    objectives: [
      "Identify the three main types of plant tissues",
      "Describe the structure and function of meristematic tissue",
      "Explain the role of dermal, vascular, and ground tissue systems",
      "Analyze cross-sections of plant stems and roots",
    ],
    keyConcepts: [
      "Meristematic Tissue: Regions of active cell division",
      "Dermal Tissue: Outer protective layer (epidermis)",
      "Vascular Tissue: Xylem and phloem for transport",
      "Ground Tissue: Parenchyma, collenchyma, sclerenchyma",
    ],
    essentialQuestions: [
      "How do different plant tissues work together to support plant life?",
      "What would happen if a plant lost its vascular tissue?",
      "How does the structure of each tissue relate to its function?",
    ],
    content: `
      Plant tissues are organized into three main tissue systems: dermal, vascular, and ground tissue.
      
      **Dermal Tissue System**
      The epidermis covers the exterior of the plant body, protecting it from desiccation, pathogens, and physical damage.
      
      ![Lesson 3 Image](${lesson3Image})

      **Vascular Tissue System**
      Consists of xylem (water transport) and phloem (sugar transport), forming a continuous network throughout the plant.
      
      **Ground Tissue System**
      Makes up the bulk of the plant body and performs various functions including photosynthesis, storage, and support.
    `,
    activities: [
      "Microscope lab: Examine cross-sections of monocot and dicot stems",
      "Create labeled diagrams of plant tissue systems",
      "Compare and contrast the three types of ground tissue",
    ],
    image: plantAnatomyImage,
  },
  {
    id: "plant-anatomy-2",
    title: "Meristematic",
    week: 2,
    chapterId: "plant-anatomy",
    objectives: [
      "Describe the structure of xylem and phloem",
      "Explain the mechanism of water transport in xylem",
      "Understand phloem loading and translocation",
      "Compare vascular bundles in monocots and dicots",
    ],
    keyConcepts: [
      "Xylem: Tracheids and vessel elements",
      "Phloem: Sieve tube elements and companion cells",
      "Transpiration-cohesion-tension theory",
      "Pressure flow hypothesis for phloem transport",
    ],
    essentialQuestions: [
      "How does water move against gravity in tall trees?",
      "Why is the sugar-water ratio important in phloem?",
    ],
    content: `
      The vascular system is the plant's transportation network.
      
      **Xylem Structure and Function**
      Xylem consists of dead cells that form hollow tubes. Water moves through xylem via the transpiration pull created by evaporation from leaves.
      
      **Phloem Structure and Function**
      Phloem consists of living cells that actively transport sugars from sources (leaves) to sinks (roots, fruits, growing tissues).
    `,
    activities: [
      "Celery dye experiment to visualize xylem transport",
      "Calculate transpiration rates under different conditions",
    ],
  },
  {
    id: "plant-anatomy-3",
    title: "Permanent tissues",
    week: 3,
    chapterId: "plant-anatomy",
    objectives: [
      "Identify the layers of a leaf cross-section",
      "Explain the role of stomata in gas exchange",
      "Describe how leaf structure optimizes photosynthesis",
    ],
    keyConcepts: [
      "Cuticle and epidermis",
      "Palisade and spongy mesophyll",
      "Stomata and guard cells",
      "Chloroplast distribution",
    ],
    essentialQuestions: [
      "How is leaf structure adapted for maximum photosynthesis?",
      "What trade-offs exist between gas exchange and water conservation?",
    ],
    content: `
      **Permanent Tissues in Plants**

      Permanent tissues are plant tissues formed from meristematic tissues after the cells stop dividing and become structurally and functionally specialized. These tissues carry out essential life processes such as storage, support, protection, and photosynthesis.
      
      **1. Parenchyma**

      ![Parenchyma Image](${lesson3Image})

      Parenchyma is the most common and fundamental permanent tissue in plants.

      **Structure**

      Parenchyma cells are living cells with thin cell walls made mainly of cellulose. The cells are usually round, oval, or polygonal in shape and have a large central vacuole that stores materials. One important feature is the presence of intercellular spaces, which allow air to move between cells.

      Because their walls are thin and not rigid, these cells remain metabolically active and can sometimes regain the ability to divide, especially during tissue repair.

      **Location**

      Parenchyma is widely distributed in:
        •	Cortex and pith of stems and roots
        •	Mesophyll of leaves
        •	Fruits
        •	Around vascular tissues (xylem and phloem)

      **Functions**

      Parenchyma performs several vital roles:
        •	Storage of food (starch, sugars, oils, proteins) and water
        •	Gas exchange due to air spaces between cells
        •	Healing and regeneration of damaged plant tissues
        •	Photosynthesis, when chloroplasts are present (then called chlorenchyma)
        •	In aquatic plants, a modified form called aerenchyma helps in buoyancy

      **2. Collenchyma**

      ![Collenchyma Image](${lesson3Image2})

      Collenchyma is a living mechanical tissue that provides support with flexibility.

      **Structure**

      Collenchyma cells are living and elongated. Their cell walls are unevenly thickened, especially at the corners. The thickening is due to deposits of cellulose and pectin, not lignin, which keeps the tissue flexible. Intercellular spaces are usually very small or absent.

      **Location**

      This tissue is found in:
        •	Young stems
        •	Leaf petioles (leaf stalks)
        •	Leaf midribs
        •	Just below the epidermis

      **Functions**
        •	Provides mechanical support to growing plant parts
        •	Allows bending without breaking, which helps plants resist wind
        •	Supports parts that are still elongating, unlike rigid tissues

      **3. Sclerenchyma**

      ![Sclerenchyma Image](${lesson3Image3})

      Sclerenchyma is the main strengthening tissue in plants.

      **Structure**

      Sclerenchyma cells are dead at maturity. They have extremely thick cell walls that contain lignin, a complex substance that makes the walls hard, waterproof, and very strong. Because of this, there is no cytoplasm inside mature cells.

      There are two main types:
        •	Fibers: long, narrow cells that provide tensile strength
        •	Sclereids: short, irregular cells called “stone cells”

      **Location**

      Sclerenchyma occurs in:
        •	Around vascular bundles
        •	Seed coats
        •	Nutshells
        •	Hard fruit coverings
        •	Coconut husk
        •	Gritty part of pear fruit

      **Functions**
        •	Provides rigid mechanical support
        •	Protects inner tissues
        •	Makes plant parts hard and resistant to damage


      **4. Chlorenchyma**

      ![Chlorenchyma Image](${lesson3Image4})

      Chlorenchyma is a specialized type of parenchyma adapted for photosynthesis.

      **Structure**

      These are living cells with thin cell walls and many chloroplasts containing chlorophyll. In leaves, chlorenchyma forms the mesophyll, which has two layers:
        •	Palisade chlorenchyma: tightly packed cells rich in chloroplasts
        •	Spongy chlorenchyma: loosely arranged cells with air spaces

      **Location**

        •	Leaf mesophyll
        •	Green stems

      **Functions**
        •	Carries out photosynthesis (production of glucose)
        •	Releases oxygen
        •	Helps in food production for the entire plant
    `,
    activitiesContent: `
      **Real-Life Connection Activity**
      
      **Task:**
      Bring or observe these plant parts:
      • Potato
      • Apple or pear
      • Leaf
      • Cucumber

      **Students answer:**
      • Which part shows storage parenchyma? Why?
      • Which part contains chlorenchyma?
      • Which sample might contain aerenchyma?

      **Activity 2**
      
      A plant cannot store enough food and its tissues are weak.

      **Question:**
      Which tissue is likely not functioning properly? Why?
    `,
    quizzes: `
      **Plant Permanent Tissues Quiz**

      **Part A: Choose the correct answer**
      
      1. Which tissue is made of dead cells with thick lignified walls?
      a) Parenchyma
      b) Collenchyma
      c) Sclerenchyma
      d) Chlorenchyma

      2. Which tissue mainly performs photosynthesis?
      a) Parenchyma
      b) Chlorenchyma
      c) Sclerenchyma
      d) Collenchyma

      3. Uneven thickening at the corners of cells is a feature of:
      a) Parenchyma
      b) Collenchyma
      c) Chlorenchyma
      d) Sclerenchyma

      4. Which tissue is most involved in storage of food?
      a) Parenchyma
      b) Collenchyma
      c) Sclerenchyma
      d) Chlorenchyma

      5. Which tissue gives flexible support to young plant parts?
      a) Sclerenchyma
      b) Parenchyma
      c) Collenchyma
      d) Chlorenchyma

      **Part B: True or False**
      
      6. Sclerenchyma cells are living at maturity. ( )
      7. Chlorenchyma contains chloroplasts. ( )
      8. Parenchyma cells have thick lignified walls. ( )
      9. Collenchyma helps plants bend without breaking. ( )
      10. Aerenchyma is a type of sclerenchyma. ( )

      **Quiz 2 – Plant Permanent Tissues**
      
      **Part A: Multiple Choice (MCQ)**
      
      1. Which tissue has dead cells with extremely thick lignified walls?
      a) Parenchyma
      b) Sclerenchyma
      c) Collenchyma
      d) Chlorenchyma

      2. Which tissue helps young stems bend without breaking?
      a) Sclerenchyma
      b) Collenchyma
      c) Chlorenchyma
      d) Parenchyma

      **Part B: True or False**
      
      3. Parenchyma cells are living and can perform photosynthesis if chloroplasts are present. ( )
      4. Sclerenchyma cells are alive at maturity. ( )
      5. Chlorenchyma is found mainly in roots. ( )

      **Part C: Fill in the Blanks**
      
      6. Collenchyma cells are thickened at the __________ of the cell.
      7. Parenchyma cells may store __________, water, and other nutrients.
      8. Chlorenchyma cells contain __________ for photosynthesis.

      **Part D: Short Answer / Application**
      
      9. A coconut husk is hard and protects the seed. Which tissue is responsible? Why?
      10. A leaf’s palisade layer is tightly packed with chloroplasts. Which tissue is this, and what is its main function?
      11. A young plant stem bends easily in wind without breaking. Which tissue allows this flexibility?
    `,
    activities: [
      "Stomata peeling and microscopy",
      "Measure the effect of light intensity on stomatal opening",
    ],
    video:"https://www.youtube.com/embed/qBjpfhzMoMA?si=cxcWZO_J9RsdIGDD"
  },
  {
    id: "plant-anatomy-4",
    title: "Complex Permenant tissues",
    week: 4,
    chapterId: "plant-anatomy",
    objectives: [
      "Describe the zones of a root tip",
      "Explain water and mineral uptake mechanisms",
      "Compare taproots and fibrous root systems",
    ],
    keyConcepts: [
      "Root cap and zone of cell division",
      "Zone of elongation and differentiation",
      "Root hairs and absorption",
      "Mycorrhizal associations",
    ],
    essentialQuestions: [
      "How do roots obtain water and nutrients from soil?",
      "Why are root hairs important for plant survival?",
    ],
    content: `
      Roots anchor plants and absorb water and minerals from the soil.
      
      **Root Zones**
      The root tip contains the root cap for protection, followed by zones of division, elongation, and differentiation.
    `,
    activities: [
      "Germination experiment to observe root development",
      "Root cross-section microscopy",
    ],
  },
  {
    id: "plant-anatomy-5",
    title: "Plant Tissues adaptation",
    week: 5,
    chapterId: "plant-anatomy",
    objectives: [
      "State the three principles of cell theory",
      "Compare prokaryotic and eukaryotic cells",
      "Identify organelles and their functions",
    ],
    keyConcepts: [
      "Cell theory history and principles",
      "Prokaryotes vs Eukaryotes",
      "Plant vs Animal cells",
      "Organelle functions",
    ],
    essentialQuestions: [
      "Why is the cell called the basic unit of life?",
      "How do organelles work together as a system?",
    ],
    content: `
      All living organisms are composed of cells, the fundamental units of life.
      
      **Cell Theory**
      1. All living things are made of cells
      2. Cells are the basic units of structure and function
      3. All cells come from pre-existing cells
    `,
    activities: [
      "Compare onion and cheek cells under microscopy",
      "Create 3D cell models",
    ],
  },
  {
    id: "plant-anatomy-6",
    title: "Transpiration and capillary action",
    week: 6,
    chapterId: "plant-anatomy",
    objectives: [
      "State the three principles of cell theory",
      "Compare prokaryotic and eukaryotic cells",
      "Identify organelles and their functions",
    ],
    keyConcepts: [
      "Cell theory history and principles",
      "Prokaryotes vs Eukaryotes",
      "Plant vs Animal cells",
      "Organelle functions",
    ],
    essentialQuestions: [
      "Why is the cell called the basic unit of life?",
      "How do organelles work together as a system?",
    ],
    content: `
      All living organisms are composed of cells, the fundamental units of life.
      
      **Cell Theory**
      1. All living things are made of cells
      2. Cells are the basic units of structure and function
      3. All cells come from pre-existing cells
    `,
    activities: [
      "Compare onion and cheek cells under microscopy",
      "Create 3D cell models",
    ],
  },
];

export function getLessonsByChapter(chapterId: string): Lesson[] {
  return lessons.filter((lesson) => lesson.chapterId === chapterId);
}

export function getChapterById(chapterId: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === chapterId);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === lessonId);
}

export function getAdjacentLessons(lessonId: string): { prev?: Lesson; next?: Lesson } {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
  return {
    prev: currentIndex > 0 ? lessons[currentIndex - 1] : undefined,
    next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : undefined,
  };
}
