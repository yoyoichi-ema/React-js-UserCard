import { Herder } from "../atoms/layout/Herder";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Herder />
      {children}
      <Footer />
    </>
  );
};
