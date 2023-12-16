import * as Image from "assets";

export interface IOurNetworkData {
  id: number;
  img: string;
  alt: string;
  name: string;
  description: string;
}

export const ourNetworkData: IOurNetworkData[] = [
  {
    id: 1,
    alt: "Bangladesh",
    name: "Bangladesh",
    img: `${Image.Bangladesh}`,
    description:
      "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    id: 2,
    alt: "United States",
    name: "United States",
    img: `${Image.UnitedStates}`,
    description:
      "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    id: 3,
    alt: "Australia",
    name: "Australia",
    img: `${Image.Australia}`,
    description:
      "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    id: 4,
    alt: "China",
    name: "China",
    img: `${Image.China}`,
    description:
      "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
];
