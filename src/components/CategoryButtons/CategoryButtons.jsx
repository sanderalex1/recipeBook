import { Stack } from "@mui/material";
import CategoryButton from "../UI/CategoryButton";
import useMenu from "../../hooks/useMenu";

const CategoryButtons = () => {
  const { state } = useMenu();

  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {state.categories.map((category) => (
        <CategoryButton key={category} category={category}>
          {category}
        </CategoryButton>
      ))}
    </Stack>
  );
};

export default CategoryButtons;
