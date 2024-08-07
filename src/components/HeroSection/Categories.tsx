'use client';

import Link from 'next/link';

import React from 'react';

// don't delete this line below
import { usePathname, useSearchParams } from 'next/navigation';
import { AiFillShop } from 'react-icons/ai';
import { TbPlaneInflight, TbBus, TbKayak, TbTrekking } from 'react-icons/tb';
import { MdMapsHomeWork } from 'react-icons/md';
import { RiHotelFill, RiSailboatLine } from 'react-icons/ri';
import { SiYourtraveldottv } from 'react-icons/si';
import { GiShipBow, GiCampCookingPot } from 'react-icons/gi';
import { FaTaxi } from 'react-icons/fa';
// import { BsSnow } from 'react-icons/bs';
// import { IoDiamond } from 'react-icons/io5';

import CategoryBox from './CategoryBox';
import Container from './Container';

export const categories = [
  {
    label: 'Flights',
    icon: TbPlaneInflight,
    description: 'This property is close to the beach!',
    link: 'https://sublimeislands.in',
  },
  {
    label: 'Hotels',
    icon: RiHotelFill,
    description: 'This property is has windmills!',
    link: 'https://sublimeislands.in/Hotels',
  },
  {
    label: 'Ships',
    icon: GiShipBow,
    description: 'This property is modern!',
    link: 'https://sublimeislands.in/Ships',
  },
  {
    label: 'Bus',
    icon: TbBus,
    description: 'This property is in the countryside!',
    link: 'https://sublimeislands.in/Bus',
  },
  {
    label: 'Cabs',
    icon: FaTaxi,
    description: 'This is property has a beautiful pool!',
    link: 'https:sublimeislands.in/Cabs',
  },
  {
    label: 'Ferry',
    icon: RiSailboatLine,
    description: 'This property is on an island!',
    link: 'https://sublimeislands.in/Ferries',
  },
  {
    label: 'Water Sports',
    icon: TbKayak,
    description: 'This property is near a lake!',
    link: 'https://sublimeislands.in/Water-Sports',
  },
  {
    label: 'Paying Guest',
    icon: MdMapsHomeWork,
    description: 'This property has skiing activies!',
    link: 'https://sublimeislands.in/Paying-Guest',
  },
  {
    label: 'Travel Package',
    icon: SiYourtraveldottv,
    description: 'This property is an ancient castle!',
    link: 'https://sublimeislands.in/Package',
  },
  {
    label: 'Dining',
    icon: GiCampCookingPot,
    description: 'This property is in a spooky cave!',
    link: 'https://sublimeislands.in/Dinnings',
  },
  {
    label: 'Trekking',
    icon: TbTrekking,
    description: 'This property offers camping activities!',
    link: 'https://sublimeislands.in/Trekking',
  },
  {
    label: 'Shops',
    icon: AiFillShop,
    description: 'This property is in arctic environment!',
    link: 'https://sublimeislands.in/Shops',
  },
  // {
  //   label: 'Desert',
  //   icon: GiCactus,
  //   description: 'This property is in the desert!',
  //   link: 'https:sublimeislands.in',
  // },
  // {
  //   label: 'Barns',
  //   icon: GiBarn,
  //   description: 'This property is in a barn!',
  //   link: 'https:sublimeislands.in',
  // },
  // {
  //   label: 'Lux',
  //   icon: IoDiamond,
  //   description: 'This property is brand new and luxurious!',
  //   link: 'https:sublimeislands.in',
  // },
];

const Categories = () => {
  // don't delete these lines below
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          flex
          flex-row 
          items-center 
          justify-between 
          overflow-x-auto
          pt-4
        "
      >
        {categories.map((item) => (
          <Link href={item.link} target="_blank">
            <CategoryBox
              key={item.label}
              label={item.label}
              IconType={item.icon}
              // don't delete this line below
              selected={category === item.label}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
