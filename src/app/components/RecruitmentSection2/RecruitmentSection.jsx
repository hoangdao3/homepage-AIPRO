"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./RecruitmentSection.module.css";

const RecruitmentSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = [
    { key: "leader", label: "Leadership Positions", icon: "/icon1.png" },
    { key: "experience", label: "Experienced", icon: "/icon2.png" },
    { key: "graduate", label: "New Graduates", icon: "/icon3.png" },
    { key: "intern", label: "Internships", icon: "/icon4.png" },
  ];

  const jobListings = [
    {
      title: "Commercial Sales Department Manager – Sales Department",
      department:
        "Commercial Sales (elevators, fireproof doors, and building materials)",
      goal: "Develop business strategies and plans. Achieve sales targets and generate revenue for the company.",
      deadline: "15/05/2024",
      location: "Hanoi City",
      urgent: true,
      expired: false,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`${styles.recruitmentSection} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.header}>
        <h1 className="text-4xl font-bold">Join AI-PRO Shaping the Future</h1>
        <p>
          Thank you for your interest in working at AI-PRO. We look forward to
          working with you and sharing promising successes.
        </p>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter job title"
          className={`${styles.searchInput} ${styles.leftRounded}`}
        />
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="" className={`${styles.optionInput}`}>
            Select Field
          </option>
          <option value="finance">Finance - Banking</option>
          <option value="hr">Human Resources</option>
          <option value="it">Information Technology</option>
          <option value="accounting">Accounting - Auditing</option>
          <option value="business">Business</option>
        </select>
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="">Working Time</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
        </select>
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="">Select Location</option>
          <option value="hanoi">Hanoi City</option>
          <option value="hcm">Ho Chi Minh City</option>
          <option value="danang">Da Nang City</option>
        </select>
        <button className={`${styles.searchButton} ${styles.rightRounded}`}>
          Search
        </button>
      </div>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div
            key={filter.key}
            className={`${styles.filter} ${
              activeFilter === filter.key ? styles.active : ""
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            <Image
              src={filter.icon}
              alt={filter.label}
              width={32}
              height={32}
            />
            <span>{filter.label}</span>
            {activeFilter === filter.key && (
              <div className={styles.underline}></div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.jobListings}>
        {jobListings.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <div className={styles.jobTags}>
                {job.urgent && <span className={styles.urgent}>Urgent Recruitment</span>}
                {job.expired && <span className={styles.expired}>Expired</span>}
              </div>
            </div>
            <div className={styles.jobDetails}>
              <p><strong>Department:</strong> {job.department}</p>
              <p><strong>Job Objective:</strong> {job.goal}</p>
              <p><strong>Application Deadline:</strong> {job.deadline}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </div>
            <div className={styles.jobActions}>
              <button className={styles.detailButton}>Detail</button>
              <button className={styles.applyButton}>Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentSection;
