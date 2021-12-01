import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;

  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #f5f5dc;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
