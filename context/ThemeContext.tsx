// import { createContext, ReactNode, useState } from "react";

// export const ThemeContext = createContext({
//   currentTheme: "light",
//   selectedTheme: (newTheme: string) => {},
// });

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState("light");

//   const selectedTheme = (newTheme: string) => {
//     setTheme(newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ currentTheme: theme, selectedTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

import { createContext, ReactNode, useState } from "react";
import { View, useColorScheme } from "react-native";

interface ThemeContextType {
  currentTheme: string;
  selectedTheme: (newTheme: string) => void;
  useSystemTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  selectedTheme: () => {},
  useSystemTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState("light");

  const selectedTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const useSystemTheme = (newTheme: string) => {
    if (colorScheme == "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, selectedTheme, useSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
