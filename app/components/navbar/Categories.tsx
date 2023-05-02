"use client";
import React from "react";
import Container from "../Container";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "this property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this property is on a island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "this property is in a castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
