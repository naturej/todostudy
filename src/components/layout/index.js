import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 100px auto;
  max-width: 500px;
`;

const S = {
  Wrapper,
};
