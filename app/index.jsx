import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
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
    { title: 'Projects', value: '15', subtitle: 'Completed' },
    { title: 'Experience', value: '2+', subtitle: 'mounth' },
    { title: 'Skills', value: '8+', subtitle: 'Technologies' },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.backgroundGradient}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            {/* Animated rings around profile */}
            <View style={styles.outerRing}>
              <View style={styles.innerRing}>
                <Image
                  source={require("../assets/image/me.jpg")} 
                  style={styles.profileImage}
                />
              </View>
            </View>
            
            <Text style={styles.name}>Natithorn Srimee</Text>
            <Text style={styles.studentId}>653450292-4</Text>
            <Text style={styles.major}>Computer and Information Science</Text>
            <Text style={styles.university}>Khon Kaen University</Text>
          </View>

          {/* Stats Section */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
                <Text style={styles.statSubtitle}>{stat.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <TouchableOpacity key={index} style={styles.skillCard}>
                <LinearGradient
                  colors={[skill.color + '20', skill.color + '10']}
                  style={styles.skillGradient}
                >
                  <Text style={styles.skillIcon}>{skill.icon}</Text>
                  <Text style={styles.skillName}>{skill.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Decorative Elements */}
        <View style={styles.decorativeElements}>
          <View style={[styles.floatingDot, { top: 100, left: 50 }]} />
          <View style={[styles.floatingDot, { top: 200, right: 60 }]} />
          <View style={[styles.floatingDot, { top: 350, left: 30 }]} />
          <View style={[styles.floatingDot, { top: 450, right: 40 }]} />
          <View style={[styles.floatingDot, { bottom: 200, left: 70 }]} />
          <View style={[styles.floatingDot, { bottom: 100, right: 80 }]} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
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
    borderColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#e91e63',
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
    borderColor: '#9c27b0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
  },
  studentId: {
    fontSize: 18,
    color: '#e91e63',
    fontWeight: '600',
    marginBottom: 8,
  },
  major: {
    fontSize: 16,
    color: '#bb86fc',
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center',
  },
  university: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
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
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: '#bb86fc',
    fontWeight: '600',
    marginBottom: 2,
  },
  statSubtitle: {
    fontSize: 12,
    color: '#8e8e93',
  },
  skillsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
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
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  skillIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
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
    backgroundColor: '#e91e63',
    opacity: 0.6,
  },
});