# แอพหนังสือ (Book App)

แอพนี้เป็นตัวอย่างการพัฒนาแอปพลิเคชันมือถือด้วย React Native (Expo) ที่แสดงการทำงาน CRUD (Create, Read, Update, Delete) สำหรับข้อมูลหนังสือ พร้อมปรับปรุง UI ให้สวยงามและใช้งานง่าย

## ฟีเจอร์หลัก
- **แสดงรายการหนังสือทั้งหมด**
- **ดูรายละเอียดหนังสือรายเล่ม**
- **เพิ่มหนังสือใหม่**
- **แก้ไขข้อมูลหนังสือ**
- **ลบหนังสือ**
- **UI ทันสมัย ใช้งานง่าย**

## โครงสร้างไฟล์ที่สำคัญ
- `app/book.jsx` : หน้าแสดงรายการหนังสือทั้งหมด
- `app/book_detail.tsx` : หน้าแสดงรายละเอียด/แก้ไข/ลบหนังสือ
- `app/book_new.jsx` : หน้าเพิ่มหนังสือใหม่

## เทคโนโลยีที่ใช้
- React Native (Expo)
- React Navigation (expo-router)
- REST API (เชื่อมต่อ backend สำหรับข้อมูลหนังสือ)

## วิธีใช้งาน
1. ติดตั้ง dependencies ด้วยคำสั่ง
   ```
   npm install
   ```
2. รันแอพด้วย Expo
   ```
   npx expo start
   ```
3. ตรวจสอบให้ backend API (เช่น Express.js) ทำงานที่ URL ที่กำหนดในโค้ด (ตัวอย่าง: `http://10.0.15.34:3000/api/books`)


## การเพิ่มฟังก์ชั่น Local Authentication (Biometric/Fingerprint/FaceID)

แอพนี้รองรับการยืนยันตัวตนผู้ใช้ด้วยไบโอเมตริกซ์ (Local Authentication) ก่อนเข้าถึงข้อมูลสำคัญ เช่น รายการหนังสือ, เพิ่มหนังสือใหม่, ดูรายละเอียดหนังสือ

### วิธีการติดตั้งและใช้งาน
1. ติดตั้งแพ็กเกจ Local Authentication
    ```
    npx expo install expo-local-authentication
    ```
2. เพิ่ม permission สำหรับ iOS ในไฟล์ `app.json`
    ```json
    "ios": {
       "infoPlist": {
          "NSFaceIDUsageDescription": "อนุญาตให้ $(PRODUCT_NAME) ใช้ Face ID เพื่อยืนยันตัวตนของคุณ"
       }
    }
    ```
3. เพิ่มโค้ดในแต่ละหน้า เช่น
    ```js
    import * as LocalAuthentication from "expo-local-authentication";
    // ...
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

### จุดที่มีการยืนยันตัวตน
- หน้าแสดงรายการหนังสือ (`book.jsx`)
- หน้าเพิ่มหนังสือใหม่ (`book_new.jsx`)
- หน้าแสดงรายละเอียดหนังสือ (`book_detail.tsx`)

### หมายเหตุ
- หากทดสอบบนมือถือจริง ต้องเปลี่ยน URL API จาก `localhost` เป็น IP ของเครื่องคอมพิวเตอร์
- ฟีเจอร์นี้ช่วยเพิ่มความปลอดภัยให้กับข้อมูลในแอพ

