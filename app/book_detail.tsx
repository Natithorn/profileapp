import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, ScrollView, TouchableOpacity } from "react-native";

const BookDetail = () => {
  const [book, setBook] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/books/${id}`);
      const data = await response.json();
      setBook(data.book);
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาดในการโหลดข้อมูล");
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...book,
          year: book.year ? parseInt(book.year) : undefined,
          price: book.price ? parseFloat(book.price) : undefined,
        }),
      });
      if (response.ok) {
        Alert.alert("บันทึกสำเร็จ");
        setEditMode(false);
        router.replace("/book?refresh=1");
      } else {
        Alert.alert("เกิดข้อผิดพลาดในการบันทึก");
      }
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        Alert.alert("ลบหนังสือสำเร็จ");
        router.replace("/book?refresh=1");
      } else {
        Alert.alert("เกิดข้อผิดพลาดในการลบ");
      }
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด", error.message);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "ยืนยันการลบ",
      "คุณต้องการลบหนังสือเล่มนี้หรือไม่?",
      [
        { text: "ยกเลิก", style: "cancel" },
        { text: "ลบ", style: "destructive", onPress: handleDelete },
      ]
    );
  };

  if (!book) {
    return (
      <View style={styles.container}><Text>กำลังโหลดข้อมูล...</Text></View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>รายละเอียดหนังสือ</Text>
      <Text style={styles.label}>ชื่อหนังสือ</Text>
      <TextInput
        style={styles.input}
        value={book.title}
        editable={editMode}
        onChangeText={(text) => setBook({ ...book, title: text })}
      />
      <Text style={styles.label}>ผู้แต่ง</Text>
      <TextInput
        style={styles.input}
        value={book.author}
        editable={editMode}
        onChangeText={(text) => setBook({ ...book, author: text })}
      />
      <Text style={styles.label}>คำอธิบาย</Text>
      <TextInput
        style={styles.input}
        value={book.description}
        editable={editMode}
        onChangeText={(text) => setBook({ ...book, description: text })}
        multiline
      />
      <Text style={styles.label}>ประเภท</Text>
      <TextInput
        style={styles.input}
        value={book.genre}
        editable={editMode}
        onChangeText={(text) => setBook({ ...book, genre: text })}
      />
      <Text style={styles.label}>ปีที่พิมพ์</Text>
      <TextInput
        style={styles.input}
        value={book.year ? String(book.year) : ""}
        editable={editMode}
        keyboardType="numeric"
        onChangeText={(text) => setBook({ ...book, year: text })}
      />
      <Text style={styles.label}>ราคา</Text>
      <TextInput
        style={styles.input}
        value={book.price ? String(book.price) : ""}
        editable={editMode}
        keyboardType="numeric"
        onChangeText={(text) => setBook({ ...book, price: text })}
      />
      <Text style={styles.label}>สถานะ</Text>
      <TextInput
        style={styles.input}
        value={book.available ? "มีจำหน่าย" : "หมด"}
        editable={false}
      />
      <View style={styles.buttonRow}>
        {editMode ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
            <Text style={styles.saveButtonText}>บันทึก</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setEditMode(true)}>
            <Text style={styles.editButtonText}>แก้ไข</Text>
          </TouchableOpacity>
        )}
        <View style={{ width: 16 }} />
        <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
          <Text style={styles.deleteButtonText}>ลบ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookDetail;

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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  saveButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#ffc107",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  editButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
