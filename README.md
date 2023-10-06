


# Star Wars Trivia
The Star Wars Trivia is a site designed for users who have a love for the world of Star Wars and would like to put their knowledge to the test. The site was designed based around the nine feature films (episode I - IX) and the content for those who are fans of the series and people who have recently been introduced to the world of StarWars.

You can access the live site [here](https://greenninjaboy.github.io/Star-Wars-Trivia-PP2/).

![Responsive Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/responsive-image.png?raw=true)

## Contents

 - [User Experience](#user-experience)
 - [User Stories](#user-stories) 
 - [Site Structure](#site-structure)
	- [Wireframe](#wireframes)
 - [Design](#design)
	 - [Typography](#typography)
	 - [Color Palette](#color-palette)
 - [Features](#features)
	 - [Existing Features](#existing-features)
		 - [The Heading](#the-heading)
		 - [The Main Menu](#the-main-menu)
		 - [The Trivia Rules](#the-trivia-rules)
		 - [The Difficulty Selector](#the-difficulty-selector)
		 - [The Close Button](#the-close-button)
		 - [The Main Quiz Area](#the-main-quiz-area)
		 - [The Question Display](#the-question-display)
		 - [The Next Button](#the-next-button)
		 - [The Correct Answer Display](#the-correct-answer-display)
		 - [The Incorrect Answer Display](#the-incorrect-answer-display)
		 - [The Time Up Display](#the-time-up-display)
		 - [The Footer](#the-footer)
	 - [Future Features](#future-features)
	 
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

# User Experience

## User Stories

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

 - The final version of the site does differ from the initial wireframe  as there were changes made during the development process.
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

 - The font used for the main title page was imported from [Online Web Fonts](https://www.onlinewebfonts.com/download/c00548f5d217ed324ae9096051927001).
	 - This font was chosen because it was the closest font that could be found to replicate the main Star Wars title logo, again to give the user a more authentic experience.
 - The font used for the rules page and question pages were taken from google fonts. Initially the font used was the same as the title page however it was proven to be difficult to read.

**Color Palette**

![Color Palette](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/color-palette.webp.png?raw=true)

The color palette was generated with the help from [Coolers](https://coolors.co/) and were mainly focused on the black and yellow to give the user that authentic Star Wars experience.
	 - 
 
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

 - **The Trivia Rules**
	 - The rules page can be accessed through the "Rules" button displayed on the main menu.
	 - It contains a list of rules pertaining to the quiz.
	 - At the top right corner of the rules page is an exit button "X" which will take the user back to the main menu.
	 - If the user is using a desktop device the similar to the main menu buttons when the user hovers their cursor over the "X" it will perform the same animation.
	 - This page is useful to users to learn how the quiz works and what the rules are if they decide to take part.

![Quiz Rules Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/game-rules-image.png?raw=true)
 - **The Difficulty Selector**
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

 **The Main Quiz Area.**
- Once the user has selected their difficulty, the quiz area is then displayed and the quiz will begin.

![Main Question Area](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/main-question-area.png?raw=true)

**The Close Button**
- In the top right hand corner of the main quiz area is a button "X" for the user to exit the quiz at any given time.
 
- This is useful for the user to exit without having to refresh the page.

![Close Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/close-button-image.png?raw=true)

![Close button Hover](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/close-button-hover-image.png?raw=true)

**The Question Display**
- At the top of the quiz is the question number display which changes depending on which question the user is out of 15.
	- This is useful to the user as it informs them of what stage they are at when participating in the quiz.
	
	![Question Number Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/question-number-image.png?raw=true)

**Timer**

- Next to the question display is a timer which displays the amount of time there is to answer the current question.
	- This is useful as it shows the user how much time they have left to answer the question.
	
![Timer Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/timer-image.png?raw=true)

**Quiz Content**
- In the center of the quiz area is the current question and answer sections which are displayed to the user.
	- This provides the user with a question based on the theme (Star Wars) and provides the user with a selection of potential answers to chose from.
	
**Score Display**

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

  **The Time up Display**
	 - If the user does not answer a question within the given time, a message will pop up to inform the user that they have ran out of time.

![popup display](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/popup-image.png?raw=true)


- The pop up display will disappear after 3 seconds , then the user will see the correct answer will highlight in green and the incorrect answers will highlight in red.

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

 - An Audio feature that plays different sounds when the user is clicking the menu buttons and also play different sounds for a correct and incorrect answer.
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

## Testing
Click [here](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/TESTING.md#testing) for the testing information for the site.

## Development and Deployment


**Creating The Repository**

The repository was created using Github. as a student this was done using a template provided by Code Institute.
To do this the following steps were taken:

 - On the browser head over to the [Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template).
 - Click on the green "Use this template button".
 - Click on "create a new repository".
 - The user will be taken to a new page to create the repository.
 - In the box titled "repository name" enter an appropriate name (for this project Star-Wars-Trivia-PP2 was used).
 - There is an optional description box if you wish to give a bit more detail to your repository.
 - Then Click on the green "create repository" and Github will create the new repository.

**Cloning the Repository** 
 - Github can also be used to clone a repository so that the code can be altered and pushed back to the main repository using a different IDE.
	 - This can be done by using the following steps.
		 1.  In the "Star-Wars-Trivia-PP2" repository, select the  green "code" tab.
		 2. Select HTTPS in the dropdown menu.
		 3. Copy the URL under HTTPS.
		 4. Open the IDE that you are working from for example [CodeAnywhere](https://app.codeanywhere.com/).
		 5. Sign in using your Github details.
		 6. Click on the create new workspace button.
		 7.  Paste copied HTTPS and click create (Codeanywhere will now generate the virtual IDE).
		8.  Once IDE has Loaded create inital index.html page and add test text.
		9.  Once test text is added press  `Ctrl + S`  to save.
		10.  Click terminal tab at top of screen and click new terminal.
	11.  Once new terminal has opened test that content is being pushed back to github.
	12.  In the terminal type  `git add .`  and press enter (this will add all new content).
	13.  Then type  `git commit -m "add test text"`  and press enter (this lets anyone seeing your commits know what you have done).
	14.  Once you have done that type  `git push`  and press enter (this will push all changes made to the github repository).
	15.  Navigate to github.
	16.  Choose the repository you were working on.
	17.  Check the changes have been successfully pushed.



**Forking The Repository**
 - Github can also be used to fork a repository.
	 - This can create a copy of the repository which can be edited without effecting the main repository branch.
	 - The steps to fork the repository can be done as follows:
		 - When in the "Star-Wars-Trivia-PP2" repository click on the "Fork" tab located at the top right hand corner.
		 - Click on "create a new fork"
		 - You will be sent to another page to name your forked repository.
		 - Once Named click create fork and you will have a copy of the repository that you can now access and change without affecting the original main repository.

![Fork Image 1](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/fork-image-1.png?raw=true)

![Fork Image 2](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/fork-image-2.png?raw=true)
*Please note that the images taken were from a friends Github repository who consented to the use of these images for educational purposes.

**Deploying the Site**
 - The site was deployed using Github pages using the following steps:
 - In the "Star-Wars-Trivia-PP2" Github repository click on the "settings" tab.
 - On the left hand side locate the tab named "pages".
 - Select the dropdown in the "Branch" section and select "Main".
 - Click save at the bottom of the page.
 - Refresh your page and your deployed hyperlink for your page shall be on display.
![Deployment Image](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/deployment-image.png?raw=true)

 ## Credits

### Content
- The font used for the main title was taken from [Online Web Fonts](https://www.onlinewebfonts.com/download/c00548f5d217ed324ae9096051927001).
-   The font used for the rest of the content was taken from  [Google Fonts](https://fonts.google.com/).
-   The color palette was generated using  [coolers](https://coolors.co/).
-   The favicon was generated using this  [favicon generator](https://www.favicongenerator.com/).
- The images used for the question content were taken from [Google Images](https://www.google.com/imghp?hl=en)  a list of the images can be found below.

	- [Death Star Image](https://raw.githubusercontent.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/main/assets/images/death-star.webp)




**Code**
-   Ideas on how to implement various parts of code to create a quiz were taken from this  [youtube tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k).
-   An idea of how to create a function to increment the score was taken from the  [love maths](https://github.com/GreenNinjaBoy/love-maths-walkthrough)  project.
-   Ideas on how to implement code for a timer were taken from  [here](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz).

# Acknowledgements

This site was created and developed for portfolio as a student of [Code Institute](https://codeinstitute.net/) currently undertaking their course in Full Stack Software Development.

I would like to thank the following for all of the support throughout the development phase.
-   The Code Institute community, including fellow students and staff.
-   My family, friends, and peers who have helped during the testing phase and provided valuable feedback.
- My Mentor lauren-nicole popich for her continuing advice and support during the development process.

Jamie Connell
Code Institute Student 2023 
