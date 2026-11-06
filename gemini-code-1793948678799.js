import React, { useState, useMemo } from 'react';
import {
  BookOpen, Sparkles, Download, Layers, CheckCircle2,
  HelpCircle, Settings, Award, Eye, RefreshCw, Plus, Trash2,
  CheckSquare, Image as ImageIcon, FileText, ChevronDown, 
  BarChart3, BrainCircuit, ShieldCheck, Microscope
} from 'lucide-react';

// --- AUTHENTIC EMBEDDED DIAGRAMS (CAMBRIDGE GRADE 5 SCIENCE) ---
const BOOK_DIAGRAMS = {
  flower_parts: {
    id: "flower_parts",
    title: "Structure of a Flower (Learner's Book p.6)",
    caption: "Cross-section showing Sepals, Petals, Stamen (Anther + Filament), and Carpel (Stigma + Style + Ovary with Ovules)",
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-44 bg-emerald-50/40 rounded border border-emerald-100">
        <path d="M 170 230 C 180 180 185 150 185 130 C 185 100 170 80 195 40 C 205 40 190 100 215 130 C 215 150 220 180 230 230 Z" fill="#bbf7d0" stroke="#15803d" strokeWidth="2" />
        <ellipse cx="200" cy="140" rx="32" ry="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
        <circle cx="193" cy="135" r="5" fill="#f59e0b"/>
        <circle cx="207" cy="135" r="5" fill="#f59e0b"/>
        <circle cx="193" cy="148" r="5" fill="#f59e0b"/>
        <circle cx="207" cy="148" r="5" fill="#f59e0b"/>
        <ellipse cx="198" cy="40" rx="14" ry="7" fill="#86efac" stroke="#16a34a" strokeWidth="2"/>
        <path d="M 170 140 C 100 110 50 150 70 200 C 100 210 145 170 175 160 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2"/>
        <path d="M 230 140 C 300 110 350 150 330 200 C 300 210 255 170 225 160 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2"/>
        <path d="M 200 130 C 200 80 140 50 110 65" fill="none" stroke="#ca8a04" strokeWidth="2.5"/>
        <ellipse cx="106" cy="65" rx="10" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1.5"/>
        <path d="M 200 130 C 200 80 260 50 290 65" fill="none" stroke="#ca8a04" strokeWidth="2.5"/>
        <ellipse cx="294" cy="65" rx="10" ry="7" fill="#facc15" stroke="#a16207" strokeWidth="1.5"/>
        <path d="M 175 175 C 150 185 140 205 155 215 C 168 215 180 195 185 175 Z" fill="#86efac" stroke="#15803d" strokeWidth="1.5"/>
        <path d="M 225 175 C 250 185 260 205 245 215 C 232 215 220 195 215 175 Z" fill="#86efac" stroke="#15803d" strokeWidth="1.5"/>
        <text x="50" y="35" className="text-[11px] font-bold fill-gray-700">A (Petal)</text>
        <line x1="85" y1="38" x2="105" y2="135" stroke="#9ca3af" strokeDasharray="2,2"/>
        <text x="300" y="35" className="text-[11px] font-bold fill-gray-700">B (Anther)</text>
        <line x1="300" y1="38" x2="295" y2="60" stroke="#9ca3af" strokeDasharray="2,2"/>
        <text x="140" y="20" className="text-[11px] font-bold fill-gray-700">C (Stigma)</text>
        <line x1="165" y1="23" x2="195" y2="35" stroke="#9ca3af" strokeDasharray="2,2"/>
        <text x="260" y="150" className="text-[11px] font-bold fill-gray-700">D (Ovary / Ovules)</text>
        <line x1="255" y1="147" x2="225" y2="142" stroke="#9ca3af" strokeDasharray="2,2"/>
      </svg>
    )
  },
  germination_stages: {
    id: "germination_stages",
    title: "Stages of Seed Germination (Learner's Book p.23)",
    caption: "1. Seed absorbs water -> 2. Seed coat splits -> 3. First root grows down -> 4. First shoot grows up -> 5. Leaves open & seed shrivels",
    svg: (
      <svg viewBox="0 0 500 180" className="w-full h-44 bg-amber-50/30 rounded border border-amber-100">
        <line x1="10" y1="100" x2="490" y2="100" stroke="#78350f" strokeWidth="2.5" strokeDasharray="4,3"/>
        <text x="20" y="94" className="text-[10px] font-bold fill-amber-900 uppercase tracking-wider">Soil Surface</text>
        {/* Stage 1 */}
        <g transform="translate(40, 110)">
          <ellipse cx="15" cy="15" rx="12" ry="16" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
          <text x="6" y="45" className="text-[10px] font-bold fill-gray-600">Stage 1</text>
        </g>
        {/* Stage 2 */}
        <g transform="translate(130, 110)">
          <ellipse cx="15" cy="15" rx="13" ry="17" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
          <path d="M 15 28 Q 15 42 12 50" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <text x="6" y="45" className="text-[10px] font-bold fill-gray-600">Stage 2</text>
        </g>
        {/* Stage 3 */}
        <g transform="translate(230, 95)">
          <ellipse cx="15" cy="20" rx="12" ry="15" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
          <path d="M 15 32 Q 18 55 14 70" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <path d="M 15 10 Q 14 -5 18 -15" stroke="#15803d" strokeWidth="2.5" fill="none"/>
          <text x="6" y="60" className="text-[10px] font-bold fill-gray-600">Stage 3</text>
        </g>
        {/* Stage 4 */}
        <g transform="translate(340, 75)">
          <ellipse cx="15" cy="30" rx="9" ry="11" fill="#fed7aa" stroke="#c2410c" strokeWidth="1"/>
          <path d="M 15 38 Q 16 65 15 85" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <path d="M 15 20 Q 12 -15 15 -40" stroke="#15803d" strokeWidth="3" fill="none"/>
          <ellipse cx="7" cy="-38" rx="8" ry="5" fill="#22c55e"/>
          <ellipse cx="23" cy="-38" rx="8" ry="5" fill="#22c55e"/>
          <text x="6" y="80" className="text-[10px] font-bold fill-gray-600">Stage 4</text>
        </g>
        {/* Stage 5 */}
        <g transform="translate(440, 60)">
          <path d="M 15 45 Q 16 75 14 100" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <path d="M 15 35 Q 15 -10 15 -50" stroke="#15803d" strokeWidth="3.5" fill="none"/>
          <ellipse cx="3" cy="-48" rx="14" ry="8" fill="#16a34a"/>
          <ellipse cx="27" cy="-48" rx="14" ry="8" fill="#16a34a"/>
          <ellipse cx="15" cy="40" rx="5" ry="7" fill="#78350f"/>
          <text x="6" y="95" className="text-[10px] font-bold fill-gray-600">Stage 5</text>
        </g>
      </svg>
    )
  },
  sound_vibrations: {
    id: "sound_vibrations",
    title: "Sound Drum / Jar Vibrations (Learner's Book p.33)",
    caption: "Jar with plastic wrap stretched tight, rice grains on top, vibrating as sound is produced nearby",
    svg: (
      <svg viewBox="0 0 380 200" className="w-full h-44 bg-blue-50/30 rounded border border-blue-100">
        <rect x="130" y="70" width="120" height="110" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
        <ellipse cx="190" cy="70" rx="60" ry="16" fill="#38bdf8" stroke="#0369a1" strokeWidth="2"/>
        <line x1="125" y1="80" x2="255" y2="80" stroke="#ef4444" strokeWidth="3"/>
        {/* Rice grains */}
        <ellipse cx="160" cy="68" rx="4" ry="2" fill="#f8fafc" stroke="#334155"/>
        <ellipse cx="180" cy="62" rx="3" ry="5" fill="#f8fafc" stroke="#334155" transform="rotate(15 180 62)"/>
        <ellipse cx="205" cy="65" rx="5" ry="3" fill="#f8fafc" stroke="#334155"/>
        <ellipse cx="225" cy="69" rx="4" ry="2" fill="#f8fafc" stroke="#334155"/>
        <path d="M 178 50 L 180 44 L 182 50" stroke="#ef4444" strokeWidth="1.5" fill="none"/>
        <path d="M 203 52 L 205 46 L 207 52" stroke="#ef4444" strokeWidth="1.5" fill="none"/>
        {/* Tuning fork or drumstick */}
        <path d="M 50 110 L 110 75" stroke="#475569" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="110" cy="75" r="9" fill="#94a3b8"/>
        {/* Sound Waves */}
        <path d="M 105 55 C 115 65 115 85 105 95" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="3,2"/>
        <path d="M 95 48 C 120 62 120 88 95 102" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="3,2"/>
        <text x="145" y="125" className="text-[12px] font-bold fill-sky-900">Glass Jar</text>
        <text x="140" y="32" className="text-[11px] font-bold fill-red-700">Plastic Wrap + Rice Grains</text>
      </svg>
    )
  },
  digestive_tract: {
    id: "digestive_tract",
    title: "The Human Digestive System (Learner's Book p.89)",
    caption: "Mouth -> Oesophagus -> Stomach -> Small Intestine -> Large Intestine -> Anus",
    svg: (
      <svg viewBox="0 0 350 250" className="w-full h-44 bg-rose-50/30 rounded border border-rose-100">
        <path d="M 140 30 Q 160 30 170 45 Q 180 50 175 65 L 165 65 L 165 110" fill="none" stroke="#f87171" strokeWidth="7" strokeLinecap="round"/>
        <ellipse cx="145" cy="45" rx="10" ry="6" fill="#f43f5e"/>
        {/* Stomach */}
        <path d="M 165 110 C 140 115 130 145 160 155 C 185 160 195 140 178 120 Z" fill="#fb7185" stroke="#e11d48" strokeWidth="2"/>
        {/* Large Intestine */}
        <rect x="130" y="150" width="75" height="60" rx="8" fill="none" stroke="#b45309" strokeWidth="12" strokeLinejoin="round"/>
        {/* Small Intestine inside */}
        <path d="M 145 165 C 160 160 160 175 175 170 C 185 180 155 190 175 195 C 160 200 150 185 145 175" fill="none" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round"/>
        <line x1="168" y1="210" x2="168" y2="235" stroke="#b45309" strokeWidth="8"/>
        {/* Labels pointer lines */}
        <text x="45" y="45" className="text-[10px] font-bold fill-gray-700">1. Mouth</text>
        <line x1="85" y1="45" x2="135" y2="45" stroke="#94a3b8"/>
        <text x="210" y="85" className="text-[10px] font-bold fill-gray-700">2. Oesophagus</text>
        <line x1="205" y1="85" x2="167" y2="85" stroke="#94a3b8"/>
        <text x="45" y="130" className="text-[10px] font-bold fill-gray-700">3. Stomach</text>
        <line x1="95" y1="130" x2="140" y2="130" stroke="#94a3b8"/>
        <text x="220" y="170" className="text-[10px] font-bold fill-gray-700">4. Small Intestine</text>
        <line x1="215" y1="170" x2="175" y2="175" stroke="#94a3b8"/>
        <text x="35" y="195" className="text-[10px] font-bold fill-gray-700">5. Large Intestine</text>
        <line x1="110" y1="195" x2="130" y2="195" stroke="#94a3b8"/>
      </svg>
    )
  },
  force_vectors: {
    id: "force_vectors",
    title: "Force Diagrams & Normal Forces (Learner's Book p.105)",
    caption: "Book resting on table showing balanced forces: Gravity (downward pull) and Normal Force (upward push)",
    svg: (
      <svg viewBox="0 0 350 200" className="w-full h-44 bg-indigo-50/30 rounded border border-indigo-100">
        <rect x="50" y="110" width="250" height="14" fill="#94a3b8" stroke="#475569" strokeWidth="1.5"/>
        <rect x="80" y="124" width="14" height="65" fill="#64748b"/>
        <rect x="256" y="124" width="14" height="65" fill="#64748b"/>
        {/* Object (Book / Block) */}
        <rect x="125" y="75" width="100" height="35" rx="3" fill="#6366f1" stroke="#3730a3" strokeWidth="2"/>
        <text x="155" y="96" className="text-[12px] font-extrabold fill-white">OBJECT</text>
        {/* Upward vector: Normal force */}
        <line x1="175" y1="75" x2="175" y2="20" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow-up)"/>
        <polygon points="175,15 170,25 180,25" fill="#16a34a"/>
        <text x="185" y="30" className="text-[11px] font-bold fill-green-800">Force A (Normal Force)</text>
        {/* Downward vector: Gravity */}
        <line x1="175" y1="110" x2="175" y2="175" stroke="#dc2626" strokeWidth="3"/>
        <polygon points="175,182 170,172 180,172" fill="#dc2626"/>
        <text x="185" y="175" className="text-[11px] font-bold fill-red-800">Force B (Gravity)</text>
      </svg>
    )
  }
};

