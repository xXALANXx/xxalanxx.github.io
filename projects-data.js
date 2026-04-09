/** Inlined project data so the site works when opened via file:// (no server). */
window.PROJECTS_DATA = [
  {
    id: "skid-plate",
    title: "Skid Plate",
    shortDesc: "FEA-optimized protective skid plate for a 12″×8″×3″ junction box. Achieved 58% under mass limit with a 4.7× safety factor.",
    longDesc: "I led the full design cycle for a rugged skid plate protecting critical junction box electronics. Starting in Inventor, I modeled and assembled the geometry, then systematically optimized the design by lowering the top mounting face, increasing slope angle for impact resistance, and adding 1″ ribs with a 0.5″ base to maximize stiffness-to-weight ratio. Material selection included a thorough trade-off analysis balancing strength, manufacturability, and cost. The final solution came in 58% under total mass limit and 20% under budget. Validation via FEA under a 14,715 N load confirmed no yielding and a 4.7 safety factor, meeting all safety and durability targets.",
    tags: ["Inventor", "Ansys", "Fusion 360", "FEA", "Design Optimization"],
    date: "Oct. 2025",
    images: [
      "images/projects/skid-plate/Skid0.png",
      "images/projects/skid-plate/Skid1FEAdisplacement.png",
      "images/projects/skid-plate/Skid2FEASafetyFactor.png"
    ],
    thumbnail: "images/projects/skid-plate/Skid0.png",
    links: [
      { label: "Inventor design (IPT)", url: "https://drive.google.com/file/d/17prRJN134HrOl3WzbY15fqukNeVjN_fc/view?usp=sharing" }
    ]
  },
  {
    id: "chaotic-pendulum",
    title: "Chaotic Triple Pendulum",
    shortDesc: "Three-link chaotic pendulum with custom friction joints. Used iterative CoM optimization to achieve sustained nonlinear motion.",
    longDesc: "I designed and built a three-link chaotic pendulum system in Fusion 360 to demonstrate nonlinear dynamic motion. Custom friction joints were incorporated to control energy dissipation and achieve the desired chaotic behavior. Through iterative center-of-mass optimization, I balanced the arms for sustained chaotic oscillations and stable energy transfer between links. Motion testing validated kinematic behavior, with smooth, continuous chaotic trajectories matching modeled expectations. This project showcased both my CAD proficiency and hands-on validation of complex dynamics.",
    tags: ["Fusion 360", "3D Printing"],
    date: "Jul. – Aug. 2025",
    images: [
      "images/projects/Chaotic-Triple-Pendulum/Image_20260126_222252_170.jpeg",
      "images/projects/Chaotic-Triple-Pendulum/Image_20260126_222252_189.jpeg",
      "images/projects/Chaotic-Triple-Pendulum/Image_20260126_222252_238.jpeg",
      "images/projects/Chaotic-Triple-Pendulum/Image_20260126_222252_290.jpeg"
    ],
    thumbnail: "images/projects/Chaotic-Triple-Pendulum/Image_20260126_222252_170.jpeg"
  },
  {
    id: "softwood-table",
    title: "Custom Softwood Table",
    shortDesc: "High-stability table with laser-engraved trim and plexiglass viewport. Supports 175%+ of required load capacity.",
    longDesc: "I engineered a custom softwood table from concept to finish, prioritizing structural integrity and aesthetics. The table was designed to support distributed static loads exceeding 175% of requirements. I executed precision machining and woodworking with careful attention to dimensional tolerances and surface finish for long-term mechanical integrity. Aesthetic touches like laser-engraved trim, a plexiglass viewport, and a unique wood stain pattern were integrated without compromising stiffness-to-weight efficiency, resulting in a piece that is both functional and distinctive.",
    tags: ["Woodworking", "Laser Cutting", "Machining", "Shop Equipment"],
    date: "Jan. – Feb. 2024",
    images: [
      "images/projects/softwood-table/Copy of Desk0.jpeg",
      "images/projects/softwood-table/Copy of Desk1.jpeg",
      "images/projects/softwood-table/Copy of Desk2.jpeg",
      "images/projects/softwood-table/Copy of Desk3.jpeg",
      "images/projects/softwood-table/Copy of Desk5.jpeg"
    ],
    thumbnail: "images/projects/softwood-table/Copy of Desk0.jpeg"
  },
  {
    id: "model-house",
    title: "Model House",
    shortDesc: "Ontario Building Code compliant floor plan and 1:25 scale foam-core model with ±1 mm accuracy.",
    longDesc: "I developed a detailed architectural floor plan in AutoCAD and SketchUp compliant with Ontario Building Code standards for egress, occupancy load, and spatial safety. Layout efficiency was optimized using area utilization analyses to minimize non-revenue floor space. I then fabricated a 1:25 precision foam-core model, translating the digital design into physical form and demonstrating a rigorous CAD-to-prototype workflow with accuracy within ±1 mm. This project highlighted both my design discipline and hands-on fabrication skills.",
    tags: ["AutoCAD", "SketchUp", "Hand Tools", "Scale Modeling"],
    date: "Nov. – Dec. 2023",
    images: [
      "images/projects/model-house/Model0.jpeg",
      "images/projects/model-house/Model1.jpeg",
      "images/projects/model-house/Model2.jpeg",
      "images/projects/model-house/Model3.jpeg",
      "images/projects/model-house/Model4.jpeg",
      "images/projects/model-house/modelhouse.png"
    ],
    thumbnail: "images/projects/model-house/Model0.jpeg",
    links: [
      { label: "AutoCAD design (DWG)", url: "https://drive.google.com/file/d/1hv8V5zlkEgdj_z_exwjEE_WSytYUtoOQ/view" }
    ]
  },
  {
    id: "gripper-end-effector",
    title: "Dual-Arm Gripper End Effector",
    shortDesc: "Group project: servo-actuated gripper with gear drive and elastic-band grip. I led end-effector design, the fixed-arm pivot, and the full software security and integration layer.",
    longDesc: "This was a group project; I took the lead on hardware refinement and all software security and integration. After early tests showed that gear-platform friction was stalling the servo, I proposed and drove the switch to a fixed-arm configuration to cut weight and friction, which got the mechanism running reliably. I led the end-effector design in Inventor, including the arm geometry and the knubs for elastic-band retention, and pushed for adding bands across the arms to improve grip on smooth objects like bottles. I owned the entire software security side: I designed and implemented the authenticate() flow (session handling, input validation, and CSV-based credential checks) and acted as the integration point for the rest of the system, ensuring userid was passed correctly into order processing. I also led much of the physical assembly and Python debugging and put in extra time on 3D printing and integration testing.",
    tags: ["Inventor", "3D Printing", "Python", "Mechanical Design", "Systems Integration"],
    date: "Sept. – Dec. 2025",
    images: [
      "images/projects/Dual-Arm-Gripper-End-Effector/coverarmendeffector.png",
      "images/projects/Dual-Arm-Gripper-End-Effector/armmodel.png",
      "images/projects/Dual-Arm-Gripper-End-Effector/authenticatecode.png"
    ],
    thumbnail: "images/projects/Dual-Arm-Gripper-End-Effector/coverarmendeffector.png"
  },
  {
    id: "p3-wheelchair-storage",
    title: "P3 wheelchair storage",
    shortDesc: "Accessible powerchair storage: modular PLA body, PETG bracket, quantitative validation (16.3 N), and a no-zipper client-focused enclosure, within a $75 budget.",
    useHtmlLongDesc: true,
    longDesc: `<h3>Project narrative</h3>
<h4>Overview</h4>
<p>The project focused on designing a secure, weather-resistant, and highly accessible storage solution for Mark, a client with Juvenile Rheumatoid Arthritis. Due to limited finger dexterity, Mark struggled with traditional zippered pouches. The goal was to create a device that eliminated complex fasteners, organized daily essentials, and remained firmly attached to a powerchair rail system. The final design combines a modular PLA main body with a high-strength PETG bracket, utilizing a Velcro system and a waterproof lid for a functional, client-focused solution.</p>
<h4>Accomplishments</h4>
<p>The team successfully identified and implemented materials, specifically PLA for the lightweight body and PETG for the load-bearing bracket, to ensure the unit could withstand the heavy vibrations of a powerchair. As the Team Manager, I personally calibrated the CAD models and managed the 20-hour 3D printing schedule. I led the troubleshooting of the mounting system, identifying critical fracture points in early prototypes and iterating the design to increase structural integrity.</p>
<p>The team incorporated six adjustable compartment configurations and a dedicated secure iPad pouch to maximize organization. We performed rigorous quantitative testing, validating that the unit could support a vertical force of 16.3 N and house 500% of the daily items required by a single user. Furthermore, we maintained a total project cost of approximately $75.00, well within professional and course constraints.</p>
<h3>Objectives</h3>
<ul>
<li><strong>Accessibility (constraint):</strong> Must not utilize zippers or buttons to accommodate limited finger dexterity.</li>
<li><strong>Durability:</strong> Withstand vigorous horizontal and vertical forces during wheelchair operation.</li>
<li><strong>Adjustability:</strong> Provide modular storage arrangements to fit a variety of daily items.</li>
<li><strong>Weather resistance:</strong> Protect essential items from environmental risks using a waterproof cover.</li>
<li><strong>Lightweight design:</strong> Ensure the device does not negatively impact the powerchair's balance or user comfort.</li>
<li><strong>Cost constraint:</strong> Keep total production expenditures under a professional threshold (met at $75.00).</li>
</ul>
<h3>Outcome</h3>
<p>The final prototype demonstrated functional success by meeting all mandatory constraints and most primary objectives. The device is durable, surviving aggressive vibration testing and supporting a 16.3 N load. It is intuitive for the client, utilizing a Velcro closure system that eliminates the need for a tight grip. While the lightweight objective was met at approximately 906.8 g (including the lid), the unit provides exceptional storage capacity. The modular interior and high-strength PETG bracket make it a practical, long-term solution for Mark's daily mobility needs.</p>
<h3>Summary</h3>
<p>This project showcases a complete engineering design cycle, transitioning from a client-specific problem statement to a tested, high-fidelity prototype. Key features include the six-configuration modular interior, a secure tablet compartment, and a specialized PETG bracket designed for the Permobil UniTrack rail system. The documentation highlights critical engineering decisions, such as the pivot in material selection after failure testing and the trade-offs made between aesthetic appearance and functional durability.</p>
<h3>Skills</h3>
<ul>
<li><strong>CAD &amp; manufacturing:</strong> Calibrated 3D models and managed a 20-hour multi-material print schedule (PLA and PETG) to optimize the strength-to-weight ratio of mounting components.</li>
<li><strong>Iterative design:</strong> Refined bracket geometry and dimensions after identifying fracture points during stress testing to improve weight distribution and structural reliability.</li>
<li><strong>Technical testing:</strong> Executed quantitative force testing (Newtons) and weight measurements (grams) to verify that the design met safety and portability metrics.</li>
<li><strong>Project management:</strong> Served as Team Manager, overseeing the $75 budget, task delegation, and the synthesis of separate design concepts into a single cohesive matrix.</li>
</ul>
<h3>Design process</h3>
<p>The design process began with brainstorming objectives and constraints based on client videos of Mark's challenges with current pouches. Early iterations explored cup holders and simple boxes, but feedback from design reviews emphasized the need for weatherproofing and better attachment mechanisms. We used a decision matrix to select a modular box design over a pouch alternative, as pouches were deemed too difficult for the client to access.</p>
<p>Testing the first physical prototype was a turning point; we purposefully pushed the unit past its limit to identify weak points. This led to the &quot;Now What&quot; phase where we redesigned the bracket and switched to PETG for its superior durability. Final refinements included adjusting box dimensions for an iPad Air/Pro and selecting a shower curtain material for a lightweight, waterproof lid.</p>
<h3>Reflection</h3>
<p>Initially, I felt a sharp sense of disappointment when I heard our PLA bracket crack under a 40-Newton horizontal force. I recognized that my expectation of a simple, superglue-assembled PLA print was naive compared to the actual physical demands of a moving wheelchair. This failure forced us to apply engineering judgment: we extended the bracket's flat portion to reduce stress on curves and switched to PETG for enhanced material durability.</p>
<p>Through this process, I learned that digital CAD models are only a starting point; they cannot fully replicate the unpredictable forces of real-world use. Shattering my misconception that &quot;it works in CAD&quot; was a profound learning moment. Moving forward, I will prototype load-bearing components much earlier in the timeline and utilize robust materials like PETG or ABS from the outset. I have set a specific goal to incorporate physical stress simulations into the early prototyping phase of all future designs to identify structural weak points before final fabrication.</p>
`,
    tags: ["CAD", "3D Printing", "PLA", "PETG", "Load Testing", "Design Iteration"],
    date: "2026",
    images: [
      "images/projects/p3-wheelchair-storage/wheelchair1.jpg",
      "images/projects/p3-wheelchair-storage/wheelchairfracture1.jpg",
      "images/projects/p3-wheelchair-storage/wheelchairfracture2.jpg",
      "images/projects/p3-wheelchair-storage/wheelchairprototype.png",
      "images/projects/p3-wheelchair-storage/wheelchairprototypephysical.jpg"
    ],
    imageCaptions: [
      "Initial wheelchair storage bracket prototype",
      "Fracture point during horizontal shake testing",
      "Secondary crack after downward load testing",
      "Updated 3D CAD-driven prototype geometry",
      "Physical PETG prototype after design iteration"
    ],
    thumbnail: "images/projects/p3-wheelchair-storage/wheelchair1.jpg"
  }
];
