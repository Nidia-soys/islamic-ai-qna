# 🕌 Islamic AI Q&A System

An AI-powered backend service that answers Islamic questions using **source-grounded responses** based on **Quran and Hadith**.

---

## 🧠 Problem

Many AI-based Q&A systems generate answers **without verifiable sources**, which leads to:

- ❌ Misinformation risk  
- ❌ Lack of trust  
- ❌ No transparency  

In religious contexts, **accuracy and reliability are essential**.

---

## 💡 Solution

This project provides:

- ✅ Answers supported by **Quran & Hadith references**
- ✅ A structured response format (Answer + Sources + Confidence)
- ✅ A **safe backend architecture** with timeout & error handling
- ✅ Clear disclaimers (not a fatwa system)

---

## ⚙️ Tech Stack

- **Backend:** Node.js + Express  
- **AI Service:** External webhook (LLM-based)  
- **Architecture:** API Gateway → AI Webhook  
- **Data Handling:** JSON-based (extendable to vector DB)

---

## 🏗️ Architecture
