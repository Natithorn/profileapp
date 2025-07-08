import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    color: {
      // Background colors
      background: isDarkMode ? "#000000" : "#ffffff",
      surface: isDarkMode ? "#121212" : "#f8f9fa",
      card: isDarkMode ? "#1e1e1e" : "#ffffff",
      
      // Text colors
      text: isDarkMode ? "#ffffff" : "#000000",
      textSecondary: isDarkMode ? "#b3b3b3" : "#6c757d",
      textMuted: isDarkMode ? "#808080" : "#adb5bd",
      
      // Primary brand colors
      primary: isDarkMode ? "#bb86fc" : "#6200ee",
      primaryLight: isDarkMode ? "#d7b9ff" : "#7c4dff",
      secondary: isDarkMode ? "#03dac6" : "#03dac5",
      
      // Accent colors
      accent: isDarkMode ? "#e91e63" : "#e91e63",
      accentLight: isDarkMode ? "#f06292" : "#f06292",
      
      // Status colors
      success: isDarkMode ? "#4caf50" : "#28a745",
      warning: isDarkMode ? "#ff9800" : "#ffc107",
      error: isDarkMode ? "#cf6679" : "#dc3545",
      info: isDarkMode ? "#2196f3" : "#17a2b8",
      
      // Gradient colors
      gradientStart: isDarkMode ? "#1a1a2e" : "#6366f1",
      gradientMiddle: isDarkMode ? "#16213e" : "#8b5cf6", 
      gradientEnd: isDarkMode ? "#0f3460" : "#a855f7",
      
      // UI element colors
      border: isDarkMode ? "#333333" : "#e9ecef",
      shadow: isDarkMode ? "#000000" : "#00000020",
      overlay: isDarkMode ? "#00000080" : "#00000030",
      
      // Button colors
      buttonPrimary: isDarkMode ? "#bb86fc" : "#6200ee",
      buttonSecondary: isDarkMode ? "#333333" : "#6c757d",
      buttonText: isDarkMode ? "#000000" : "#ffffff",
      
      // Skill card colors (for gradient backgrounds)
      skillBackground: isDarkMode ? "#1e1e1e40" : "#ffffff80",
      skillBorder: isDarkMode ? "#ffffff20" : "#00000010",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
