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
    date: "Sept. – Dec. 2024",
    images: [
      "images/projects/Dual-Arm-Gripper-End-Effector/coverarmendeffector.png",
      "images/projects/Dual-Arm-Gripper-End-Effector/armmodel.png",
      "images/projects/Dual-Arm-Gripper-End-Effector/authenticatecode.png"
    ],
    thumbnail: "images/projects/Dual-Arm-Gripper-End-Effector/coverarmendeffector.png"
  }
];
