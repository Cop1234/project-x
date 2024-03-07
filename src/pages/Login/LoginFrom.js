import React from "react";
import Btn from "../../Components/Button";
import GoogleLogo from "../../assets/image/google_logo.png";
import AppleLogo from "../../assets/image/apple_logo.png";
import { devices } from "../../Components/devices";
import styled from "styled-components";

function LoginFrom() {
  return (
    <DivButton>
      <div>
        <div>
          <Text>
            <h1>เกิดขึ้นตอนนี้</h1>
          </Text>
        </div>
        <div>
          <Text>
            <h2>เข้าร่วมวันนี้</h2>
          </Text>
        </div>
        <div>
          <Btn logoImage={GoogleLogo} text={"ลงชื่อสมัครใช้ด้วย Google"} />
        </div>
        <div>
          <Btn logoImage={AppleLogo} text={"สมัครด้วย Apple"} />
        </div>
        <DivOr>
          <DivLine />
          <Text>หรือ</Text>
          <DivLine />
        </DivOr>
        <div>
          <Btn text={"สร้างบัญชี"} btnType={"signUp"}></Btn>
        </div>
        <div>
          <Text>
            <p>
              การสมัครนี้จะถือว่าคุณยอมรับ <a href="#">ข้อตกลงการใช้งาน</a> และ{" "}
              <a href="#">นโยบายความเป็นส่วนตัว</a> รวมถึง{" "}
              <a href="#">การใช้คุกกี้</a>
            </p>
          </Text>
        </div>
        <div>
          <Text>
            <h3>มีปัญชีผู้ใช้อยู่แล้วใช่ไหม</h3>
          </Text>
        </div>
        <div>
          <Btn text={"เข้าสู่ระบบ"} btnType={"signIn"}></Btn>
        </div>
      </div>
    </DivButton>
  );
}

export default LoginFrom;

const DivButton = styled.div`
  width: 100%;
  margin-left: 6.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media ${devices.md} {
    margin-left: 0rem;
    justify-content: left;
    align-items: left;
  }
`;

const DivOr = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem;
`;

const DivLine = styled.div`
  padding: 0rem 3.85rem;
  margin: 0.5rem 0.5rem;
  border-color: hsla(0, 0%, 21%, 1);
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  text-decoration: none;
  display: flex;
`;

const Text = styled.text`
  color: white;

  p {
    width: 300px;
    color: gray;
    font-size: 0.74rem;
    letter-spacing: -0.02rem;
    line-height: 1;
    margin: 0.4rem 0 4rem 0;

    @media ${devices.sm} {
      margin: 0.4rem 0 3.4rem 0;
    }
  }

  a {
    text-decoration: none;
    color: hsla(203, 100%, 50%, 1);

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 3rem;
    text-transform: lowercase;
    text-align: left;

    @media ${devices.sm} {
      margin-top: 3rem;
      margin-bottom: 3rem;
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    line-height: 1em;
    text-transform: lowercase;
    text-align: left;

    @media ${devices.sm} {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    line-height: 1em;
    text-transform: lowercase;
    text-align: left;
  }
`;
