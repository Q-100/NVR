import "./App.css";
import infoData from "./data.js";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment";
import Modal from "./Modal.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [info, infoChange] = useState(infoData);
  const [value, onChange] = useState(new Date());
  let [alert, alertSet] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 4000);
  });
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("열림");
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("닫힘");
    setModalOpen(false);
  };
  return (
    <div className="App">
      {window.location.replace(
        "https://nvrkr.com/profile/Z3pwtExXPTLBMncEtIKX?custom=truben"
      )}
    </div>
  );
}
function Video() {
  return (
    <video muted autoPlay playsInline className="video">
      <source src="Truben_1.mp4" type="video/mp4" />
    </video>
  );
}

function Profile() {
  return (
    <div className="profile">
      <a href="https://www.trubeninvestment.com/">
        <img src="img/image 12.png" alt="" className="img" />
      </a>
      <img src="img/profile_main.png" className="profile_img" alt="" />
      <h1>홍경근</h1>
      <h4>회장</h4>
      <a
        className="contactsButton"
        href="https://firebasestorage.googleapis.com/v0/b/nvr-front.appspot.com/o/users%2F-NCIeauFPHq3yYGCz52G%2Fcontact.vcf?alt=media&token=b59abe93-09de-4a52-b3a6-f83bcdf4f89d"
      >
        연락처 저장
      </a>
    </div>
  );
}
function Info(props) {
  const info = props.info;
  return (
    <div className="info">
      <hr />
      {info.map((a, i) => {
        return (
          <div key={i}>
            <a href={a.button} className="infoItem">
              <img src={a.src} alt="" />
              <p>{a.content}</p>
            </a>
          </div>
        );
      })}
      <hr />
    </div>
  );
}
function Schedule(props) {
  // const [value, onChange] = useState(new Date());
  const value = props.value;
  const onChange = props.onChange;
  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <hr style={{ width: "20vw" }} />
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
        />
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="contact" id="ContactID">
      <h2>Contact</h2>
      <hr style={{ width: "20vw" }} />
      <p>07326 서울특별시 영등포구 국제금융로 10, Three IFC 45층</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.27394576743!2d126.92370251608939!3d37.52503913425977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3c71627d67%3A0xeccb39b44eb49ea2!2sThe%20Executive%20Centre%20-%20International%20Finance%20Centre%2C%20Three%20IFC!5e0!3m2!1sko!2skr!4v1661868301623!5m2!1sko!2skr"></iframe>
      <p className="contactMapInfo">지도 자세히 보기</p>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="social">
      <h2>Social Media</h2>
      <hr style={{ width: "20vw" }} />
      <div className="social1">
        <img src="img/instagram_logo.png" alt="" />
        <img src="img/facebook_logo.png" alt="" />
        <img src="img/linkedin_logo.png" alt="" />
        <img src="img/youtube_logo.png" alt="" />
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <a href="https://nvr-front.web.app/">
        <img src="img/NVR_logo.png" alt="" />
      </a>
      <p>
        Copyright 2022. <a href="https://agency-nvr.web.app/">NVR</a>. All
        rights reserved
      </p>
    </div>
  );
}

export default App;
