import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";

const Home = () => {
  
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Geek Bar</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>Aqui data</S.HomeHeaderDetailsDate>
            </div>
              <S.HomeHeaderDetailsSearch>
                <Search />
                <input type="text" placeholder="Procure no cardápio"/>
              </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
