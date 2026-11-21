const EXAMS_DATA = {
  "2025": {
    "title": "Thanaweya Amma Official Exam Simulation — First Session 2025 (46 Questions)",
    "duration": 180,
    "totalMarks": 60,
    "mcqs": [
      {
        "q": "A first-series transition element with the highest atomic magnetic moment has compounds used as:",
        "opts": [
          "Sunscreen cosmetics",
          "Luminous paints",
          "Dry cell oxidizer",
          "Pigments and oxidizing agents (Cr₂O₃ / K₂Cr₂O₇)"
        ],
        "ans": 3,
        "exp": "Chromium (4s¹ 3d⁵) has 6 unpaired electrons (highest atomic magnetic moment in 3d series); its compounds include Cr₂O₃ and K₂Cr₂O₇.",
        "ch": 1
      },
      {
        "q": "Strong heating of iron (II) oxalate in air produces:",
        "opts": [
          "Fe₂O₃",
          "Fe₃O₄",
          "FeO only",
          "Metallic Fe"
        ],
        "ans": 0,
        "exp": "Iron (II) oxalate decomposes to FeO which immediately oxidizes in hot air to Fe₂O₃.",
        "ch": 1
      },
      {
        "q": "Which of the following ions is diamagnetic and colorless?",
        "opts": [
          "Cu²⁺",
          "Fe²⁺",
          "Ti⁴⁺",
          "Cr³⁺"
        ],
        "ans": 2,
        "exp": "Ti⁴⁺ has configuration [Ar] 3d⁰ with zero unpaired electrons, so it is diamagnetic and colorless.",
        "ch": 1
      },
      {
        "q": "Reducing Hematite (Fe₂O₃) at a temperature range of 230°C – 300°C produces:",
        "opts": [
          "FeO",
          "Fe(OH)₃",
          "Fe₃O₄",
          "Fe"
        ],
        "ans": 2,
        "exp": "Reduction of Fe₂O₃ between 230–300°C yields magnetic iron oxide Fe₃O₄.",
        "ch": 1
      },
      {
        "q": "Which reaction produces two different sulphur oxide gases?",
        "opts": [
          "FeO + dil. H₂SO₄",
          "Strong heating of iron (II) sulphate",
          "Fe + S",
          "Roasting siderite"
        ],
        "ans": 1,
        "exp": "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃.",
        "ch": 1
      },
      {
        "q": "Brass alloy (copper + zinc) is deposited onto iron handles by:",
        "opts": [
          "Roasting",
          "Electrodeposition",
          "Blast furnace reduction",
          "Dry distillation"
        ],
        "ans": 1,
        "exp": "Iron handles are coated with brass by electrodepositing Cu²⁺ and Zn²⁺ simultaneously.",
        "ch": 1
      },
      {
        "q": "Which element shows an anomaly in atomic mass across the first transition series?",
        "opts": [
          "Nickel (58.7)",
          "Cobalt (58.9)",
          "Manganese (54.9)",
          "Chromium (52)"
        ],
        "ans": 0,
        "exp": "Nickel has 5 stable isotopes whose average atomic mass is 58.7.",
        "ch": 1
      },
      {
        "q": "Which iron oxide reacts with both dilute and concentrated acids?",
        "opts": [
          "Fe₂O₃",
          "FeO",
          "Fe₃O₄",
          "TiO₂"
        ],
        "ans": 1,
        "exp": "FeO reacts with dilute and concentrated acids; Fe₂O₃ and Fe₃O₄ react only with hot concentrated acids.",
        "ch": 1
      },
      {
        "q": "AgNO₃ added to solutions (A) and (B) gave a yellow ppt in both; ppt (A) dissolved in NH₃ while (B) did not. The anions are:",
        "opts": [
          "A: Iodide, B: Phosphate",
          "A: Chloride, B: Bromide",
          "A: Phosphate, B: Iodide",
          "A: Sulphide, B: Sulphite"
        ],
        "ans": 2,
        "exp": "Ag₃PO₄ is yellow and soluble in ammonia, whereas AgI is yellow and insoluble in ammonia.",
        "ch": 2
      },
      {
        "q": "To distinguish between sodium carbonate and sodium bicarbonate, we use:",
        "opts": [
          "MgSO₄ solution",
          "NaOH",
          "AgNO₃",
          "Dilute HCl"
        ],
        "ans": 0,
        "exp": "With MgSO₄: carbonate gives white ppt on cold; bicarbonate gives white ppt after heating.",
        "ch": 2
      },
      {
        "q": "Adding excess NH₄OH to aluminum chloride solution produces:",
        "opts": [
          "A greenish-white ppt",
          "A ppt soluble in excess",
          "A reddish-brown ppt",
          "A gelatinous white ppt insoluble in excess"
        ],
        "ans": 3,
        "exp": "Al(OH)₃ dissolves in excess strong NaOH, NOT in excess weak NH₄OH.",
        "ch": 2
      },
      {
        "q": "An anion that evolves a colorless gas with dil. HCl turning reddish-brown at the tube mouth is:",
        "opts": [
          "Sulphite (SO₃²⁻)",
          "Carbonate (CO₃²⁻)",
          "Nitrate (NO₃⁻)",
          "Nitrite (NO₂⁻)"
        ],
        "ans": 3,
        "exp": "Nitrite yields colorless NO which oxidizes at the mouth to reddish-brown NO₂.",
        "ch": 2
      },
      {
        "q": "Which indicator is yellow in acidic, pale green in neutral, and blue in basic media?",
        "opts": [
          "Litmus",
          "Methyl orange",
          "Phenolphthalein",
          "Bromothymol blue"
        ],
        "ans": 3,
        "exp": "These are the standard colors of bromothymol blue.",
        "ch": 2
      },
      {
        "q": "A foul-smelling gas that blackens lead (II) acetate paper evolves when dil. HCl is added to:",
        "opts": [
          "Na₂SO₄",
          "Na₂S₂O₃",
          "Na₂SO₃",
          "Na₂S"
        ],
        "ans": 3,
        "exp": "H₂S gas from sulphide forms black PbS on lead (II) acetate paper.",
        "ch": 2
      },
      {
        "q": "Adding BaCl₂ to two salts gave a white ppt in both; the first dissolved in dil. HCl while the second did not. They are:",
        "opts": [
          "First: Phosphate, Second: Sulphate",
          "First: Chloride, Second: Bromide",
          "First: Sulphate, Second: Phosphate",
          "First: Carbonate, Second: Nitrate"
        ],
        "ans": 0,
        "exp": "Ba₃(PO₄)₂ dissolves in dil. HCl, while BaSO₄ does not.",
        "ch": 2
      },
      {
        "q": "Mixing equal volumes of 0.2 M HCl and 0.1 M NaOH produces a solution that is:",
        "opts": [
          "Neutral",
          "Colorless with methyl orange",
          "Acidic (turns litmus red)",
          "Basic (turns litmus blue)"
        ],
        "ans": 2,
        "exp": "Moles of HCl exceed moles of NaOH, leaving excess acid.",
        "ch": 2
      },
      {
        "q": "In the exothermic equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which factor increases Kp?",
        "opts": [
          "Increasing pressure",
          "Lowering temperature",
          "Adding O₂",
          "Adding V₂O₅"
        ],
        "ans": 1,
        "exp": "Only temperature changes Kp; cooling shifts an exothermic reaction forward, increasing Kp.",
        "ch": 3
      },
      {
        "q": "A 0.1 M weak acid solution has Ka = 1×10⁻⁵. Its pH equals:",
        "opts": [
          "11",
          "3",
          "1",
          "5"
        ],
        "ans": 1,
        "exp": "[H₃O⁺] = √(10⁻⁵ × 10⁻¹) = 10⁻³ M ⇐ pH = 3.",
        "ch": 3
      },
      {
        "q": "If the solubility of BaSO₄ is 10⁻⁵ mol/L, its Ksp equals:",
        "opts": [
          "4×10⁻¹⁵",
          "10⁻⁵",
          "2×10⁻¹⁰",
          "10⁻¹⁰"
        ],
        "ans": 3,
        "exp": "AB salt ⇐ Ksp = x² = (10⁻⁵)² = 10⁻¹⁰.",
        "ch": 3
      },
      {
        "q": "Which salt's aqueous solution turns red litmus paper blue?",
        "opts": [
          "K₂CO₃",
          "FeCl₃",
          "NH₄Cl",
          "NaCl"
        ],
        "ans": 0,
        "exp": "K₂CO₃ derives from strong base + weak acid, making its solution basic (pH > 7).",
        "ch": 3
      },
      {
        "q": "Increasing pressure on the equilibrium H₂(g) + I₂(g) ⇌ 2HI(g) causes the equilibrium to:",
        "opts": [
          "Shift backward",
          "Shift forward",
          "Increase Kc",
          "Remain unaffected"
        ],
        "ans": 3,
        "exp": "Equal gas moles on both sides (2 mol = 2 mol), so pressure has no effect.",
        "ch": 3
      },
      {
        "q": "In FeCl₃ + 3NH₄SCN ⇌ Fe(SCN)₃ + 3NH₄Cl, adding more NH₄Cl causes the blood-red color to:",
        "opts": [
          "Turn blue",
          "Stay unchanged",
          "Fade (become lighter)",
          "Intensify"
        ],
        "ans": 2,
        "exp": "Adding a product (NH₄Cl) shifts equilibrium backward, decreasing Fe(SCN)₃.",
        "ch": 3
      },
      {
        "q": "If pOH of an aqueous solution is 4 at 25°C, its pH and type are:",
        "opts": [
          "pH = 4 (Acidic)",
          "pH = 10 (Acidic)",
          "pH = 7 (Neutral)",
          "pH = 10 (Basic)"
        ],
        "ans": 3,
        "exp": "pH = 14 - 4 = 10 (> 7, therefore basic).",
        "ch": 3
      },
      {
        "q": "Ostwald's dilution law does NOT apply to HCl because HCl is:",
        "opts": [
          "A strong electrolyte (100% ionized)",
          "A non-conductor",
          "Sparingly soluble",
          "A weak electrolyte"
        ],
        "ans": 0,
        "exp": "Ostwald's law applies exclusively to weak electrolytes having ionic equilibrium.",
        "ch": 3
      },
      {
        "q": "The Ksp expression for Fe(OH)₃ in terms of solubility (x) is:",
        "opts": [
          "27x⁴",
          "108x⁵",
          "x²",
          "4x³"
        ],
        "ans": 0,
        "exp": "1 mol Fe³⁺ + 3 mol OH⁻ ⇐ Ksp = (x)(3x)³ = 27x⁴.",
        "ch": 3
      },
      {
        "q": "In a galvanic cell where E°red(A) = -0.76V and E°red(B) = +0.80V, the emf and anode are:",
        "opts": [
          "emf = +1.56 V, Anode = A",
          "emf = -1.56 V, Anode = A",
          "emf = +1.56 V, Anode = B",
          "emf = +0.04 V, Anode = B"
        ],
        "ans": 0,
        "exp": "Lower E°red (A) is the anode; emf = 0.80 - (-0.76) = +1.56 V.",
        "ch": 4
      },
      {
        "q": "Electricity required to deposit 10.8 g of silver (Ag = 108, monovalent) is:",
        "opts": [
          "0.5 F",
          "0.1 F",
          "1 F",
          "2 F"
        ],
        "ans": 1,
        "exp": "Moles = 10.8/108 = 0.1 mol; monovalent Ag⁺ requires 0.1 F.",
        "ch": 4
      },
      {
        "q": "During recharging of a lead-acid car battery:",
        "opts": [
          "Acid density increases and pH decreases",
          "Acid density decreases and pH increases",
          "Pb converts to PbSO₄",
          "It operates as a galvanic cell"
        ],
        "ans": 0,
        "exp": "Recharging regenerates H₂SO₄, raising density and acidity (lowering pH).",
        "ch": 4
      },
      {
        "q": "Which metal is used as a sacrificial anode to protect ship hulls and buried iron pipes?",
        "opts": [
          "Copper",
          "Magnesium",
          "Tin",
          "Silver"
        ],
        "ans": 1,
        "exp": "Magnesium is more active than iron and corrodes as the anode instead.",
        "ch": 4
      },
      {
        "q": "In a spacecraft fuel cell, the produced water vapor is utilized by:",
        "opts": [
          "Freezing it only",
          "Dissolving H₂SO₄",
          "Charging mercury cells",
          "Condensing it as drinking water for astronauts"
        ],
        "ans": 3,
        "exp": "High operating temperature vaporizes water which is condensed for drinking.",
        "ch": 4
      },
      {
        "q": "During electrolytic purification of copper, impurities that fall beneath the anode without oxidizing are:",
        "opts": [
          "Aluminum and magnesium",
          "Iron and zinc",
          "Gold and silver",
          "Sodium and potassium"
        ],
        "ans": 2,
        "exp": "Au and Ag have very low oxidation potentials and do not oxidize at Cu's potential.",
        "ch": 4
      },
      {
        "q": "The anhydrous electrolyte used in a lithium-ion battery is:",
        "opts": [
          "H₂SO₄",
          "LiPF₆",
          "KOH",
          "Na₂SO₄"
        ],
        "ans": 1,
        "exp": "Lithium hexafluorophosphate (LiPF₆).",
        "ch": 4
      },
      {
        "q": "Passing 193,000 C (2 Faradays) through CuSO₄ solution (Cu = 63.5) deposits a copper mass of:",
        "opts": [
          "31.75 g",
          "15.875 g",
          "63.5 g",
          "127 g"
        ],
        "ans": 2,
        "exp": "Cu²⁺ is divalent, so 2 F deposits 1 complete mole = 63.5 g.",
        "ch": 4
      },
      {
        "q": "When tin-plated iron (cathodic protection) is scratched, which corrodes first and rapidly?",
        "opts": [
          "Both equally",
          "Neither corrodes",
          "Tin",
          "Iron (acting as the more active anode)"
        ],
        "ans": 3,
        "exp": "Iron is more active than tin, so it becomes the anode and rusts faster.",
        "ch": 4
      },
      {
        "q": "Catalytic hydration of propene (CH₃-CH=CH₂) in acidic medium yields:",
        "opts": [
          "Propanal",
          "2-propanol (secondary alcohol)",
          "Propanoic acid",
          "1-propanol"
        ],
        "ans": 1,
        "exp": "By Markovnikov's Rule, H⁺ adds to terminal C and OH⁻ to middle C giving 2-propanol.",
        "ch": 5
      },
      {
        "q": "To distinguish practically between acetic acid and ethanol, we use:",
        "opts": [
          "Bromine water",
          "Sodium metal only",
          "NaCl solution",
          "Sodium carbonate (Na₂CO₃) solution"
        ],
        "ans": 3,
        "exp": "Acidity test: acetic acid causes effervescence & CO₂; ethanol does not react.",
        "ch": 5
      },
      {
        "q": "Ammonolysis (reaction with NH₃) of ethyl acetate yields:",
        "opts": [
          "Acetic acid + ammonia",
          "Acetamide + ethanol",
          "Benzamide + ethanol",
          "Sodium acetate"
        ],
        "ans": 1,
        "exp": "Ammonolysis of any ester yields the corresponding acid amide + alcohol.",
        "ch": 5
      },
      {
        "q": "Cyclic trimerization of ethyne in a red-hot nickel tube produces:",
        "opts": [
          "Toluene",
          "Ethene",
          "Cyclohexane",
          "Aromatic benzene (C₆H₆)"
        ],
        "ans": 3,
        "exp": "3C₂H₂ → C₆H₆.",
        "ch": 5
      },
      {
        "q": "Reacting salicylic acid with methanol in presence of conc. H₂SO₄ yields:",
        "opts": [
          "Dacron",
          "Oil of Wintergreen (methyl salicylate)",
          "Picric acid",
          "Aspirin"
        ],
        "ans": 1,
        "exp": "Esterification of salicylic acid's -COOH group with methanol yields Oil of Wintergreen.",
        "ch": 5
      },
      {
        "q": "Which alcohol does NOT oxidize under normal oxidizing conditions?",
        "opts": [
          "Ethanol",
          "Methanol",
          "2-propanol",
          "2-methyl-2-propanol (tertiary)"
        ],
        "ans": 3,
        "exp": "Tertiary alcohols have no hydrogen atoms attached to the carbinol carbon.",
        "ch": 5
      },
      {
        "q": "Heating ethanol with conc. H₂SO₄ at 140°C produces:",
        "opts": [
          "Ethyl hydrogen sulphate",
          "Diethyl ether",
          "Acetic acid",
          "Ethene gas"
        ],
        "ans": 1,
        "exp": "At 140°C, 1 H₂O is removed from 2 ethanol molecules forming diethyl ether.",
        "ch": 5
      },
      {
        "q": "Which substituent directs incoming groups on a benzene ring to the meta (m) position?",
        "opts": [
          "Methyl group (-CH₃)",
          "Hydroxyl group (-OH)",
          "Nitro group (-NO₂)",
          "Chloro group (-Cl)"
        ],
        "ans": 2,
        "exp": "-NO₂, -COOH, -CHO, and -CO- are meta directors.",
        "ch": 5
      },
      {
        "q": "Adding FeCl₃ solution to phenol produces:",
        "opts": [
          "A violet color",
          "A white precipitate",
          "A green color",
          "Effervescence"
        ],
        "ans": 0,
        "exp": "Phenol gives violet color with FeCl₃ and white ppt with bromine water.",
        "ch": 5
      },
      {
        "q": "The primary antifreeze compound used in car radiators is:",
        "opts": [
          "Ethanol",
          "Acetone",
          "Ethylene glycol",
          "Phenol"
        ],
        "ans": 2,
        "exp": "Ethylene glycol forms H-bonds with water preventing ice crystal formation.",
        "ch": 5
      }
    ],
    "essays": [
      {
        "q": "Essay Q45: Show by balanced chemical equations how to obtain iron (III) oxide from iron (II) oxalate, then explain how to distinguish practically between FeO and Fe₂O₃.",
        "model": "1) Heat iron (II) oxalate in absence of air: (COO)₂Fe → FeO + CO + CO₂.\n2) Oxidize FeO in hot air: 4FeO + O₂ → 2Fe₂O₃.\n3) Distinction: Add dil. HCl to each; FeO dissolves forming FeCl₂ + H₂O, whereas Fe₂O₃ does not react with dilute acids."
      },
      {
        "q": "Essay Q46: Show by balanced equations how to obtain acetic acid from calcium carbide, then state a practical test to distinguish acetic acid from ethanol.",
        "model": "1) Drip water on CaC₂: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.\n2) Catalytic hydration (40% H₂SO₄ / HgSO₄ / 60°C): C₂H₂ + H₂O → CH₃CHO.\n3) Oxidation with acidified KMnO₄: CH₃CHO + [O] → CH₃COOH.\n4) Distinction: Add Na₂CO₃ solution (acidity test); acetic acid causes effervescence & CO₂, ethanol does not react."
      }
    ]
  },
  "2024": {
    "title": "Thanaweya Amma Official Exam Simulation — First Session 2024 (46 Questions)",
    "duration": 180,
    "totalMarks": 60,
    "mcqs": [
      {
        "q": "Reducing Hematite (Fe₂O₃) at a temperature range of 230°C – 300°C produces:",
        "opts": [
          "Fe₃O₄",
          "Fe",
          "FeO",
          "Fe(OH)₃"
        ],
        "ans": 0,
        "exp": "Reduction of Fe₂O₃ between 230–300°C yields magnetic iron oxide Fe₃O₄.",
        "ch": 1
      },
      {
        "q": "Which reaction produces two different sulphur oxide gases?",
        "opts": [
          "Roasting siderite",
          "Fe + S",
          "Strong heating of iron (II) sulphate",
          "FeO + dil. H₂SO₄"
        ],
        "ans": 2,
        "exp": "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃.",
        "ch": 1
      },
      {
        "q": "Brass alloy (copper + zinc) is deposited onto iron handles by:",
        "opts": [
          "Electrodeposition",
          "Dry distillation",
          "Roasting",
          "Blast furnace reduction"
        ],
        "ans": 0,
        "exp": "Iron handles are coated with brass by electrodepositing Cu²⁺ and Zn²⁺ simultaneously.",
        "ch": 1
      },
      {
        "q": "Which element shows an anomaly in atomic mass across the first transition series?",
        "opts": [
          "Nickel (58.7)",
          "Cobalt (58.9)",
          "Chromium (52)",
          "Manganese (54.9)"
        ],
        "ans": 0,
        "exp": "Nickel has 5 stable isotopes whose average atomic mass is 58.7.",
        "ch": 1
      },
      {
        "q": "Which iron oxide reacts with both dilute and concentrated acids?",
        "opts": [
          "TiO₂",
          "FeO",
          "Fe₃O₄",
          "Fe₂O₃"
        ],
        "ans": 1,
        "exp": "FeO reacts with dilute and concentrated acids; Fe₂O₃ and Fe₃O₄ react only with hot concentrated acids.",
        "ch": 1
      },
      {
        "q": "The transition element alloyed with aluminum to manufacture MiG fighter jets is:",
        "opts": [
          "Scandium",
          "Manganese",
          "Titanium",
          "Vanadium"
        ],
        "ans": 0,
        "exp": "Sc + Al alloy is lightweight and extremely hard, ideal for MiG fighter jets.",
        "ch": 1
      },
      {
        "q": "Passivity caused by conc. HNO₃ on iron can be removed by:",
        "opts": [
          "NaOH solution",
          "Distilled water",
          "Abrasion or dilute HCl",
          "Cooling"
        ],
        "ans": 2,
        "exp": "The thin non-porous oxide layer is removed by abrasion or dilute HCl.",
        "ch": 1
      },
      {
        "q": "Which d-block element is NOT classified as a transition element?",
        "opts": [
          "Copper (29Cu)",
          "Zinc (30Zn)",
          "Gold (79Au)",
          "Silver (47Ag)"
        ],
        "ans": 1,
        "exp": "Zinc (Group IIB) has a completely filled 3d¹⁰ sublevel in both atomic and +2 ionic states.",
        "ch": 1
      },
      {
        "q": "An anion that evolves a colorless gas with dil. HCl turning reddish-brown at the tube mouth is:",
        "opts": [
          "Carbonate (CO₃²⁻)",
          "Sulphite (SO₃²⁻)",
          "Nitrite (NO₂⁻)",
          "Nitrate (NO₃⁻)"
        ],
        "ans": 2,
        "exp": "Nitrite yields colorless NO which oxidizes at the mouth to reddish-brown NO₂.",
        "ch": 2
      },
      {
        "q": "Which indicator is yellow in acidic, pale green in neutral, and blue in basic media?",
        "opts": [
          "Methyl orange",
          "Bromothymol blue",
          "Litmus",
          "Phenolphthalein"
        ],
        "ans": 1,
        "exp": "These are the standard colors of bromothymol blue.",
        "ch": 2
      },
      {
        "q": "A foul-smelling gas that blackens lead (II) acetate paper evolves when dil. HCl is added to:",
        "opts": [
          "Na₂S₂O₃",
          "Na₂SO₃",
          "Na₂S",
          "Na₂SO₄"
        ],
        "ans": 2,
        "exp": "H₂S gas from sulphide forms black PbS on lead (II) acetate paper.",
        "ch": 2
      },
      {
        "q": "Adding BaCl₂ to two salts gave a white ppt in both; the first dissolved in dil. HCl while the second did not. They are:",
        "opts": [
          "First: Chloride, Second: Bromide",
          "First: Sulphate, Second: Phosphate",
          "First: Carbonate, Second: Nitrate",
          "First: Phosphate, Second: Sulphate"
        ],
        "ans": 3,
        "exp": "Ba₃(PO₄)₂ dissolves in dil. HCl, while BaSO₄ does not.",
        "ch": 2
      },
      {
        "q": "Mixing equal volumes of 0.2 M HCl and 0.1 M NaOH produces a solution that is:",
        "opts": [
          "Basic (turns litmus blue)",
          "Colorless with methyl orange",
          "Acidic (turns litmus red)",
          "Neutral"
        ],
        "ans": 2,
        "exp": "Moles of HCl exceed moles of NaOH, leaving excess acid.",
        "ch": 2
      },
      {
        "q": "Passing H₂S gas into CuSO₄ solution acidified with dil. HCl produces:",
        "opts": [
          "White ppt",
          "Black ppt of CuS soluble in hot HNO₃",
          "Yellow ppt",
          "Reddish-brown ppt"
        ],
        "ans": 1,
        "exp": "Cu²⁺ (Group 2) precipitates as black CuS in acidic medium.",
        "ch": 2
      },
      {
        "q": "The chemical formula of the Brown Ring compound is:",
        "opts": [
          "FeSO₄·NO",
          "Fe(NO₃)₂",
          "FeSO₄·NO₂",
          "Fe₂(SO₄)₃·NO"
        ],
        "ans": 0,
        "exp": "NO combines with excess freshly prepared FeSO₄ forming FeSO₄·NO.",
        "ch": 2
      },
      {
        "q": "Titrating 25 mL of NaOH against 0.1 M H₂SO₄ consumed 10 mL of acid. Molarity of NaOH is:",
        "opts": [
          "0.20 M",
          "0.08 M",
          "0.16 M",
          "0.04 M"
        ],
        "ans": 1,
        "exp": "2NaOH + H₂SO₄ ⇐ (0.1×10)/1 = (Mb×25)/2 ⇐ Mb = 2/25 = 0.08 M.",
        "ch": 2
      },
      {
        "q": "Which salt's aqueous solution turns red litmus paper blue?",
        "opts": [
          "NaCl",
          "NH₄Cl",
          "K₂CO₃",
          "FeCl₃"
        ],
        "ans": 2,
        "exp": "K₂CO₃ derives from strong base + weak acid, making its solution basic (pH > 7).",
        "ch": 3
      },
      {
        "q": "Increasing pressure on the equilibrium H₂(g) + I₂(g) ⇌ 2HI(g) causes the equilibrium to:",
        "opts": [
          "Shift forward",
          "Remain unaffected",
          "Shift backward",
          "Increase Kc"
        ],
        "ans": 1,
        "exp": "Equal gas moles on both sides (2 mol = 2 mol), so pressure has no effect.",
        "ch": 3
      },
      {
        "q": "In FeCl₃ + 3NH₄SCN ⇌ Fe(SCN)₃ + 3NH₄Cl, adding more NH₄Cl causes the blood-red color to:",
        "opts": [
          "Intensify",
          "Turn blue",
          "Stay unchanged",
          "Fade (become lighter)"
        ],
        "ans": 3,
        "exp": "Adding a product (NH₄Cl) shifts equilibrium backward, decreasing Fe(SCN)₃.",
        "ch": 3
      },
      {
        "q": "If pOH of an aqueous solution is 4 at 25°C, its pH and type are:",
        "opts": [
          "pH = 4 (Acidic)",
          "pH = 10 (Basic)",
          "pH = 10 (Acidic)",
          "pH = 7 (Neutral)"
        ],
        "ans": 1,
        "exp": "pH = 14 - 4 = 10 (> 7, therefore basic).",
        "ch": 3
      },
      {
        "q": "Ostwald's dilution law does NOT apply to HCl because HCl is:",
        "opts": [
          "A non-conductor",
          "Sparingly soluble",
          "A strong electrolyte (100% ionized)",
          "A weak electrolyte"
        ],
        "ans": 2,
        "exp": "Ostwald's law applies exclusively to weak electrolytes having ionic equilibrium.",
        "ch": 3
      },
      {
        "q": "The Ksp expression for Fe(OH)₃ in terms of solubility (x) is:",
        "opts": [
          "108x⁵",
          "27x⁴",
          "x²",
          "4x³"
        ],
        "ans": 1,
        "exp": "1 mol Fe³⁺ + 3 mol OH⁻ ⇐ Ksp = (x)(3x)³ = 27x⁴.",
        "ch": 3
      },
      {
        "q": "Placing a flask of reddish-brown NO₂ in a cooling mixture (2NO₂ ⇌ N₂O₄ + Heat) makes the color:",
        "opts": [
          "Turn green",
          "Become darker brown",
          "Stay unchanged",
          "Fade gradually until colorless"
        ],
        "ans": 3,
        "exp": "Cooling shifts the exothermic reaction forward forming colorless N₂O₄.",
        "ch": 3
      },
      {
        "q": "A very large Kc value (4.4 × 10³²) indicates that:",
        "opts": [
          "The backward reaction dominates",
          "Reactants greatly exceed products",
          "The forward reaction dominates nearly to completion",
          "The reaction has stopped"
        ],
        "ans": 2,
        "exp": "Very large Kc means the numerator (products) is vastly larger than the denominator.",
        "ch": 3
      },
      {
        "q": "Adding a catalyst to a reversible reaction at equilibrium:",
        "opts": [
          "Increases Kc",
          "Lowers Ea and increases forward & backward rates equally",
          "Shifts equilibrium forward only",
          "Changes ΔH"
        ],
        "ans": 1,
        "exp": "Catalysts speed up reaching equilibrium without altering its position or Kc.",
        "ch": 3
      },
      {
        "q": "Which metal is used as a sacrificial anode to protect ship hulls and buried iron pipes?",
        "opts": [
          "Silver",
          "Copper",
          "Tin",
          "Magnesium"
        ],
        "ans": 3,
        "exp": "Magnesium is more active than iron and corrodes as the anode instead.",
        "ch": 4
      },
      {
        "q": "In a spacecraft fuel cell, the produced water vapor is utilized by:",
        "opts": [
          "Charging mercury cells",
          "Condensing it as drinking water for astronauts",
          "Freezing it only",
          "Dissolving H₂SO₄"
        ],
        "ans": 1,
        "exp": "High operating temperature vaporizes water which is condensed for drinking.",
        "ch": 4
      },
      {
        "q": "During electrolytic purification of copper, impurities that fall beneath the anode without oxidizing are:",
        "opts": [
          "Gold and silver",
          "Iron and zinc",
          "Aluminum and magnesium",
          "Sodium and potassium"
        ],
        "ans": 0,
        "exp": "Au and Ag have very low oxidation potentials and do not oxidize at Cu's potential.",
        "ch": 4
      },
      {
        "q": "The anhydrous electrolyte used in a lithium-ion battery is:",
        "opts": [
          "KOH",
          "LiPF₆",
          "H₂SO₄",
          "Na₂SO₄"
        ],
        "ans": 1,
        "exp": "Lithium hexafluorophosphate (LiPF₆).",
        "ch": 4
      },
      {
        "q": "Passing 193,000 C (2 Faradays) through CuSO₄ solution (Cu = 63.5) deposits a copper mass of:",
        "opts": [
          "63.5 g",
          "31.75 g",
          "127 g",
          "15.875 g"
        ],
        "ans": 0,
        "exp": "Cu²⁺ is divalent, so 2 F deposits 1 complete mole = 63.5 g.",
        "ch": 4
      },
      {
        "q": "When tin-plated iron (cathodic protection) is scratched, which corrodes first and rapidly?",
        "opts": [
          "Both equally",
          "Tin",
          "Neither corrodes",
          "Iron (acting as the more active anode)"
        ],
        "ans": 3,
        "exp": "Iron is more active than tin, so it becomes the anode and rusts faster.",
        "ch": 4
      },
      {
        "q": "Carbon anodes must be replaced periodically in aluminum extraction because they:",
        "opts": [
          "Get coated with aluminum",
          "Freeze at low temperature",
          "Dissolve in water",
          "React with evolved O₂ forming CO and CO₂"
        ],
        "ans": 3,
        "exp": "Evolved O₂ erodes hot graphite anodes forming CO and CO₂.",
        "ch": 4
      },
      {
        "q": "The function of a salt bridge in a galvanic cell is to:",
        "opts": [
          "Generate extra electrons",
          "Oxidize the cathode",
          "Neutralize excess ions and connect half-cells indirectly",
          "Block current flow"
        ],
        "ans": 2,
        "exp": "Prevents charge buildup so redox reactions and current continue.",
        "ch": 4
      },
      {
        "q": "The standard emf of a primary mercury cell is:",
        "opts": [
          "1.35 V",
          "1.10 V",
          "1.23 V",
          "3.00 V"
        ],
        "ans": 0,
        "exp": "Mercury cell = 1.35 V (Fuel = 1.23 V, Daniell = 1.10 V, Li-ion = 3 V).",
        "ch": 4
      },
      {
        "q": "Cyclic trimerization of ethyne in a red-hot nickel tube produces:",
        "opts": [
          "Ethene",
          "Aromatic benzene (C₆H₆)",
          "Cyclohexane",
          "Toluene"
        ],
        "ans": 1,
        "exp": "3C₂H₂ → C₆H₆.",
        "ch": 5
      },
      {
        "q": "Reacting salicylic acid with methanol in presence of conc. H₂SO₄ yields:",
        "opts": [
          "Picric acid",
          "Aspirin",
          "Oil of Wintergreen (methyl salicylate)",
          "Dacron"
        ],
        "ans": 2,
        "exp": "Esterification of salicylic acid's -COOH group with methanol yields Oil of Wintergreen.",
        "ch": 5
      },
      {
        "q": "Which alcohol does NOT oxidize under normal oxidizing conditions?",
        "opts": [
          "2-propanol",
          "2-methyl-2-propanol (tertiary)",
          "Ethanol",
          "Methanol"
        ],
        "ans": 1,
        "exp": "Tertiary alcohols have no hydrogen atoms attached to the carbinol carbon.",
        "ch": 5
      },
      {
        "q": "Heating ethanol with conc. H₂SO₄ at 140°C produces:",
        "opts": [
          "Acetic acid",
          "Diethyl ether",
          "Ethyl hydrogen sulphate",
          "Ethene gas"
        ],
        "ans": 1,
        "exp": "At 140°C, 1 H₂O is removed from 2 ethanol molecules forming diethyl ether.",
        "ch": 5
      },
      {
        "q": "Which substituent directs incoming groups on a benzene ring to the meta (m) position?",
        "opts": [
          "Nitro group (-NO₂)",
          "Methyl group (-CH₃)",
          "Hydroxyl group (-OH)",
          "Chloro group (-Cl)"
        ],
        "ans": 0,
        "exp": "-NO₂, -COOH, -CHO, and -CO- are meta directors.",
        "ch": 5
      },
      {
        "q": "Adding FeCl₃ solution to phenol produces:",
        "opts": [
          "A green color",
          "Effervescence",
          "A white precipitate",
          "A violet color"
        ],
        "ans": 3,
        "exp": "Phenol gives violet color with FeCl₃ and white ppt with bromine water.",
        "ch": 5
      },
      {
        "q": "The primary antifreeze compound used in car radiators is:",
        "opts": [
          "Ethylene glycol",
          "Ethanol",
          "Phenol",
          "Acetone"
        ],
        "ans": 0,
        "exp": "Ethylene glycol forms H-bonds with water preventing ice crystal formation.",
        "ch": 5
      },
      {
        "q": "Methane is prepared in the laboratory by dry distillation of anhydrous sodium acetate with:",
        "opts": [
          "Conc. H₂SO₄",
          "Boiling water",
          "Calcium carbide",
          "Soda lime (NaOH + CaO)"
        ],
        "ans": 3,
        "exp": "CH₃COONa + NaOH —(CaO/Δ)→ CH₄ + Na₂CO₃.",
        "ch": 5
      },
      {
        "q": "Catalytic hydration of ethyne (40% H₂SO₄ / HgSO₄ / 60°C) produces:",
        "opts": [
          "Acetone",
          "Ethanol",
          "Acetaldehyde (ethanal)",
          "Formic acid"
        ],
        "ans": 2,
        "exp": "Unstable vinyl alcohol forms and rearranges to acetaldehyde.",
        "ch": 5
      },
      {
        "q": "Chlorinating benzene in the presence of UV sunlight produces:",
        "opts": [
          "Gammexane C₆H₆Cl₆ (addition reaction)",
          "Dichlorobenzene",
          "Chlorobenzene",
          "Picric acid"
        ],
        "ans": 0,
        "exp": "In UV light, benzene undergoes addition yielding the insecticide Gammexane.",
        "ch": 5
      }
    ],
    "essays": [
      {
        "q": "Essay Q45: 2 g of impure NaCl was dissolved in water and excess AgNO₃ was added, precipitating 4.628 g of AgCl (Ag=108, Cl=35.5, Na=23). Calculate the percentage of chlorine in the sample.",
        "model": "1) Equation: NaCl + AgNO₃ → NaNO₃ + AgCl↓.\n2) Molar mass of AgCl = 108 + 35.5 = 143.5 g/mol (contains 35.5 g Cl).\n3) Mass of Cl = (4.628 × 35.5) / 143.5 = 1.145 g.\n4) % Cl = (1.145 / 2) × 100 = 57.25%."
      },
      {
        "q": "Essay Q46: Compare cathodic protection (tin plating) vs. anodic protection (zinc galvanization) when iron's coating is scratched, stating which is better and why.",
        "model": "1) Cathodic cover (Sn < Fe): when scratched, iron acts as anode and rusts faster than bare iron.\n2) Anodic cover (Zn > Fe): when scratched, zinc acts as anode and corrodes completely before iron begins to rust.\n3) Therefore, anodic protection (galvanization) is far superior."
      }
    ]
  },
  "2023": {
    "title": "Thanaweya Amma Official Exam Simulation — First Session 2023 (46 Questions)",
    "duration": 180,
    "totalMarks": 60,
    "mcqs": [
      {
        "q": "Which element shows an anomaly in atomic mass across the first transition series?",
        "opts": [
          "Nickel (58.7)",
          "Chromium (52)",
          "Manganese (54.9)",
          "Cobalt (58.9)"
        ],
        "ans": 0,
        "exp": "Nickel has 5 stable isotopes whose average atomic mass is 58.7.",
        "ch": 1
      },
      {
        "q": "Which iron oxide reacts with both dilute and concentrated acids?",
        "opts": [
          "TiO₂",
          "FeO",
          "Fe₂O₃",
          "Fe₃O₄"
        ],
        "ans": 1,
        "exp": "FeO reacts with dilute and concentrated acids; Fe₂O₃ and Fe₃O₄ react only with hot concentrated acids.",
        "ch": 1
      },
      {
        "q": "The transition element alloyed with aluminum to manufacture MiG fighter jets is:",
        "opts": [
          "Manganese",
          "Titanium",
          "Vanadium",
          "Scandium"
        ],
        "ans": 3,
        "exp": "Sc + Al alloy is lightweight and extremely hard, ideal for MiG fighter jets.",
        "ch": 1
      },
      {
        "q": "Passivity caused by conc. HNO₃ on iron can be removed by:",
        "opts": [
          "NaOH solution",
          "Distilled water",
          "Abrasion or dilute HCl",
          "Cooling"
        ],
        "ans": 2,
        "exp": "The thin non-porous oxide layer is removed by abrasion or dilute HCl.",
        "ch": 1
      },
      {
        "q": "Which d-block element is NOT classified as a transition element?",
        "opts": [
          "Silver (47Ag)",
          "Zinc (30Zn)",
          "Gold (79Au)",
          "Copper (29Cu)"
        ],
        "ans": 1,
        "exp": "Zinc (Group IIB) has a completely filled 3d¹⁰ sublevel in both atomic and +2 ionic states.",
        "ch": 1
      },
      {
        "q": "The reducing agent inside the Midrex Furnace is:",
        "opts": [
          "Water gas (CO + H₂)",
          "Pure methane",
          "Coke",
          "CO gas only"
        ],
        "ans": 0,
        "exp": "Midrex furnace uses water gas (CO + H₂) produced from natural gas (methane).",
        "ch": 1
      },
      {
        "q": "Cementite (Fe₃C) is classified as:",
        "opts": [
          "A substitutional alloy",
          "A liquid alloy",
          "An interstitial alloy",
          "An intermetallic alloy"
        ],
        "ans": 3,
        "exp": "It forms by chemical combination not obeying normal valency laws.",
        "ch": 1
      },
      {
        "q": "Passing steam over red-hot iron at 500°C produces:",
        "opts": [
          "Fe₃O₄ + H₂",
          "Fe₂O₃ + H₂",
          "Fe(OH)₃",
          "FeO + H₂"
        ],
        "ans": 0,
        "exp": "3Fe + 4H₂O(v) —(500°C)→ Fe₃O₄ + 4H₂.",
        "ch": 1
      },
      {
        "q": "Adding BaCl₂ to two salts gave a white ppt in both; the first dissolved in dil. HCl while the second did not. They are:",
        "opts": [
          "First: Carbonate, Second: Nitrate",
          "First: Phosphate, Second: Sulphate",
          "First: Sulphate, Second: Phosphate",
          "First: Chloride, Second: Bromide"
        ],
        "ans": 1,
        "exp": "Ba₃(PO₄)₂ dissolves in dil. HCl, while BaSO₄ does not.",
        "ch": 2
      },
      {
        "q": "Mixing equal volumes of 0.2 M HCl and 0.1 M NaOH produces a solution that is:",
        "opts": [
          "Neutral",
          "Basic (turns litmus blue)",
          "Colorless with methyl orange",
          "Acidic (turns litmus red)"
        ],
        "ans": 3,
        "exp": "Moles of HCl exceed moles of NaOH, leaving excess acid.",
        "ch": 2
      },
      {
        "q": "Passing H₂S gas into CuSO₄ solution acidified with dil. HCl produces:",
        "opts": [
          "Reddish-brown ppt",
          "Yellow ppt",
          "White ppt",
          "Black ppt of CuS soluble in hot HNO₃"
        ],
        "ans": 3,
        "exp": "Cu²⁺ (Group 2) precipitates as black CuS in acidic medium.",
        "ch": 2
      },
      {
        "q": "The chemical formula of the Brown Ring compound is:",
        "opts": [
          "Fe₂(SO₄)₃·NO",
          "FeSO₄·NO",
          "Fe(NO₃)₂",
          "FeSO₄·NO₂"
        ],
        "ans": 1,
        "exp": "NO combines with excess freshly prepared FeSO₄ forming FeSO₄·NO.",
        "ch": 2
      },
      {
        "q": "Titrating 25 mL of NaOH against 0.1 M H₂SO₄ consumed 10 mL of acid. Molarity of NaOH is:",
        "opts": [
          "0.08 M",
          "0.04 M",
          "0.16 M",
          "0.20 M"
        ],
        "ans": 0,
        "exp": "2NaOH + H₂SO₄ ⇐ (0.1×10)/1 = (Mb×25)/2 ⇐ Mb = 2/25 = 0.08 M.",
        "ch": 2
      },
      {
        "q": "Volatile calcium cations impart what color to a Bunsen flame?",
        "opts": [
          "Golden yellow",
          "Blue",
          "Brick-red",
          "Green"
        ],
        "ans": 2,
        "exp": "Dry flame test for Ca²⁺ gives a characteristic brick-red color.",
        "ch": 2
      },
      {
        "q": "Adding dil. HCl to sodium thiosulphate evolves SO₂ gas and produces:",
        "opts": [
          "Black precipitate",
          "Yellow suspended sulphur",
          "White fumes",
          "Violet vapors"
        ],
        "ans": 1,
        "exp": "Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓.",
        "ch": 2
      },
      {
        "q": "Ashless filter paper is used in gravimetric precipitation because it:",
        "opts": [
          "Absorbs water only",
          "Changes precipitate color",
          "Prevents precipitate dissolution",
          "Burns completely leaving no ash to affect precipitate mass"
        ],
        "ans": 3,
        "exp": "Ensures accurate weighing of the pure precipitate after ignition.",
        "ch": 2
      },
      {
        "q": "If pOH of an aqueous solution is 4 at 25°C, its pH and type are:",
        "opts": [
          "pH = 10 (Basic)",
          "pH = 4 (Acidic)",
          "pH = 7 (Neutral)",
          "pH = 10 (Acidic)"
        ],
        "ans": 0,
        "exp": "pH = 14 - 4 = 10 (> 7, therefore basic).",
        "ch": 3
      },
      {
        "q": "Ostwald's dilution law does NOT apply to HCl because HCl is:",
        "opts": [
          "Sparingly soluble",
          "A non-conductor",
          "A weak electrolyte",
          "A strong electrolyte (100% ionized)"
        ],
        "ans": 3,
        "exp": "Ostwald's law applies exclusively to weak electrolytes having ionic equilibrium.",
        "ch": 3
      },
      {
        "q": "The Ksp expression for Fe(OH)₃ in terms of solubility (x) is:",
        "opts": [
          "108x⁵",
          "x²",
          "4x³",
          "27x⁴"
        ],
        "ans": 3,
        "exp": "1 mol Fe³⁺ + 3 mol OH⁻ ⇐ Ksp = (x)(3x)³ = 27x⁴.",
        "ch": 3
      },
      {
        "q": "Placing a flask of reddish-brown NO₂ in a cooling mixture (2NO₂ ⇌ N₂O₄ + Heat) makes the color:",
        "opts": [
          "Stay unchanged",
          "Fade gradually until colorless",
          "Become darker brown",
          "Turn green"
        ],
        "ans": 1,
        "exp": "Cooling shifts the exothermic reaction forward forming colorless N₂O₄.",
        "ch": 3
      },
      {
        "q": "A very large Kc value (4.4 × 10³²) indicates that:",
        "opts": [
          "The reaction has stopped",
          "The backward reaction dominates",
          "The forward reaction dominates nearly to completion",
          "Reactants greatly exceed products"
        ],
        "ans": 2,
        "exp": "Very large Kc means the numerator (products) is vastly larger than the denominator.",
        "ch": 3
      },
      {
        "q": "Adding a catalyst to a reversible reaction at equilibrium:",
        "opts": [
          "Changes ΔH",
          "Increases Kc",
          "Shifts equilibrium forward only",
          "Lowers Ea and increases forward & backward rates equally"
        ],
        "ans": 3,
        "exp": "Catalysts speed up reaching equilibrium without altering its position or Kc.",
        "ch": 3
      },
      {
        "q": "An aqueous solution of ammonium chloride (NH₄Cl) turns methyl orange:",
        "opts": [
          "Red (acidic)",
          "Yellow (basic)",
          "Orange (neutral)",
          "Blue"
        ],
        "ans": 0,
        "exp": "NH₄Cl comes from strong acid + weak base, so it is acidic and turns methyl orange red.",
        "ch": 3
      },
      {
        "q": "Which of the following is a complete (irreversible) reaction?",
        "opts": [
          "N₂ + 3H₂ ⇌ 2NH₃ (closed vessel)",
          "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑",
          "H₂ + I₂ ⇌ 2HI (closed vessel)",
          "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O"
        ],
        "ans": 1,
        "exp": "Escaping H₂ gas in an open vessel prevents the reverse reaction.",
        "ch": 3
      },
      {
        "q": "The H⁺ proton from acid ionization bonds with a water molecule via a:",
        "opts": [
          "Hydrogen bond only",
          "Coordinate bond forming hydronium ion H₃O⁺",
          "Metallic bond",
          "Ionic bond"
        ],
        "ans": 1,
        "exp": "H⁺ accepts a lone pair of electrons from water's oxygen atom.",
        "ch": 3
      },
      {
        "q": "The anhydrous electrolyte used in a lithium-ion battery is:",
        "opts": [
          "Na₂SO₄",
          "KOH",
          "LiPF₆",
          "H₂SO₄"
        ],
        "ans": 2,
        "exp": "Lithium hexafluorophosphate (LiPF₆).",
        "ch": 4
      },
      {
        "q": "Passing 193,000 C (2 Faradays) through CuSO₄ solution (Cu = 63.5) deposits a copper mass of:",
        "opts": [
          "31.75 g",
          "63.5 g",
          "15.875 g",
          "127 g"
        ],
        "ans": 1,
        "exp": "Cu²⁺ is divalent, so 2 F deposits 1 complete mole = 63.5 g.",
        "ch": 4
      },
      {
        "q": "When tin-plated iron (cathodic protection) is scratched, which corrodes first and rapidly?",
        "opts": [
          "Neither corrodes",
          "Both equally",
          "Tin",
          "Iron (acting as the more active anode)"
        ],
        "ans": 3,
        "exp": "Iron is more active than tin, so it becomes the anode and rusts faster.",
        "ch": 4
      },
      {
        "q": "Carbon anodes must be replaced periodically in aluminum extraction because they:",
        "opts": [
          "React with evolved O₂ forming CO and CO₂",
          "Dissolve in water",
          "Get coated with aluminum",
          "Freeze at low temperature"
        ],
        "ans": 0,
        "exp": "Evolved O₂ erodes hot graphite anodes forming CO and CO₂.",
        "ch": 4
      },
      {
        "q": "The function of a salt bridge in a galvanic cell is to:",
        "opts": [
          "Neutralize excess ions and connect half-cells indirectly",
          "Block current flow",
          "Generate extra electrons",
          "Oxidize the cathode"
        ],
        "ans": 0,
        "exp": "Prevents charge buildup so redox reactions and current continue.",
        "ch": 4
      },
      {
        "q": "The standard emf of a primary mercury cell is:",
        "opts": [
          "1.23 V",
          "1.35 V",
          "1.10 V",
          "3.00 V"
        ],
        "ans": 1,
        "exp": "Mercury cell = 1.35 V (Fuel = 1.23 V, Daniell = 1.10 V, Li-ion = 3 V).",
        "ch": 4
      },
      {
        "q": "Electricity required to deposit 9 g of aluminum (Al = 27, trivalent) is:",
        "opts": [
          "0.5 Faraday",
          "2 Faradays",
          "3 Faradays",
          "1 Faraday (96500 C)"
        ],
        "ans": 3,
        "exp": "Equivalent mass of Al = 27/3 = 9 g, which requires 1 Faraday.",
        "ch": 4
      },
      {
        "q": "When electroplating a copper fork with silver, the fork is connected to:",
        "opts": [
          "The negative terminal (cathode)",
          "The salt bridge",
          "Not connected",
          "The positive terminal (anode)"
        ],
        "ans": 0,
        "exp": "The object to be plated always serves as the cathode.",
        "ch": 4
      },
      {
        "q": "A lead-acid battery is fully charged when the hydrometer reads an acid density of:",
        "opts": [
          "1.00 g/cm³",
          "0.80 g/cm³",
          "Below 1.20 g/cm³",
          "1.28 – 1.30 g/cm³"
        ],
        "ans": 3,
        "exp": "Density below 1.20 g/cm³ indicates the battery needs recharging.",
        "ch": 4
      },
      {
        "q": "Heating ethanol with conc. H₂SO₄ at 140°C produces:",
        "opts": [
          "Diethyl ether",
          "Acetic acid",
          "Ethyl hydrogen sulphate",
          "Ethene gas"
        ],
        "ans": 0,
        "exp": "At 140°C, 1 H₂O is removed from 2 ethanol molecules forming diethyl ether.",
        "ch": 5
      },
      {
        "q": "Which substituent directs incoming groups on a benzene ring to the meta (m) position?",
        "opts": [
          "Hydroxyl group (-OH)",
          "Chloro group (-Cl)",
          "Nitro group (-NO₂)",
          "Methyl group (-CH₃)"
        ],
        "ans": 2,
        "exp": "-NO₂, -COOH, -CHO, and -CO- are meta directors.",
        "ch": 5
      },
      {
        "q": "Adding FeCl₃ solution to phenol produces:",
        "opts": [
          "A white precipitate",
          "A violet color",
          "A green color",
          "Effervescence"
        ],
        "ans": 1,
        "exp": "Phenol gives violet color with FeCl₃ and white ppt with bromine water.",
        "ch": 5
      },
      {
        "q": "The primary antifreeze compound used in car radiators is:",
        "opts": [
          "Ethylene glycol",
          "Ethanol",
          "Phenol",
          "Acetone"
        ],
        "ans": 0,
        "exp": "Ethylene glycol forms H-bonds with water preventing ice crystal formation.",
        "ch": 5
      },
      {
        "q": "Methane is prepared in the laboratory by dry distillation of anhydrous sodium acetate with:",
        "opts": [
          "Calcium carbide",
          "Soda lime (NaOH + CaO)",
          "Boiling water",
          "Conc. H₂SO₄"
        ],
        "ans": 1,
        "exp": "CH₃COONa + NaOH —(CaO/Δ)→ CH₄ + Na₂CO₃.",
        "ch": 5
      },
      {
        "q": "Catalytic hydration of ethyne (40% H₂SO₄ / HgSO₄ / 60°C) produces:",
        "opts": [
          "Formic acid",
          "Ethanol",
          "Acetaldehyde (ethanal)",
          "Acetone"
        ],
        "ans": 2,
        "exp": "Unstable vinyl alcohol forms and rearranges to acetaldehyde.",
        "ch": 5
      },
      {
        "q": "Chlorinating benzene in the presence of UV sunlight produces:",
        "opts": [
          "Gammexane C₆H₆Cl₆ (addition reaction)",
          "Dichlorobenzene",
          "Chlorobenzene",
          "Picric acid"
        ],
        "ans": 0,
        "exp": "In UV light, benzene undergoes addition yielding the insecticide Gammexane.",
        "ch": 5
      },
      {
        "q": "Adding 2 moles of HBr to 1 mole of ethyne produces:",
        "opts": [
          "Bromoethene only",
          "Ethane",
          "1,2-dibromoethane",
          "1,1-dibromoethane"
        ],
        "ans": 3,
        "exp": "The second step follows Markovnikov's Rule yielding 1,1-dibromoethane.",
        "ch": 5
      },
      {
        "q": "The scientist who disproved Vital Force Theory by synthesizing Urea was:",
        "opts": [
          "Friedel",
          "Wöhler (1828)",
          "Kekulé",
          "Berzelius"
        ],
        "ans": 1,
        "exp": "Wöhler synthesized Urea by heating ammonium cyanate.",
        "ch": 5
      },
      {
        "q": "The most reactive cycloalkane due to its small 60° bond angle is:",
        "opts": [
          "Cyclopentane",
          "Cyclopropane (C₃H₆)",
          "Cyclohexane",
          "Cyclobutane"
        ],
        "ans": 1,
        "exp": "The 60° angle causes weak orbital overlap and easy bond cleavage.",
        "ch": 5
      }
    ],
    "essays": [
      {
        "q": "Essay Q45: In the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ), explain the effect of: (a) increasing pressure, (b) raising temperature, (c) adding a catalyst on NH₃ yield and Kp.",
        "model": "a) Increasing pressure: shifts forward toward fewer gas moles (2 mol), increasing NH₃ yield; Kp stays constant.\nb) Raising temperature: shifts backward (endothermic), decreasing NH₃ yield and decreasing Kp.\nc) Catalyst: does not change NH₃ yield or Kp; only accelerates reaching equilibrium."
      },
      {
        "q": "Essay Q46: Show by equations how to obtain benzene from phenol, then convert benzene into Gammexane and chlorobenzene.",
        "model": "1) Reduce phenol with hot Zn dust: C₆H₅OH + Zn —(Δ)→ C₆H₆ + ZnO.\n2) Gammexane (UV addition): C₆H₆ + 3Cl₂ —(UV)→ C₆H₆Cl₆.\n3) Chlorobenzene (FeCl₃ substitution): C₆H₆ + Cl₂ —(FeCl₃)→ C₆H₅Cl + HCl."
      }
    ]
  },
  "2022": {
    "title": "Thanaweya Amma Official Exam Simulation — First Session 2022 (46 Questions)",
    "duration": 180,
    "totalMarks": 60,
    "mcqs": [
      {
        "q": "Passivity caused by conc. HNO₃ on iron can be removed by:",
        "opts": [
          "Distilled water",
          "Abrasion or dilute HCl",
          "NaOH solution",
          "Cooling"
        ],
        "ans": 1,
        "exp": "The thin non-porous oxide layer is removed by abrasion or dilute HCl.",
        "ch": 1
      },
      {
        "q": "Which d-block element is NOT classified as a transition element?",
        "opts": [
          "Gold (79Au)",
          "Copper (29Cu)",
          "Silver (47Ag)",
          "Zinc (30Zn)"
        ],
        "ans": 3,
        "exp": "Zinc (Group IIB) has a completely filled 3d¹⁰ sublevel in both atomic and +2 ionic states.",
        "ch": 1
      },
      {
        "q": "The reducing agent inside the Midrex Furnace is:",
        "opts": [
          "Coke",
          "CO gas only",
          "Water gas (CO + H₂)",
          "Pure methane"
        ],
        "ans": 2,
        "exp": "Midrex furnace uses water gas (CO + H₂) produced from natural gas (methane).",
        "ch": 1
      },
      {
        "q": "Cementite (Fe₃C) is classified as:",
        "opts": [
          "A liquid alloy",
          "An intermetallic alloy",
          "An interstitial alloy",
          "A substitutional alloy"
        ],
        "ans": 1,
        "exp": "It forms by chemical combination not obeying normal valency laws.",
        "ch": 1
      },
      {
        "q": "Passing steam over red-hot iron at 500°C produces:",
        "opts": [
          "Fe₂O₃ + H₂",
          "Fe(OH)₃",
          "FeO + H₂",
          "Fe₃O₄ + H₂"
        ],
        "ans": 3,
        "exp": "3Fe + 4H₂O(v) —(500°C)→ Fe₃O₄ + 4H₂.",
        "ch": 1
      },
      {
        "q": "The radioactive isotope used in food preservation and treating malignant tumors is:",
        "opts": [
          "Chromium-52",
          "Iron-56",
          "Cobalt-60",
          "Nickel-58"
        ],
        "ans": 2,
        "exp": "Cobalt-60 emits highly penetrating gamma rays.",
        "ch": 1
      },
      {
        "q": "Which compound acts as a catalyst in manufacturing H₂SO₄ by the Contact Process?",
        "opts": [
          "MnO₂",
          "Cr₂O₃",
          "ZnO",
          "V₂O₅"
        ],
        "ans": 3,
        "exp": "Vanadium pentoxide (V₂O₅) catalyzes the Contact Process and superconducting magnets.",
        "ch": 1
      },
      {
        "q": "Oxidizing Fe²⁺ to Fe³⁺ is easy whereas oxidizing Mn²⁺ to Mn³⁺ is difficult because:",
        "opts": [
          "Mn³⁺ is half-filled",
          "Both Fe³⁺ and Mn²⁺ have a stable half-filled 3d⁵ sublevel",
          "Fe²⁺ is completely filled",
          "Iron is less active"
        ],
        "ans": 1,
        "exp": "Maximum stability occurs at the half-filled 3d⁵ configuration in Fe³⁺ and Mn²⁺.",
        "ch": 1
      },
      {
        "q": "The chemical formula of the Brown Ring compound is:",
        "opts": [
          "Fe(NO₃)₂",
          "Fe₂(SO₄)₃·NO",
          "FeSO₄·NO",
          "FeSO₄·NO₂"
        ],
        "ans": 2,
        "exp": "NO combines with excess freshly prepared FeSO₄ forming FeSO₄·NO.",
        "ch": 2
      },
      {
        "q": "Titrating 25 mL of NaOH against 0.1 M H₂SO₄ consumed 10 mL of acid. Molarity of NaOH is:",
        "opts": [
          "0.16 M",
          "0.04 M",
          "0.08 M",
          "0.20 M"
        ],
        "ans": 2,
        "exp": "2NaOH + H₂SO₄ ⇐ (0.1×10)/1 = (Mb×25)/2 ⇐ Mb = 2/25 = 0.08 M.",
        "ch": 2
      },
      {
        "q": "Volatile calcium cations impart what color to a Bunsen flame?",
        "opts": [
          "Green",
          "Blue",
          "Brick-red",
          "Golden yellow"
        ],
        "ans": 2,
        "exp": "Dry flame test for Ca²⁺ gives a characteristic brick-red color.",
        "ch": 2
      },
      {
        "q": "Adding dil. HCl to sodium thiosulphate evolves SO₂ gas and produces:",
        "opts": [
          "White fumes",
          "Black precipitate",
          "Violet vapors",
          "Yellow suspended sulphur"
        ],
        "ans": 3,
        "exp": "Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓.",
        "ch": 2
      },
      {
        "q": "Ashless filter paper is used in gravimetric precipitation because it:",
        "opts": [
          "Changes precipitate color",
          "Prevents precipitate dissolution",
          "Burns completely leaving no ash to affect precipitate mass",
          "Absorbs water only"
        ],
        "ans": 2,
        "exp": "Ensures accurate weighing of the pure precipitate after ignition.",
        "ch": 2
      },
      {
        "q": "20 mL of 0.1 M HCl neutralized 0.08 g of a NaOH sample (Molar mass 40). Sample purity is:",
        "opts": [
          "80%",
          "40%",
          "100%",
          "50%"
        ],
        "ans": 2,
        "exp": "Moles HCl = 0.002 = Moles NaOH ⇐ Mass NaOH = 0.002×40 = 0.08 g ⇐ 100% pure.",
        "ch": 2
      },
      {
        "q": "Violet vapors that turn starch paper blue evolve upon heating conc. H₂SO₄ with:",
        "opts": [
          "Sodium chloride (NaCl)",
          "Potassium iodide (KI)",
          "Sodium nitrate (NaNO₃)",
          "Potassium bromide (KBr)"
        ],
        "ans": 1,
        "exp": "HI rapidly oxidizes with conc. H₂SO₄ liberating violet I₂ vapors.",
        "ch": 2
      },
      {
        "q": "AgNO₃ added to solutions (A) and (B) gave a yellow ppt in both; ppt (A) dissolved in NH₃ while (B) did not. The anions are:",
        "opts": [
          "A: Sulphide, B: Sulphite",
          "A: Chloride, B: Bromide",
          "A: Iodide, B: Phosphate",
          "A: Phosphate, B: Iodide"
        ],
        "ans": 3,
        "exp": "Ag₃PO₄ is yellow and soluble in ammonia, whereas AgI is yellow and insoluble in ammonia.",
        "ch": 2
      },
      {
        "q": "Placing a flask of reddish-brown NO₂ in a cooling mixture (2NO₂ ⇌ N₂O₄ + Heat) makes the color:",
        "opts": [
          "Become darker brown",
          "Turn green",
          "Fade gradually until colorless",
          "Stay unchanged"
        ],
        "ans": 2,
        "exp": "Cooling shifts the exothermic reaction forward forming colorless N₂O₄.",
        "ch": 3
      },
      {
        "q": "A very large Kc value (4.4 × 10³²) indicates that:",
        "opts": [
          "The backward reaction dominates",
          "The reaction has stopped",
          "The forward reaction dominates nearly to completion",
          "Reactants greatly exceed products"
        ],
        "ans": 2,
        "exp": "Very large Kc means the numerator (products) is vastly larger than the denominator.",
        "ch": 3
      },
      {
        "q": "Adding a catalyst to a reversible reaction at equilibrium:",
        "opts": [
          "Lowers Ea and increases forward & backward rates equally",
          "Changes ΔH",
          "Increases Kc",
          "Shifts equilibrium forward only"
        ],
        "ans": 0,
        "exp": "Catalysts speed up reaching equilibrium without altering its position or Kc.",
        "ch": 3
      },
      {
        "q": "An aqueous solution of ammonium chloride (NH₄Cl) turns methyl orange:",
        "opts": [
          "Orange (neutral)",
          "Yellow (basic)",
          "Blue",
          "Red (acidic)"
        ],
        "ans": 3,
        "exp": "NH₄Cl comes from strong acid + weak base, so it is acidic and turns methyl orange red.",
        "ch": 3
      },
      {
        "q": "Which of the following is a complete (irreversible) reaction?",
        "opts": [
          "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
          "H₂ + I₂ ⇌ 2HI (closed vessel)",
          "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑",
          "N₂ + 3H₂ ⇌ 2NH₃ (closed vessel)"
        ],
        "ans": 2,
        "exp": "Escaping H₂ gas in an open vessel prevents the reverse reaction.",
        "ch": 3
      },
      {
        "q": "The H⁺ proton from acid ionization bonds with a water molecule via a:",
        "opts": [
          "Metallic bond",
          "Ionic bond",
          "Coordinate bond forming hydronium ion H₃O⁺",
          "Hydrogen bond only"
        ],
        "ans": 2,
        "exp": "H⁺ accepts a lone pair of electrons from water's oxygen atom.",
        "ch": 3
      },
      {
        "q": "For H₂ + I₂ ⇌ 2HI, Kc = 50 at 448°C and Kc = 67 at 850°C. This reaction is:",
        "opts": [
          "Thermally neutral",
          "Endothermic",
          "Exothermic",
          "Unaffected by heat"
        ],
        "ans": 1,
        "exp": "Raising temperature increased Kc (shifted forward), so it is endothermic.",
        "ch": 3
      },
      {
        "q": "Total moles of ions produced from dissolving 1 mol of Ca₃(PO₄)₂ is:",
        "opts": [
          "5 moles of ions (Ksp = 108x⁵)",
          "2 moles",
          "3 moles",
          "4 moles"
        ],
        "ans": 0,
        "exp": "3Ca²⁺ + 2PO₄³⁻ = 5 mol ions, giving Ksp = (3x)³(2x)² = 108x⁵.",
        "ch": 3
      },
      {
        "q": "If a weak acid has α = 0.01 and Ca = 0.1 M, its Ka equals:",
        "opts": [
          "1×10⁻⁵",
          "1×10⁻⁶",
          "1×10⁻³",
          "1×10⁻⁴"
        ],
        "ans": 0,
        "exp": "Ka = α² × Ca = (10⁻²)² × 10⁻¹ = 10⁻⁵.",
        "ch": 3
      },
      {
        "q": "Carbon anodes must be replaced periodically in aluminum extraction because they:",
        "opts": [
          "React with evolved O₂ forming CO and CO₂",
          "Freeze at low temperature",
          "Get coated with aluminum",
          "Dissolve in water"
        ],
        "ans": 0,
        "exp": "Evolved O₂ erodes hot graphite anodes forming CO and CO₂.",
        "ch": 4
      },
      {
        "q": "The function of a salt bridge in a galvanic cell is to:",
        "opts": [
          "Neutralize excess ions and connect half-cells indirectly",
          "Oxidize the cathode",
          "Generate extra electrons",
          "Block current flow"
        ],
        "ans": 0,
        "exp": "Prevents charge buildup so redox reactions and current continue.",
        "ch": 4
      },
      {
        "q": "The standard emf of a primary mercury cell is:",
        "opts": [
          "1.10 V",
          "1.23 V",
          "3.00 V",
          "1.35 V"
        ],
        "ans": 3,
        "exp": "Mercury cell = 1.35 V (Fuel = 1.23 V, Daniell = 1.10 V, Li-ion = 3 V).",
        "ch": 4
      },
      {
        "q": "Electricity required to deposit 9 g of aluminum (Al = 27, trivalent) is:",
        "opts": [
          "1 Faraday (96500 C)",
          "3 Faradays",
          "2 Faradays",
          "0.5 Faraday"
        ],
        "ans": 0,
        "exp": "Equivalent mass of Al = 27/3 = 9 g, which requires 1 Faraday.",
        "ch": 4
      },
      {
        "q": "When electroplating a copper fork with silver, the fork is connected to:",
        "opts": [
          "Not connected",
          "The salt bridge",
          "The negative terminal (cathode)",
          "The positive terminal (anode)"
        ],
        "ans": 2,
        "exp": "The object to be plated always serves as the cathode.",
        "ch": 4
      },
      {
        "q": "A lead-acid battery is fully charged when the hydrometer reads an acid density of:",
        "opts": [
          "0.80 g/cm³",
          "1.00 g/cm³",
          "1.28 – 1.30 g/cm³",
          "Below 1.20 g/cm³"
        ],
        "ans": 2,
        "exp": "Density below 1.20 g/cm³ indicates the battery needs recharging.",
        "ch": 4
      },
      {
        "q": "In electrolysis of CuCl₂ solution, the products at cathode and anode respectively are:",
        "opts": [
          "Cl₂ at cathode and Cu at anode",
          "Solid copper at cathode and Cl₂ gas at anode",
          "Cu and H₂",
          "H₂ and O₂"
        ],
        "ans": 1,
        "exp": "Cu²⁺ reduces at cathode (-); Cl⁻ oxidizes at anode (+).",
        "ch": 4
      },
      {
        "q": "During iron rusting, the iron piece itself acts as:",
        "opts": [
          "Both the anode and the external circuit",
          "The cathode only",
          "The electrolyte",
          "The salt bridge"
        ],
        "ans": 0,
        "exp": "Iron oxidizes and conducts electrons to carbon impurities (cathode).",
        "ch": 4
      },
      {
        "q": "Passing the same quantity of electricity through cells in series deposits masses proportional to their:",
        "opts": [
          "Densities",
          "Melting points",
          "Gram equivalent masses (Faraday's 2nd Law)",
          "Atomic numbers"
        ],
        "ans": 2,
        "exp": "Statement of Faraday's Second Law of Electrolysis.",
        "ch": 4
      },
      {
        "q": "The primary antifreeze compound used in car radiators is:",
        "opts": [
          "Phenol",
          "Ethanol",
          "Ethylene glycol",
          "Acetone"
        ],
        "ans": 2,
        "exp": "Ethylene glycol forms H-bonds with water preventing ice crystal formation.",
        "ch": 5
      },
      {
        "q": "Methane is prepared in the laboratory by dry distillation of anhydrous sodium acetate with:",
        "opts": [
          "Soda lime (NaOH + CaO)",
          "Conc. H₂SO₄",
          "Boiling water",
          "Calcium carbide"
        ],
        "ans": 0,
        "exp": "CH₃COONa + NaOH —(CaO/Δ)→ CH₄ + Na₂CO₃.",
        "ch": 5
      },
      {
        "q": "Catalytic hydration of ethyne (40% H₂SO₄ / HgSO₄ / 60°C) produces:",
        "opts": [
          "Formic acid",
          "Ethanol",
          "Acetone",
          "Acetaldehyde (ethanal)"
        ],
        "ans": 3,
        "exp": "Unstable vinyl alcohol forms and rearranges to acetaldehyde.",
        "ch": 5
      },
      {
        "q": "Chlorinating benzene in the presence of UV sunlight produces:",
        "opts": [
          "Chlorobenzene",
          "Gammexane C₆H₆Cl₆ (addition reaction)",
          "Picric acid",
          "Dichlorobenzene"
        ],
        "ans": 1,
        "exp": "In UV light, benzene undergoes addition yielding the insecticide Gammexane.",
        "ch": 5
      },
      {
        "q": "Adding 2 moles of HBr to 1 mole of ethyne produces:",
        "opts": [
          "1,2-dibromoethane",
          "Ethane",
          "1,1-dibromoethane",
          "Bromoethene only"
        ],
        "ans": 2,
        "exp": "The second step follows Markovnikov's Rule yielding 1,1-dibromoethane.",
        "ch": 5
      },
      {
        "q": "The scientist who disproved Vital Force Theory by synthesizing Urea was:",
        "opts": [
          "Friedel",
          "Berzelius",
          "Wöhler (1828)",
          "Kekulé"
        ],
        "ans": 2,
        "exp": "Wöhler synthesized Urea by heating ammonium cyanate.",
        "ch": 5
      },
      {
        "q": "The most reactive cycloalkane due to its small 60° bond angle is:",
        "opts": [
          "Cyclohexane",
          "Cyclobutane",
          "Cyclopropane (C₃H₆)",
          "Cyclopentane"
        ],
        "ans": 2,
        "exp": "The 60° angle causes weak orbital overlap and easy bond cleavage.",
        "ch": 5
      },
      {
        "q": "The polymer used for non-stick cookware coating and surgical threads is:",
        "opts": [
          "Polypropylene",
          "PVC",
          "Polyethylene",
          "Teflon (polytetrafluoroethene)"
        ],
        "ans": 3,
        "exp": "Teflon resists heat, is non-stick, insulating, and chemically inert.",
        "ch": 5
      },
      {
        "q": "Complete oxidation of ethanol with acidified K₂Cr₂O₇ produces:",
        "opts": [
          "Methane",
          "Ethanoic (acetic) acid",
          "Acetone",
          "Diethyl ether"
        ],
        "ans": 1,
        "exp": "Primary alcohols oxidize to aldehydes then to carboxylic acids.",
        "ch": 5
      },
      {
        "q": "Which compound has the highest boiling point (among similar molar masses)?",
        "opts": [
          "Dimethyl ether",
          "Propanol",
          "Butane",
          "Ethanoic acid (2 H-bonds per dimer)"
        ],
        "ans": 3,
        "exp": "Carboxylic acids form two hydrogen bonds between every pair of molecules.",
        "ch": 5
      }
    ],
    "essays": [
      {
        "q": "Essay Q45: Calculate the mass of copper deposited at the cathode when a current of 10 A passes for 30 minutes through CuSO₄ solution (Cu = 63.5).",
        "model": "1) t = 30 × 60 = 1800 s.\n2) Q = I × t = 10 × 1800 = 18000 C.\n3) Equivalent mass of Cu = 63.5 / 2 = 31.75 g.\n4) Deposited mass = (18000 × 31.75) / 96500 = 5.92 g."
      },
      {
        "q": "Essay Q46: How do you distinguish using one reagent only between: (a) sodium phosphate and sodium sulphate, (b) sodium nitrite and sodium nitrate?",
        "model": "a) Add BaCl₂ then dil. HCl: white ppt in both; barium phosphate dissolves in dil. HCl while barium sulphate does not.\nb) Add dil. HCl to solid salt: reacts with nitrite evolving colorless NO turning reddish-brown at mouth; no reaction with nitrate."
      }
    ]
  },
  "2021": {
    "title": "Thanaweya Amma Official Exam Simulation — First Session 2021 (46 Questions)",
    "duration": 180,
    "totalMarks": 60,
    "mcqs": [
      {
        "q": "Cementite (Fe₃C) is classified as:",
        "opts": [
          "A liquid alloy",
          "A substitutional alloy",
          "An interstitial alloy",
          "An intermetallic alloy"
        ],
        "ans": 3,
        "exp": "It forms by chemical combination not obeying normal valency laws.",
        "ch": 1
      },
      {
        "q": "Passing steam over red-hot iron at 500°C produces:",
        "opts": [
          "Fe(OH)₃",
          "Fe₂O₃ + H₂",
          "FeO + H₂",
          "Fe₃O₄ + H₂"
        ],
        "ans": 3,
        "exp": "3Fe + 4H₂O(v) —(500°C)→ Fe₃O₄ + 4H₂.",
        "ch": 1
      },
      {
        "q": "The radioactive isotope used in food preservation and treating malignant tumors is:",
        "opts": [
          "Nickel-58",
          "Chromium-52",
          "Cobalt-60",
          "Iron-56"
        ],
        "ans": 2,
        "exp": "Cobalt-60 emits highly penetrating gamma rays.",
        "ch": 1
      },
      {
        "q": "Which compound acts as a catalyst in manufacturing H₂SO₄ by the Contact Process?",
        "opts": [
          "ZnO",
          "MnO₂",
          "V₂O₅",
          "Cr₂O₃"
        ],
        "ans": 2,
        "exp": "Vanadium pentoxide (V₂O₅) catalyzes the Contact Process and superconducting magnets.",
        "ch": 1
      },
      {
        "q": "Oxidizing Fe²⁺ to Fe³⁺ is easy whereas oxidizing Mn²⁺ to Mn³⁺ is difficult because:",
        "opts": [
          "Iron is less active",
          "Fe²⁺ is completely filled",
          "Both Fe³⁺ and Mn²⁺ have a stable half-filled 3d⁵ sublevel",
          "Mn³⁺ is half-filled"
        ],
        "ans": 2,
        "exp": "Maximum stability occurs at the half-filled 3d⁵ configuration in Fe³⁺ and Mn²⁺.",
        "ch": 1
      },
      {
        "q": "The highest oxidation state in the first transition series occurs in:",
        "opts": [
          "Chromium (+6)",
          "Iron (+6)",
          "Manganese (+7)",
          "Vanadium (+5)"
        ],
        "ans": 2,
        "exp": "Manganese in Group VIIB reaches the maximum oxidation state of +7.",
        "ch": 1
      },
      {
        "q": "A first-series transition element with the highest atomic magnetic moment has compounds used as:",
        "opts": [
          "Sunscreen cosmetics",
          "Pigments and oxidizing agents (Cr₂O₃ / K₂Cr₂O₇)",
          "Luminous paints",
          "Dry cell oxidizer"
        ],
        "ans": 1,
        "exp": "Chromium (4s¹ 3d⁵) has 6 unpaired electrons (highest atomic magnetic moment in 3d series); its compounds include Cr₂O₃ and K₂Cr₂O₇.",
        "ch": 1
      },
      {
        "q": "Strong heating of iron (II) oxalate in air produces:",
        "opts": [
          "FeO only",
          "Fe₃O₄",
          "Fe₂O₃",
          "Metallic Fe"
        ],
        "ans": 2,
        "exp": "Iron (II) oxalate decomposes to FeO which immediately oxidizes in hot air to Fe₂O₃.",
        "ch": 1
      },
      {
        "q": "Adding dil. HCl to sodium thiosulphate evolves SO₂ gas and produces:",
        "opts": [
          "Yellow suspended sulphur",
          "Violet vapors",
          "White fumes",
          "Black precipitate"
        ],
        "ans": 0,
        "exp": "Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓.",
        "ch": 2
      },
      {
        "q": "Ashless filter paper is used in gravimetric precipitation because it:",
        "opts": [
          "Burns completely leaving no ash to affect precipitate mass",
          "Prevents precipitate dissolution",
          "Changes precipitate color",
          "Absorbs water only"
        ],
        "ans": 0,
        "exp": "Ensures accurate weighing of the pure precipitate after ignition.",
        "ch": 2
      },
      {
        "q": "20 mL of 0.1 M HCl neutralized 0.08 g of a NaOH sample (Molar mass 40). Sample purity is:",
        "opts": [
          "40%",
          "80%",
          "50%",
          "100%"
        ],
        "ans": 3,
        "exp": "Moles HCl = 0.002 = Moles NaOH ⇐ Mass NaOH = 0.002×40 = 0.08 g ⇐ 100% pure.",
        "ch": 2
      },
      {
        "q": "Violet vapors that turn starch paper blue evolve upon heating conc. H₂SO₄ with:",
        "opts": [
          "Sodium nitrate (NaNO₃)",
          "Sodium chloride (NaCl)",
          "Potassium bromide (KBr)",
          "Potassium iodide (KI)"
        ],
        "ans": 3,
        "exp": "HI rapidly oxidizes with conc. H₂SO₄ liberating violet I₂ vapors.",
        "ch": 2
      },
      {
        "q": "AgNO₃ added to solutions (A) and (B) gave a yellow ppt in both; ppt (A) dissolved in NH₃ while (B) did not. The anions are:",
        "opts": [
          "A: Iodide, B: Phosphate",
          "A: Phosphate, B: Iodide",
          "A: Sulphide, B: Sulphite",
          "A: Chloride, B: Bromide"
        ],
        "ans": 1,
        "exp": "Ag₃PO₄ is yellow and soluble in ammonia, whereas AgI is yellow and insoluble in ammonia.",
        "ch": 2
      },
      {
        "q": "To distinguish between sodium carbonate and sodium bicarbonate, we use:",
        "opts": [
          "AgNO₃",
          "Dilute HCl",
          "MgSO₄ solution",
          "NaOH"
        ],
        "ans": 2,
        "exp": "With MgSO₄: carbonate gives white ppt on cold; bicarbonate gives white ppt after heating.",
        "ch": 2
      },
      {
        "q": "Adding excess NH₄OH to aluminum chloride solution produces:",
        "opts": [
          "A gelatinous white ppt insoluble in excess",
          "A greenish-white ppt",
          "A reddish-brown ppt",
          "A ppt soluble in excess"
        ],
        "ans": 0,
        "exp": "Al(OH)₃ dissolves in excess strong NaOH, NOT in excess weak NH₄OH.",
        "ch": 2
      },
      {
        "q": "An anion that evolves a colorless gas with dil. HCl turning reddish-brown at the tube mouth is:",
        "opts": [
          "Nitrite (NO₂⁻)",
          "Nitrate (NO₃⁻)",
          "Sulphite (SO₃²⁻)",
          "Carbonate (CO₃²⁻)"
        ],
        "ans": 0,
        "exp": "Nitrite yields colorless NO which oxidizes at the mouth to reddish-brown NO₂.",
        "ch": 2
      },
      {
        "q": "An aqueous solution of ammonium chloride (NH₄Cl) turns methyl orange:",
        "opts": [
          "Red (acidic)",
          "Yellow (basic)",
          "Orange (neutral)",
          "Blue"
        ],
        "ans": 0,
        "exp": "NH₄Cl comes from strong acid + weak base, so it is acidic and turns methyl orange red.",
        "ch": 3
      },
      {
        "q": "Which of the following is a complete (irreversible) reaction?",
        "opts": [
          "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
          "N₂ + 3H₂ ⇌ 2NH₃ (closed vessel)",
          "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)↑",
          "H₂ + I₂ ⇌ 2HI (closed vessel)"
        ],
        "ans": 2,
        "exp": "Escaping H₂ gas in an open vessel prevents the reverse reaction.",
        "ch": 3
      },
      {
        "q": "The H⁺ proton from acid ionization bonds with a water molecule via a:",
        "opts": [
          "Hydrogen bond only",
          "Coordinate bond forming hydronium ion H₃O⁺",
          "Metallic bond",
          "Ionic bond"
        ],
        "ans": 1,
        "exp": "H⁺ accepts a lone pair of electrons from water's oxygen atom.",
        "ch": 3
      },
      {
        "q": "For H₂ + I₂ ⇌ 2HI, Kc = 50 at 448°C and Kc = 67 at 850°C. This reaction is:",
        "opts": [
          "Endothermic",
          "Unaffected by heat",
          "Thermally neutral",
          "Exothermic"
        ],
        "ans": 0,
        "exp": "Raising temperature increased Kc (shifted forward), so it is endothermic.",
        "ch": 3
      },
      {
        "q": "Total moles of ions produced from dissolving 1 mol of Ca₃(PO₄)₂ is:",
        "opts": [
          "3 moles",
          "2 moles",
          "4 moles",
          "5 moles of ions (Ksp = 108x⁵)"
        ],
        "ans": 3,
        "exp": "3Ca²⁺ + 2PO₄³⁻ = 5 mol ions, giving Ksp = (3x)³(2x)² = 108x⁵.",
        "ch": 3
      },
      {
        "q": "If a weak acid has α = 0.01 and Ca = 0.1 M, its Ka equals:",
        "opts": [
          "1×10⁻³",
          "1×10⁻⁵",
          "1×10⁻⁶",
          "1×10⁻⁴"
        ],
        "ans": 1,
        "exp": "Ka = α² × Ca = (10⁻²)² × 10⁻¹ = 10⁻⁵.",
        "ch": 3
      },
      {
        "q": "In the exothermic equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which factor increases Kp?",
        "opts": [
          "Increasing pressure",
          "Adding O₂",
          "Lowering temperature",
          "Adding V₂O₅"
        ],
        "ans": 2,
        "exp": "Only temperature changes Kp; cooling shifts an exothermic reaction forward, increasing Kp.",
        "ch": 3
      },
      {
        "q": "A 0.1 M weak acid solution has Ka = 1×10⁻⁵. Its pH equals:",
        "opts": [
          "1",
          "11",
          "3",
          "5"
        ],
        "ans": 2,
        "exp": "[H₃O⁺] = √(10⁻⁵ × 10⁻¹) = 10⁻³ M ⇐ pH = 3.",
        "ch": 3
      },
      {
        "q": "If the solubility of BaSO₄ is 10⁻⁵ mol/L, its Ksp equals:",
        "opts": [
          "2×10⁻¹⁰",
          "10⁻¹⁰",
          "10⁻⁵",
          "4×10⁻¹⁵"
        ],
        "ans": 1,
        "exp": "AB salt ⇐ Ksp = x² = (10⁻⁵)² = 10⁻¹⁰.",
        "ch": 3
      },
      {
        "q": "Electricity required to deposit 9 g of aluminum (Al = 27, trivalent) is:",
        "opts": [
          "0.5 Faraday",
          "1 Faraday (96500 C)",
          "3 Faradays",
          "2 Faradays"
        ],
        "ans": 1,
        "exp": "Equivalent mass of Al = 27/3 = 9 g, which requires 1 Faraday.",
        "ch": 4
      },
      {
        "q": "When electroplating a copper fork with silver, the fork is connected to:",
        "opts": [
          "Not connected",
          "The negative terminal (cathode)",
          "The positive terminal (anode)",
          "The salt bridge"
        ],
        "ans": 1,
        "exp": "The object to be plated always serves as the cathode.",
        "ch": 4
      },
      {
        "q": "A lead-acid battery is fully charged when the hydrometer reads an acid density of:",
        "opts": [
          "1.00 g/cm³",
          "Below 1.20 g/cm³",
          "1.28 – 1.30 g/cm³",
          "0.80 g/cm³"
        ],
        "ans": 2,
        "exp": "Density below 1.20 g/cm³ indicates the battery needs recharging.",
        "ch": 4
      },
      {
        "q": "In electrolysis of CuCl₂ solution, the products at cathode and anode respectively are:",
        "opts": [
          "Solid copper at cathode and Cl₂ gas at anode",
          "Cl₂ at cathode and Cu at anode",
          "H₂ and O₂",
          "Cu and H₂"
        ],
        "ans": 0,
        "exp": "Cu²⁺ reduces at cathode (-); Cl⁻ oxidizes at anode (+).",
        "ch": 4
      },
      {
        "q": "During iron rusting, the iron piece itself acts as:",
        "opts": [
          "The cathode only",
          "The salt bridge",
          "The electrolyte",
          "Both the anode and the external circuit"
        ],
        "ans": 3,
        "exp": "Iron oxidizes and conducts electrons to carbon impurities (cathode).",
        "ch": 4
      },
      {
        "q": "Passing the same quantity of electricity through cells in series deposits masses proportional to their:",
        "opts": [
          "Atomic numbers",
          "Melting points",
          "Densities",
          "Gram equivalent masses (Faraday's 2nd Law)"
        ],
        "ans": 3,
        "exp": "Statement of Faraday's Second Law of Electrolysis.",
        "ch": 4
      },
      {
        "q": "In a galvanic cell where E°red(A) = -0.76V and E°red(B) = +0.80V, the emf and anode are:",
        "opts": [
          "emf = -1.56 V, Anode = A",
          "emf = +1.56 V, Anode = A",
          "emf = +0.04 V, Anode = B",
          "emf = +1.56 V, Anode = B"
        ],
        "ans": 1,
        "exp": "Lower E°red (A) is the anode; emf = 0.80 - (-0.76) = +1.56 V.",
        "ch": 4
      },
      {
        "q": "Electricity required to deposit 10.8 g of silver (Ag = 108, monovalent) is:",
        "opts": [
          "0.5 F",
          "1 F",
          "0.1 F",
          "2 F"
        ],
        "ans": 2,
        "exp": "Moles = 10.8/108 = 0.1 mol; monovalent Ag⁺ requires 0.1 F.",
        "ch": 4
      },
      {
        "q": "During recharging of a lead-acid car battery:",
        "opts": [
          "Acid density decreases and pH increases",
          "Pb converts to PbSO₄",
          "Acid density increases and pH decreases",
          "It operates as a galvanic cell"
        ],
        "ans": 2,
        "exp": "Recharging regenerates H₂SO₄, raising density and acidity (lowering pH).",
        "ch": 4
      },
      {
        "q": "Chlorinating benzene in the presence of UV sunlight produces:",
        "opts": [
          "Dichlorobenzene",
          "Chlorobenzene",
          "Picric acid",
          "Gammexane C₆H₆Cl₆ (addition reaction)"
        ],
        "ans": 3,
        "exp": "In UV light, benzene undergoes addition yielding the insecticide Gammexane.",
        "ch": 5
      },
      {
        "q": "Adding 2 moles of HBr to 1 mole of ethyne produces:",
        "opts": [
          "Bromoethene only",
          "1,1-dibromoethane",
          "Ethane",
          "1,2-dibromoethane"
        ],
        "ans": 1,
        "exp": "The second step follows Markovnikov's Rule yielding 1,1-dibromoethane.",
        "ch": 5
      },
      {
        "q": "The scientist who disproved Vital Force Theory by synthesizing Urea was:",
        "opts": [
          "Berzelius",
          "Kekulé",
          "Friedel",
          "Wöhler (1828)"
        ],
        "ans": 3,
        "exp": "Wöhler synthesized Urea by heating ammonium cyanate.",
        "ch": 5
      },
      {
        "q": "The most reactive cycloalkane due to its small 60° bond angle is:",
        "opts": [
          "Cyclohexane",
          "Cyclopropane (C₃H₆)",
          "Cyclobutane",
          "Cyclopentane"
        ],
        "ans": 1,
        "exp": "The 60° angle causes weak orbital overlap and easy bond cleavage.",
        "ch": 5
      },
      {
        "q": "The polymer used for non-stick cookware coating and surgical threads is:",
        "opts": [
          "Teflon (polytetrafluoroethene)",
          "Polyethylene",
          "Polypropylene",
          "PVC"
        ],
        "ans": 0,
        "exp": "Teflon resists heat, is non-stick, insulating, and chemically inert.",
        "ch": 5
      },
      {
        "q": "Complete oxidation of ethanol with acidified K₂Cr₂O₇ produces:",
        "opts": [
          "Acetone",
          "Methane",
          "Ethanoic (acetic) acid",
          "Diethyl ether"
        ],
        "ans": 2,
        "exp": "Primary alcohols oxidize to aldehydes then to carboxylic acids.",
        "ch": 5
      },
      {
        "q": "Which compound has the highest boiling point (among similar molar masses)?",
        "opts": [
          "Ethanoic acid (2 H-bonds per dimer)",
          "Dimethyl ether",
          "Butane",
          "Propanol"
        ],
        "ans": 0,
        "exp": "Carboxylic acids form two hydrogen bonds between every pair of molecules.",
        "ch": 5
      },
      {
        "q": "Reacting salicylic acid with acetic acid produces:",
        "opts": [
          "Bakelite",
          "Oil of Wintergreen",
          "Aspirin (acetylsalicylic acid)",
          "Picric acid"
        ],
        "ans": 2,
        "exp": "Aspirin forms via reaction of salicylic acid's phenolic -OH with acetic acid.",
        "ch": 5
      },
      {
        "q": "Catalytic hydration of propene (CH₃-CH=CH₂) in acidic medium yields:",
        "opts": [
          "1-propanol",
          "Propanoic acid",
          "2-propanol (secondary alcohol)",
          "Propanal"
        ],
        "ans": 2,
        "exp": "By Markovnikov's Rule, H⁺ adds to terminal C and OH⁻ to middle C giving 2-propanol.",
        "ch": 5
      },
      {
        "q": "To distinguish practically between acetic acid and ethanol, we use:",
        "opts": [
          "NaCl solution",
          "Bromine water",
          "Sodium carbonate (Na₂CO₃) solution",
          "Sodium metal only"
        ],
        "ans": 2,
        "exp": "Acidity test: acetic acid causes effervescence & CO₂; ethanol does not react.",
        "ch": 5
      }
    ],
    "essays": [
      {
        "q": "Essay Q45: A 2.6903 g sample of hydrated BaCl₂·xH₂O was strongly heated until its mass stabilized at 2.2923 g. Find (x) given (Ba=137, Cl=35.5, H=1, O=16).",
        "model": "1) Mass of water = 2.6903 - 2.2923 = 0.398 g.\n2) Molar mass BaCl₂ = 208 g/mol; H₂O = 18 g/mol.\n3) Moles BaCl₂ = 2.2923 / 208 = 0.01102 mol; Moles H₂O = 0.398 / 18 = 0.02211 mol.\n4) x = 0.02211 / 0.01102 ≈ 2 ⇐ Formula: BaCl₂·2H₂O."
      },
      {
        "q": "Essay Q46: Show by equations how to obtain diethyl ether and ethene from ethanol, then explain how Aspirin is prepared from salicylic acid.",
        "model": "1) Diethyl ether (140°C): 2C₂H₅OH —(conc. H₂SO₄ / 140°C)→ C₂H₅-O-C₂H₅ + H₂O.\n2) Ethene (180°C): C₂H₅OH —(conc. H₂SO₄ / 180°C)→ C₂H₄ + H₂O.\n3) Aspirin: React salicylic acid with acetic acid to form acetylsalicylic acid (Aspirin) + H₂O."
      }
    ]
  }
};
