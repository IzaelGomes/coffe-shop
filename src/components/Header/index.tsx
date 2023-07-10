import { ContentHeader, HeaderWrapper, IconCart, InforHeader } from "./style";

import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <ContentHeader>
       <Link to={"/"}><img src={logo} alt="coffe-logo" /></Link> 

        <InforHeader>
          <div>
            <MapPin color="#4B2995" fill="#4B2995" size={32} />
            <span>Porto Alegre, RS</span>
          </div>

          <IconCart>
            <Link className="teset" to={"/order"}>
              <ShoppingCart fill="#C47F17" weight="fill" size={32} />
            </Link>
          </IconCart>
        </InforHeader>
      </ContentHeader>
    </HeaderWrapper>
  );
};

export { Header };
