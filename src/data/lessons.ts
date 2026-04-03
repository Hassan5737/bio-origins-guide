import plantAnatomyImage from "@/assets/plant-anatomy.jpg";
import lesson3Image from "@/assets/lesson3.jpeg";
import lesson3Image2 from "@/assets/lesson3-Collenchyma.jpeg";
import lesson3Image3 from "@/assets/lesson3-img3.jpeg";
import lesson3Image4 from "@/assets/lesson3-img4.jpeg";
import lesson6Image1 from "@/assets/lesson6-img1.jpeg";
import lesson6Image2 from "@/assets/lesson6-img2.jpeg";
import lesson6Image3 from "@/assets/lesson6-img3.jpeg";
import lesson4Image1 from "@/assets/lesson4-img1.jpeg";
import lesson4Image2 from "@/assets/lesson4-img2.jpeg";
import lesson4Image3 from "@/assets/lesson4-img3.jpeg";
import lesson4Image4 from "@/assets/lesson4-img4.jpeg";
import lesson4Image5 from "@/assets/lesson4-img5.jpeg";
import lesson4Image6 from "@/assets/lesson4-img6.jpeg";
import lesson5Image1 from "@/assets/lesson5-img1.jpeg";
import lesson5Image2 from "@/assets/lesson5-img2.jpeg";
import lesson5Image3 from "@/assets/lesson5-img3.jpeg";

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
      "Define meristematic tissues and describe their key characteristics",
      "Identify the three types of meristematic tissues by position",
      "Explain the role of apical meristem in primary growth",
      "Describe how vascular cambium and cork cambium contribute to secondary growth",
    ],
    keyConcepts: [
      "Meristematic tissues: cells divide continuously, driving plant growth.",
      "Apical meristem: at root and stem tips, causes primary growth.",
      "Vascular cambium: between xylem and phloem, adds thickness via secondary growth.",
      "Cork cambium: outer layer, produces cork for protection.",
    ],
    essentialQuestions: [
      "How do meristematic tissues enable plants to grow and protect themselves?",
    ],
    videoSections: [
      {
        title: "Meristematic Tissues",
        url: "https://youtube.com/shorts/AL0_a8miJQY",
        content: `
**Meristematic Tissues**

Meristematic tissues are tissues whose cells are capable of continuous division. They are responsible for plant growth in both length and thickness, making them the engine of plant development throughout the plant's entire life.

**Characteristics of Meristematic Cells**

Meristematic cells share a distinctive set of features that reflect their role as actively dividing cells:
  • Small cells with thin walls — easy to divide and reorganize
  • Large nucleus — contains all the genetic instructions needed for division
  • No vacuoles (or very small ones) — most of the cell is occupied by cytoplasm
  • Cells divide actively — continuously producing new cells

These features distinguish meristematic tissues from permanent tissues, whose cells are larger, more vacuolated, and no longer dividing.

**Classification by Position**

Meristematic tissues are classified according to their location in the plant into three main types:

**a. Apical Meristem**

Found at the tips of roots and stems, apical meristems are responsible for the increase in length of the plant. This is called primary growth. Through the activity of apical meristems, the plant grows upward toward light and downward into the soil. Every time you see a plant getting taller or its roots penetrating deeper, that is apical meristem at work.

**b. Vascular Cambium**

Located between the xylem and phloem in the vascular bundle, the vascular cambium is responsible for secondary growth — the increase in thickness of the stem and root. It produces secondary xylem (wood) to the inside and secondary phloem to the outside. This is why trees grow wider year after year, forming annual growth rings visible in a cross-section of a trunk.

**c. Cork Cambium (Phellogen)**

Found in the outer region of stems and roots, the cork cambium produces cork cells that form the protective outer layer of the plant. This layer protects the plant from water loss, mechanical injury, and pathogens such as bacteria and fungi. In older woody plants, the cork cambium replaces the epidermis as the main protective covering.
        `,
      },
    ],
    content: "",
    activitiesContent: `
**Activity 1: Growth Zone Mapping**

**Objective:**
Identify where each type of meristematic tissue would be found on a diagram of a plant.

**Task:**
Draw or label a simple plant diagram showing:
• The shoot tip and root tip (Apical meristem)
• The region between bark and wood in a stem (Vascular cambium)
• The outer bark layer of a woody stem (Cork cambium)

**Students answer:**
• Which meristem makes the plant taller?
• Which meristem makes the trunk wider?
• Which meristem produces the rough outer bark?

**Activity 2: Think and Apply**

A tree is cut down and its stump is left in the ground. After some time, new shoots start growing from the sides of the stump.

**Question:**
Which type of meristematic tissue is responsible for this regrowth, and why is it still active even after the main trunk was removed?

**Activity 3: Real-Life Connection**

When you peel an orange, the rough outer skin you remove is produced by a meristematic tissue.

**Question:**
Which tissue produces this outer layer? What is its function beyond just covering the fruit?
    `,
    quizLinks: [
      {
        label: "Quiz — Meristematic Tissues",
        url: "https://quizzory.in/id/69c547ece7af599f6ea177e6",
      },
    ],
    activities: [
      "Growth Zone Mapping: label meristem locations on a plant diagram",
      "Think and Apply: explain stump regrowth using meristem knowledge",
      "Real-Life Connection: identify which tissue produces orange peel",
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
    quizLinks: [
      {
        label: "Plant Permanent Tissues – Quiz",
        url: "https://symphonious-praline-5814ef.netlify.app",
      },
    ],
    activities: [
      "Stomata peeling and microscopy",
      "Measure the effect of light intensity on stomatal opening",
    ],
    video: "https://www.youtube.com/embed/qBjpfhzMoMA?si=cxcWZO_J9RsdIGDD",
  },
  {
    id: "plant-anatomy-4",
    title: "Complex Permanent Tissues",
    week: 4,
    chapterId: "plant-anatomy",
    objectives: [
      "Distinguish between simple and complex permanent tissues",
      "Describe the structure and function of xylem and phloem",
      "Explain the role of dermal tissues in plant protection",
      "Identify the three types of ground tissue and their functions",
    ],
    keyConcepts: [
      "Complex Tissues (Xylem & Phloem): multi-cell transport systems",
      "Vascular Transport System: the plant's circulatory network",
      "Dermal Protection & Barrier: epidermis, cuticle, stomata, root hairs",
      "Ground Tissue Matrix: parenchyma, collenchyma, sclerenchyma",
      "Structural-Functional Adaptation: form follows function in plant tissues",
    ],
    essentialQuestions: [
      "How do the structural differences between Xylem and Phloem reflect their specialized roles in transport?",
    ],
    videoSections: [
      {
        title: "Complex Permanent Tissues — Overview",
        url: "https://youtu.be/-La3gJpBmyA?si=gZVNl-lYMErUNDeV",
        content: `
**Complex Permanent Tissues**

Unlike simple tissues (parenchyma, collenchyma, sclerenchyma), complex permanent tissues are composed of more than one type of cell that work together as a coordinated unit to perform specialized functions. They are primarily responsible for long-distance transport and structural support throughout the plant body.

![Complex Tissues — Xylem, Cambium, Phloem](${lesson4Image1})

Complex tissues are divided into three major systems:
  • Vascular tissues (Xylem and Phloem) — for transport
  • Dermal tissues (Epidermis) — for protection
  • Ground tissues (Parenchyma, Collenchyma, Sclerenchyma) — for support and metabolism

Each system is indispensable. Remove any one of them and the plant cannot survive. Together, they form a fully integrated living architecture.
        `,
      },
      {
        title: "Xylem and Phloem — Vascular Transport",
        url: "https://youtu.be/DhyYtT1K844?si=iwU--tpzbEYqJ0In",
        content: `
**a. Vascular Tissues**

Vascular tissues act as the plant's circulatory system, facilitating the bulk flow of fluids and nutrients across the entire plant body — from roots deep in the soil to the highest leaves.

![Xylem and Phloem Diagram](${lesson4Image2})

**Xylem**

Function: Conducts water and dissolved minerals upward from the roots to the leaves. Also provides mechanical support to help the plant stand upright.

Components:
  • Tracheids — long, tapered dead cells with pits for lateral water movement
  • Vessels — wider, shorter dead cells stacked end-to-end forming continuous tubes
  • Xylem Parenchyma — living cells for storage and lateral transport
  • Xylem Fibers — dead cells for added mechanical strength

Key Feature: The presence of Lignin in the cell walls of tracheids and vessels makes them rigid and waterproof, allowing the plant to grow tall and resist gravitational forces. Because these cells are dead at maturity, they form hollow tubes that water passes through freely.

**Phloem**

Function: Transports dissolved sugars (mainly sucrose) produced by photosynthesis from the leaves (source) to all other parts of the plant (sinks) — including roots, flowers, fruits, and growing shoots.

Components:
  • Sieve Tube Elements — living cells arranged end-to-end with perforated end walls (sieve plates)
  • Companion Cells — living cells that support and regulate the metabolic activity of sieve tube elements
  • Phloem Parenchyma — living cells for storage
  • Phloem Fibers — for support

Key Feature: Unlike xylem, phloem transport is bidirectional — sugars can flow up or down depending on where they are needed. Phloem cells remain alive at maturity, which is essential for the active loading and unloading of sugars.
        `,
      },
      {
        title: "Dermal Tissues — The Plant's Protective Barrier",
        url: "https://youtu.be/UXaISeUv1LU?si=qCEje93o3_3mtBoS",
        content: `
**b. Dermal Tissues**

The dermal tissue system is the plant's outer protective covering, acting as a continuous barrier between the internal tissues and the external environment. It is the first line of defense against physical damage, water loss, and pathogen attack.

![Dermal Tissue in Plant Stems](${lesson4Image3})

![Cork Cambium Microscopy](${lesson4Image4})

**Epidermis**

Usually a single layer of tightly packed, flat cells that covers all surfaces of the young plant — roots, stems, and leaves.

Adaptations and Functions:

  • Protection: Guards against mechanical injury, UV radiation, and pathogen entry.
  • Cuticle: A waxy coating secreted by epidermal cells on aerial surfaces (leaves and stems) that dramatically reduces water loss through evaporation (desiccation). The thicker the cuticle, the more drought-resistant the plant.
  • Stomata: Specialized pores present mostly on the underside of leaves, each surrounded by two Guard Cells. Guard cells change shape to open or close the stomatal pore, regulating gas exchange (CO₂ in, O₂ out) and controlling the rate of transpiration.
  • Root Hairs: Extensions of epidermal cells in roots that dramatically increase the surface area available for water and mineral absorption from the soil. A single plant can have millions of root hairs, making absorption highly efficient.

In older woody plants, the epidermis is replaced by a thicker protective layer — the periderm — produced by the cork cambium. This forms the familiar rough bark of trees.
        `,
      },
      {
        title: "Ground Tissues — The Plant's Matrix",
        url: "https://youtu.be/NiT8C_Kb-eo?si=wNf9iG7yDsSorh7T",
        content: `
**c. Ground Tissues**

Ground tissue makes up the bulk of the plant body. It fills the space between the dermal and vascular tissues and is responsible for the fundamental metabolic functions that keep the plant alive.

![Ground Tissues — Parenchyma, Collenchyma, Sclerenchyma](${lesson4Image5})

![Ground Tissues — Labeled Diagram](${lesson4Image6})

**1. Parenchyma**

Characteristics: Thin-walled, living cells with large central vacuoles and prominent intercellular spaces.

Functions:
  • Photosynthesis in green leaves (chlorenchyma)
  • Storage of starch, water, oils, and proteins
  • Tissue regeneration and wound healing
  • Gas exchange through intercellular spaces

Parenchyma is the most versatile and widespread ground tissue. Because it retains the ability to divide under certain conditions, it plays a key role in healing and regeneration.

**2. Collenchyma**

Characteristics: Living cells with unevenly thickened primary walls, particularly at the corners. Thickening is due to deposits of cellulose and pectin — not lignin — which keeps the tissue flexible.

Functions:
  • Provides flexible mechanical support to actively growing parts
  • Allows young stems and leaf petioles to bend without breaking
  • Found just below the epidermis in young stems and leaf midribs

**3. Sclerenchyma**

Characteristics: Dead at maturity with extremely thick, lignified secondary walls. No cytoplasm remains in mature cells. Two main forms: fibers (long and narrow) and sclereids (short, irregular "stone cells").

Functions:
  • Provides rigid mechanical support and protection
  • Makes plant parts hard and resistant to compression and tension
  • Found in nut shells, seed coats, the gritty texture of pear fruit, and around vascular bundles
        `,
      },
    ],
    content: "",
    activitiesContent: `
**Activity 1: Tissue Function Matching**

**Objective:**
Connect each tissue to its real-world role in the plant.

**Task:**
Match each tissue on the left to the function on the right:

Tissues:
• Xylem
• Phloem
• Epidermis cuticle
• Stomata
• Root hairs
• Parenchyma
• Collenchyma
• Sclerenchyma

Functions:
• Controls gas exchange and water vapor release
• Transports sugars from leaves to roots
• Conducts water upward from soil
• Provides rigid support in nut shells
• Absorbs water and minerals from soil
• Prevents water loss in leaves and stems
• Stores starch and performs photosynthesis
• Supports young growing stems without breaking them

**Activity 2: Design a Plant Cell**

Imagine you are designing a new plant cell for a specific purpose. Choose ONE of the following roles and describe what your cell would look like:
• A cell that transports water as fast as possible
• A cell that stores the maximum amount of sugar
• A cell that resists being crushed or broken

For each choice, explain: What shape? Thick or thin walls? Living or dead? Why?

**Activity 3: Real-Life Investigation**

Look at these everyday objects and identify which plant tissue is responsible for each property:
• The hard shell of a walnut
• The waxy skin of an apple
• The stringy texture when you break a celery stalk
• The gritty texture inside a pear

For each one, name the tissue and explain how its structure produces that physical property.
    `,
    activities: [
      "Tissue Function Matching: connect each tissue to its real-world role",
      "Design a Plant Cell: describe a cell optimized for a specific function",
      "Real-Life Investigation: identify tissues responsible for everyday plant properties",
    ],
    quizLinks: [
      {
        label: "Complex Permanent Tissues – Quiz",
        url: "https://tangerine-melba-b568d3.netlify.app",
      },
    ],
  },
  {
    id: "plant-anatomy-5",
    title: "Plant Tissues Adaptation",
    week: 5,
    chapterId: "plant-anatomy",
    objectives: [
      "Explain how plant tissues adapt structurally to different environments",
      "Describe xerophytic adaptations that minimize water loss in dry habitats",
      "Identify hydrophytic adaptations that enable survival in aquatic environments",
      "Understand how mechanical stress drives lignification and sclerenchyma development",
    ],
    keyConcepts: [
      "Xerophytic Adaptation: thick cuticles, sunken stomata, and water-storage parenchyma for dry environments.",
      "Hydrophytic Adaptation: aerenchyma with large air spaces for buoyancy and oxygen diffusion in aquatic plants.",
      "Mechanical Adaptation: increased lignification and sclerenchyma in tissues exposed to wind or physical stress.",
      "Structure follows function: every tissue modification is a direct response to an environmental challenge.",
    ],
    essentialQuestions: [
      "How do structural modifications in plant tissues allow plants to survive in extreme environments — from scorching deserts to submerged aquatic habitats?",
    ],
    videoSections: [
      {
        title: "Plant Tissue Adaptation",
        url: "https://youtu.be/A_DF246uVlU?si=mEYxn-AIJReWOhky",
        content: `
**Plant Tissue Adaptation**

Plants cannot move to escape harsh conditions — instead, their tissues adapt structurally and chemically to survive in whatever environment they grow in. These modifications are not random; they are precise, functional responses to specific environmental pressures. The same basic tissues — parenchyma, sclerenchyma, epidermis — can take on radically different forms depending on whether the plant lives in a desert, a pond, or a windswept hillside.

**1. Xerophytic Adaptations — Surviving Dry Environments**

![Xerophyte Adaptations — Desert Plants](${lesson5Image1})

Xerophytes are plants adapted to environments where water is scarce — deserts, rocky outcrops, and dry grasslands. Their tissues have evolved multiple strategies to minimize water loss and maximize water storage.

Adaptations include:
  • Sunken stomata: stomata located in pits below the leaf surface, where humid air is trapped, slowing the rate of water evaporation during transpiration.
  • Thick cuticles: a heavily waxed epidermal layer that creates a near-impermeable barrier to water loss from leaf and stem surfaces.
  • Water-storage parenchyma (succulence): enlarged parenchyma cells with large vacuoles that store water, allowing the plant to survive long dry periods. This is what makes a cactus stem or an aloe leaf thick and fleshy.
  • Spines instead of leaves: modified leaves reduced to spines minimize surface area and therefore minimize transpiration. Photosynthesis is shifted to the green stem.
  • Tap roots: deep, penetrating root systems that reach underground water sources far below the dry surface.

**2. Hydrophytic Adaptations — Surviving Aquatic Environments**

![Hydrophyte Adaptations — Water Plants](${lesson5Image2})

Hydrophytes are plants that live in or on water. Their main challenge is not water loss but oxygen supply — roots and submerged tissues cannot access atmospheric oxygen directly.

Adaptations include:
  • Aerenchyma: a specialized form of parenchyma in which the cells are separated by unusually large air spaces. This network of air channels provides two critical functions: buoyancy (keeping the plant or its leaves floating) and internal oxygen diffusion (transporting oxygen from the air above to submerged roots and stems where it is needed for respiration).
  • Reduced or absent cuticle: since water loss is not a concern, the thick waxy cuticle of land plants is absent or minimal.
  • Stomata on the upper leaf surface only: in floating leaves, stomata are concentrated on the upper (aerial) surface, where they can access the atmosphere.
  • Reduced root systems: since the entire plant surface can absorb water and dissolved minerals, the need for extensive root systems is reduced.
  • Flat, broad leaves: maximize surface area for sunlight absorption and gas exchange at the water surface.

**3. Mechanical Adaptations — Surviving Physical Stress**

![Mechanical Adaptations — Grass Structure](${lesson5Image3})

Plants growing in high-wind environments, exposed clifftops, or areas subject to physical stress develop specific mechanical adaptations to avoid snapping, uprooting, or structural failure.

Adaptations include:
  • Increased lignification: more lignin is deposited in the cell walls of xylem vessels and sclerenchyma fibers, making stems harder and more resistant to bending forces.
  • Sclerenchyma development: additional sclerenchyma fibers are laid down in areas of high mechanical stress — particularly around vascular bundles — to resist tensile and compressive forces.
  • Hollow cylindrical stems (as in grasses): the culm structure of grasses — hollow internodes with solid nodes — distributes bending stress efficiently across the stem wall, allowing flexibility without breakage. This is the same engineering principle used in hollow metal tubes, which are lighter and stronger than solid rods.
  • Fibrous root systems: in wind-exposed environments, extensive fibrous roots anchor the plant firmly, preventing uprooting during storms.
  • Low growth habit: keeping meristems close to the ground reduces exposure to mechanical stress during the vegetative stage, protecting the growing points from damage.
        `,
      },
    ],
    content: "",
    activitiesContent: `
**Activity 1: Adaptation Detective**

**Objective:**
Match each plant feature to the environmental problem it solves.

**Task:**
For each adaptation below, identify:
• Which environment it is suited for (dry / aquatic / windy)
• Which tissue is modified
• What problem it solves

Adaptations to analyze:
• Sunken stomata
• Aerenchyma (large air spaces in stem)
• Thick lignified sclerenchyma fibers
• Thick waxy cuticle
• Hollow grass stem with solid nodes
• Water-storage parenchyma in cactus
• Stomata only on upper leaf surface
• Tap roots reaching deep soil layers

**Activity 2: Design a Survivor Plant**

You are a plant biologist designing a plant for one of the following extreme environments. Choose one and describe the tissue adaptations your plant would have:

• A hot, dry desert with sandstorms
• A deep freshwater lake with low light
• A coastal cliff battered by constant strong wind

For each tissue system (dermal, vascular, ground), describe at least one specific adaptation and explain why it helps survival.

**Activity 3: Real-World Comparison**

Look at a cactus and a water lily. They are both flowering plants, yet their tissues look completely different.

Questions:
• What does the cactus's thick green stem contain, and why?
• Why does the water lily leaf float without sinking?
• Which plant has more lignified tissues, and why?
• If you moved a cactus to a pond and a water lily to a desert, predict what would happen to each — and which tissues would fail first.
    `,
    activities: [
      "Adaptation Detective: match plant features to the environmental problems they solve",
      "Design a Survivor Plant: describe tissue adaptations for an extreme environment",
      "Real-World Comparison: analyze cactus vs water lily tissue differences",
    ],
    quizLinks: [
      {
        label: "Plant Tissues Adaptation – Quiz",
        url: "https://resonant-horse-2a2071.netlify.app",
      },
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
    quizLinks: [
      {
        label: "Transpiration and Capillary Action – Quiz",
        url: "https://zingy-marzipan-bd0846.netlify.app",
      },
    ],
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
