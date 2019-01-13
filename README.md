# [**Goblin Quest: The Rise of Borf**](https://lukevandekieft.github.io/borf-quest)

#### _A Text-based Roleplaying Game, 08.30.2018_

##### By Colin Cook, William Wittenbrock, Luke Vandekieft, Michael Meow, Eric Conner

## Description

This application is a text-based roleplaying game. It is a classic, dungeon-crawling adventure with a retro style. Players begin by creating a hero and rolling a die to determine their stats. Players will progress through the story by making choices that will effect the outcome of their journey.

### Specifications

* When game loads it will display text from story page.
  * Example Input: Load page
  * Example Output: Text displays
* When user clicks button, game will load new text.
  * Example Input: Button click
  * Example Output: New text displays
* When given the option of multiple buttons, user selection will trigger different text.
  * Example Input: Button click
  * Example Output: Assigned text displays
* When page loads, user is prompted to roll a die for randomized stats.
  * Example Input: Click roll
  * Example Output: You Strength is 12
* When a button prompts for a stat check, user will roll a die to add a randomized number to their stat score.
  * Example Input: Click roll
  * Example Output: Your roll was 5. Your total strength is 17
* When a user completes a dice roll, user stat check is evaluated against internal value to determine success or failure
  * Example Input: Click roll
  * Example Output: Your roll was 5. Your total strength is 17. You need a total of 15 agility to pass this roll.
* When a stat check is complete, a user's stat will be adjusted based on success or failure.
  * Example Input: Passed stat check
  * Example Output: Strength increases by 2
* When a user's stat drops to zero, the user will be presented with a game over screen.
  * Example Input: Stat reduction
  * Example Output: Game over
* When user is presented with game over screen, they will have the option to start the game over.
  * Example Input: Click Play Again
  * Example Output: Return to title screen
* When a user reaches the final screen, they will have won the game.
  * Example Input: Reach final screen
  * Example Output: Win the game

## Setup/Installation Requirements

Live site is at: https://lukevandekieft.github.io/borf-quest/


To download and edit:

* Get file from Github.

      $ git clone https://github.com/lukevandekieft/borf-quest.git

* Open index.html in project folder. No production version is available and no dependencies are needed for the dev version.

* When editing styles make sure to compile Sass into basic CSS.

      $ sass stylesheets/styles.scss:stylesheets/styles.css

## Support and contact details

If you have any suggestions or comments please forward them to Luke Vandekieft at vandekie@gmail.com

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS
* Bootstrap library
* Sass preprocessor

### License

This software is licensed under the MIT license.

Copyright (c) 2018 Colin Cook, William Wittenbrock, Luke Vandekieft, Michael Meow, Eric Conner
