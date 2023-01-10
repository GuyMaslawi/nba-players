import styled from "@emotion/styled";

interface ContainerProps {
  BgColor: string;
}

export const Container = styled("div")((props: ContainerProps) => ({
  padding: "10px",
  borderRadius: "15px",
  backgroundColor: props.BgColor,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  overflow: "auto",
}));

export const Details = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
      background-color: #e8e8e8;
    }
  }
`;
