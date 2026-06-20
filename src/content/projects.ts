import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "biped-robot-navigation",
    title: "Autonomous biped robot navigation",
    year: "2025",
    context: "Çözüm Makina",
    summary:
      "SLAM-based autonomous navigation for a bipedal robot — sensor fusion, map-building, and path planning under ROS 2.",
    depth: ["Perception", "Compute"],
    stack: ["ROS 2 (Humble / Jazzy)", "Python", "C++", "SLAM"],
  },
  {
    slug: "embedded-ai-camera-detection",
    title: "Real-time detection & segmentation on embedded AI camera",
    year: "2024",
    context: "Çözüm Makina",
    summary:
      "On-device inference pipeline for object detection and instance segmentation running on an RKNN-accelerated edge camera.",
    depth: ["Perception"],
    stack: ["RKNN", "Python", "OpenCV", "YOLO"],
  },
  {
    slug: "harbor-rtls",
    title: "Harbor RTLS from existing CCTV",
    year: "2024",
    context: "Çözüm Makina",
    summary:
      "Real-time location system for trucks and vehicles in a port, built on existing CCTV infrastructure — no new hardware.",
    depth: ["Perception", "Compute"],
    stack: ["Python", "OpenCV", "YOLO"],
  },
  {
    slug: "ohs-ai-cameras",
    title: "Occupational health & safety monitoring with AI cameras",
    year: "2024",
    context: "Çözüm Makina",
    summary:
      "Edge-deployed OHS system detecting PPE compliance and safety violations in real time across industrial environments.",
    depth: ["Perception"],
    stack: ["RKNN", "Python", "OpenCV", "YOLO"],
  },
  {
    slug: "sar-quadcopter",
    title: "Search-and-rescue quadcopter",
    year: "2023",
    context: "TÜBİTAK-sponsored",
    summary:
      "Autonomous indoor search-and-rescue UAV built for the TÜBİTAK competition — onboard compute, perception, and flight control.",
    depth: ["Perception", "Compute"],
    stack: ["ROS 1 (Noetic)", "Python", "C++", "OpenCV"],
  },
  {
    slug: "pcb-defect-detection",
    title: "PCB defect & anomaly detection",
    year: "2021",
    context: "ARGETÜRK",
    summary:
      "Classical CV pipeline for PCB inspection — template-matching, transform algorithms, and a GERBER-to-image renderer.",
    depth: ["Perception"],
    stack: ["Python", "OpenCV", "C++"],
  },
  {
    slug: "hitchhike-app",
    title: "Hitchhiking & car-sharing mobile app",
    year: "2023",
    context: "Broad",
    summary:
      "Lead engineer on a real-time ride-share platform leveraging Google Geolocation and Places APIs with a React Native frontend.",
    depth: ["Interface", "Compute"],
    stack: ["React Native", "Expo", "Node.js", "Google Maps API"],
  },
  {
    slug: "freelance-web-web3",
    title: "Freelance web & web3 builds",
    year: "2023–24",
    context: "Freelance",
    summary:
      "Full-stack web and decentralized application projects — Next.js sites, MERN backends, and smart-contract dApps.",
    depth: ["Interface"],
    stack: ["Next.js", "TypeScript", "Solidity", "ethers.js", "Tailwind CSS"],
  },
  {
    slug: "ethglobal-istanbul",
    title: "ETHGlobal Istanbul hackathon",
    year: "2023",
    context: "ETHGlobal",
    summary:
      "Built and shipped a dApp end-to-end during a 36-hour hackathon — on-chain logic, wallet integration, and polished frontend.",
    depth: ["Interface"],
    stack: ["Solidity", "Next.js", "wagmi", "ethers.js"],
  },
];
