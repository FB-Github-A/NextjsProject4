"use client";
//page.tsx
import React from "react";
import StudentCard from  "./component/StudentCard";

const students = [
  {
    name: "Farwa Batool",
    age: 26,
    rollNumber: "00496911",
    className: "GIAIC",
    imageUrl: "images/farwa.jpg",
    gender: "Female",
    city: "Karachi",
    phoneNumber: "0332-3281432",
    address: "R 815 Block 20 FB Area Ancholi",
  },
  {
    name: "Ismat Zehra",
    age: 52,
    rollNumber: "00492623",
    className: "GIAIC",
    imageUrl: "images/ismat.jpg",
    gender: "Female",
    city: "Karachi",
    phoneNumber: "0337-8029743",
    address: "R 815 Block 20 FB Area Ancholi",
  },
  {
    name: "Fatima Zehra",
    age: 23,
    rollNumber: "AB445",
    className: "GIAIC",
    imageUrl: "images/fatima.jpeg",
    gender: "Female",
    city: "Karachi",
    phoneNumber: "0322-7766699",
    address: "Block K North Nazimabad",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by Miss Farwa Batool
        </h2>
      </div>
    </div>
    
  );
}