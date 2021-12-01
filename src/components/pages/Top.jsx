import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext, UserProvider } from "../../providers/UserProvider";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

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
