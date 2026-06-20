// The three strata of the Focal Plane.
// Each stratum is one "layer" the focal line can focus on as the user scrolls.
// Breadth is shown through depth, not badges — one line in focus at a time.

export interface Stratum {
  /** Stable id, used for anchors / aria / focus targets. */
  id: string;
  /** Display name shown alongside the focal line. */
  name: string;
  /** A short descriptor that frames the stratum. */
  caption: string;
  /** The fields revealed when this stratum is in focus. */
  fields: string[];
}

export const STRATA: Stratum[] = [
  {
    id: "perception",
    name: "Perception",
    caption: "how machines see",
    fields: [
      "AI cameras",
      "computer vision",
      "SLAM",
      "sensor fusion",
      "edge / on-device inference",
    ],
  },
  {
    id: "compute",
    name: "Compute",
    caption: "how machines decide",
    fields: [
      "ML / AI",
      "ROS 1 (Noetic) / ROS 2 (Humble · Jazzy)",
      "autonomous navigation",
      "electronics / embedded",
    ],
  },
  {
    id: "interface",
    name: "Interface",
    caption: "how people connect",
    fields: [
      "full-stack web (Next.js, MERN)",
      "web3 (smart contracts, dApps)",
      "3D design",
    ],
  },
];
