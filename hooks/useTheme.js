const useTheme = () => {
  return {
    pallete: {
      text: {
        main: "#181D2D",
        light: "#181D2D",
        dark: "#fff"
      },
      contrastText: {
        main: "#fff",
        light: "#fff",
        dark: "#fff"
      },
      primary: {
        main: "#324A59",
        light: "#324A59",
        dark: "#324A59"
      },
      secondary: {
        main: "",
        light: "",
        dark: ""
      },
      error: {
        main: "#ff3344",
        light: "#ff3344",
        dark: "#ff3344"
      },
      warning: {
        main: "#ff8833",
        light: "#ff8833",
        dark: "#ff8833"
      },
      info: {
        main: "",
        light: "",
        dark: ""
      },
      gray: {
        main: "#C1C7D0"
      }
    },
    spacing: {
      screenPaddingVertical: 20,
      screenPaddingHorizontal: 20
    }
  }
}

export default useTheme
