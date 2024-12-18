# Ninigrams

### About  
Ninigrams is a logic puzzle game where players fill in a grid with black and white tiles to reveal a hidden picture. Each row and column is accompanied by numerical clues, with each number representing a sequence of consecutive black tiles to be placed in the grid. The order of these numbers matters, and players must ensure that each sequence is separated by at least one white tile. No grey tiles should remain on the board when completed.  

This project was submitted to the Reddit Games and Puzzles Hackathon on December 17, 2024.  

---

### How to Play 
1. **Understand the Clues**: 
- Number clues show how many consecutive black tiles go in each row and column. 
- Black tile sequences must be separated by at least one white cell.
- Click a cell to change its color. 
2. **Fill the Grid**:  
- The solution contains only black and white cells; no grey cells should remain. 
- All clues must be satisfied.
3. **Reveal the Picture**:  
- Once the puzzle is completed correctly, a hidden image is revealed! 

---

### How We Built It  
- Created a shared GitHub repository to collaborate on the codebase in `main.tsx`.  
- Coded the game using TypeScript and integrated Reddit’s Devvit platform through its public API. 
- Used puzzles from nonograms.org and rendered them into a custom JSON format.  
- Launched Ninigrams on our subreddit, [r/ninigrams](https://www.reddit.com/r/ninigrams).  
- Uploaded a submission video to [Youtube](https://youtu.be/gJL2Ccg1wi8?si=QcdXvpYidvHXDaGK) to showcase our project.  

---

### What's Next for Ninigrams  
Looking ahead, Ninigrams has the potential to evolve into a collaborative puzzle experience. Drawing inspiration from the r/Place project, we envision combining players’ completed puzzles into a large mosaic – whether it’s a vibrant zoo of animals, a bustling cityscape, or a _Where’s Wally?_ scene filled with hidden surprises.  

Future features include:  
- **Collaborative Mosaic**: Players contribute completed puzzles to construct a large shared canvas.  
- **Leaderboard System**: Display player rankings based on metrics such as puzzle completion time.  
- **Community Engagement**: Engage with the existing r/Nonograms subreddit (~4.3K members), bringing beginners and avid players together onto one cohesive platform.  

---

### Credits  
- **Developers**: Nina Koh & Peter Sushko 
- **Puzzles**: Adapted from nonograms.org  
- **Non Ishida**: Special recognition to Non Ishida, the inventor of nonograms, whose creation has inspired players like us around the world. 