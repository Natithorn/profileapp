import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";

const Home = () => {
  const { color, isDarkMode } = useTheme();
  
  const skills = [
    { name: 'Python', color: '#3776ab', icon: '🐍' },
    { name: 'HTML', color: '#e34f26', icon: '🌐' },
    { name: 'CSS', color: '#1572b6', icon: '🎨' },
    { name: 'JavaScript', color: '#f7df1e', icon: '⚡' },
    { name: 'ChatGPT', color: '#10a37f', icon: '🤖' },
    { name: 'Chatbot', color: '#4285f4', icon: '💬' },
    { name: 'Postman', color: '#ff6c37', icon: '📮' },
    { name: 'n8n', color: '#ea4b71', icon: '🔄' },
  ];

  const stats = [
    { title: 'Projects', value: '12', subtitle: 'Completed' },
    { title: 'Experience', value: '3+', subtitle: 'Mounth' },
    { title: 'Skills', value: '8+', subtitle: 'Technologies' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: color.background }]}>
      <LinearGradient
        colors={[color.gradientStart, color.gradientMiddle, color.gradientEnd]}
        style={styles.backgroundGradient}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            {/* Animated rings around profile */}
            <View style={[styles.outerRing, { borderColor: color.accent, shadowColor: color.accent }]}>
              <View style={[styles.innerRing, { borderColor: color.primary }]}>
                <Image
                  source={require("../assets/image/me.jpg")} 
                  style={[styles.profileImage, { borderColor: color.background }]}
                />
              </View>
            </View>
            
            <Text style={[styles.name, { color: color.text }]}>Natithorn Srimee</Text>
            <Text style={[styles.studentId, { color: color.accent }]}>653450292-4</Text>
            <Text style={[styles.major, { color: color.primary }]}>Computer and Information Science</Text>
            <Text style={[styles.university, { color: color.textSecondary }]}>Khon Kaen University</Text>
            <Text style={[styles.course, { color: color.info }]}>IN405109 - Hybrid Mobile App Development</Text>
          </View>

          {/* Stats Section */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={[styles.statItem, { backgroundColor: color.skillBackground, borderColor: color.skillBorder }]}>
                <Text style={[styles.statValue, { color: color.text }]}>{stat.value}</Text>
                <Text style={[styles.statTitle, { color: color.primary }]}>{stat.title}</Text>
                <Text style={[styles.statSubtitle, { color: color.textSecondary }]}>{stat.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.skillsSection}>
          <Text style={[styles.sectionTitle, { color: color.text }]}>My Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <TouchableOpacity key={index} style={styles.skillCard}>
                <LinearGradient
                  colors={[skill.color + '20', skill.color + '10']}
                  style={[styles.skillGradient, { borderColor: color.skillBorder }]}
                >
                  <Text style={styles.skillIcon}>{skill.icon}</Text>
                  <Text style={[styles.skillName, { color: color.text }]}>{skill.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Decorative Elements */}
        <View style={styles.decorativeElements}>
          <View style={[styles.floatingDot, { top: 100, left: 50, backgroundColor: color.accent }]} />
          <View style={[styles.floatingDot, { top: 200, right: 60, backgroundColor: color.primary }]} />
          <View style={[styles.floatingDot, { top: 350, left: 30, backgroundColor: color.secondary }]} />
          <View style={[styles.floatingDot, { top: 450, right: 40, backgroundColor: color.accent }]} />
          <View style={[styles.floatingDot, { bottom: 200, left: 70, backgroundColor: color.primary }]} />
          <View style={[styles.floatingDot, { bottom: 100, right: 80, backgroundColor: color.secondary }]} />
        </View>
        
        {/* Navigation Link */}
        <Link href={"/about"} style={{ marginTop: 30, alignSelf: 'center' }}>
          <View style={[styles.linkButton, { backgroundColor: color.buttonPrimary, borderColor: color.border }]}>
            <Text style={[styles.linkText, { color: color.buttonText }]}>About Us →</Text>
          </View>
        </Link>
        <Link href={"/book"} style={{ marginTop: 30, alignSelf: 'center' }}>
          <View style={[styles.linkButton, { backgroundColor: color.buttonPrimary, borderColor: color.border }]}>
            <Text style={[styles.linkText, { color: color.buttonText }]}>Book →</Text>
          </View>
        </Link>
        <Link href={"/signin"} style={{ marginTop: 30, alignSelf: 'center' }}>
          <View style={[styles.linkButton, { backgroundColor: color.buttonPrimary, borderColor: color.border }]}>
            <Text style={[styles.linkText, { color: color.buttonText }]}>signin →</Text>
          </View>
        </Link>
        <Link href={"/signup"} style={{ marginTop: 30, alignSelf: 'center' }}>
          <View style={[styles.linkButton, { backgroundColor: color.buttonPrimary, borderColor: color.border }]}>
            <Text style={[styles.linkText, { color: color.buttonText }]}>signup →</Text>
          </View>
        </Link>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home; 

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    color: "#fff",
  },
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    minHeight: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  outerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  innerRing: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  studentId: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  major: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center',
  },
  university: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  course: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  statSubtitle: {
    fontSize: 12,
  },
  skillsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  skillCard: {
    width: '45%',
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
  skillGradient: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
  },
  skillIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  floatingDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.6,
  },
  linkButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});