import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { router } from "expo-router";

const BookNew = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = async () => {
    if (!title || !author) {
      Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    try {
      const response = await fetch("http://10.0.15.34:3000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          author,
          description,
          genre,
          year: parseInt(year) || undefined,
          price: parseFloat(price) || undefined,
          available,
        }),
      });
      if (response.ok) {
        Alert.alert("เพิ่มหนังสือสำเร็จ");
        router.replace("/book");
      } else {
        Alert.alert("เกิดข้อผิดพลาดในการเพิ่มหนังสือ");
      }
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>เพิ่มหนังสือใหม่</Text>
      <TextInput style={styles.input} placeholder="ชื่อหนังสือ" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="ผู้แต่ง" value={author} onChangeText={setAuthor} />
      <TextInput style={styles.input} placeholder="คำอธิบาย" value={description} onChangeText={setDescription} multiline />
      <TextInput style={styles.input} placeholder="ประเภท" value={genre} onChangeText={setGenre} />
      <TextInput style={styles.input} placeholder="ปีที่พิมพ์" value={year} onChangeText={setYear} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="ราคา" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <View style={styles.row}>
        <Text style={{marginRight: 10}}>มีจำหน่าย</Text>
        <Button title={available ? "✔" : "✗"} onPress={() => setAvailable(!available)} />
      </View>
      <Button title="บันทึก" onPress={handleSubmit} color="#007BFF" />
    </ScrollView>
  );
};

export default BookNew;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#007BFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
});
