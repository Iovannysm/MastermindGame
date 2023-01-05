# MastermindGame

Do a npm init to install node to be able to install the dependencies:
Do a npm install in the terminal to install the dependencies:

To play the game: 
In the terminal run node index.js

It will log the rules and prompt you to input the first number;

# Thought Process
When I started to begin to code this game, My initial thought was to figure the first step,
It was to brake the making of the game into smaller to do's
1: I started to figure out how to use the API t generate a random 4 number combination and store it in a variable.
2: Create a a way to prompt the player and store the input in a array.
3: Use the input array and the random number array to check if they were the same number or different.
4: Return dialog to the player based on the input to gide them in checking if they solve the combination or they need to try again.

There is a lot to do to make this game more enjoyable to the player so I made a To Do list with what I think it can make a better experience.

# Dependencies
1:  prompt-sync: This package helps you use the prompt input to play the game in the terminal;

# Resources

This are video resources that I used to understand what I was doing:

https://www.youtube.com/watch?v=NLfxNo7Q0Pk&t=492s
https://www.youtube.com/watch?v=oLiiIRZbZsk

# API
https://www.random.org/clients/http/api/

# To Do
Error handling: There is several thing that I feel I need to address, 
          1: There is no handling if the player input a string as an answer.
          2: There is no handling if the player input more than one integer.
          3: There is no handling if the player input any character other than integer or string.
          4: There is no message telling the player if a about error handling.
Point System: I wanted to include a point system for the player, if the player solved the number combination in less than 3 move it would give them the highest score, as the tires increases the point decreases.
Code refactoring: I code the logic with a lot of repeated code: I want to refactor the for loops and if statements to make it more DRY. 
