import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";
import OrderDetails from "components/OrderDetails";
import { ProductResponse } from "types/Product";
import { products } from "mocks/products";
import { orders } from "mocks/orders";


const Home = () => {
   const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: 'long'});
   const handleSelection = (product: ProductResponse) => {};
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
        <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </ProductItemList>

        </S.HomeProductList>
      </S.HomeContent>
      <aside>
        <OrderDetails/>
      </aside>
    </S.Home>
  );
};

export default Home;
