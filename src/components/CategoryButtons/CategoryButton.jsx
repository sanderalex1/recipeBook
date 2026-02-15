import { Button } from "@mui/material";
import useMenu from "../../hooks/useMenu";

const CategoryButton = ({ category }) => {
  const iconSrc = `${import.meta.env.BASE_URL}/icons/${category.toLowerCase()}.png`;
  const { state, actions } = useMenu();

  return (
    <Button
      variant={
        state.selectedCategory === category ? "selectedCategory" : "category"
      }
      sx={{
        maxWidth: "max-content",
        textTransform: "capitalize",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
      startIcon={
        <img
          src={iconSrc}
          alt={category}
          width={24}
          height={24}
          style={{ display: "block" }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      }
      onClick={() => {
        actions.selectCategory(category);
      }}
    >
      {category}
    </Button>
  );
};

export default CategoryButton;
