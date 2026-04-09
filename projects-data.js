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
    shortDesc: "Wheelchair storage bracket redesign driven by physical failure testing, material upgrades, and iterative structural improvements.",
    longDesc: "Stage 1: What? (Context & Contribution)\n\nThe objective of this project was to design a secure, weather-resistant storage unit for our client, Mark, who lives with Juvenile Rheumatoid Arthritis. Because Mark has limited finger dexterity, a primary constraint was that the device must not utilize zippers or buttons. As the Team Manager, I was responsible for the 20-hour 3D printing schedule, managing our $75.00 budget, and personally calibrating the CAD models.\n\nDuring the testing phase, our team evaluated the structural integrity of our 3D-printed bracket by vigorously shaking it to simulate the motion of a powerchair. I initially felt a sharp sense of disappointment when the PLA bracket fractured under an estimated 40-Newton simulated horizontal force. This failure revealed a critical flaw: our initial curved geometry was inadequate for the weight distribution. To fix this, I applied engineering judgment to extend the flat portion of the bracket, modify the diagonal supports, and pivot from brittle PLA to high-strength PETG (Polyethylene Terephthalate Glycol) for the mounting system.\n\nStage 2: So What? (Reflection & Impact)\n\nThe structural failure of the bracket was ultimately a success because it exposed a critical oversight before we delivered a product to a client who relies on it for daily mobility. This experience shattered my misconception that a successful digital CAD model automatically translates to a functional physical product. It forced a personal dialogue regarding my design priorities; I realized I had focused too much on how the device looked rather than how it functioned. My perspective shifted, and I now understand that early, rigorous physical stress-testing is not just a validation checklist, but an essential iterative tool for uncovering invisible load-bearing flaws that digital simulations might miss.\n\nStage 3: Now What? (Outcomes & Future Growth)\n\nThe final iteration was a success: the refined PETG bracket withstood aggressive vibration and supported a maximum vertical force of 16.3 N, indicating negligible risk of failure under standard use. Additionally, our \"no-zipper\" Velcro and shower-curtain lid system successfully housed 500% of the required daily items.\n\nMoving forward, I have set a goal to incorporate physical stress simulations earlier in the prototyping phase to preemptively identify weak points. If given more time and budget, I would challenge my current design by replacing the repurposed fabric lid with a rigid 3D-printed lid and a magnetic latch, which would offer better long-term durability and ease of use for a client with limited dexterity.",
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
