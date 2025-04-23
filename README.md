# 🎥 Video Progress Tracker
<img width="1215" alt="Screenshot 2025-04-23 at 9 24 59 PM" src="https://github.com/user-attachments/assets/b53e321f-4565-4847-9b52-d999e0401f40" />
<img width="1215" alt="Screenshot 2025-04-23 at 9 25 19 PM" src="https://github.com/user-attachments/assets/dbf710bd-009f-4a51-9041-734a8aeb3a6b" />



## 🚀 Live Demo

[Check it out here](https://videoprogresstracker.netlify.app/)

## **Tech Stack**
- HTML
- CSS
- React
- Vite
- JavaScript (ES6+)
- localStorage API

## **Description 📃**
- A React.js-based application that tracks the progress of a video as the user watches it. The app saves the video playback position so that users can resume from where they left off.
- Automatically saves and resumes video playback — making content consumption smooth and uninterrupted for users.
- Built with React and Vite, demonstrating proficiency in modern, high-performance frontend tooling and component-driven development.

## **Functionalities 🎮**
- Tracks the user's watch time and resumes video from the exact point they left off.
- Stores playback time locally in the browser — no backend required.
- Modular and reusable VideoPlayer component built using modern React hooks.
- Updates playback progress at regular intervals for accuracy and performance.

## **🛠 Implementation Insights**
- Tracking of Watched Intervals - The app listens to the video’s timeupdate event and captures playback time every few seconds. These time points are stored as interval objects (with start and end) in localStorage, ensuring progress is saved even if the user closes the tab or reloads the page.
- Calculation of Unique Progress - To avoid counting overlapping or repeated watch segments, a merging algorithm is used. It sorts all stored intervals and merges any that overlap, giving a precise total of uniquely watched time. This ensures progress reflects actual coverage, not just duration played.
  
-  Challenges & Solutions
1.  Initially, intervals were recorded on every timeupdate, which fires very often, leading to redundant and noisy data.
Solution -> Switched to a setInterval-based throttling (e.g., one interval every second) to balance accuracy and performance.
2.  localStorage had limitations for multiple users or large-scale data
Solution -> For this project, localStorage was acceptable due to its scope (local video player). But noted that for real-world use, a backend or cloud-based sync would be essential.
3. When users scrubbed back or replayed a section, duplicate time chunks inflated the watch progress.
Solution ->Wrote a merging algorithm that consolidated overlapping or adjacent intervals into a clean list of non-overlapping segments before summing their lengths.

## **🛠️ Installation**

1. **Fork the Repository:**
   Click on the "Fork" button on the repository's GitHub page to create a copy of the repository in your GitHub account.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/tanishasrivastava/video-progress-tracker.git
   cd video-progress-tracker
3.**Add the Original Repository as a Remote (Optional)**
git remote add upstream https://github.com/tanishasrivastava/video-progress-tracker

4. **Create a New Branch**
Create a new branch for your feature or fix:
git checkout -b <your-branch-name>

5.**Make Your Changes**
Edit the code, fix bugs, or add new features.

6.**Stage Your Changes**
Add your updated files to the staging area:
  git add <filename> 
Or to add all files:
  git add .
  
7.**Commit Your Changes**
git commit -m "Describe your changes here"

8.**Push to Your Fork**
git push origin <your-branch-name>

## **🧠 Usage**

- Click "Play" to start the video.
- Pause anytime — your progress will be saved automatically.
- When you return, the video will resume from the saved position.



