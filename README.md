<h1 align="center">YWC Queueing System</h1>

<p align="center">
  Queueing system for Young Webmaster Camp with remote control. Inherited from 
  <a href="https://kykungz.github.io/ywc-queue">Kykungz</a>, cleaned up and modernized by 
  <a href="https://github.com/Rayriffy">Rayriffy</a>, and styled by 
  <a href="https://github.com/Nutn0n">Nutn0n</a> for YWC20.
</p>

## Preview
<div>
<img width="64%" src="./images/home.png">
<img width="34%" src="./images/admin.png">
</div>


## Features
- Home
  - ดูคิวปัจจุบันของแต่ละสาขา
  - อัพเดทแบบ Realtime
  - แสดง Animation เตือนเมื่อมีการเปลี่ยนแปลงคิว
- Remote
  - เข้าได้เฉพาะ Admin
  - แก้ไขคิว
  - Regular Queue (คิวทั่วไป)
  - Custom Queue (ข้อความแบบกำหนดเอง)
- QR Code เพื่อเข้าใน Mobile

## Instructions
- กดที่สัญลักษณ์ <img height="40" src="./images/logo.svg"> หรือ คำว่า **ตรวจสอบคิวได้ที่นี่** ค้างไว้ 2 วินาที เพื่อลงชื่อเข้าใช้เป็น Admin
- เมื่อได้สิทธิ์ Admin แล้ว จรึงสามารถคลิกที่ Card ประจำสาขาเพื่อเข้าสู่หน้า `admin` (รีโมทควบคุม)
- ระบบเรียกคิวประกอบด้วย 2 รูปแบบ
  - **Regular Queue (คิวทั่วไป)**

      รันคิวตามเลขประจำสาขา (`C`, `P`, `D`, `M`) ด้วยปุ่ม `+`, `-` และ `PUBLISH`
  
  - **Custom Queue (ข้อความแบบกำหนดเอง)**

      แสดงผลตามข้อความที่ใส่ ไว้ใช้เมื่อต้องการแสดงข้อความอื่นๆ เช่น `พักเบรค` `พักเที่ยง` `สวัสดี`
