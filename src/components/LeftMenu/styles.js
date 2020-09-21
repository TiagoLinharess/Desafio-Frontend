import styled from 'styled-components';
import {
  Search,
  Home,
  Newspaper,
  LineChart,
  CloudUpload,
  FilePicture,
  CalendarAlt,
  People,
  Gear,
  Close,
} from '../../styles/icons';

export const SearchIcon = styled(Search)`
  margin-top: 55px;
  height: 43px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 48px;
  }

`;

export const CloseIcon = styled(Close)`
  margin-top: 40px;
  margin-bottom: auto;
  height: 44px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 49px;
  }
`;

export const GearIcon = styled(Gear)`
  margin-top: 40px;
  height: 32px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 37px;
  }
`;

export const PeopleIcon = styled(People)`
  margin-top: 40px;
  height: 32px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 37px;
  }
`;

export const HomeAltIcon = styled(Home)`
  margin-top: 35px;
  height: 32px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 37px;
  }
`;

export const NewspaperIcon = styled(Newspaper)`
  margin-top: 40px;
  height: 31px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 36px;
  }
`;

export const LineChartIcon = styled(LineChart)`
  margin-top: 40px;
  height: 32px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 37px;
  }
`;

export const CloudUploadIcon = styled(CloudUpload)`
  margin-top: 40px;
  height: 32px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 37px;
  }
`;

export const FilePictureIcon = styled(FilePicture)`
  margin-top: 40px;
  height: 28px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 33px;
  }
`;

export const CalendarAltIcon = styled(CalendarAlt)`
  margin-top: 40px;
  height: 33px;
  color: #c2c2c2;
  transition: height 0.2s;

  &:hover {
    cursor: pointer;
    height: 38px;
  }
`;

export const LeftMenu = styled.ul`
  height: 2vh;
  width: 88px;
  margin-top: -50px;
  background: transparent;
  position: left;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  transition: height 0.5s, background-color 0.2s;

  &:hover {
    background: #5636d3;
    cursor: pointer;
    height: 83vh;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;

    color: #c2c2c2;
  }

  @media (max-width: 458px) {
    margin-right: -80px;
    z-index: 2;

    &:hover {
      background: #5636d3;
      cursor: pointer;
      height: 750px;
    }
  }
`;