// --- COMPREHENSIVE CURRICULUM DATABASE: COVERS ALL DETAILS OF EVERY LESSON ---
const COMPREHENSIVE_LESSONS = [
  // --- UNIT 1: LIFE CYCLES OF FLOWERING PLANTS ---
  {
    id: "u1_l1",
    unitNum: 1,
    unitTitle: "Unit 1: Life Cycles of Flowering Plants",
    lessonNum: "1.1",
    lessonTitle: "Flowering and Non-flowering Plants",
    curriculumRef: "Learner's Book pp. 2–8 | Workbook pp. 2–5",
    summary: "Distinguish flowering plants from non-flowering (mosses, ferns, conifers). Identify flower parts: sepals, petals, stamens (anther, filament), carpel (stigma, style, ovary, ovules) and their specific functions.",
    diagramKey: "flower_parts",
    questions: [
      {
        id: "q_u1l1_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "Which group of plants produces seeds inside a fruit?",
        options: ["Mosses", "Ferns", "Flowering plants", "Conifers"],
        correctAnswer: "C (Flowering plants)",
        guidance: "Award 1 mark for flowering plants."
      },
      {
        id: "q_u1l1_2",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "Ferns do not produce seeds. What do they produce instead to reproduce?",
        options: ["Flowers", "Spores", "Fruits", "Cones"],
        correctAnswer: "B (Spores)",
        guidance: "Award 1 mark for spores."
      },
      {
        id: "q_u1l1_3",
        type: "Short",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        diagramRef: "flower_parts",
        stem: "Look at the diagram of the flower.\na. Name the part labelled B:\nb. Name the part labelled D:",
        correctAnswer: "a. Anther (or Stamen) [1]\nb. Ovary [1]",
        guidance: "Accept phonetic spelling. 1 mark each."
      },
      {
        id: "q_u1l1_4",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: "flower_parts",
        stem: "State the main function of each of the following flower parts:\na. Petals:\nb. Sepals:",
        correctAnswer: "a. Attract insects / pollinators [1]\nb. Protect the flower bud before it opens [1]",
        guidance: "Award 1 mark per correct function."
      },
      {
        id: "q_u1l1_5",
        type: "Matching",
        ao: "Application",
        demand: "Medium",
        marks: 3,
        diagramRef: null,
        stem: "Match each flower structure with its correct description.\n1. Stigma  --> [                              ]\n2. Anther  --> [                              ]\n3. Ovary   --> [                              ]",
        matchPairs: [
          { item: "Stigma", match: "Sticky surface that catches pollen grains" },
          { item: "Anther", match: "Produces and releases yellow powdery pollen" },
          { item: "Ovary", match: "Contains tiny eggs (ovules) and becomes the fruit" }
        ],
        correctAnswer: "Stigma: Sticky surface to catch pollen [1]; Anther: Produces pollen [1]; Ovary: Contains eggs / becomes fruit [1]",
        guidance: "1 mark for each correctly matched pair."
      },
      {
        id: "q_u1l1_6",
        type: "TrueFalse",
        ao: "Reasoning",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Read the statement: 'All plants that have green leaves produce flowers.'\nIs this statement True or False? Explain your reason.",
        correctAnswer: "False [1]. Ferns, mosses, and pine trees have green leaves/needles but do not produce flowers (they reproduce via spores or cones) [1].",
        guidance: "1 mark for identifying False; 1 mark for correct scientific reason citing non-flowering plants."
      },
      {
        id: "q_u1l1_7",
        type: "Long",
        ao: "Reasoning",
        demand: "High",
        marks: 3,
        diagramRef: null,
        stem: "A student found a plant in a shady, damp forest that has no flowers and tiny brown dust-like spots under its fronds.\na. Identify the type of plant found.\nb. Explain how this plant reproduces compared to an apple tree.\nc. Predict what will happen if these brown spots fall onto damp soil.",
        correctAnswer: "a. Fern [1]\nb. Ferns reproduce using spores, whereas apple trees reproduce using flowers, seeds, and fruits [1]\nc. The spores will germinate and grow into new fern plants [1]",
        guidance: "1 mark for fern; 1 mark for comparing spores vs flowers/seeds; 1 mark for germination."
      }
    ]
  },
  {
    id: "u1_l2",
    unitNum: 1,
    unitTitle: "Unit 1: Life Cycles of Flowering Plants",
    lessonNum: "1.2",
    lessonTitle: "Pollination, Fruits and Seeds",
    curriculumRef: "Learner's Book pp. 9–14 | Workbook pp. 6–8",
    summary: "Insect pollination vs. wind pollination adaptations. Process of pollination (anther to stigma) vs fertilisation (pollen joining egg inside ovary). Transformation of ovary into fruit and ovules into seeds.",
    diagramKey: "flower_parts",
    questions: [
      {
        id: "q_u1l2_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "What is pollination?",
        options: [
          "The growth of a root from a seed",
          "The movement of pollen from the anther to the stigma",
          "The joining of pollen and egg inside the ovary",
          "The explosion of a seed pod in hot weather"
        ],
        correctAnswer: "B (The movement of pollen from the anther to the stigma)",
        guidance: "1 mark for B."
      },
      {
        id: "q_u1l2_2",
        type: "FillBlank",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        wordBank: ["ovary", "anther", "fertilisation", "stigma", "fruit"],
        stem: "Complete the sentences using words from the box:\nPollen joins with the egg in a process called ________________________. This happens inside the ________________________.",
        correctAnswer: "fertilisation [1], ovary [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u1l2_3",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Wind-pollinated flowers have different adaptations from insect-pollinated flowers. Describe TWO adaptations of wind-pollinated flowers.",
        correctAnswer: "1. Small, dull/green petals (or no petals) [1]\n2. Large amounts of light, smooth pollen (or feathery stigmas hanging outside) [1]",
        guidance: "Allow any 2 valid textbook adaptations. 1 mark each."
      },
      {
        id: "q_u1l2_4",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Explain the difference between pollination and fertilisation in plants.",
        correctAnswer: "Pollination is the transfer of pollen from anther to stigma [1], while fertilisation is the joining of the pollen and egg cell inside the ovary [1].",
        guidance: "Award 1 mark for clear definition of each."
      },
      {
        id: "q_u1l2_5",
        type: "Investigation",
        ao: "Reasoning",
        demand: "High",
        marks: 3,
        diagramRef: null,
        stem: "A student counted insect visits to different coloured flowers over 30 minutes:\n• Red: 3 visits | Yellow: 14 visits | White: 11 visits | Dull Green: 0 visits\na. Which colour flower was most attractive to insect pollinators?\nb. Suggest why the dull green flowers received no visits.\nc. Identify the independent variable in this investigation.",
        correctAnswer: "a. Yellow [1]\nb. Dull green flowers are not bright and lack visual signals/scent to attract insects (likely wind-pollinated) [1]\nc. The colour of the flower [1]",
        guidance: "1 mark for Yellow; 1 mark for lack of attraction/wind pollination; 1 mark for flower colour."
      }
    ]
  },
  {
    id: "u1_l4",
    unitNum: 1,
    unitTitle: "Unit 1: Life Cycles of Flowering Plants",
    lessonNum: "1.4",
    lessonTitle: "Seed Germination & Growth",
    curriculumRef: "Learner's Book pp. 22–26 | Workbook pp. 13–17",
    summary: "Germination conditions: water, warmth, air (oxygen). Seeds do NOT require soil or light to germinate. Sequence of germination: seed absorbs water and swells, coat splits, first root grows down, first shoot grows up, leaves form.",
    diagramKey: "germination_stages",
    questions: [
      {
        id: "q_u1l4_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "Which of the following conditions is NOT required for a seed to germinate?",
        options: ["Water", "Warmth", "Light", "Air (Oxygen)"],
        correctAnswer: "C (Light)",
        guidance: "Award 1 mark for Light. Seeds have a food store and do not require light until green leaves develop."
      },
      {
        id: "q_u1l4_2",
        type: "Short",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        diagramRef: "germination_stages",
        stem: "Look at the germination diagram.\na. Which structure grows first out of the seed: the root or the shoot?\nb. Why does this first structure grow downwards?",
        correctAnswer: "a. The first root [1]\nb. To anchor the plant in the soil and absorb water/minerals [1]",
        guidance: "1 mark for root; 1 mark for anchoring or absorbing water."
      },
      {
        id: "q_u1l4_3",
        type: "Ordering",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Put the stages of seed germination in the correct chronological order (1 to 4):\n[   ] First shoot grows upwards\n[   ] Seed absorbs water and swells\n[   ] First leaves open and seed shrivels\n[   ] Seed coat splits and first root grows down",
        correctAnswer: "Order: 3, 1, 4, 2 (1. Seed absorbs water -> 2. Seed coat splits and root grows down -> 3. Shoot grows up -> 4. Leaves open)",
        guidance: "Award 2 marks for all correct, 1 mark for 2-3 correct."
      },
      {
        id: "q_u1l4_4",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: "germination_stages",
        stem: "During germination, why does the seed shrivel and become small at Stage 5?",
        correctAnswer: "The growing seedling uses up the food stored inside the seed for energy to grow [2].",
        guidance: "Award 2 marks for stating the food store is used up for growth/energy."
      },
      {
        id: "q_u1l4_5",
        type: "Investigation",
        ao: "Reasoning",
        demand: "High",
        marks: 3,
        diagramRef: null,
        stem: "Class 5 placed 10 bean seeds in dry soil at 20°C, and 10 bean seeds in moist soil at 20°C. After 5 days, all 10 seeds in moist soil germinated, while 0 germinated in dry soil.\na. State the conclusion of this investigation.\nb. Name TWO control variables the students kept the same.\nc. Why is it better to test 10 seeds in each dish instead of just 1 seed?",
        correctAnswer: "a. Seeds require water to germinate [1]\nb. Temperature (20°C), type of seeds (bean), number of seeds (10), type of container [1]\nc. To make the test reliable / reduce the chance of an anomaly or a single bad seed skewing results [1]",
        guidance: "1 mark per sub-item."
      }
    ]
  },

  // --- UNIT 2: SOUND ---
  {
    id: "u2_l1",
    unitNum: 2,
    unitTitle: "Unit 2: Sound",
    lessonNum: "2.1",
    lessonTitle: "How are Sounds Made?",
    curriculumRef: "Learner's Book pp. 31–37 | Workbook pp. 18–21",
    summary: "Sounds are made by vibrating sources. Sound travels as vibrations through solids, liquids, and gases. Sound travels fastest and best through solids because particles are tightly packed.",
    diagramKey: "sound_vibrations",
    questions: [
      {
        id: "q_u2l1_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "What causes all sounds?",
        options: ["Heat", "Vibrations", "Light", "Electricity"],
        correctAnswer: "B (Vibrations)",
        guidance: "1 mark for Vibrations."
      },
      {
        id: "q_u2l1_2",
        type: "Short",
        ao: "Application",
        demand: "Low",
        marks: 2,
        diagramRef: "sound_vibrations",
        stem: "Look at the experiment with the jar and rice grains:\na. What happens to the rice grains when the metal tray is banged nearby?\nb. Explain how the sound travels from the tray to the rice grains.",
        correctAnswer: "a. The rice grains jump / vibrate [1]\nb. Sound vibrations travel through the air, cause the plastic wrap to vibrate, and move the rice [1]",
        guidance: "1 mark for jumping/moving; 1 mark for sound vibrations travelling through air/plastic."
      },
      {
        id: "q_u2l1_3",
        type: "FillBlank",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        wordBank: ["solids", "gases", "vacuum", "liquids"],
        stem: "Sound vibrations travel best and fastest through ________________________ because particles are tightly packed together. Sound travels slowest through ________________________.",
        correctAnswer: "solids [1], gases [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u2l1_4",
        type: "TrueFalse",
        ao: "Reasoning",
        demand: "High",
        marks: 2,
        diagramRef: null,
        stem: "Can sound travel in outer space? State YES or NO, and explain your answer using the particle model of matter.",
        correctAnswer: "NO [1]. Space is a vacuum with no particles of matter to vibrate and pass on sound waves [1].",
        guidance: "1 mark for NO; 1 mark for explaining no particles / vacuum."
      }
    ]
  },
  {
    id: "u2_l2",
    unitNum: 2,
    unitTitle: "Unit 2: Sound",
    lessonNum: "2.2",
    lessonTitle: "Volume and Pitch",
    curriculumRef: "Learner's Book pp. 38–41 | Workbook pp. 22–26",
    summary: "Volume is loudness measured in decibels (dB). Pitch is highness or lowness. Bigger vibrations = louder volume. Faster vibrations = higher pitch. Sounds above 85 dB can damage hearing.",
    diagramKey: null,
    questions: [
      {
        id: "q_u2l2_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "Which unit is used to measure the volume (loudness) of sound?",
        options: ["Newtons (N)", "Decibels (dB)", "Degrees Celsius (°C)", "Millilitres (ml)"],
        correctAnswer: "B (Decibels / dB)",
        guidance: "1 mark for B."
      },
      {
        id: "q_u2l2_2",
        type: "Short",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        diagramRef: null,
        stem: "Define what is meant by:\na. Volume of a sound:\nb. Pitch of a sound:",
        correctAnswer: "a. How loud or quiet a sound is [1]\nb. How high or low a note is [1]",
        guidance: "1 mark for each definition."
      },
      {
        id: "q_u2l2_3",
        type: "Matching",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Match the vibration type to the resulting sound characteristic:\n1. Large / big vibration  --> [                              ]\n2. Fast vibration        --> [                              ]",
        matchPairs: [
          { item: "Large / big vibration", match: "Loud volume" },
          { item: "Fast vibration", match: "High pitch" }
        ],
        correctAnswer: "Large vibration = Loud volume [1]; Fast vibration = High pitch [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u2l2_4",
        type: "Long",
        ao: "Reasoning",
        demand: "High",
        marks: 3,
        diagramRef: null,
        stem: "A student plucked a thin guitar string very hard.\na. Describe the volume of the sound produced (Loud or Quiet) and explain why.\nb. Describe the pitch of the sound produced (High or Low) and explain why.\nc. At what decibel level can prolonged sound cause damage to human ears?",
        correctAnswer: "a. Loud, because plucking hard creates large vibrations [1]\nb. High pitch, because a thin string vibrates faster [1]\nc. Sounds above 85 dB [1]",
        guidance: "1 mark each for parts a, b, and c."
      }
    ]
  },

  // --- UNIT 4: THE DIGESTIVE SYSTEM ---
  {
    id: "u4_l1",
    unitNum: 4,
    unitTitle: "Unit 4: The Digestive System",
    lessonNum: "4.1",
    lessonTitle: "Parts and Functions of the Digestive System",
    curriculumRef: "Learner's Book pp. 88–94 | Workbook pp. 51–54",
    summary: "Organs: Mouth (teeth chew, saliva digests starch), Oesophagus (muscular tube), Stomach (digestive juices break food into liquid), Small intestine (breaks down food & absorbs nutrients into blood), Large intestine (absorbs water), Anus (ejects waste).",
    diagramKey: "digestive_tract",
    questions: [
      {
        id: "q_u4l1_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "In which organ of the human body does digestion begin?",
        options: ["Stomach", "Mouth", "Small intestine", "Oesophagus"],
        correctAnswer: "B (Mouth)",
        guidance: "1 mark for Mouth."
      },
      {
        id: "q_u4l1_2",
        type: "Short",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        diagramRef: "digestive_tract",
        stem: "Look at the diagram of the digestive system:\na. Name organ 2:\nb. Name organ 3:",
        correctAnswer: "a. Oesophagus [1]\nb. Stomach [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u4l1_3",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: null,
        stem: "Describe TWO functions of saliva produced in the mouth during eating.",
        correctAnswer: "1. Moisten / lubricate food to make swallowing easy [1]\n2. Contains digestive juices that break down starch into sugars [1]",
        guidance: "1 mark for moistening/lubricating; 1 mark for chemical digestion of starch."
      },
      {
        id: "q_u4l1_4",
        type: "Matching",
        ao: "Application",
        demand: "Medium",
        marks: 3,
        diagramRef: null,
        stem: "Match each digestive organ to its correct role:\n1. Small intestine  --> [                              ]\n2. Large intestine  --> [                              ]\n3. Oesophagus        --> [                              ]",
        matchPairs: [
          { item: "Small intestine", match: "Breaks down food and absorbs nutrients into blood" },
          { item: "Large intestine", match: "Absorbs water and minerals back into the body" },
          { item: "Oesophagus", match: "Muscular tube that pushes food from mouth to stomach" }
        ],
        correctAnswer: "Small intestine: absorbs nutrients [1]; Large intestine: absorbs water [1]; Oesophagus: pushes food to stomach [1]",
        guidance: "1 mark for each correctly matched organ."
      },
      {
        id: "q_u4l1_5",
        type: "Investigation",
        ao: "Reasoning",
        demand: "High",
        marks: 3,
        diagramRef: null,
        stem: "In a laboratory activity, students added saliva to cooked rice in Beaker A and pure water to cooked rice in Beaker B. After 1 hour, they tested both with iodine solution:\n• Beaker B turned dark blue-black.\n• Beaker A stayed yellowish-brown.\na. What nutrient did the blue-black colour in Beaker B indicate?\nb. Explain why Beaker A did not turn blue-black.\nc. What conclusion can be drawn about the role of saliva in digestion?",
        correctAnswer: "a. Starch [1]\nb. The saliva digested/broke down the starch into sugar [1]\nc. Saliva contains digestive enzymes/juices that break down starch in the mouth [1]",
        guidance: "1 mark for starch; 1 mark for breakdown of starch; 1 mark for conclusion on saliva."
      }
    ]
  },

  // --- UNIT 5: FORCES AND MAGNETISM ---
  {
    id: "u5_l1",
    unitNum: 5,
    unitTitle: "Unit 5: Forces and Magnetism",
    lessonNum: "5.1",
    lessonTitle: "Gravity, Normal Forces and Applied Forces",
    curriculumRef: "Learner's Book pp. 104–107 | Workbook pp. 60–63",
    summary: "Gravity is a pulling force towards the centre of Earth. Normal force is the contact support force pushing in the opposite direction. Applied force is any push or pull exerted on an object. Force diagrams use arrows for size and direction.",
    diagramKey: "force_vectors",
    questions: [
      {
        id: "q_u5l1_1",
        type: "MCQ",
        ao: "Knowledge",
        demand: "Low",
        marks: 1,
        diagramRef: null,
        stem: "What is gravity?",
        options: [
          "A contact force that pushes objects upward",
          "A force that pulls objects towards the centre of the Earth",
          "A force that only acts on moving objects",
          "The force that creates magnetic attraction"
        ],
        correctAnswer: "B (A force that pulls objects towards the centre of the Earth)",
        guidance: "1 mark for B."
      },
      {
        id: "q_u5l1_2",
        type: "Short",
        ao: "Knowledge",
        demand: "Low",
        marks: 2,
        diagramRef: "force_vectors",
        stem: "Look at the force diagram of the object resting on the table:\na. Name Force A:\nb. Name Force B:",
        correctAnswer: "a. Normal force (or support force) [1]\nb. Gravity (or weight) [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u5l1_3",
        type: "Short",
        ao: "Application",
        demand: "Medium",
        marks: 2,
        diagramRef: "force_vectors",
        stem: "On a force diagram:\na. What does the direction of the arrow show?\nb. What does the length of the arrow show?",
        correctAnswer: "a. The direction in which the force is acting [1]\nb. The size / magnitude / strength of the force [1]",
        guidance: "1 mark each."
      },
      {
        id: "q_u5l1_4",
        type: "TrueFalse",
        ao: "Reasoning",
        demand: "Medium",
        marks: 2,
        diagramRef: "force_vectors",
        stem: "A book sits motionless on a desk. A student claims: 'Because the book is not moving, there are no forces acting on it.'\nIs this claim True or False? Explain your answer.",
        correctAnswer: "False [1]. There are balanced forces acting on it: gravity pulling down and normal support force from the table pushing up with equal strength [1].",
        guidance: "1 mark for False; 1 mark for identifying balanced gravity and normal force."
      }
    ]
  }
];

