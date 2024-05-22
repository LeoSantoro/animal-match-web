import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from 'styled-components';
import logo from '../images/logo4.png';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import logoGreen from '../images/logo-green.png';
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 0 16px;
  height: 100px;
  background-color: #83A872;
  display: flex;
`
const LogoImage = styled.img``

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`
const MenuContainer = styled.div`
display: flex;
width: 100px;
align-items: center;

`
const MenuSide = styled.div`
  background: #FBF0ED;
  height: 100vh;
  width: 300px;
  left: 0px;
  z-index: 3; 
  position: fixed;
  transition: left 0.3s ease-out 0s, right 0.3s ease-out 0s;
  top: 0px;
  bottom: 0px;
  left: -300px;
`

const CloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 40px ;
  
`

const UserName = styled.p `
padding: 40px 16px 16px;

  color: #FF8B6A;
`

const ContainerItems = styled.div`
  font-size: 18px;
  font-weight: bold;
  a {
    all: unset;
  }
`

const MenuItem = styled.div`
  display: flex;
  padding: 12px 16px;
  font-size: 14px;
  color: #747474;
  align-items: center;
  &:hover {
    background: #FF8B6A;
    color: #FFFFFF;
    svg {
      color: #FBF0ED;
    }
  }
  svg {
  color: #83A872;
    margin-right: 20px;
  }
`

const Overlay = styled.div`
  position: fixed;  
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2; 
  cursor: pointer; 

`

function onClickMenu(sidebarStyle, overlayStyle) {
  document.getElementById("sideBar").style.left = sidebarStyle;
  document.getElementById("overlay").style.display = overlayStyle;

}


const menuItems = [
  {
    name: 'Perfil',
    icon: <PersonRoundedIcon />,
    link: '/profile'
  },
  {
    name: 'Animais',
    icon: <PetsRoundedIcon />,
    link: '/animals'
  },
  {
    name: 'Processo de Adoção',
    icon: <VolunteerActivismRoundedIcon />,
    link: '/adopt'
  },
  {
    name: 'Configurações',
    icon: <SettingsRoundedIcon />,
    link: '/settings'
  },
]


export default function NavBar() {
  /* username da api */
  const userName = 'João'


  return (
    <> 
        <Overlay id="overlay"/>
        <Container> 
        {/* Menu SideBar */}
        <MenuSide id="sideBar">
          <CloseContainer onClick={() => onClickMenu('-300px', 'none')}>
            <img src={logoGreen} />
            <CloseRoundedIcon fontSize='large' style={{ color: '#FF8B6A'}}/>
          </CloseContainer>
          <ContainerItems>
            <UserName>Bem vindo, {userName} </UserName>
          {menuItems.map((item) => (
            <Link to={item.link}>
            <MenuItem>
              {item.icon}
              <p>
                {item.name}
              </p>
            </MenuItem>
            </Link>
          ))}
            </ContainerItems>
        </MenuSide>
        {/* Menu SideBar */}
        <MenuContainer onClick={() => onClickMenu('0px', 'block')}>
          <MenuRoundedIcon fontSize='large' style={{ color: '#ffffff' }}/>
        </MenuContainer>
        <LogoContainer>
          <LogoImage src={logo}/>
        </LogoContainer>
        </Container>
    </>
  )
}
