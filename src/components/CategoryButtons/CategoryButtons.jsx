import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryButton from "./CategoryButton";
import useMenu from "../../hooks/useMenu";
import { useRef } from "react";

const CategoryButtons = () => {
  const { state } = useMenu();

  const scrollRef = useRef(null);

  // drag state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollByAmount = (amount) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <Box display="flex">
      <IconButton
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        onClick={() => scrollByAmount(-250)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          overflowX: { xs: "auto", sm: "hidden", md: "hidden" },
          cursor: { xs: "grab", sm: "grab", md: "default" },
          userSelect: "none",
          py: 1,

          "&:active": {
            cursor: "grabbing",
          },

          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        ref={scrollRef}
        onMouseDown={(e) => {
          isDown.current = true;
          startX.current = e.pageX;
          scrollLeft.current = scrollRef.current.scrollLeft;
        }}
        onMouseLeave={() => (isDown.current = false)}
        onMouseUp={() => (isDown.current = false)}
        onMouseMove={(e) => {
          if (!isDown.current) return;
          e.preventDefault();
          const x = e.pageX;
          const walk = x - startX.current;
          scrollRef.current.scrollLeft = scrollLeft.current - walk;
        }}
      >
        <Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row", md: "column" },
              gap: "0.5rem",
            }}
          >
            {state.categories.map((category) => (
              <CategoryButton key={category} category={category}>
                {category}
              </CategoryButton>
            ))}
          </Stack>
        </Box>
      </Box>
      <IconButton
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        onClick={() => scrollByAmount(250)}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default CategoryButtons;
