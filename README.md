

# Star Wars Trivia
The Star Wars Trivia is a site designed for users who have a love for the world of Star Wars and would like to put their knowledge to the test.

You can access the live site here.


note to self: Insert device imagery here when ready!!

## Contents

 - User Experience
 - User Stories 
 
 - Site Structure
	- Wireframe (desktop)
	- Wireframe (mobile device)
   
 - Design
	 - Fonts Used
	 - Color Palette

 - Features
	 - Existing Features
		 - The Heading
		 - The Main Menu
		 - The Trivia Rules
		 - The Difficulty Selector
		 - The Main Quiz Area
		 - The Next Button
		 - The Correct Answer Display
		 - The Incorrect Answer Display
		 - The Time Up Display
		 - The Footer
	 - Future Features
	 
 - Technologies used

 - Testing

 - Deployment and Development
	 - Deploying the Site
	 - Forking the Repository
	 - Cloning the Repository

 - Credits
	 - Content
	 - Code

 - Acknowledgements

## User Experience

**User Stories**

As a user I want:

 - Test My StarWars knowledge with trivia.
 - Be able to initiate the start of the trivia.
 - Be able to understand how the trivia works.
 - Be able to select a difficulty before I start the trivia.
 - To know what my score is as I progress through the trivia.
 - To know what question I am on during the trivia.
 - To know if my answer is correct or incorrect.
 - To Know my final score
 - To be able to take the quiz again after completion.

## Site Structure
 The site is made up of a single page that displays the main menu to the user upon initial load of the page. The page will then hide and display different content depending on the actions by the user. More information on the features that the site offers can be found in the features section.

## Wireframes

