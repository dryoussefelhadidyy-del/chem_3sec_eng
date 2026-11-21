const FLASHCARDS_DATA = {
  "1": [
    {
      "type": "Give Reason",
      "q": "Chromium (24Cr) and Copper (29Cu) have anomalous electronic configurations?",
      "a": "Because an atom has lower energy (higher stability) when the 3d sublevel is half-filled (3d⁵ in Cr) or completely filled (3d¹⁰ in Cu)."
    },
    {
      "type": "Give Reason",
      "q": "It is easy to oxidize Fe²⁺ to Fe³⁺, while difficult to oxidize Mn²⁺ to Mn³⁺?",
      "a": "Fe²⁺ (3d⁶) oxidizes to Fe³⁺ (3d⁵ half-filled, more stable), whereas Mn²⁺ (3d⁵) is already half-filled and stable, so converting it to Mn³⁺ (3d⁴) is difficult."
    },
    {
      "type": "Give Reason",
      "q": "Coinage metals (Cu, Ag, Au) are considered transition elements?",
      "a": "Because in their +2 or +3 oxidation states, their d-sublevel is incompletely filled (d⁹ or d⁸)."
    },
    {
      "type": "Give Reason",
      "q": "Group IIB metals (Zn, Cd, Hg) are NOT considered transition elements?",
      "a": "Because their d-sublevel is completely filled (d¹⁰) in both the atomic state and their only oxidation state (+2)."
    },
    {
      "type": "Give Reason",
      "q": "Transition elements exhibit multiple oxidation states unlike representative metals?",
      "a": "Because 4s and 3d sublevels are close in energy, so electrons are lost sequentially with gradual increases in ionization potentials."
    },
    {
      "type": "Give Reason",
      "q": "Scandium does not form compounds with a +4 oxidation state?",
      "a": "Because forming Sc⁴⁺ requires breaking a completely filled noble-gas energy level ([Ar]), needing extremely high ionization energy."
    },
    {
      "type": "Give Reason",
      "q": "Nickel shows an anomaly in atomic mass across the first transition series?",
      "a": "Due to the existence of 5 stable isotopes of nickel whose average atomic mass is 58.7 (less than Cobalt's 58.9)."
    },
    {
      "type": "Give Reason",
      "q": "Atomic radius remains nearly constant from Chromium to Copper?",
      "a": "Due to two opposing factors: increasing effective nuclear charge (decreases radius) vs. increasing repulsion among 3d electrons (increases radius)."
    },
    {
      "type": "Give Reason",
      "q": "First transition series elements have high melting and boiling points?",
      "a": "Due to strong metallic bonding resulting from sharing both 4s and 3d electrons in the metallic bond."
    },
    {
      "type": "Give Reason",
      "q": "Density increases gradually across the first transition series?",
      "a": "Because atomic volume is nearly constant while atomic mass increases with atomic number."
    },
    {
      "type": "Give Reason",
      "q": "Iron (III) ion is paramagnetic while Zinc (II) ion is diamagnetic?",
      "a": "Fe³⁺ has 5 unpaired electrons in 3d (attracted to a magnet), whereas all electrons in Zn²⁺ (3d¹⁰) are paired."
    },
    {
      "type": "Give Reason",
      "q": "Transition metals are ideal catalysts?",
      "a": "4s and 3d electrons form bonds with reactants, concentrating them on the catalyst surface, weakening their bonds, and lowering activation energy."
    },
    {
      "type": "Give Reason",
      "q": "Despite high chemical activity, Chromium resists atmospheric corrosion?",
      "a": "It forms a non-porous surface oxide layer whose molecular volume is larger than Cr atoms, preventing further reaction with air."
    },
    {
      "type": "Give Reason",
      "q": "Titanium is used in dental implants and artificial joints?",
      "a": "Because the human body does not reject it and it causes no toxicity."
    },
    {
      "type": "Give Reason",
      "q": "Titanium-aluminum alloys are used in aircraft and spacecraft?",
      "a": "Because titanium maintains its durability at high temperatures when aluminum's durability drops."
    },
    {
      "type": "Give Reason",
      "q": "Manganese is never used in its pure metallic state?",
      "a": "Due to its extreme brittleness; it is always used as alloys or compounds."
    },
    {
      "type": "Give Reason",
      "q": "Scandium is added to mercury vapor lamps?",
      "a": "To produce high-efficiency light resembling sunlight for night TV photography."
    },
    {
      "type": "Give Reason",
      "q": "Nickel-chromium alloys are used in heating coils and electric furnaces?",
      "a": "Because they resist corrosion even when heated to redness."
    },
    {
      "type": "Give Reason",
      "q": "Iron reacts with dilute acids to form iron (II) salts rather than iron (III) salts?",
      "a": "Because the evolved H₂ gas is a reducing agent that reduces any iron (III) salt back to iron (II)."
    },
    {
      "type": "Give Reason",
      "q": "Iron reacts with Cl₂ to give FeCl₃, while with S it gives FeS?",
      "a": "Because chlorine is a strong oxidizing agent that oxidizes FeCl₂ to FeCl₃, whereas sulphur is a weak oxidizing agent."
    },
    {
      "type": "Give Reason",
      "q": "Concentrated nitric acid causes passivity of iron?",
      "a": "It forms a thin non-porous oxide layer on iron's surface stopping further reaction (removable by abrasion or dil. HCl)."
    },
    {
      "type": "Give Reason",
      "q": "Magnetic iron oxide (Fe₃O₄) is considered a mixed oxide?",
      "a": "Because reacting it with hot concentrated acids yields a mixture of iron (II) and iron (III) salts plus water."
    },
    {
      "type": "Give Reason",
      "q": "Inserting smaller atoms into a pure metal's crystal lattice increases hardness?",
      "a": "Because the smaller atoms obstruct the slipping of metal atom layers over each other upon hammering."
    },
    {
      "type": "What Happens",
      "q": "When iron (III) hydroxide is heated above 200°C?",
      "a": "It decomposes thermally into red iron (III) oxide and water vapor: 2Fe(OH)₃ → Fe₂O₃ + 3H₂O."
    },
    {
      "type": "What Happens",
      "q": "When iron (II) sulphate is strongly heated?",
      "a": "It decomposes into Fe₂O₃, SO₂, and SO₃: 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃."
    },
    {
      "type": "What Happens",
      "q": "When iron (II) oxalate is heated in the absence of air?",
      "a": "It forms black FeO + CO + CO₂ (CO prevents oxidation of FeO)."
    },
    {
      "type": "What Happens",
      "q": "When iron (II) oxalate is heated in air?",
      "a": "FeO forms first and is immediately oxidized in hot air to red Fe₂O₃."
    },
    {
      "type": "What Happens",
      "q": "When steam is passed over red-hot iron at 500°C?",
      "a": "Magnetic iron oxide and hydrogen gas are formed: 3Fe + 4H₂O → Fe₃O₄ + 4H₂."
    },
    {
      "type": "What Happens",
      "q": "When Siderite ore (FeCO₃) is roasted in air?",
      "a": "It decomposes to FeO + CO₂, then FeO oxidizes to Hematite (Fe₂O₃), raising the iron percentage."
    },
    {
      "type": "What Happens",
      "q": "When Hematite is reduced at (230–300°C) vs. (400–700°C) vs. (>700°C)?",
      "a": "230–300°C → Fe₃O₄; 400–700°C → FeO; >700°C → metallic iron (Fe)."
    },
    {
      "type": "Distinguish",
      "q": "Practically between iron (II) oxide (FeO) and iron (III) oxide (Fe₂O₃)?",
      "a": "Add dilute HCl to each: FeO reacts and dissolves forming FeCl₂ + H₂O, while Fe₂O₃ does not react with dilute acids."
    },
    {
      "type": "Distinguish",
      "q": "Practically between Fe₂O₃ and Fe₃O₄?",
      "a": "Use a magnet (Fe₃O₄ is strongly attracted), or dissolve in hot conc. H₂SO₄ then add NaOH (Fe₂O₃ gives only reddish-brown ppt; Fe₃O₄ gives a mixture of reddish-brown and greenish-white)."
    },
    {
      "type": "Distinguish",
      "q": "Between iron filings and carbon powder?",
      "a": "Add dilute HCl (iron reacts evolving H₂ gas that burns with a pop; carbon does not react), or use a magnet."
    },
    {
      "type": "Distinguish",
      "q": "Between interstitial steel alloy and intermetallic cementite (Fe₃C)?",
      "a": "Add dil. HCl: in interstitial steel, iron dissolves leaving black carbon precipitate; in cementite, it reacts evolving foul-smelling hydrocarbon gases."
    },
    {
      "type": "Compare",
      "q": "Compare Crushing, Sintering, and Concentration in iron ore dressing.",
      "a": "Crushing: reducing lumps to suitable size. Sintering: collecting fine ore into larger homogeneous pieces. Concentration: removing impurities via surface tension, magnetic or electric separation."
    },
    {
      "type": "Compare",
      "q": "Compare the Blast Furnace and Midrex Furnace (reducing agent & source).",
      "a": "Blast Furnace: CO from coke. Midrex Furnace: Water gas (CO + H₂) from natural gas (methane)."
    },
    {
      "type": "Compare",
      "q": "Compare Interstitial, Substitutional, and Intermetallic alloys with examples.",
      "a": "Interstitial: small atoms in spaces (Steel Fe+C). Substitutional: same radius/lattice (Stainless steel Fe+Cr). Intermetallic: chemical bonding ignoring valency (Cementite Fe₃C)."
    },
    {
      "type": "Equations",
      "q": "How do you obtain Fe₂O₃ from FeCl₃?",
      "a": "1) Add NH₄OH to precipitate Fe(OH)₃. 2) Heat Fe(OH)₃ above 200°C to yield Fe₂O₃ + 3H₂O."
    },
    {
      "type": "Equations",
      "q": "How do you obtain FeCl₂ from Hematite (Fe₂O₃)?",
      "a": "1) Reduce Fe₂O₃ above 700°C to Fe (or at 400–700°C to FeO). 2) React with dil. HCl to yield FeCl₂."
    },
    {
      "type": "Sci. Term",
      "q": "Strong heating of iron ore in air to dry it, raise iron %, and oxidize impurities?",
      "a": "Roasting."
    }
  ],
  "2": [
    {
      "type": "Give Reason",
      "q": "Qualitative analysis must always be performed before quantitative analysis?",
      "a": "To identify the components of the substance first so the most suitable quantitative method can be chosen."
    },
    {
      "type": "Give Reason",
      "q": "Dilute HCl is used to detect its 6 anions?",
      "a": "Because HCl is more stable than the acids from which these anions are derived, expelling them as identifiable gases."
    },
    {
      "type": "Give Reason",
      "q": "Dilute HCl cannot distinguish between carbonate and bicarbonate salts?",
      "a": "Because both produce effervescence and the same CO₂ gas that turns limewater milky."
    },
    {
      "type": "Give Reason",
      "q": "CO₂ is passed into clear limewater for a short time only?",
      "a": "Because passing it for a long time converts insoluble CaCO₃ into soluble Ca(HCO₃)₂ and the turbidity disappears."
    },
    {
      "type": "Give Reason",
      "q": "SO₂ gas turns acidified K₂Cr₂O₇ paper green?",
      "a": "Due to the formation of green chromium (III) sulphate Cr₂(SO₄)₃."
    },
    {
      "type": "Give Reason",
      "q": "H₂S gas blackens paper moistened with lead (II) acetate?",
      "a": "Due to the formation of black lead (II) sulphide (PbS)."
    },
    {
      "type": "Give Reason",
      "q": "Sodium thiosulphate decolorizes brown iodine solution?",
      "a": "Due to the formation of colorless sodium tetrathionate (Na₂S₄O₆) and sodium iodide (NaI)."
    },
    {
      "type": "Give Reason",
      "q": "Sodium nitrite decolorizes acidified violet KMnO₄ solution?",
      "a": "Because nitrite reduces permanganate into colorless MnSO₄ and K₂SO₄ while oxidizing into nitrate."
    },
    {
      "type": "Give Reason",
      "q": "White fumes appear when an ammonia-wet glass rod approaches HCl gas?",
      "a": "Due to the formation of solid subliming ammonium chloride (NH₄Cl)."
    },
    {
      "type": "Give Reason",
      "q": "Orange-red vapors evolve when heating NaBr with conc. H₂SO₄?",
      "a": "Because HBr gas is partially oxidized by conc. H₂SO₄ liberating orange-red bromine vapors (Br₂)."
    },
    {
      "type": "Give Reason",
      "q": "Violet vapors evolve when heating KI with conc. H₂SO₄?",
      "a": "Because HI gas is rapidly oxidized by conc. H₂SO₄ liberating violet iodine vapors (I₂)."
    },
    {
      "type": "Give Reason",
      "q": "Adding copper turnings intensifies reddish-brown NO₂ fumes in the nitrate test?",
      "a": "Because copper reacts with the liberated conc. HNO₃ producing additional brown NO₂ gas."
    },
    {
      "type": "Give Reason",
      "q": "Freshly prepared FeSO₄ solution must be used in the Brown Ring Test?",
      "a": "Because FeSO₄ easily oxidizes in air to Fe₂(SO₄)₃ which cannot form the brown ring."
    },
    {
      "type": "Give Reason",
      "q": "Detecting cations is more complicated than detecting anions?",
      "a": "Due to the large number of cations, overlap between them, and multiple oxidation states of a single cation."
    },
    {
      "type": "Give Reason",
      "q": "Dilute HCl is added before passing H₂S in Group 2 cation detection?",
      "a": "To make the medium acidic so that only Group 2 cations (like Cu²⁺) precipitate as sulphides."
    },
    {
      "type": "Give Reason",
      "q": "A gelatinous white ppt forms then disappears when excess NaOH is added to AlCl₃?",
      "a": "Al(OH)₃ forms first, then dissolves in excess NaOH forming soluble sodium meta-aluminate (NaAlO₂)."
    },
    {
      "type": "Give Reason",
      "q": "Al(OH)₃ precipitate does not dissolve in excess NH₄OH?",
      "a": "Because NH₄OH is a weak base unable to react with amphoteric Al(OH)₃."
    },
    {
      "type": "Give Reason",
      "q": "Ashless filter paper is used in gravimetric precipitation?",
      "a": "Because it burns completely in the crucible leaving no ash that could affect the precipitate's mass."
    },
    {
      "type": "Give Reason",
      "q": "Phenolphthalein cannot distinguish between acidic and neutral solutions?",
      "a": "Because it is colorless in both acidic and neutral media."
    },
    {
      "type": "Distinguish",
      "q": "Between sodium carbonate and sodium bicarbonate?",
      "a": "Add MgSO₄ solution: carbonate gives white ppt on cold; bicarbonate gives white ppt after heating."
    },
    {
      "type": "Distinguish",
      "q": "Between sodium sulphite and sodium sulphide?",
      "a": "Add dil. HCl (SO₂ greens K₂Cr₂O₇ vs. H₂S blackens lead acetate), or AgNO₃ (white ppt turning black on heating vs. black ppt)."
    },
    {
      "type": "Distinguish",
      "q": "Between sodium sulphite and sodium thiosulphate?",
      "a": "Add dil. HCl: thiosulphate gives SO₂ + yellow suspended sulphur; sulphite gives SO₂ only."
    },
    {
      "type": "Distinguish",
      "q": "Between sodium nitrite and sodium nitrate?",
      "a": "Add dil. HCl (reacts only with nitrite giving NO → brown NO₂), or acidified KMnO₄ (decolorized only by nitrite)."
    },
    {
      "type": "Distinguish",
      "q": "Between NaCl, NaBr, and NaI using AgNO₃?",
      "a": "AgCl white soluble in NH₃; AgBr yellowish-white sparingly soluble; AgI yellow insoluble in NH₃."
    },
    {
      "type": "Distinguish",
      "q": "Between white precipitates Ba₃(PO₄)₂ and BaSO₄?",
      "a": "Add dil. HCl: barium phosphate dissolves, while barium sulphate does not dissolve."
    },
    {
      "type": "Distinguish",
      "q": "Between yellow precipitates AgI and Ag₃PO₄?",
      "a": "Add ammonia solution: Ag₃PO₄ dissolves, while AgI does not dissolve."
    },
    {
      "type": "Distinguish",
      "q": "Between FeCl₂, FeCl₃, and AlCl₃?",
      "a": "Add excess NaOH: Fe²⁺ greenish-white; Fe³⁺ reddish-brown; Al³⁺ white gelatinous dissolving in excess."
    },
    {
      "type": "Distinguish",
      "q": "Between NaOH and NH₄OH using AlCl₃?",
      "a": "Add excess of each to AlCl₃: white gelatinous ppt dissolves in excess NaOH but not in excess NH₄OH."
    },
    {
      "type": "Distinguish",
      "q": "Between HCl, distilled water, and NaOH using bromothymol blue?",
      "a": "Acidic: yellow; Neutral: pale green; Basic: blue."
    },
    {
      "type": "What Happens",
      "q": "When the brown ring test tube is shaken or heated?",
      "a": "The brown ring disappears due to decomposition of FeSO₄·NO."
    },
    {
      "type": "What Happens",
      "q": "When white AgCl precipitate is exposed to light?",
      "a": "It turns violet."
    },
    {
      "type": "What Happens",
      "q": "When CO₂ is passed into water containing suspended CaCO₃?",
      "a": "The precipitate dissolves forming soluble calcium bicarbonate Ca(HCO₃)₂."
    },
    {
      "type": "What Happens",
      "q": "When volatile calcium salt is placed in a non-luminous Bunsen flame?",
      "a": "It imparts a brick-red color to the flame."
    },
    {
      "type": "What Happens",
      "q": "When lead (II) acetate solution is added to sodium sulphate solution?",
      "a": "A white precipitate of lead (II) sulphate (PbSO₄) forms."
    },
    {
      "type": "Compare",
      "q": "Compare Methyl Orange and Litmus across acidic, neutral, and basic media.",
      "a": "Methyl Orange: Red, Orange, Yellow. Litmus: Red, Purple, Blue."
    },
    {
      "type": "Compare",
      "q": "Compare Volatilization and Precipitation in gravimetric analysis.",
      "a": "Volatilization: heating to measure mass loss (water of crystallization). Precipitation: isolating constituent as pure sparingly soluble ppt and weighing."
    },
    {
      "type": "Sci. Term",
      "q": "A solution of accurately known concentration used to determine an unknown concentration?",
      "a": "Standard Solution."
    },
    {
      "type": "Sci. Term",
      "q": "The point at which complete reaction occurs between acid and base?",
      "a": "End Point (Equivalence Point)."
    },
    {
      "type": "Laws",
      "q": "State the titration law and its conditions.",
      "a": "(Ma × Va) / na = (Mb × Vb) / nb; equation must be balanced and Va, Vb in the same unit."
    },
    {
      "type": "Laws",
      "q": "How do you calculate the % purity of a compound in an impure sample?",
      "a": "% Purity = (Mass of pure compound / Mass of impure sample) × 100."
    }
  ],
  "3": [
    {
      "type": "Give Reason",
      "q": "Chemical equilibrium is dynamic rather than static?",
      "a": "Because both forward and backward reactions continue simultaneously at equal rates, keeping concentrations macroscopically constant."
    },
    {
      "type": "Give Reason",
      "q": "Reaction of NaCl with AgNO₃ is a complete reaction?",
      "a": "Because white AgCl precipitate leaves the reaction medium, preventing products from recombining."
    },
    {
      "type": "Give Reason",
      "q": "Esterification of acetic acid and ethanol turns blue litmus red despite neutral products?",
      "a": "Because it is reversible, so unreacted acetic acid remains present in the reaction vessel."
    },
    {
      "type": "Give Reason",
      "q": "Ionic reactions are instantaneous whereas covalent reactions are slow?",
      "a": "Ionic reactions occur directly between free ions upon mixing; covalent reactions occur between molecules requiring bond breaking."
    },
    {
      "type": "Give Reason",
      "q": "Powdered zinc reacts faster with HCl than a single lump of the same mass?",
      "a": "Due to larger exposed surface area, increasing the number of effective collisions."
    },
    {
      "type": "Give Reason",
      "q": "Increasing reactant concentration increases reaction rate?",
      "a": "It increases the number of molecules per unit volume, raising collision probability."
    },
    {
      "type": "Give Reason",
      "q": "Raising temperature increases chemical reaction rate?",
      "a": "It increases kinetic energy, increasing the proportion of activated molecules (energy ≥ Ea)."
    },
    {
      "type": "Give Reason",
      "q": "Pure solids and liquid water are omitted from Kc expressions?",
      "a": "Because their concentrations are constant regardless of their amount."
    },
    {
      "type": "Give Reason",
      "q": "Numerical value of Kc does not change when changing concentrations at constant temperature?",
      "a": "Because equilibrium shifts to restore the constant products-to-reactants ratio."
    },
    {
      "type": "Give Reason",
      "q": "A catalyst does not alter equilibrium position or Kc?",
      "a": "Because it lowers activation energy for both forward and backward reactions equally."
    },
    {
      "type": "Give Reason",
      "q": "Pressure does not affect equilibrium in H₂(g) + I₂(g) ⇌ 2HI(g)?",
      "a": "Because total gas moles on both sides are equal (2 mol = 2 mol)."
    },
    {
      "type": "Give Reason",
      "q": "Ammonia is synthesized industrially under high pressure and cooling?",
      "a": "Its formation is exothermic and reduces gas moles (4 → 2), so pressure and cooling shift equilibrium forward."
    },
    {
      "type": "Give Reason",
      "q": "Catalysts are used in over 90% of industrial processes?",
      "a": "They accelerate slow reactions without high heating costs, reducing product prices."
    },
    {
      "type": "Give Reason",
      "q": "A bulb does not light in glacial acetic acid or HCl dissolved in benzene?",
      "a": "Because neither solution contains free ions to conduct electricity."
    },
    {
      "type": "Give Reason",
      "q": "Bulb brightness increases upon diluting acetic acid but not HCl?",
      "a": "HCl is 100% ionized (unaffected by dilution), whereas weak acetic acid's degree of ionization (α) increases with dilution."
    },
    {
      "type": "Give Reason",
      "q": "Hydrogen ion (H⁺) does not exist freely in aqueous acid solutions?",
      "a": "It forms a coordinate bond with water's oxygen lone pair creating hydronium ion (H₃O⁺)."
    },
    {
      "type": "Give Reason",
      "q": "Ostwald's dilution law cannot be applied to strong electrolytes?",
      "a": "Because strong electrolytes are completely ionized with no unionized molecules to form ionic equilibrium."
    },
    {
      "type": "Give Reason",
      "q": "Pure water is neutral to litmus?",
      "a": "Because [H⁺] = [OH⁻] = 10⁻⁷ M at 25°C."
    },
    {
      "type": "Give Reason",
      "q": "Na₂CO₃ solution is basic (pH > 7) while NH₄Cl solution is acidic (pH < 7)?",
      "a": "Na₂CO₃ comes from strong base + weak acid (excess OH⁻); NH₄Cl comes from strong acid + weak base (excess H⁺)."
    },
    {
      "type": "Give Reason",
      "q": "Ammonium acetate (CH₃COONH₄) solution is neutral (pH = 7)?",
      "a": "Because it is derived from a weak acid and weak base of equal strength (Ka ≈ Kb)."
    },
    {
      "type": "What Happens",
      "q": "When a flask of reddish-brown NO₂ is placed in a cooling mixture?",
      "a": "The brown color fades to colorless because exothermic (2NO₂ ⇌ N₂O₄ + Heat) shifts forward on cooling."
    },
    {
      "type": "What Happens",
      "q": "When extra FeCl₃ is added to FeCl₃ + 3NH₄SCN ⇌ Fe(SCN)₃ + 3NH₄Cl?",
      "a": "Equilibrium shifts forward and the blood-red color intensifies."
    },
    {
      "type": "What Happens",
      "q": "When light falls on photographic film containing AgBr?",
      "a": "Ag⁺ gains an electron from Br⁻ forming metallic silver (Ag°); more light produces more silver."
    },
    {
      "type": "What Happens",
      "q": "To Kc when heating an endothermic vs. an exothermic reaction?",
      "a": "Endothermic: Kc increases (shifts forward). Exothermic: Kc decreases (shifts backward)."
    },
    {
      "type": "What Happens",
      "q": "To α and Ka of a weak acid upon dilution at constant temperature?",
      "a": "Degree of ionization (α) increases while Ka remains constant."
    },
    {
      "type": "What Happens",
      "q": "To [OH⁻] and pH when adding acid to pure water?",
      "a": "[H⁺] increases, [OH⁻] decreases, pH drops below 7, and pOH rises above 7."
    },
    {
      "type": "Compare",
      "q": "Compare Complete and Reversible reactions.",
      "a": "Complete: one direction due to escaping gas or ppt. Reversible: both directions, all species remain in vessel."
    },
    {
      "type": "Compare",
      "q": "Compare the meaning of Kc > 1 vs. Kc < 1.",
      "a": "Kc > 1: forward dominates (more products). Kc < 1: backward dominates (more reactants)."
    },
    {
      "type": "Compare",
      "q": "Compare Complete Ionization and Weak Ionization.",
      "a": "Complete: all molecules turn into ions (strong electrolytes). Weak: tiny fraction ionizes establishing ionic equilibrium."
    },
    {
      "type": "Compare",
      "q": "Compare Ksp formulas in terms of solubility (x) for AB, AB₂, AB₃, and A₃B₂.",
      "a": "AB: x² | AB₂: 4x³ | AB₃: 27x⁴ | A₃B₂: 108x⁵."
    },
    {
      "type": "Sci. Term",
      "q": "Minimum kinetic energy a molecule must possess to react upon collision?",
      "a": "Activation Energy (Ea)."
    },
    {
      "type": "Sci. Term",
      "q": "Maximum water vapor pressure that can exist in air at a given temperature?",
      "a": "Saturated Water Vapor Pressure."
    },
    {
      "type": "Sci. Term",
      "q": "If a change occurs in concentration, pressure, or temperature of an equilibrium system, it shifts to oppose that change?",
      "a": "Le Chatelier's Principle."
    },
    {
      "type": "Sci. Term",
      "q": "Negative base-10 logarithm of hydrogen ion concentration?",
      "a": "pH Value."
    },
    {
      "type": "Sci. Term",
      "q": "Product of molar concentrations of ions of a sparingly soluble salt raised to their stoichiometric powers at equilibrium?",
      "a": "Solubility Product (Ksp)."
    },
    {
      "type": "Sci. Term",
      "q": "Concentration of the saturated solution of a sparingly soluble salt at a given temperature?",
      "a": "Degree of Solubility (x)."
    },
    {
      "type": "Laws",
      "q": "State Ostwald's dilution law and [H₃O⁺] formula for a weak acid.",
      "a": "Ka = α² · Ca ⇒ α = √(Ka/Ca) | [H₃O⁺] = √(Ka · Ca) = α · Ca."
    },
    {
      "type": "Laws",
      "q": "State the relation between Kw, pH, and pOH at 25°C.",
      "a": "Kw = [H⁺][OH⁻] = 10⁻¹⁴ | pH + pOH = 14."
    },
    {
      "type": "Problem",
      "q": "If [H⁺] = 10⁻⁴ M, find [OH⁻], pH, pOH, and solution type.",
      "a": "[OH⁻] = 10⁻¹⁰ M, pH = 4, pOH = 10, Acidic."
    },
    {
      "type": "Problem",
      "q": "Find Ksp of PbBr₂ if its solubility is 10⁻² mol/L.",
      "a": "AB₂ salt ⇐ Ksp = 4x³ = 4 × (10⁻²)³ = 4 × 10⁻⁶."
    }
  ],
  "4": [
    {
      "type": "Give Reason",
      "q": "Current stops in Daniell cell if the salt bridge is removed?",
      "a": "Excess positive ions accumulate at the anode and negative ions at the cathode, halting redox reactions."
    },
    {
      "type": "Give Reason",
      "q": "BaCl₂ cannot be used in the salt bridge of Daniell cell (containing SO₄²⁻)?",
      "a": "Ba²⁺ would react with SO₄²⁻ forming white BaSO₄ precipitate; salt bridge ions must not react with half-cell electrolytes."
    },
    {
      "type": "Give Reason",
      "q": "Standard Hydrogen Electrode (SHE) is used to measure other electrode potentials?",
      "a": "Absolute potential of a single electrode cannot be measured directly, so SHE is assigned 0.00 V as a reference."
    },
    {
      "type": "Give Reason",
      "q": "Potential of hydrogen electrode may differ from zero?",
      "a": "If [H⁺] deviates from 1 M, H₂ pressure deviates from 1 atm, or both."
    },
    {
      "type": "Give Reason",
      "q": "Elements at the top of the electromotive series are strong reducing agents?",
      "a": "Due to their high oxidation potentials and ease of losing electrons."
    },
    {
      "type": "Give Reason",
      "q": "Zinc displaces copper from CuSO₄ solution, but copper cannot displace zinc?",
      "a": "Because zinc precedes copper in the EMF series (higher oxidation potential and more active)."
    },
    {
      "type": "Give Reason",
      "q": "Primary cells are usually made in dry form?",
      "a": "For portability in mobile devices, steady voltage over longer time, and compact sizes."
    },
    {
      "type": "Give Reason",
      "q": "Mercury cells must be disposed of safely?",
      "a": "Because they contain toxic mercury that harms the environment."
    },
    {
      "type": "Give Reason",
      "q": "Fuel cells neither get consumed nor store energy like regular batteries?",
      "a": "Because they require continuous external supply of H₂ and O₂ fuel and continuous removal of products."
    },
    {
      "type": "Give Reason",
      "q": "Lead-acid battery is classified as a secondary (reversible) cell?",
      "a": "Because it can be recharged by passing external DC current slightly higher than its emf to reverse discharge reactions."
    },
    {
      "type": "Give Reason",
      "q": "Density of H₂SO₄ in a car battery decreases with prolonged use?",
      "a": "Because H₂SO₄ is consumed to form PbSO₄ and diluted by water produced during discharge."
    },
    {
      "type": "Give Reason",
      "q": "Lithium-ion batteries replace lead-acid batteries in modern EVs and electronics?",
      "a": "Lithium is the lightest metal, has the lowest standard reduction potential (-3.04 V), and stores high energy per unit volume."
    },
    {
      "type": "Give Reason",
      "q": "Very pure iron resists rusting while steel rusts easily?",
      "a": "Carbon impurities in steel form local galvanic cells where iron is the anode and corrodes."
    },
    {
      "type": "Give Reason",
      "q": "Iron rusts faster in seawater than in fresh water?",
      "a": "Seawater contains more dissolved ions/salts, increasing electrolytic conductivity and corrosion rate."
    },
    {
      "type": "Give Reason",
      "q": "Tin-plated iron (cathodic cover) rusts faster than bare iron when scratched?",
      "a": "Iron is more active than tin, so it acts as the anode and corrodes rapidly."
    },
    {
      "type": "Give Reason",
      "q": "Anodic protection (zinc galvanization) is better than cathodic protection (tin)?",
      "a": "Zinc is more active than iron; upon scratching, zinc acts as anode and corrodes completely first."
    },
    {
      "type": "Give Reason",
      "q": "Ship hulls and underground iron pipes are connected to magnesium blocks?",
      "a": "Magnesium is more active than iron, acting as a sacrificial anode that corrodes instead of iron."
    },
    {
      "type": "Give Reason",
      "q": "The emf of an electrolytic cell has a negative sign?",
      "a": "Because its redox reaction is non-spontaneous and driven by external electrical energy."
    },
    {
      "type": "Give Reason",
      "q": "Fluorspar (CaF₂) is added to bauxite and cryolite in Al extraction?",
      "a": "To lower the melting point of the mixture from 2045°C to 950°C, saving energy."
    },
    {
      "type": "Give Reason",
      "q": "A mixture of Al, Na, and Ca fluorides is preferred over cryolite modernly?",
      "a": "It gives a melt with lower melting point and lower density, easing separation of molten Al at the bottom."
    },
    {
      "type": "Give Reason",
      "q": "Carbon anodes must be replaced periodically in aluminum extraction?",
      "a": "Because evolved O₂ reacts with hot carbon anodes forming CO and CO₂, eroding them."
    },
    {
      "type": "Give Reason",
      "q": "Fe and Zn impurities do not deposit on the cathode during copper purification?",
      "a": "Because Fe²⁺ and Zn²⁺ are harder to reduce than Cu²⁺ (Cu²⁺ has higher reduction potential)."
    },
    {
      "type": "Give Reason",
      "q": "Gold and silver impurities fall beneath the anode during copper purification?",
      "a": "Because they are less active than copper (very low oxidation potential) so they do not oxidize."
    },
    {
      "type": "What Happens",
      "q": "When a zinc plate is dipped in blue CuSO₄ solution?",
      "a": "Zinc dissolves, red copper deposits on it, and the blue color fades until colorless."
    },
    {
      "type": "What Happens",
      "q": "To electrode roles in a lead-acid battery when switching from discharge to charging?",
      "a": "During discharge it is galvanic; during charging it acts as an electrolytic cell and reactions reverse."
    },
    {
      "type": "What Happens",
      "q": "When 1 Faraday (96500 C) passes through AgNO₃ solution?",
      "a": "1 gram equivalent mass of silver (107.88 g) deposits at the cathode."
    },
    {
      "type": "What Happens",
      "q": "When electroplating a jug with silver?",
      "a": "Jug is cathode (-), silver rod is anode (+) in AgNO₃; silver dissolves from anode and deposits on jug."
    },
    {
      "type": "Compare",
      "q": "Compare Galvanic and Electrolytic cells (spontaneity & electrode signs).",
      "a": "Galvanic: spontaneous (+emf), anode (-), cathode (+). Electrolytic: non-spontaneous (-emf), anode (+), cathode (-)."
    },
    {
      "type": "Compare",
      "q": "Compare Mercury cell and Fuel cell (emf & electrolyte).",
      "a": "Mercury: 1.35 V, KOH. Fuel cell: 1.23 V, aqueous KOH."
    },
    {
      "type": "Compare",
      "q": "Compare Lead-Acid and Lithium-Ion batteries (voltage & electrolyte).",
      "a": "Lead-Acid: 12 V (6×2V), dil. H₂SO₄. Li-Ion: 3 V, anhydrous LiPF₆."
    },
    {
      "type": "Compare",
      "q": "Compare Faraday's First and Second Laws.",
      "a": "1st: mass is directly proportional to Q. 2nd: for same Q in series cells, masses are proportional to equivalent masses."
    },
    {
      "type": "Sci. Term",
      "q": "Descending arrangement of elements by standard oxidation potentials (or ascending by reduction)?",
      "a": "Electromotive Series (Electrochemical Series)."
    },
    {
      "type": "Sci. Term",
      "q": "Chemical decomposition of an electrolyte by passing an electric current?",
      "a": "Electrolysis."
    },
    {
      "type": "Sci. Term",
      "q": "Mass of substance able to lose or gain 1 mole of electrons during a reaction?",
      "a": "Gram Equivalent Mass."
    },
    {
      "type": "Sci. Term",
      "q": "Chemical corrosion of metals by the surrounding medium?",
      "a": "Rusting (Corrosion)."
    },
    {
      "type": "Laws",
      "q": "State the three formulas for calculating cell emf.",
      "a": "1) E°ox(anode) + E°red(cathode). 2) E°ox(anode) − E°ox(cathode). 3) E°red(cathode) − E°red(anode)."
    },
    {
      "type": "Laws",
      "q": "How many Faradays are needed to deposit 1 mole of any metal atom?",
      "a": "Number of Faradays = valency (z); e.g., Ag⁺ = 1F, Cu²⁺ = 2F, Al³⁺ = 3F."
    },
    {
      "type": "Problem",
      "q": "Calculate Faradays needed to deposit 1 mol of Al from molten Al₂O₃.",
      "a": "Al³⁺ + 3e⁻ → Al, so 3 Faradays (289,500 C) are required."
    },
    {
      "type": "Problem",
      "q": "How many minutes are needed to pass 10500 C at a current of 25 A?",
      "a": "t = 10500 / 25 = 420 s = 7 minutes."
    },
    {
      "type": "Problem",
      "q": "Given E°red(Sn) = -0.147V and E°red(Ag) = +0.8V, find anode and emf.",
      "a": "Sn is anode (lower E°red); emf = 0.8 - (-0.147) = +0.947 V."
    }
  ],
  "5": [
    {
      "type": "Give Reason",
      "q": "Organic compounds outnumber inorganic compounds by 20:1?",
      "a": "Because carbon atoms form single, double, or triple bonds with themselves and other atoms creating straight/branched chains and rings."
    },
    {
      "type": "Give Reason",
      "q": "Alkanes are relatively chemically inert?",
      "a": "Because all their C-C bonds are strong single sigma (σ) bonds hard to break."
    },
    {
      "type": "Give Reason",
      "q": "Alkenes are more chemically active than alkanes?",
      "a": "Due to the presence of a weak pi (π) bond in their double bond that is easily broken."
    },
    {
      "type": "Give Reason",
      "q": "Calcium oxide (quicklime) is added to NaOH in methane preparation?",
      "a": "It does not react, but acts as a flux lowering the melting point of the mixture."
    },
    {
      "type": "Give Reason",
      "q": "Propane ratio is higher in LPG cylinders in cold regions than warm regions?",
      "a": "Because propane is more volatile (lower boiling point) than butane."
    },
    {
      "type": "Give Reason",
      "q": "Metals are coated with heavy alkanes like grease?",
      "a": "Because they are non-polar and water-insoluble, protecting metals from rust."
    },
    {
      "type": "Give Reason",
      "q": "Chloroform was replaced by Halothane as an anesthetic?",
      "a": "Inaccurate chloroform dosing caused many deaths; Halothane is much safer."
    },
    {
      "type": "Give Reason",
      "q": "Freons were banned internationally starting 2020?",
      "a": "Because they caused depletion of the Earth's protective ozone layer."
    },
    {
      "type": "Give Reason",
      "q": "Catalytic hydration of alkenes requires conc. H₂SO₄, not just water?",
      "a": "Water is a weak electrolyte with too few H⁺ ions to break the double bond; H₂SO₄ supplies H⁺."
    },
    {
      "type": "Give Reason",
      "q": "Ethylene glycol is used as antifreeze in car radiators?",
      "a": "It forms hydrogen bonds with water molecules preventing them from freezing into ice crystals."
    },
    {
      "type": "Give Reason",
      "q": "Ethyne prepared from CaC₂ is passed through CuSO₄ in dil. H₂SO₄?",
      "a": "To remove phosphine (PH₃) and H₂S gas impurities originating from impure CaC₂."
    },
    {
      "type": "Give Reason",
      "q": "Adding 2 moles of HBr to ethyne gives 1,1-dibromoethane, not 1,2-dibromoethane?",
      "a": "Because the second addition to unsymmetrical vinyl bromide follows Markovnikov's Rule."
    },
    {
      "type": "Give Reason",
      "q": "Ethyne burns with a smoky flame in air but a 3000°C flame in pure O₂?",
      "a": "Limited O₂ in air causes incomplete combustion (unburnt carbon smoke), whereas excess pure O₂ gives complete combustion (oxy-acetylene flame)."
    },
    {
      "type": "Give Reason",
      "q": "Cyclopropane is far more reactive than cyclopentane and cyclohexane?",
      "a": "Its small 60° bond angle (vs. 109.5°) causes weak orbital overlap and easy bond breaking."
    },
    {
      "type": "Give Reason",
      "q": "Benzene undergoes both addition and substitution reactions?",
      "a": "Due to delocalization (resonance) of the 6 π-electrons across all 6 carbon atoms, making bond lengths intermediate between single and double."
    },
    {
      "type": "Give Reason",
      "q": "Phenol is more acidic than ethanol (reacts with NaOH, not HCl)?",
      "a": "The electron-withdrawing benzene ring strengthens the C-O bond and weakens the O-H bond, easing H⁺ release."
    },
    {
      "type": "Give Reason",
      "q": "Carboxylic acids have higher boiling points than alcohols of similar molar mass?",
      "a": "Every two carboxylic acid molecules form TWO hydrogen bonds (dimer), while alcohols form only one."
    },
    {
      "type": "Give Reason",
      "q": "Tertiary alcohols do not oxidize under normal conditions?",
      "a": "Because their carbinol carbon atom has no attached hydrogen atoms."
    },
    {
      "type": "Give Reason",
      "q": "Conc. H₂SO₄ or dry HCl gas is added during esterification?",
      "a": "To absorb produced water and prevent the backward reaction (Le Chatelier's principle), increasing ester yield."
    },
    {
      "type": "Give Reason",
      "q": "Doctors advise crushing or dissolving aspirin in water before swallowing?",
      "a": "Because it hydrolyzes in the stomach into salicylic and acetic acids, irritating the stomach lining."
    },
    {
      "type": "Distinguish",
      "q": "Practically between Ethane (alkane) and Ethene (alkene)?",
      "a": "Pass into red Br₂ in CCl₄ (or alkaline KMnO₄): color disappears with ethene only."
    },
    {
      "type": "Distinguish",
      "q": "Practically between Ethanol and Phenol?",
      "a": "Add FeCl₃ (phenol gives violet color), or bromine water (phenol gives white ppt), or NaOH (reacts with phenol only)."
    },
    {
      "type": "Distinguish",
      "q": "Practically between Acetic Acid and Ethanol?",
      "a": "Acidity test (Na₂CO₃ or NaHCO₃): effervescence & CO₂ with acetic acid; no reaction with ethanol."
    },
    {
      "type": "Distinguish",
      "q": "Practically between 1° alcohol (ethanol) and 3° alcohol (2-methyl-2-propanol)?",
      "a": "Add acidified K₂Cr₂O₇: orange turns green with 1° alcohol (oxidizes); unchanged with 3° alcohol."
    },
    {
      "type": "What Happens",
      "q": "When ammonium cyanate is heated (Wöhler's experiment)?",
      "a": "It rearranges into organic Urea (H₂N-CO-NH₂), disproving Vital Force Theory."
    },
    {
      "type": "What Happens",
      "q": "When ethanol is heated with conc. H₂SO₄ at 80°C, 140°C, and 180°C?",
      "a": "80°C → ethyl hydrogen sulphate; 140°C → diethyl ether; 180°C → ethene gas."
    },
    {
      "type": "What Happens",
      "q": "When ethene is passed through alkaline KMnO₄ (Baeyer's reaction)?",
      "a": "Violet color disappears and ethylene glycol (1,2-ethanediol) forms."
    },
    {
      "type": "What Happens",
      "q": "Upon catalytic hydration of ethyne?",
      "a": "Unstable vinyl alcohol forms first then rearranges to acetaldehyde (CH₃CHO)."
    },
    {
      "type": "What Happens",
      "q": "When methane is heated at 1000°C (no air) vs. 1500°C (rapid cooling)?",
      "a": "1000°C → carbon black + H₂; 1500°C + rapid cooling → ethyne (C₂H₂) + H₂."
    },
    {
      "type": "What Happens",
      "q": "Upon saponification vs. ammonolysis of ethyl acetate?",
      "a": "Saponification (NaOH): sodium acetate + ethanol. Ammonolysis (NH₃): acetamide + ethanol."
    },
    {
      "type": "Compare",
      "q": "Compare Addition Polymerization and Condensation Polymerization.",
      "a": "Addition: huge number of one unsaturated monomer (e.g., PE). Condensation: two different monomers link losing a small molecule like H₂O (e.g., Dacron, Bakelite)."
    },
    {
      "type": "Compare",
      "q": "Compare Ortho/Para directors vs. Meta directors on benzene.",
      "a": "Ortho/Para: -R, -OH, -NH₂, -X. Meta: -NO₂, -COOH, -CHO, -CO-."
    },
    {
      "type": "Compare",
      "q": "Compare preparing Oil of Wintergreen vs. Aspirin from salicylic acid.",
      "a": "Oil of Wintergreen: salicylic acid (-COOH) + methanol. Aspirin: salicylic acid (-OH) + acetic acid."
    },
    {
      "type": "Compare",
      "q": "Compare Molecular Formula and Structural Formula.",
      "a": "Molecular shows atom types & counts only. Structural also shows how atoms are bonded covalently."
    },
    {
      "type": "Sci. Term",
      "q": "A series of compounds with a general formula, similar chemical properties, and graded physical properties?",
      "a": "Homologous Series."
    },
    {
      "type": "Sci. Term",
      "q": "Compounds having the same molecular formula but different structural formulas and properties?",
      "a": "Isomerism."
    },
    {
      "type": "Sci. Term",
      "q": "Adding an unsymmetrical reagent to an unsymmetrical alkene adds H⁺ to the carbon with more H atoms?",
      "a": "Markovnikov's Rule."
    },
    {
      "type": "Sci. Term",
      "q": "Breaking heavy long-chain petroleum fractions into smaller lighter molecules using heat, pressure, and catalysts?",
      "a": "Thermal Catalytic Cracking."
    },
    {
      "type": "Equations",
      "q": "How do you obtain Benzene from Methane?",
      "a": "1) Heat CH₄ at 1500°C + rapid cooling → C₂H₂. 2) Cyclic trimerization in red-hot Ni tube → C₆H₆."
    },
    {
      "type": "Equations",
      "q": "How do you obtain Acetic Acid from Calcium Carbide?",
      "a": "1) CaC₂ + 2H₂O → C₂H₂. 2) Catalytic hydration → CH₃CHO. 3) Oxidation → CH₃COOH."
    }
  ]
};
