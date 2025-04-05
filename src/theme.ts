


export const tokens = {
    grey: {
      100: "#d1d3da", // Light grey with a slight green tint
      200: "#b3b6c2",
      300: "#95989f",
      400: "#777b7d",
      500: "#5a5e60",
      600: "#48494e",
      700: "#36373c",
      800: "#242427",
      900: "#121214",
    },
    primary: {
      // Neon green shades
      100: "#b3ffcc", // Very light neon green
      200: "#80ffaa",
      300: "#4dff88",
      400: "#1aff66",
      500: "#00ff41", // Main neon green from your theme
      600: "#00cc34",
      700: "#009926",
      800: "#006619",
      900: "#00330d",
    },
    secondary: {
      // Darker green for contrast
      100: "#ccffee",
      200: "#99ffdd",
      300: "#66ffcc",
      400: "#33ffbb",
      500: "#00ffaa",
      600: "#00cc88",
      700: "#009966",
      800: "#006644",
      900: "#003322",
    },
    tertiary: {
      // Dim white for subtle accents
      500: "#e0e0e0",
    },
    background: {
      light: "#1a1a1a", // Slightly lighter than the main background
      main: "#0c0c0c", // Main background from your theme
    },
  };
  
  // MUI theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500], // #00ff41
        light: tokens.primary[400], // #1aff66
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500], // #00ffaa
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500], // #5a5e60
      },
      background: {
        default: tokens.background.main, // #0c0c0c
        light: tokens.background.light, // #1a1a1a
      },
    },
    typography: {
      fontFamily: ["Changa", "sans-serif"].join(","), // Default font is Changa
      fontSize: 14, // Slightly larger base font size for readability
      h1: {
        fontFamily: ["Exo 2", "sans-serif"].join(","),
        fontSize: 36, // Larger for the hacker aesthetic
        fontWeight: 700,
        color: tokens.primary[500], // Neon green
        textShadow: "0 0 10px rgba(0, 255, 65, 0.7)", // Glow effect
      },
      h2: {
        fontFamily: ["Exo 2", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 600,
        color: tokens.primary[400],
        textShadow: "0 0 8px rgba(0, 255, 65, 0.5)",
      },
      h3: {
        fontFamily: ["Exo 2", "sans-serif"].join(","),
        fontSize: 22,
        fontWeight: 500,
        color: tokens.grey[100],
        textShadow: "0 0 5px rgba(0, 255, 65, 0.3)",
      },
      h4: {
        fontFamily: ["Changa", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: 400,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Changa", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Changa", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400,
        color: tokens.grey[700],
      },
    },
  };