I created a basic wireframe on what I imagined I would like the site to look like using [Balsamiq.](https://balsamiq.com/)

 - The final version of the site does differ from the inital wireframe  as there were changes made during the development process.
	 - The first change that was made is that a close button ("X") was added to the top right hand corner of the main game area and the difficulty selection page.
	
		 - This change was added because there was no way for he user to return the main menu page without refreshing the whole page.
	 - Another change that was made was the text within the difficulty selection. Instead of easy, medium and hard it was changed to Padawan, Jedi Knight and Jedi Master.
		 - This change was added to give a more authentic experience to the user as this is a StarWars themed trivia game.
	 - The display in which the answers are shown was also changed so instead of displaying in a row they would display in a 2x2 column. 
		 - This change was added because the answers displayed better on bigger screens.

All of these changes can be seen in the features section.

![wireframe of main page](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/wireframe-main-page.webp.png?raw=true)

![wireframe of difficulty menu](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/wireframe-difficulty.webp.png?raw=true)

![wireframe of rules page](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/wireframe-rules.webp.png?raw=true)

![wireframe of questions](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/wireframe-questions.webp.png?raw=true)
# Design

## Typography

 - The font used for the main title page was imported from [Online Web Fonts](@import%20url%28%27https://db.onlinewebfonts.com/c/0c724f6aa457310440cf8949c615cbd7?family=Star%20Jedi%20V2%27%29;).
	 - This font was chosen because it was the closest font that could be found to replicate the main Star Wars title logo, again to give the user a more authentic experience.

**Color**

![Color Palette](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/color-palette.webp.png?raw=true)

The color palette was generated with the help from [Coolers](https://coolors.co/) and were mainly focused on the black and yellow to give the user that authentic Star Wars experience.


## Features

## Features

**Existing Features** 

 - **The Heading**
	 - The heading is featured on the landing page just above the main menu.
	 - It has been styled to be captivating giving the user an authentic feel and its content refers to the purpose of the site.
	 - The header helps the user understand the purpose of the site and creates a positive impression.

![Header Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/main-header.png?raw=true)

 - **The Main Menu**
	 - On the landing page is the main menu which sits directly under the main heading.
	 - This contains a piece of text to entice the user to begin a quiz as well as two buttons,  one button to begin the quiz and the other to display the rules of the quiz to the user.
	 - When on a desktop if the user hovers their mouse over theses buttons an animation will occur simulating the ignition of a lightsaber, again this was added to give the user a more authentic theme.

![Main Menu](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/main-menu-image.png?raw=true)

![Main Menu Highligt](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/main-menu-highlight-image.png?raw=true)

 - **The Rules Page**
	 - The rules page can be accessed through the "Rules" button displayed on the main menu.
	 - It contains a list of rules pertaining to the quiz.
	 - At the top right corner of the rules page is an exit button "X" which will take the user back to the main menu.
	 - If the user is using a desktop device the similar to the main menu buttons when the user hovers their cursor over the "X" it will perform the same animation.
	 - This page is useful to users to learn how the quiz works and what the rules are if they decide to take part.

![Quiz Rules Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/game-rules-image.png?raw=true)

 - **The Difficulty Menu**
	 - The difficulty menu is accessed through the "Begin Quiz" button in the main menu.
	 - It contains buttons with options to set the difficulty of the quiz, either "Padawan", "Jedi Knight", "Jedi Master", each of which are explained in the rules to what is easy, medium and hard.
	 - Once one of the options is clicked, the quiz associated with the selected difficulty will begin.
	 - At the top right hand corner of the difficulty menu is an exit button "X" that the user can user to exit this menu and return to the main menu.
	 - This is useful for users to be able to chose a difficulty level prior to them beginning the quiz.
	 - If the user is using a desktop device these buttons use the same animation as the main menu buttons.

![Difficulty Menu Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/difficulty-menu-image.png?raw=true)

![Padawan Difficulty](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/difficulty-padawan.png?raw=true)

![Jedi Knight Difficulty](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/difficulty-jedi-knight.png?raw=true)

![Jedi Master Difficulty](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/difficulty-jedi-master.png?raw=true)

 - The Main Quiz Area.
	 - Once the user has selected their difficulty, the quiz area is then displayed and the quiz will begin.
![Main Question Area](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/main-question-area.png?raw=true)
S
	- In the top right hand corner of the main quiz area is a button "X" for the user to exit the quiz at any given time. 
	- This is useful for the user to exit without having to refresh the page.

![Close Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/close-button-image.png?raw=true)

![Close button Hover](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/close-button-hover-image.png?raw=true)


	- At the top of the quiz is the question number display which changes depending on which question the user is out of 15.
	- This is useful to the user as it informs them of what stage they are at when participating in the quiz.
	
![Question Number Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/question-number-image.png?raw=true)

	- Next to the question display is a timer which displays the amount of time there is to answer the current question.
	- This is useful as it shows the user how much time they have left to answer the question.

![Timer Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/timer-image.png?raw=true)

	- In the center of the quiz area is the current question and answer sections which are displayed to the user.
	- This provides the user with a question based on the theme (Star Wars) and provides the user with a selection of potential answers to chose from.
	
	- At the bottom of the main quiz area is a display which shows the user their current score.
	- This helps the user keep track of their score during their quiz game.

![Score Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/score-image.png?raw=true)
	
 - **Next Question Button**
	 - The next question button is displayed at the bottom of the quiz area if the user answers a question or if the timer runs out.
	 - This lets the user move to the next question when they are ready to do so.

![Next Button](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/next-question-button.png?raw=true)

 - **Correct Answer Display**
	-	If the user clicks on the correct answer, the selected answer text will highlight in green and the users score will increment by 1 point.

![Correct Answer](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/correct-answer-image.png?raw=true)

 - **Incorrect Answer Display**
	 - If the user clicks on the incorrect answer, the selected answer text will highlight red and the correct answer will be highlighted in green to inform the user which answer was correct.

![incorrect answer](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/incorrect-answer-image.png?raw=true)

 - **The Time up Display**
	 - If the user does not answer a question within the given time, a message will pop up to inform the user that they have ran out of time.
	 - After the user clicks the reveal answer button on the pop up, the correct answer will highlight in green and the incorrect answers will highlight in red.

![Run Out of Time Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/out-of-time-answer-image.png?raw=true)

 - **Completed Quiz Display**
	 - At the end of the quiz, the main quiz area is replaced by a completed quiz display.
	 - This informs the user that the quiz is complete.
	 - The final score out of 15 is presented to the user.
	- A message will also appear to the user depending on the user's score.
	- Buttons to retry the quiz or return to the main menu are made available to the user.
	- This is a valuable feature of the site as it informs the user about their completion of the quiz and provides them with options to go back to the main landing page or take another quiz.

![Trivia Complete](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/trivia-complete-image.png?raw=true)

 - **The Footer**
	 - At the bottom of the page is a footer that contains text stating who created the quiz.
	 - This adds more structure to the site and provides information on who created the site.

![Footer Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/footer-image.png?raw=true)

**Future Features**
Features that may be implemented in the future:

 - An Audio feature that plays different sounds when the user is clicking the menu buttons and also play different sounds  for a correct and incorrect answer.
 - A more advance difficulty setting.
	 - This may include the timer being set to a lesser time while the question content has increased in difficulty and could be named "Sith".

## Technologies Used

 - [Balsamiq](https://balsamiq.com/wireframes/)
	 - This was used to create the wireframes during the planning stage of the site.
-  [HTML5](https://html.spec.whatwg.org/)
	- This was used to add structure and content to the site.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
	- This was used to add style to the HTML elements.
- [JavaScript](https://www.javascript.com/)
	- This was used to enhance functionality and interactivity throughout the site.
- [Gitpod](https://www.gitpod.io/#get-started)
- [CodeAnywhere](https://app.codeanywhere.com/)
	- These were used to create the code and content for the repository.
- [Github](https://github.com/)
	- Used to store the repository and deploy the site.