import plantAnatomyImage from "@/assets/plant-anatomy.jpg";
import lesson3Image from "@/assets/lesson3.jpeg";
import lesson3Image2 from "@/assets/lesson3-Collenchyma.jpeg";
import lesson3Image3 from "@/assets/lesson3-img3.jpeg";
import lesson3Image4 from "@/assets/lesson3-img4.jpeg";
import lesson6Image1 from "@/assets/lesson6-img1.jpeg";
import lesson6Image2 from "@/assets/lesson6-img2.jpeg";
import lesson6Image3 from "@/assets/lesson6-img3.jpeg";

export interface QuizLink {
  label: string;
  url: string;
}

export interface VideoSection {
  title: string;
  url: string;
  content: string;
}

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
  videoSections?: VideoSection[];
  activitiesContent?: string;
  quizzes?: string;
  quizLinks?: QuizLink[];
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
    title: "Plant Tissues : meristematic and permanent",
    week: 1,
    chapterId: "plant-anatomy",
    objectives: [
      "Define meristematic and permanent tissues",
      "Describe the structural differences between meristematic and permanent cells",
      "Explain the functional roles of each tissue type",
      "Compare and contrast meristematic and permanent tissues",
    ],
    keyConcepts: [
      "Meristematic tissues are undifferentiated and capable of continuous division.",
      "Permanent tissues are differentiated and specialized, with no ability to divide.",
      "Meristematic cells: small, thin-walled, large nucleus, little to no vacuoles.",
      "Permanent cells: larger, thick-walled, with large vacuoles for specific functions.",
    ],
    essentialQuestions: [
      "How do structural and functional differences between meristematic and permanent tissues support plant growth and survival?",
    ],
    videoSections: [
      {
        title: "Plant Tissues: Meristematic and Permanent",
        url: "https://youtube.com/shorts/ucEItX85CSo?feature=share",
        content: `
**Plant Tissues: Meristematic and Permanent**

Plants are made up of different types of tissues, each with a specific role in growth and survival. The two main categories are meristematic tissues and permanent tissues.

**Meristematic Tissues**

Meristematic tissues are undifferentiated tissues whose cells are capable of continuous mitotic division. Their main function is growth and the production of new cells. These tissues are found at the growing tips of roots and shoots (apical meristems), at nodes in some plants (intercalary meristems), and along the sides of stems for increase in thickness (lateral meristems).

Meristematic cells are small and compactly arranged with thin cell walls. They have a large, prominent nucleus and very little or no vacuole, which reflects their high metabolic activity. Because they have not yet specialized, they retain the ability to divide and give rise to all other tissues in the plant.

**Permanent Tissues**

Permanent tissues are differentiated tissues whose cells have lost the ability to divide and have become specialized to perform specific functions. They develop from meristematic tissues once the cells stop dividing and mature into their final form.

Permanent tissues can be simple (made of one cell type, such as parenchyma, collenchyma, and sclerenchyma) or complex (made of more than one cell type, such as xylem and phloem). Each type performs a fixed role — transport, support, protection, or food storage.
        `,
      },
      {
        title: "The Difference Between Meristematic and Permanent Tissues",
        url: "https://youtube.com/shorts/Mo3bhnz5whI?feature=share",
        content: `
**The Difference Between Meristematic and Permanent Tissues**

**1. Ability to Divide**

Meristematic tissues: cells divide continuously by mitosis, producing new cells that fuel plant growth.

Permanent tissues: cells do not divide. Once they mature, they remain in their specialized form for the rest of their life.

**2. Specialization**

Meristematic: cells are unspecialized. They are totipotent, meaning they have the potential to become any cell type.

Permanent: cells are specialized for specific functions such as transport (xylem and phloem), protection (epidermis), mechanical support (sclerenchyma), or food storage (parenchyma).

**3. Cell Structure**

Meristematic: small cells with thin walls, a large nucleus relative to cell size, and very small or no vacuoles. Dense cytoplasm reflects active metabolism.

Permanent: larger cells with thicker walls and large central vacuoles. Some cells (like sclerenchyma) are dead at maturity, their walls strengthened with lignin.

**4. Function**

Meristematic: responsible for growth in length (apical meristems) and thickness (lateral meristems like the vascular cambium and cork cambium).

Permanent: perform fixed functions like conduction (xylem and phloem), protection (epidermis), photosynthesis (chlorenchyma), and structural support (collenchyma and sclerenchyma).
        `,
      },
    ],
    content: "",
    activitiesContent: `
**Activity 1: Tissue Detective**

**Objective:**
Identify whether a plant part relies mainly on meristematic or permanent tissue.

**Task:**
Look at the following plant parts and for each one, decide:
• Is it a region of active growth or a mature, specialized structure?
• Which type of tissue dominates — meristematic or permanent?

Plant parts to examine:
• Root tip
• Mature leaf
• Young shoot tip
• Woody stem
• Flower petal

**Students answer:**
• Which parts are dominated by meristematic tissue? Why?
• Which parts are made mostly of permanent tissue? Why?
• What would happen to a plant if its apical meristems were damaged?

**Activity 2: Think and Apply**

A gardener notices that after trimming the tips of a plant, new branches start growing from the sides. 

**Question:**
Which type of tissue is responsible for this new growth, and where exactly is it located in the stem?
    `,
    quizLinks: [
      {
        label: "Quiz 1 — Plant Tissues",
        url: "https://quizzory.in/id/69c438e73bce17d35eb057cd",
      },
      {
        label: "Quiz 2 — Meristematic vs Permanent",
        url: "https://quizzory.in/id/69c51ec9e7af599f6e9fb708",
      },
    ],
    activities: [
      "Tissue Detective: classify plant parts as meristematic or permanent",
      "Think and Apply: explain lateral bud growth after tip trimming",
    ],
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
        •	Sclereids: short, irregular cells called "stone cells"

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
      10. A leaf's palisade layer is tightly packed with chloroplasts. Which tissue is this, and what is its main function?
      11. A young plant stem bends easily in wind without breaking. Which tissue allows this flexibility?
    `,
    activities: [
      "Stomata peeling and microscopy",
      "Measure the effect of light intensity on stomatal opening",
    ],
    video: "https://www.youtube.com/embed/qBjpfhzMoMA?si=cxcWZO_J9RsdIGDD",
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
      "Explain the concept of capillary action in plants",
      "Describe the role of adhesion and cohesion in water transport",
      "Understand how transpiration creates a pulling force in xylem",
      "Apply the Cohesion-Tension Theory to explain water movement in tall trees",
    ],
    keyConcepts: [
      "Capillary Action: Water climbing through narrow xylem tubes",
      "Adhesion: Water molecules sticking to xylem walls",
      "Cohesion: Water molecules sticking to each other",
      "Transpiration Stream: The combined upward flow of water",
    ],
    essentialQuestions: [
      "How do adhesion and cohesion forces enable water to move upward against gravity in plants?",
    ],
    content: `
      **Transpiration and Capillary Action**

      Water must travel from the roots all the way to the leaves of a plant — sometimes over 100 meters in tall trees. This happens without any mechanical pump. How? Through the combined forces of capillary action and transpiration.

      **1. Capillary Action: The "Climbing" Power**

      ![Capillary Action and Transpiration Pull](${lesson6Image1})

      Capillary Action is the ability of a liquid to flow in narrow spaces without the assistance of, or even in opposition to, external forces like gravity.

      In plants, this happens due to two primary forces:
        • Adhesion: Water molecules "stick" to the walls of the plant's xylem (tubes).
        • Cohesion: Water molecules "stick" to each other because of hydrogen bonding.

      **2. Transpiration: The "Pulling" Power**

      ![How Plants Transport Water](${lesson6Image2})

      Transpiration is the evaporation of water from the internal surfaces of leaves through tiny pores called Stomata.

      Think of it like a person drinking through a straw:
        • As water evaporates from the leaf, it creates negative pressure (a vacuum).
        • This "pulls" the entire column of water up from the roots to replace what was lost.

      **3. The Transpiration Stream**

      ![Water Potential Gradient](${lesson6Image3})

      When you combine Cohesion, Adhesion, and Transpiration, you get the Cohesion-Tension Theory. This is how a 100-meter tall redwood tree gets water to its highest leaves without a mechanical pump!

      The water potential gradient drives everything:
        • High water potential at the roots (where water enters from soil)
        • Low water potential at the leaves (where water evaporates)
        • Water always moves from high to low water potential — from roots to leaves
    `,
    activitiesContent: `
      **Activity 1: The Rainbow Flower**

      **Materials:**
      • White carnations (or celery stalks)
      • Glass jars
      • Water
      • Different liquid food colors

      **Procedure:**
      Put different colors in each jar and place a flower in each.

      **What happens:**
      Over 24 hours, the petals will change color.

      **Why:**
      Capillary Action moves the colored water up through the xylem.

      **Activity 2: The "Leaf in a Bag"**

      **Materials:**
      • A clear plastic bag
      • A rubber band

      **Procedure:**
      Wrap the bag around a leafy branch of a living plant outside and tie it tight.

      **What happens:**
      Fog and water droplets will appear inside the bag.

      **Why:**
      This captures Transpiration in action as the plant "breathes" out water vapor.
    `,
    quizzes: `
      **Quick Quiz — Transpiration and Capillary Action**

      1. Which force describes water molecules sticking to the plant's cell walls?
      a) Cohesion
      b) Adhesion
      c) Gravity

      2. Through which structures does water vapor exit the leaf?
      a) Roots
      b) Xylem
      c) Stomata

      3. Transpiration rate increases when the weather is:
      a) Humid and rainy
      b) Cold and dark
      c) Hot, dry, and windy
    `,
    activities: [
      "Rainbow Flower: observe capillary action with colored water and white carnations",
      "Leaf in a Bag: capture transpiration from a living plant branch",
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
