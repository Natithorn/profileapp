import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";

const About = () => {
  const { color, isDarkMode } = useTheme();

  const courseInfo = {
    code: "IN405109",
    name: "Hybrid Mobile Application Program",
    semester: "1/2568",
    instructor: "Tanapattara Wongkhamchan",
    description: "สถาปัตยกรรมฮาร์ดแวร์ คุณลักษณะและข้อจํากัดของอุปกรณ์เคลื่อนที่ เครื่องมือและภาษาที่ใช้สําหรับพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่หลากหลายแพลตฟอร์ม การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่โดยใช้ภาษาหลากหลายแพลตฟอร์ม กระบวนการพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่หลากหลายแพลตฟอร์ม การใช้หน่วยความจําและส่วนเก็บบันทึกข้อมูล การขออนุญาตและการเข้าถึงส่วนฮาร์ดแวร์ ส่วนติดต่อกับผู้ใช้ การสื่อสารเครือข่ายกับภายนอก การเชื่อมโยงกับระบบเครืองแม่ข่าย การทดสอบโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่โดยใช้ระบบคอมพิวเตอร์ ประเด็นด้านความมั่นคง การฝึกปฏิบัติ",
  };

  const learningOutcomes = [
    "เข้าใจหลักการพัฒนาแอปพลิเคชันมือถือแบบไฮบริด",
    "สามารถใช้ React Native ในการพัฒนาแอปพลิเคชัน",
    "เข้าใจการจัดการ State และ Navigation",
  ];

  const technologies = [
    { name: "React Native", icon: "📱", description: "Framework หลัก" },
    { name: "Expo", icon: "🚀", description: "Development Platform" },
    { name: "JavaScript", icon: "⚡", description: "Programming Language" },
    { name: "Node.js", icon: "🟢", description: "Backend Runtime" },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: color.background }]}>
      <LinearGradient
        colors={[color.gradientStart, color.gradientMiddle, color.gradientEnd]}
        style={styles.backgroundGradient}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={[styles.courseIcon, { backgroundColor: color.primary + '20', borderColor: color.primary }]}>
            <Text style={styles.iconText}>📚</Text>
          </View>
          <Text style={[styles.courseCode, { color: color.accent }]}>{courseInfo.code}</Text>
          <Text style={[styles.courseName, { color: color.text }]}>{courseInfo.name}</Text>
          <Text style={[styles.semester, { color: color.info }]}>ภาคเรียนที่ {courseInfo.semester}</Text>
        </View>

        {/* Course Info Section */}
        <View style={[styles.section, { backgroundColor: color.skillBackground, borderColor: color.skillBorder }]}>
          <Text style={[styles.sectionTitle, { color: color.text }]}>รายละเอียดวิชา</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: color.primary }]}>อาจารย์ผู้สอน:</Text>
            <Text style={[styles.value, { color: color.text }]}>{courseInfo.instructor}</Text>
          </View>
          <Text style={[styles.description, { color: color.textSecondary }]}>{courseInfo.description}</Text>
        </View>

        {/* Learning Outcomes Section */}
        <View style={[styles.section, { backgroundColor: color.skillBackground, borderColor: color.skillBorder }]}>
          <Text style={[styles.sectionTitle, { color: color.text }]}>ผลการเรียนรู้</Text>
          {learningOutcomes.map((outcome, index) => (
            <View key={index} style={styles.outcomeItem}>
              <Text style={[styles.outcomeNumber, { color: color.accent }]}>{index + 1}.</Text>
              <Text style={[styles.outcomeText, { color: color.textSecondary }]}>{outcome}</Text>
            </View>
          ))}
        </View>

        {/* Technologies Section */}
        <View style={[styles.section, { backgroundColor: color.skillBackground, borderColor: color.skillBorder }]}>
          <Text style={[styles.sectionTitle, { color: color.text }]}>เทคโนโลยีที่ใช้</Text>
          <View style={styles.techGrid}>
            {technologies.map((tech, index) => (
              <TouchableOpacity key={index} style={[styles.techCard, { backgroundColor: color.card, borderColor: color.border }]}>
                <Text style={styles.techIcon}>{tech.icon}</Text>
                <Text style={[styles.techName, { color: color.text }]}>{tech.name}</Text>
                <Text style={[styles.techDescription, { color: color.textMuted }]}>{tech.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Decorative Elements */}
        <View style={styles.decorativeElements}>
          <View style={[styles.floatingDot, { top: 80, left: 40, backgroundColor: color.primary }]} />
          <View style={[styles.floatingDot, { top: 180, right: 50, backgroundColor: color.accent }]} />
          <View style={[styles.floatingDot, { top: 320, left: 60, backgroundColor: color.secondary }]} />
          <View style={[styles.floatingDot, { bottom: 150, right: 30, backgroundColor: color.info }]} />
        </View>

        {/* Navigation Link */}
        <Link href={"/"} style={{ marginTop: 30, alignSelf: 'center' }}>
          <View style={[styles.linkButton, { backgroundColor: color.buttonPrimary, borderColor: color.border }]}>
            <Text style={[styles.linkText, { color: color.buttonText }]}>← Back to Profile</Text>
          </View>
        </Link>
      </LinearGradient>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    minHeight: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  courseIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconText: {
    fontSize: 32,
  },
  courseCode: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseName: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  credits: {
    fontSize: 16,
    marginBottom: 4,
  },
  semester: {
    fontSize: 16,
    fontWeight: '500',
  },
  section: {
    marginBottom: 25,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoRow: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  outcomeItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 10,
  },
  outcomeNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 25,
  },
  outcomeText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  techCard: {
    width: '48%',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 15,
  },
  techIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  techName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  techDescription: {
    fontSize: 12,
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
