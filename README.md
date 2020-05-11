# JOURNEY -  A RPG. 
Journey is a turn based RPG. Movement is controlled through dice rolls. The player starts with food,
water, coins, and health. Each dice roll moves the player forward and counts as a single day of travel. 
Each day the player loses 1 day of food and water. Random events happen along the way; 
robbers may steal your food or coins in the night. Players have the chance to replenish supplies at various stages in the game.

### CORE
This game is 100% font end. State management is controlled using React. Everything else is 100% vanilla javascript and custom CSS. There are no libraries or frameworks. 

### Development. 
1. # Game Board. 
  The initial board was built using a matrix grid system and a nested loop. While this was functional in building the board and I had a working proof of concept, I ultimately decided it would be cumbersome to design as detailed a map / board as I envisioned. I felt the was more a role for a Photoshop / Illustrator or something where I could see my product in its entirety as a I worked in realtime. I found this project on git - https://github.com/ReactUniversity/037-building-an-online-rpg-game-part-2
This is an HTML5 drag and drop map builder - in short I could drag and drop tiles onto a blank grid system to build a world - Exactly what I needed. I pulled down various tiles sets from https://opengameart.org/ and mixed and matched to get the look I wanted. I then resized and cut them into 32x32 pixels. I quickly found that sizing each object to 32x32 would not give me the aesthetic I was looking for. This would make your character 32x32 your tree 32x32, your house 32x32, etc. - there was no depth. While each of the tiles in the game are 32x32 many objects are comprised of multiple 32x32 tiles. Some trees and houses were composed of 4 or 5 32x32 tiles. Once this was all sorted. I modified the app I had pulled down from git and replaced the tiles with my own. I then tediously dragged and dropped my ever expanding tile sets into the grid to build the product you see here. Do not think this was an easy task or done in one shot. I was constantly dragging and dropping deciding the size wasn't right. getting the original tile sets, resizing, cutting, replacing the tiles in my world builder and starting the drag and drop over. 
  Once I finally had a map completed, at least visually. I had to decided what to do with it - K.I.S.S. Keep it simple stupid. I took a screenshot. I used the image as a background. It would only have to be loaded once, my character could sit ontop if it, and I knew moving 1 tile would be 32 pixes. The character could easily be moved using simple CSS.
2. #Logic

