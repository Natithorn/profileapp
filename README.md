
# ProfileApp (Hybrid Mobile App)

แอปนี้เป็นตัวอย่างการพัฒนาแอปมือถือด้วย React Native (Expo) สำหรับจัดการโปรไฟล์และข้อมูลหนังสือ
ประกอบด้วยฟีเจอร์แสดงโปรไฟล์ส่วนตัว, รายการหนังสือ, เพิ่ม/แก้ไข/ลบหนังสือ, ระบบยืนยันตัวตน (Local Authentication) และธีมสี

## ฟีเจอร์หลัก

- **หน้าโปรไฟล์ (Home)**
   - แสดงข้อมูลส่วนตัว, สกิล, สถิติ, ภาพโปรไฟล์, ธีมสี
   - ลิงก์ไปยังหน้าอื่น ๆ เช่น About, Book, Signin, Signup

- **หน้า Book**
   - แสดงรายการหนังสือทั้งหมด
   - กดดูรายละเอียด, เพิ่ม, แก้ไข, ลบหนังสือ
   - มีระบบยืนยันตัวตน (Local Authentication) ก่อนเข้าถึงข้อมูล

- **หน้า Book Detail**
   - แสดงรายละเอียดหนังสือแต่ละเล่ม
   - แก้ไข/ลบหนังสือ
   - ยืนยันตัวตนก่อนเข้าถึง

- **หน้า Book New**
   - เพิ่มหนังสือใหม่
   - ยืนยันตัวตนก่อนเข้าถึง

- **หน้า About, Signin, Signup**
   - แสดงข้อมูลเกี่ยวกับผู้พัฒนา, ฟอร์มเข้าสู่ระบบ/สมัครสมาชิก

- **Theme Toggle**
   - เปลี่ยนธีมสี (Dark/Light Mode)

## โครงสร้างไฟล์ที่สำคัญ

- `app/index.jsx` : หน้าโปรไฟล์หลัก
- `app/book.jsx` : รายการหนังสือ
- `app/book_detail.tsx` : รายละเอียด/แก้ไข/ลบหนังสือ
- `app/book_new.jsx` : เพิ่มหนังสือใหม่
- `app/about.jsx`, `app/signin.jsx`, `app/signup.jsx` : หน้าอื่น ๆ
- `app/components/ThemeToggle.jsx` : ปุ่มเปลี่ยนธีม
- `app/context/ThemeContext.js` : จัดการธีมสี

## เทคโนโลยีที่ใช้

- React Native (Expo)
- Expo Router
- Expo Local Authentication
- REST API (Express.js backend)
- Theme Context

## วิธีติดตั้งและใช้งาน

1. ติดตั้ง dependencies
    ```
    npm install
    ```
2. ติดตั้ง Local Authentication
    ```
    npx expo install expo-local-authentication
    ```
3. เพิ่ม permission สำหรับ iOS ใน `app.json`
    ```json
    "ios": {
       "infoPlist": {
          "NSFaceIDUsageDescription": "อนุญาตให้ $(PRODUCT_NAME) ใช้ Face ID เพื่อยืนยันตัวตนของคุณ"
       }
    }
    ```
4. รัน backend API ที่เครื่องคอมพิวเตอร์ (Express.js)
5. รันแอปด้วย Expo
    ```
    npx expo start
    ```
6. หากทดสอบบนมือถือจริง เปลี่ยน URL API จาก `localhost` เป็น IP ของเครื่องคอมพิวเตอร์ เช่น `http://10.0.15.34:3000/api/books`

## การใช้งาน Local Authentication

- มีการยืนยันตัวตนก่อนเข้าหน้า Book, Book Detail, Book New
- ใช้ไบโอเมตริกซ์ (FaceID, Fingerprint) หรือ fallback เป็นรหัสผ่าน
- เพิ่มโค้ดในแต่ละหน้า เช่น
   ```js
   import * as LocalAuthentication from "expo-local-authentication";
   useEffect(() => {
      const authenticate = async () => {
         const hasHardware = await LocalAuthentication.hasHardwareAsync();
         const isEnrolled = await LocalAuthentication.isEnrolledAsync();
         if (hasHardware && isEnrolled) {
            const result = await LocalAuthentication.authenticateAsync({
               promptMessage: "โปรดยืนยันตัวตนเพื่อเข้าใช้งาน",
               fallbackLabel: "ป้อนรหัสผ่าน",
            });
            if (!result.success) {
               // ไม่อนุญาตให้เข้าถึง
               return;
            }
         }
         // อนุญาตให้เข้าถึงข้อมูล
      };
      authenticate();
   }, []);
   ```

## หมายเหตุ

- หากต้องการเปลี่ยน URL API ให้แก้ไขในแต่ละไฟล์ที่มีการ fetch ข้อมูล
- ฟีเจอร์ Local Authentication ช่วยเพิ่มความปลอดภัยให้กับข้อมูลในแอป
- สามารถนำโค้ดนี้ไปต่อยอดหรือปรับปรุงเพิ่มเติมได้ตามต้องการ


