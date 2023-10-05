# Testing

## Code Validation

All code for this project was tested prior to submission.

 - All HTML code has been run through the [W3C HTML Validator](https://validator.w3.org/).
	 - A few warnings were presented during the validation process
- All HTML code has been run through the [W3C HTML Validator](https://validator.w3.org/).
	 -   No warnings or errors were presented when testing the CSS code.
 - All JavaScript code has been run through [JSHint](https://jshint.com/).
	 -  A few warnings were presented when testing the JavaScript code.

After making the necessary adjustments to the code, no errors or warnings were presented.

 - For more information on on the warnings that were presented, please go to the known bugs section.

**W3C HTML Validator Final Results**
![HTML Validator final results](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/html-validator-image.png?raw=true)

**W3C HTML CSS Final Results**

![CSS Validator Final Result](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/css-validator-image.png?raw=true)



 **JSHint Final Results**

 - **Main Script (script.js)**
	 - No warnings are shown.
	 - When the code from the main script is tested in JSHint it shows that there are three undefined variables which are named padawanQuestions, jediKnightQuestions and jediMasterQuestions.
		 - This is because these variables havew been defined in three other scripts (padawan.js, jediknight.js and jedimaster.js)

 ![script.js JSHint](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/script.js-validator-image.png?raw=true)

**Script Containing Questions**

 - No warnings are shown.
 - When the code from the three scripts containing the questions were tested in JSHint it shows that there are three unused variables which are the same variables shown as undefined in the main script (script.js).
	 - This is because these variables are used in the main script (script.js)


## Responsiveness

The site was tested for responsiveness throughout the development phase using the  [Responsive Design Checker](https://responsivedesignchecker.com/) and also [Chrome Devtools](https://developer.chrome.com/docs/devtools/).

 - The site was tested across multiple screen sizes used by different devices and the site worked and was displayed as intended across all the screen sizes.

	- Some of the screens that were used for testing thanks to the responsive design checker are as follows:
		- 	Apple iPad Pro 1366x1024
		- Amazon Kindle Fire HD 768x1024
		- Nexus 7 600x960
		- Sony Xperia 1080 x 2520
		- Samsung Galaxy S21 1080×2400

## Browser Compatibility
The site was tested using the following browsers:

 - Google Chrome
 - Microsoft Edge
 - Safari

During these browser tests I did not come across any problems and the functionality  and appearance remained consistent.

## Testing User Stories

As a user I want:

 - Test My StarWars knowledge with trivia.
	 - The focus of the site is on a StarWars knowledge quiz.
	 - The site has intuitive buttons to initiate the quiz.
	 - There are different difficulty levels for the user to select and test their StarWars knowledge at different levels.
	 
 - Be able to initiate the start of the trivia.
	 - A button is available for the user to click on to initiate the difficulty selection process and then start the StarWars quiz.
 
 - Be able to understand how the trivia works.
	 - The rules section of the StarWars trivia explains to the user the way to participate when beginning a game.

 - Be able to select a difficulty before I start the trivia.
	 - When the user click on the "begin quiz" button a prompt first appears telling the user to select a difficulty option prior to starting the quiz.

 - To know what my score is as I progress through the trivia.
	 - At the bottom of the trivia area there is a score display that increments with each correct answer and displays to the user their current score.

 - To know what question I am on during the trivia.
	 - At the top of the quiz area is a question number display that  tells the user which question number they are on out of 15.

 - To know if my answer is correct or incorrect.
	 - If the user selects the correct answer then the text of that answer will change to green.
	 - If the user selects a incorrect answer then the text of that answer will turn red but also the correct answer text will turn green showing the user what the correct answer was.
	 - If the  user runs out of time, a pop up message will display informing the user and then the correct answer text will change to green and the remaining answers text will turn red.
	 - 
 - To Know my final score
	 - At the end of the quiz, a message is displayed to inform the user that the quiz is complete and will display to the user their final score out of 15.
	 - 
 - To be able to take the quiz again after completion. 
	 - At the end of the trivia, underneath the message showing the users final score, there is two options presented, one to retake the quiz which will take the user back to the difficulty selector and another to take the user back to the main menu.

## Known Bugs

 - **In the HTML**
	 -  When the initial validation was carried out for the HTML there were two  main errors that were displaying.
		 - The first was that the questions that  have images attached the initial code had the "img" element within the HTML and the "src" was left blank (to allow the javascript to fill in when necessary.
		 - The other was that the meta tags at the beginning of the code had a "/" just before the closing tag in each, this was due to CodeAnyWhere's auto formatting when saving the file.

To resolve the first issues I removed the "img" element from the main HTML document and created a function within the main.js javaScript code to create an "img" element if a question presented with an "imgURL".

To resolve the second issue, I simply removed the "/" at the end of each of the meta tags.

 - **In all JavaScript files**
	 - The only warning that presented within the javaScript files was that i was missing semicolons from some of the lines.
	 - This was resolved once i inserted the semicolons into position and this error was then cleared.

## Other Amendments that were Required

 - The timer would not stop when the user had answered a question.
	 - This was resolved by using clearInterval() to clear the interval for the timer when nessesary and then resetting the timer needed to start again.

To my Knowledge there are now no known bugs that need resolved.

## Additional Testing

**Lighthouse**
I used google lighthouse test within the chrome developer tools to test the site in the following categories.

 - Perfomance
 - Accessibility
 - Best Practice
 - SEO

I tested for both desktop and mobile and the results can be seen below:

 - **Desktop**
![Lighthouse desktop](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/lighthouse-desktop-test.png?raw=true)

 - **Mobile**
![Lighthouse Mobile](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/assets/readme-images/lighthouse-mobile-test.png?raw=true)
> Written with [StackEdit](https://stackedit.io/).

Return to [README.md](https://github.com/GreenNinjaBoy/Star-Wars-Trivia-PP2/blob/main/README.md)
