import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Nav>
      <p>
        <a href="#">เกี่ยวกับ</a>
        <a href="#">ดาวน์โหลดแอพ X</a>
        <a href="#">ศูนย์ความช่วยเหลือ</a>
        <a href="#">ข้อตกลงการใช้บริการ</a>
        <a href="#">นโยบายความเป็นส่วนตัว</a>
        <a href="#">นโยบายคุกกี้</a>
        <a href="#">การเข้าถึง</a>
        <a href="#">ข้อมูลโฆษณา</a>
        <a href="#">บล็อก</a>
        <a href="#">สถานะ</a>
        <a href="#">อาชีพ</a>
        <a href="#">ทรัพยากรด้านแบรนด์</a>
        <a href="#">โฆษณา</a>
        <a href="#">การตลาด</a>
        <a href="#">X สำหรับธุรกิจ</a>
        <a href="#">นักพัฒนา</a>
        <a href="#">ไดเรกทอรี</a>
        <a href="#">การตั้งค่า</a>
        <a href="#">© 2024 X Corp.</a>
      </p>
    </Nav>
  );
}

export default Footer;

export const Nav = styled.nav`
  padding: 0.5rem 1rem 1rem 0rem;
  align-items: center;
  justify-content: center;
  color: black;
  display: flex;

  p {
    margin: 0.3rem 1rem 0.6rem 1.1rem;
    text-align: center;

    a {
      color: gray;
      text-decoration: none;
      margin-right: 1rem;
      font-size: 0.8rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
