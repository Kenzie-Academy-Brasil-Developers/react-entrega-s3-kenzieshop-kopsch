import { CategoryBar, Category, PlusSignal } from "./styles";

const Aside = ({ category }) => {
  return (
    <CategoryBar>
      <Category>{category}</Category>
      <PlusSignal>+</PlusSignal>
    </CategoryBar>
  );
};

export default Aside;