export default function App() {
  // --- STATE ---
  const [selectedLessonId, setSelectedLessonId] = useState(COMPREHENSIVE_LESSONS[0].id);
  const [examTitle, setExamTitle] = useState("Science Diagnostic & Revision Test");
  const [schoolName, setSchoolName] = useState("Altakween Private Schools");
  const [gradeLevel, setGradeLevel] = useState("Grade 5");
  const [activeTab, setActiveTab] = useState("generator"); // "generator" | "studio" | "preview"

  // Question selection checkboxes inside the active lesson
  const currentLesson = useMemo(() => {
    return COMPREHENSIVE_LESSONS.find(l => l.id === selectedLessonId) || COMPREHENSIVE_LESSONS[0];
  }, [selectedLessonId]);

  // Exam Paper Questions Store
  const [examQuestions, setExamQuestions] = useState(() => {
    return COMPREHENSIVE_LESSONS[0].questions.slice(0, 4);
  });

  // Calculate Blueprint Totals
  const totalMarks = useMemo(() => {
    return examQuestions.reduce((acc, q) => acc + (q.marks || 1), 0);
  }, [examQuestions]);

  const aoCounts = useMemo(() => {
    const k = examQuestions.filter(q => q.ao === "Knowledge").reduce((a, q) => a + q.marks, 0);
    const a = examQuestions.filter(q => q.ao === "Application").reduce((a, q) => a + q.marks, 0);
    const r = examQuestions.filter(q => q.ao === "Reasoning").reduce((a, q) => a + q.marks, 0);
    return {
      knowledge: { marks: k, pct: totalMarks ? Math.round((k / totalMarks) * 100) : 0 },
      application: { marks: a, pct: totalMarks ? Math.round((a / totalMarks) * 100) : 0 },
      reasoning: { marks: r, pct: totalMarks ? Math.round((r / totalMarks) * 100) : 0 },
    };
  }, [examQuestions, totalMarks]);

  // Handlers
  const handleToggleQuestionInExam = (question) => {
    const exists = examQuestions.some(q => q.id === question.id);
    if (exists) {
      setExamQuestions(examQuestions.filter(q => q.id !== question.id));
    } else {
      setExamQuestions([...examQuestions, question]);
    }
  };

  const handleSelectAllFromLesson = () => {
    const currentIds = new Set(examQuestions.map(q => q.id));
    const toAdd = currentLesson.questions.filter(q => !currentIds.has(q.id));
    setExamQuestions([...examQuestions, ...toAdd]);
  };

  const handleRemoveQuestion = (id) => {
    setExamQuestions(examQuestions.filter(q => q.id !== id));
  };

  const handleUpdateQuestion = (id, field, value) => {
    setExamQuestions(examQuestions.map(q => q.id === id ? { ...q, [field]: value } : q));
  };

  // Export to formatted Word DOC file
  const handleExportWord = () => {
    let htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${examTitle}</title>
        <style>
          body { font-family: 'Times New Roman', Times, serif; font-size: 12pt; color: #111; line-height: 1.4; padding: 20px; }
          .header-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; border-bottom: 2pt solid #000; }
          .header-table td { padding: 4px 8px; font-size: 11pt; }
          .title-area { text-align: center; font-weight: bold; font-size: 15pt; margin-bottom: 15px; }
          .question-box { margin-bottom: 24px; page-break-inside: avoid; }
          .q-header { font-weight: bold; font-size: 12pt; display: flex; justify-content: space-between; }
          .q-stem { margin: 8px 0; font-size: 12pt; white-space: pre-wrap; }
          .mcq-opt { margin: 4px 0 4px 25px; }
          .answer-line { border-bottom: 1pt solid #444; height: 26px; margin: 8px 0; width: 100%; }
          .mark-tag { float: right; font-weight: bold; }
          .table-grid { width: 100%; border-collapse: collapse; margin-top: 30px; font-size: 10pt; }
          .table-grid th, .table-grid td { border: 1pt solid #333; padding: 6px; text-align: left; }
          .table-grid th { background-color: #f1f5f9; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="title-area">${schoolName.toUpperCase()}<br/>${gradeLevel} SCIENCE ASSESSMENT<br/><span style="font-size: 13pt;">${examTitle}</span></div>
        <table class="header-table">
          <tr>
            <td><strong>Student Name:</strong> ___________________________________</td>
            <td><strong>Class:</strong> _________</td>
            <td><strong>Date:</strong> ____________</td>
          </tr>
          <tr>
            <td><strong>Teacher:</strong> Suzan Altalla</td>
            <td><strong>Total Marks:</strong> [ ${totalMarks} ]</td>
            <td><strong>Time:</strong> 45 Mins</td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1.5pt solid #000; margin-bottom: 20px;" />
    `;

    // Questions Loop
    examQuestions.forEach((q, idx) => {
      htmlContent += `
        <div class="question-box">
          <div class="q-header">
            <span><strong>${idx + 1})</strong> [${q.ao} - ${q.demand} Demand]</span>
            <span class="mark-tag">[${q.marks}]</span>
          </div>
          <div class="q-stem">${q.stem}</div>
      `;

      if (q.type === "MCQ" && q.options) {
        htmlContent += `<p style="font-style: italic; font-size: 10pt; margin: 4px 0 8px 0;">(Shade the shape [ ] corresponding to the correct answer)</p>`;
        q.options.forEach((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          htmlContent += `<div class="mcq-opt">[ &nbsp; ] <strong>${letter}.</strong> ${opt}</div>`;
        });
      } else {
        const lineCount = q.marks === 1 ? 2 : q.marks === 2 ? 3 : 5;
        for (let i = 0; i < lineCount; i++) {
          htmlContent += `<div class="answer-line"></div>`;
        }
      }

      htmlContent += `</div>`;
    });

    // Mark Scheme Section
    htmlContent += `
      <br/><br/>
      <div style="page-break-before: always;">
        <h2 style="text-align: center; border-bottom: 2pt solid #000; padding-bottom: 5px;">OFFICIAL MARK SCHEME & SPECIFICATION BLUEPRINT</h2>
        <table class="table-grid">
          <thead>
            <tr>
              <th>Item</th>
              <th>Correct Answer & Key Criteria</th>
              <th>Mark</th>
              <th>Assessment Objective</th>
              <th>Level of Demand</th>
              <th>Teacher Guidance</th>
            </tr>
          </thead>
          <tbody>
    `;

    examQuestions.forEach((q, idx) => {
      htmlContent += `
        <tr>
          <td><strong>${idx + 1}</strong></td>
          <td>${q.correctAnswer}</td>
          <td>[${q.marks}]</td>
          <td>${q.ao}</td>
          <td>${q.demand}</td>
          <td>${q.guidance || 'Award full marks for exact response or equivalent.'}</td>
        </tr>
      `;
    });

    htmlContent += `
          </tbody>
        </table>
      </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${examTitle.replace(/\s+/g, '_')}_Paper.doc`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg">
              <Microscope className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                SmartExam Studio <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">G5 SCIENCE DEEP-COVERAGE</span>
              </h1>
              <p className="text-xs text-slate-400">Comprehensive Lesson Question-Builder with Embedded Book Diagrams</p>
            </div>
          </div>

          {/* NAVIGATION TABS */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab("generator")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "generator" ? "bg-emerald-600 text-white shadow" : "text-slate-300 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Lesson Repository
            </button>
            <button
              onClick={() => setActiveTab("studio")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "studio" ? "bg-emerald-600 text-white shadow" : "text-slate-300 hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4" /> Exam Studio ({examQuestions.length})
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "preview" ? "bg-emerald-600 text-white shadow" : "text-slate-300 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4" /> Ministry Print & Export
            </button>
          </div>

          {/* DOCX EXPORT BUTTON */}
          <button
            onClick={handleExportWord}
            disabled={examQuestions.length === 0}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
          >
            <Download className="w-4 h-4" /> Export Word (.docx)
          </button>
        </div>
      </header>

      {/* BLUEPRINT SUMMARY BAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-500 uppercase tracking-wider">Exam Stats:</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded font-bold text-slate-700">{examQuestions.length} Questions</span>
            <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-bold">{totalMarks} Total Marks</span>
          </div>

          {/* ASSESSMENT OBJECTIVES RATIO */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Ministry Ratio Target:</span>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Knowledge: <strong>{aoCounts.knowledge.pct}%</strong> (Target: ~40%)
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                Application: <strong>{aoCounts.application.pct}%</strong> (Target: ~40%)
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                Reasoning: <strong>{aoCounts.reasoning.pct}%</strong> (Target: ~20%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto p-6 flex-1 w-full">
        {/* --- VIEW 1: LESSON REPOSITORY (COVER ALL DETAILS OF EACH LESSON) --- */}
        {activeTab === "generator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT SIDEBAR: LESSON NAVIGATOR */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" /> Select Curriculum Lesson
                </h3>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                  {COMPREHENSIVE_LESSONS.map((lesson) => {
                    const isSelected = lesson.id === selectedLessonId;
                    return (
                      <div
                        key={lesson.id}
                        onClick={() => setSelectedLessonId(lesson.id)}
                        className={`p-3 rounded-lg cursor-pointer border transition-all text-left ${
                          isSelected
                            ? "bg-emerald-50/80 border-emerald-500 shadow-sm"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-emerald-700">{lesson.unitTitle.split(':')[0]}</span>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {lesson.questions.length} Items
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                          {lesson.lessonNum} {lesson.lessonTitle}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{lesson.curriculumRef}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ALL QUESTIONS & DIAGRAMS FOR THE ACTIVE LESSON */}
            <div className="lg:col-span-8 space-y-6">
              {/* LESSON BANNER */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{currentLesson.unitTitle}</span>
                    <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                      Lesson {currentLesson.lessonNum}: {currentLesson.lessonTitle}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">{currentLesson.curriculumRef}</p>
                  </div>
                  <button
                    onClick={handleSelectAllFromLesson}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all self-start md:self-auto"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add All {currentLesson.questions.length} Questions to Test
                  </button>
                </div>

                <div className="mt-3 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                  <strong>Core Learning Focus:</strong> {currentLesson.summary}
                </div>

                {/* AUTHENTIC EMBEDDED DIAGRAM PREVIEW IF APPLICABLE */}
                {currentLesson.diagramKey && BOOK_DIAGRAMS[currentLesson.diagramKey] && (
                  <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-emerald-600" /> Real Book Diagram: {BOOK_DIAGRAMS[currentLesson.diagramKey].title}
                      </span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Vector High-Res</span>
                    </div>
                    {BOOK_DIAGRAMS[currentLesson.diagramKey].svg}
                    <p className="text-[11px] text-slate-500 mt-2 italic text-center">{BOOK_DIAGRAMS[currentLesson.diagramKey].caption}</p>
                  </div>
                )}
              </div>

              {/* QUESTIONS LIST COVERING MULTIPLE FORMATS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Available Detailed Items ({currentLesson.questions.length} formats covering all details)
                  </h3>
                  <span className="text-xs text-slate-500">Pick any combination to include in your paper</span>
                </div>

                {currentLesson.questions.map((q, idx) => {
                  const isAdded = examQuestions.some(item => item.id === q.id);
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isAdded ? "bg-emerald-50/40 border-emerald-400 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">Item #{idx + 1}</span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">{q.ao}</span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">{q.demand} Demand</span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-800">{q.type}</span>
                            <span className="text-[11px] font-bold text-emerald-700 ml-auto">[{q.marks} Mark{q.marks > 1 ? 's' : ''}]</span>
                          </div>

                          {/* QUESTION STEM */}
                          <div className="text-sm text-slate-900 font-medium whitespace-pre-wrap">{q.stem}</div>

                          {/* MCQ OPTIONS */}
                          {q.type === "MCQ" && q.options && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 pl-2">
                              {q.options.map((opt, oIdx) => (
                                <div key={oIdx} className="text-xs bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded flex items-center gap-2 text-slate-700">
                                  <span className="font-bold text-slate-400">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* MATCHING PAIRS IF ANY */}
                          {q.type === "Matching" && q.matchPairs && (
                            <div className="mt-2 space-y-1 pl-2">
                              {q.matchPairs.map((pair, pIdx) => (
                                <div key={pIdx} className="text-xs text-slate-600">
                                  • <span className="font-semibold text-slate-800">{pair.item}</span>: {pair.match}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* ANSWER & MARK SCHEME PREVIEW */}
                          <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-2">
                            <span className="font-bold text-emerald-700">Answer Key:</span>
                            <span className="bg-emerald-100/60 text-emerald-900 px-2 py-0.5 rounded">{q.correctAnswer}</span>
                          </div>
                        </div>

                        {/* TOGGLE BUTTON */}
                        <button
                          onClick={() => handleToggleQuestionInExam(q)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                            isAdded
                              ? "bg-red-100 text-red-700 hover:bg-red-200"
                              : "bg-emerald-600 text-white hover:bg-emerald-700 shadow"
                          }`}
                        >
                          {isAdded ? "Remove" : "+ Add to Test"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: EXAM STUDIO & CUSTOMIZER --- */}
        {activeTab === "studio" && (
          <div className="space-y-6">
            {/* TEST HEADER METADATA */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-600" /> Paper Metadata & School Identity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">School / Institution</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Assessment Title</label>
                  <input
                    type="text"
                    value={examTitle}
                    onChange={(e) => setExamTitle(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Grade / Level</label>
                  <input
                    type="text"
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* QUESTIONS EDITOR */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Test Questions Sequence ({examQuestions.length} Items Totaling {totalMarks} Marks)
                </h3>
                <button
                  onClick={() => setActiveTab("generator")}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add More Questions from Repository
                </button>
              </div>

              {examQuestions.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-xl border border-dashed border-slate-300">
                  <p className="text-sm text-slate-500 font-medium">No questions currently added.</p>
                  <button
                    onClick={() => setActiveTab("generator")}
                    className="mt-3 bg-emerald-600 text-white text-xs px-4 py-2 rounded-lg font-bold"
                  >
                    Open Lesson Repository
                  </button>
                </div>
              ) : (
                examQuestions.map((q, idx) => (
                  <div key={q.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm bg-slate-900 text-white px-2 py-0.5 rounded">Question {idx + 1}</span>
                        <select
                          value={q.ao}
                          onChange={(e) => handleUpdateQuestion(q.id, 'ao', e.target.value)}
                          className="text-xs p-1 rounded border border-slate-300 font-medium"
                        >
                          <option value="Knowledge">Knowledge (AO1)</option>
                          <option value="Application">Application (AO2)</option>
                          <option value="Reasoning">Reasoning (AO3)</option>
                        </select>
                        <select
                          value={q.demand}
                          onChange={(e) => handleUpdateQuestion(q.id, 'demand', e.target.value)}
                          className="text-xs p-1 rounded border border-slate-300 font-medium"
                        >
                          <option value="Low">Low Demand</option>
                          <option value="Medium">Medium Demand</option>
                          <option value="High">High Demand</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <label className="text-xs font-semibold text-slate-500">Marks:</label>
                          <input
                            type="number"
                            min="1"
                            max="6"
                            value={q.marks}
                            onChange={(e) => handleUpdateQuestion(q.id, 'marks', parseInt(e.target.value) || 1)}
                            className="w-12 text-xs p-1 rounded border border-slate-300 text-center font-bold"
                          />
                        </div>
                        <button
                          onClick={() => handleRemoveQuestion(q.id)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded"
                          title="Delete Question"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* EDITABLE STEM */}
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Question Prompt</label>
                      <textarea
                        value={q.stem}
                        onChange={(e) => handleUpdateQuestion(q.id, 'stem', e.target.value)}
                        rows={2}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 font-mono"
                      />
                    </div>

                    {/* EDITABLE ANSWER KEY */}
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Model Answer / Marking Scheme Criteria</label>
                      <input
                        type="text"
                        value={q.correctAnswer}
                        onChange={(e) => handleUpdateQuestion(q.id, 'correctAnswer', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-slate-300 font-mono text-emerald-800 bg-emerald-50/40"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* --- VIEW 3: MINISTRY PRINT & TEST PAPER PREVIEW --- */}
        {activeTab === "preview" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Ministry Standards & Cambridge Layout Preview</h3>
                <p className="text-xs text-slate-500">Official format with solid lines, square bracket marks [ ], and shading checkboxes</p>
              </div>
              <button
                onClick={handleExportWord}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow"
              >
                <Download className="w-4 h-4" /> Download Editable .doc File
              </button>
            </div>

            {/* SIMULATED EXAM SHEET (A4 WHITE PAPER) */}
            <div className="bg-white p-10 rounded-2xl border border-slate-300 shadow-lg max-w-4xl mx-auto text-slate-900 space-y-6">
              {/* FORMAL HEADER */}
              <div className="text-center border-b-2 border-slate-900 pb-4">
                <h2 className="text-base font-bold tracking-wide uppercase">{schoolName}</h2>
                <h3 className="text-sm font-semibold uppercase text-slate-700">{gradeLevel} Science Continuous Assessment</h3>
                <h4 className="text-sm font-bold text-slate-900 mt-1">{examTitle}</h4>
              </div>

              {/* STUDENT METADATA GRID */}
              <div className="grid grid-cols-3 gap-4 text-xs pb-3 border-b border-slate-400">
                <div><strong>Student Name:</strong> ________________________</div>
                <div><strong>Class:</strong> ___________</div>
                <div><strong>Date:</strong> _____________</div>
                <div><strong>Teacher:</strong> Suzan Altalla</div>
                <div><strong>Total Marks:</strong> [{totalMarks}]</div>
                <div><strong>Time Allowed:</strong> 45 min</div>
              </div>

              {/* QUESTIONS LISTING */}
              <div className="space-y-8 pt-2">
                {examQuestions.map((q, idx) => (
                  <div key={q.id} className="space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold">
                        {idx + 1}) <span className="font-normal">{q.stem}</span>
                      </span>
                      <span className="text-sm font-bold shrink-0 ml-4">[{q.marks}]</span>
                    </div>

                    {/* EMBEDDED DIAGRAM IF PRESENT */}
                    {q.diagramRef && BOOK_DIAGRAMS[q.diagramRef] && (
                      <div className="my-3 max-w-md mx-auto p-2 border border-slate-300 rounded bg-slate-50">
                        {BOOK_DIAGRAMS[q.diagramRef].svg}
                        <div className="text-[10px] text-center text-slate-500 mt-1 font-italic">
                          {BOOK_DIAGRAMS[q.diagramRef].title}
                        </div>
                      </div>
                    )}

                    {/* MCQ CHOICES (SHADE CHECKBOXES) */}
                    {q.type === "MCQ" && q.options && (
                      <div className="space-y-2 pl-4 pt-1">
                        <p className="text-[11px] italic text-slate-600">(Shade the shape [ ] corresponding to the correct answer)</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {q.options.map((opt, oIdx) => (
                            <div key={oIdx} className="text-xs flex items-center gap-2">
                              <span className="inline-block w-4 h-4 border-2 border-slate-800 rounded-sm"></span>
                              <strong className="text-slate-700">{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SOLID LINES FOR HANDWRITTEN ANSWERS (MINISTRY REQUIREMENT: NO DOTS) */}
                    {q.type !== "MCQ" && (
                      <div className="space-y-3 pt-2">
                        {Array.from({ length: q.marks === 1 ? 2 : q.marks === 2 ? 3 : 5 }).map((_, lIdx) => (
                          <div key={lIdx} className="border-b border-slate-400 h-5 w-full"></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* OFFICIAL SPECIFICATION & MARK SCHEME TABLE */}
              <div className="pt-10 border-t-2 border-slate-900">
                <h3 className="text-xs font-bold uppercase tracking-wider text-center mb-3">
                  Official Mark Scheme & Specification Blueprint (Teacher Reference)
                </h3>
                <table className="w-full text-[11px] border-collapse border border-slate-400 text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-400 p-1.5 font-bold">Item</th>
                      <th className="border border-slate-400 p-1.5 font-bold">Model Answer / Key</th>
                      <th className="border border-slate-400 p-1.5 font-bold">Mark</th>
                      <th className="border border-slate-400 p-1.5 font-bold">AO</th>
                      <th className="border border-slate-400 p-1.5 font-bold">Demand</th>
                      <th className="border border-slate-400 p-1.5 font-bold">Guidance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examQuestions.map((q, idx) => (
                      <tr key={q.id}>
                        <td className="border border-slate-400 p-1.5 font-bold">{idx + 1}</td>
                        <td className="border border-slate-400 p-1.5">{q.correctAnswer}</td>
                        <td className="border border-slate-400 p-1.5 font-bold">[{q.marks}]</td>
                        <td className="border border-slate-400 p-1.5">{q.ao}</td>
                        <td className="border border-slate-400 p-1.5">{q.demand}</td>
                        <td className="border border-slate-400 p-1.5 text-slate-600">{q.guidance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}