import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>Top Page</h2>
      <SecoundaryButton onClick={onClickAdmin}>管理者ユーザ</SecoundaryButton>
      <SecoundaryButton onClick={onClickGeneral}>一般ユーザ</SecoundaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;
