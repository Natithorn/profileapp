import { router } from "expo-router";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Link } from "expo-router";

const Book = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const fetchBooks = () => {
    setRefreshing(true);
    fetch("http://localhost:3000/api/books?page=1&limit=10")
      .then((response) => response.json())
      .then((data) => {
        setData(data.books);
        setRefreshing(false);
      })
      .catch((error) => {
        setRefreshing(false);
      });
  };

  useEffect(() => {
    const authenticate = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (hasHardware && isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "โปรดยืนยันตัวตนเพื่อดูรายการหนังสือ",
          fallbackLabel: "ป้อนรหัสผ่าน",
        });
        if (!result.success) {
          return;
        }
      }
      setAuthChecked(true);
      fetchBooks();
    };
    authenticate();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/book_detail?id=${item._id}`)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>ผู้แต่ง: {item.author}</Text>
      <Text style={styles.genre}>ประเภท: {item.genre}</Text>
      <Text style={styles.year}>ปี: {item.year}</Text>
      <Text style={styles.price}>ราคา: {item.price} บาท</Text>
      <Text style={styles.available}>{item.available ? "มีจำหน่าย" : "หมด"}</Text>
    </TouchableOpacity>
  );

  if (!authChecked) {
    return (
      <View style={styles.container}><Text>กำลังตรวจสอบตัวตน...</Text></View>
    );
  }
  return (
    <View style={styles.container}>
      <Link href={"/book_new"} style={styles.button}>
        <Text style={styles.buttonText}>+ เพิ่มหนังสือใหม่</Text>
      </Link>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchBooks} />
        }
        ListEmptyComponent={<Text style={styles.empty}>ไม่มีข้อมูลหนังสือ</Text>}
      />
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f8fb",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 6,
  },
  author: {
    fontSize: 16,
    color: "#333",
    marginBottom: 2,
  },
  genre: {
    fontSize: 15,
    color: "#666",
    marginBottom: 2,
  },
  year: {
    fontSize: 15,
    color: "#666",
    marginBottom: 2,
  },
  price: {
    fontSize: 15,
    color: "#666",
    marginBottom: 2,
  },
  available: {
    fontSize: 15,
    color: "#28a745",
    fontWeight: "bold",
  },
  empty: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
    fontSize: 18,
  },
});
