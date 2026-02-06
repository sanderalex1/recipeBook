export const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },

  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      fontWeight: 400,
    }),
  },

  variants: [
    {
      props: { variant: "category" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: "40px",
        color: theme.palette.text.primary,
      }),
    },

    {
      props: { variant: "selectedCategory" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "40px",
        color: theme.palette.text.primary,
      }),
    },

    {
      props: { variant: "navigation" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        borderRadius: "10px",
        color: theme.palette.text.primary,

        "&:hover": {
          backgroundColor: theme.palette.background.paper,
        },
      }),
    },
  ],
};
