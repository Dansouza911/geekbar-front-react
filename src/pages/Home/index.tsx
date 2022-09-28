import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";


const Home = () => {
   const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: 'long'});

  return (
    <S.Home>
      <Menu 
        active={RoutePath.HOME}
        navItems={navigationItems}/>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Geek Bar</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>{dateDescription}</S.HomeHeaderDetailsDate>
            </div>
              <S.HomeHeaderDetailsSearch>
                <Search />
                <input type="text" placeholder="Procure no cardápio"/>
              </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <S.HomeProductTitle>
          <b>Pratos</b>
        </S.HomeProductTitle>
        <S.HomeProductList>
          <p>Lista de produtos Aqui</p>
        </S.HomeProductList>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
