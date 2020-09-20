import React from 'react';
import {
  LeftMenu,
  SearchIcon,
  HomeAltIcon,
  NewspaperIcon,
  LineChartIcon,
  CloudUploadIcon,
  FilePictureIcon,
  CalendarAltIcon,
  PeopleIcon,
  GearIcon,
  CloseIcon,
} from './styles';

function Header() {
  return (
    <LeftMenu>
      <li><SearchIcon /></li>
      <li><HomeAltIcon /></li>
      <li><NewspaperIcon /></li>
      <li><LineChartIcon /></li>
      <li><CloudUploadIcon /></li>
      <li><FilePictureIcon /></li>
      <li><CalendarAltIcon /></li>
      <li><PeopleIcon /></li>
      <li><GearIcon /></li>
      <li><CloseIcon /></li>
    </LeftMenu>
  );
}

export default Header;
