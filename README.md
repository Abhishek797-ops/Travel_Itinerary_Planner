
# VoyAIge - AI Travel Itinerary Planner

## 🚀 Introduction
VoyAIge is an **AI-powered travel itinerary planner** built with HTML, TailwindCSS, and JavaScript. 
It leverages **Google Gemini API** and **Google Maps API** to generate personalized itineraries based on 
destination, budget, and number of days. The app also supports **PDF export** of generated itineraries.

---

## 🎯 Objectives
- Create a personalized travel itinerary with AI assistance.
- Provide an intuitive, responsive, and modern UI/UX.
- Integrate **Google Maps** for visual route planning.
- Allow exporting itineraries as **PDF files**.

---

## 🛠️ Tools & Technologies Used
- **HTML5** → Webpage structure.
- **TailwindCSS** → Styling and responsive design.
- **JavaScript (ES6)** → Core logic, interactivity, API integration.
- **Lucide Icons** → Lightweight and modern icons.
- **Google Gemini API** → AI-based itinerary generation.
- **Google Maps Embed API** → Maps and navigation routes.
- **jsPDF & html2canvas** → Export itineraries as PDFs.

---

## ✨ Features
- **Landing Page** → Hero section introducing VoyAIge.
- **Itinerary Planner** → Input destination, budget, and days.
- **AI-Powered Suggestions** → Automatically generates day-wise activities & restaurants.
- **Interactive Timeline** → Daily plans with activities, costs, and icons.
- **Google Maps Integration** → Embedded routes for daily travel plans.
- **PDF Export** → Download the generated itinerary as a PDF.
- **Error Handling** → Displays user-friendly error messages.

---

## 📂 Folder Structure
```
Project/
│── index.html              # Main application file
│
│── README.md               # Documentation
```

---

## ⚙️ How It Works
1. User enters **city, budget, and number of days**.
2. Request sent to **Google Gemini API** with structured JSON schema.
3. AI generates a detailed **day-wise itinerary** (activities, timings, costs, restaurants).
4. Google Maps displays travel routes for each day.
5. User can **download the plan as a PDF**.

---

## 🔑 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/VoyAIge.git
   ```

2. Open `index.html` in your browser (no server required).

3. Add your API keys inside the script section:
   ```javascript
   const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
   const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
   ```

4. Save and refresh to use the planner.

---

## 📌 Future Enhancements
- User authentication for saving itineraries.
- Integration with **Live flight, Hotel & Live Weather APIs**.
- Multi-destination trip planning.
- Advanced filtering (adventure, culture, food-focused trips).

---
