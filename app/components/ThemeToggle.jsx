import { TouchableOpacity, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path as necessary

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, color } = useTheme(); // Assuming useTheme is a custom hook that provides theme context
  
  return (
    <TouchableOpacity 
      onPress={toggleTheme}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.surface,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 10,
        borderWidth: 1,
        borderColor: color.border,
      }}
    >
      <Text style={{ fontSize: 16, marginRight: 6 }}>
        {isDarkMode ? "🌙" : "☀️"}
      </Text>
      <Text
        style={{
          color: color.text,
          fontSize: 14,
          fontWeight: '600',
        }}
      >
        {isDarkMode ? "Dark" : "Light"}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;
