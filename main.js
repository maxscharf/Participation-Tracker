// Create lists & variables
var names =  [];
var grades = [];
var events = [];
var passkeys = [];
var studentPoints = [];
var eventsPoints = [];
var prizes = [];
var randomWinners = [];
var faqQuestions = [];
var faqCategories = ["Student Usage", "Administrator Usage", "Interface Usage"];
var faqCategoryList = [];
var faqAnswers = [];
fillLists();
var faqStudentQuestions = [];
var faqAdminQuestions = [];
var faqInterfaceQuestions = [];
filterQuestions();
var ninthGraders = [];
var tenthGraders = [];
var eleventhGraders = [];
var twelvthGraders = [];
var ninthGradersPoints = [];
var tenthGradersPoints = [];
var eleventhGradersPoints = [];
var twelvthGradersPoints = [];
var ninthGradersPrizes = [];
var tenthGradersPrizes = [];
var eleventhGradersPrizes = [];
var twelvthGradersPrizes = [];
filterGrades();
var currentStudent;
var currentPasskey;
var currentStudentPoints;
var currentStudentIndex;
var checkboxValue;
var studentObject = {};
var topPointsScorer9 = [];
var topPointsScorer10 = [];
var topPointsScorer11 = [];
var topPointsScorer12 = [];
var topPointValue9;
var topPointValue10;
var topPointValue11;
var topPointValue12;
var topPointsOutputText = "";
findTopPointsScorer();
var randomWinner9 = randomWinners[0];
var randomWinner10 = randomWinners[1];
var randomWinner11 = randomWinners[2];
var randomWinner12 = randomWinners[3];
var winnerGradeValue;
var currentCategory;

onEvent("faqScreenBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("studentButton", "click", function( ) {
  setScreen("studentLogin");
  //resets the screen so it is back to default if the user clicks back button
  setProperty("adminPasskeyInput", "hidden", true);
  setProperty("incorrectAdminPasskey", "hidden", true);
  setProperty("blankPasskeyMessage", "hidden", true);
  setProperty("adminEnterButton", "hidden", true);
  updateStudentNameDropdownS();
});
onEvent("studentLoginBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("studentPointsViewBackButton", "click", function( ) {
  setScreen("studentLogin");
  setProperty("incorrectPasskeyMessage", "hidden", true);
  setProperty("incorrectPasskeyReminder", "hidden", true);
});
onEvent("gradeSelectorS", "change", function( ) {
  updateStudentNameDropdownS();
});
onEvent("enterButtonS", "click", function( ) {
  currentStudent = getText("studentNameDropdownS");
  currentPasskey = getText("passkeyInput");
  //removes current input
  setText("passkeyInput", "");
  setProperty("incorrectPasskeyMessage", "hidden", true);
  setProperty("blankPasskeyMessage", "hidden", true);
  //Find the correct passkey of the currently selected student
  for (var i = 0; i < names.length; i++) {
    if (currentPasskey == "") {
      //if there is no passkey inputted
      setProperty("blankPasskeyMessage", "hidden", false);
    } else if (((names[i] == currentStudent) && (passkeys[i] == currentPasskey))) {
      //if the passkey is correct
      setScreen("studentPointsViewS");
      setEventNames("S");
      currentStudentIndex = i;
      resetStudentPointsViewS();
    } else {
      //if there is a passkey input, but it's wrong
      setProperty("incorrectPasskeyMessage", "hidden", false);
    }
  }
});
//every time a checkbox is hit, the point value changes; all data based on point value needs to be updated
onEvent("studentCheckboxS0", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS1", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS2", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS3", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS4", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS5", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS6", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS7", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS8", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxS9", "click", function( ) {
  updatePointsOutputS();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA0", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA1", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA2", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA3", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA4", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA5", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA6", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA7", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA8", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});
onEvent("studentCheckboxA9", "click", function( ) {
  updatePointsOutputA();
  updatePrizes();
  updateData();
  filterGrades();
  findTopPointsScorer();
});

onEvent("administratorButton", "click", function( ) {
  setProperty("adminPasskeyInput", "hidden", false);
  setProperty("adminEnterButton", "hidden", false);
});
onEvent("adminEnterButton", "click", function( ) {
  //change screen according to passkey correctness
  setProperty("incorrectAdminPasskey", "hidden", true);
  if (getText("adminPasskeyInput") == 1234) {
    setScreen("adminSelectScreen");
    setProperty("adminPasskeyInput", "hidden", true);
    setProperty("adminEnterButton", "hidden", true);
  } else if (getText("adminPasskeyInput") == ""){
    setText("incorrectAdminPasskey", "*Please enter the passkey*");
    setProperty("incorrectAdminPasskey", "hidden", false);
  }
  else {
    setText("incorrectAdminPasskey", "*Incorrect Passkey*");
    setProperty("incorrectAdminPasskey", "hidden", false);
  }
  setText("adminPasskeyInput", "");
});
onEvent("adminSelectBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("adminEditButton", "click", function( ) {
  setScreen("adminStudentSelectScreen");
  updateStudentNameDropdownA();
});
onEvent("gradeSelectorA", "change", function( ) {
  updateStudentNameDropdownA();
});
onEvent("enterButtonA", "click", function( ) {
  //find the index of the currently selected student in names list to find the coincident point values
  currentStudent = getText("studentNameDropdownA");
  for (var i = 0; i < names.length; i++) {
    if ((names[i] == currentStudent)) {
      setScreen("studentPointsViewA");
      setEventNames("A");
      currentStudentIndex = i;
      resetStudentPointsViewA();
    }
  }
});
onEvent("studentPointsViewBackButtonA", "click", function( ) {
  setScreen("adminStudentSelectScreen");
});
onEvent("adminStudentSelectBackButton", "click", function( ) {
  setScreen("adminSelectScreen");
});
onEvent("adminParticipationReportBackButton", "click", function( ) {
  setScreen("reportGradeSelectScreen");
});
onEvent("winnersButton", "click", function( ) {
  setScreen("winnerGradeSelectScreen");
});
onEvent("winnerScreenBackButton", "click", function( ) {
  setScreen("adminSelectScreen");
});
onEvent("winnerResultsScreenBackButton", "click", function( ) {
  setScreen("winnerGradeSelectScreen");
});
//generate the winners based on the arguments for each grade
onEvent("winnerGradeSelectEnterButton", "click", function( ) {
  if (getChecked("winnerGradeRadioButton9") == true){
  generateWinners(9, topPointsScorer9, topPointValue9, randomWinner9);
  }
  else if (getChecked("winnerGradeRadioButton10") == true){
  generateWinners(10, topPointsScorer10, topPointValue10, randomWinner10);
  }
  else if (getChecked("winnerGradeRadioButton11") == true){
  generateWinners(11, topPointsScorer11, topPointValue11, randomWinner11);
   }
  else if (getChecked("winnerGradeRadioButton12") == true){
  generateWinners(12, topPointsScorer12, topPointValue12, randomWinner12);
   }
});
onEvent("reportButton", "click", function( ) {
  setScreen("reportGradeSelectScreen");
});
onEvent("reportGradeSelectScreenBackButton", "click", function( ) {
  setScreen("adminSelectScreen");
});
//generate a report based on the arguments for each grade
onEvent("reportGradeSelectEnterButton", "click", function( ) {
  if (getChecked("reportGradeRadioButton9") == true){
    generateReport(ninthGraders, ninthGradersPoints, ninthGradersPrizes);
  }
  else if (getChecked("reportGradeRadioButton10") == true){
    generateReport(tenthGraders, tenthGradersPoints, tenthGradersPrizes);
  }
  else if (getChecked("reportGradeRadioButton11") == true){
    generateReport(eleventhGraders, eleventhGradersPoints, eleventhGradersPrizes);
   }
  else if (getChecked("reportGradeRadioButton12") == true){
    generateReport(twelvthGraders, twelvthGradersPoints, twelvthGradersPrizes);
   }
});
onEvent("resetRandomWinnerButton", "click", function( ) {
  resetRandomWinners();
});
onEvent("questionMarkButtonHome", "click", function( ) {
  setScreen("faqScreen");
});
onEvent("questionMarkButtonLogin", "click", function( ) {
  setScreen("faqScreen");
});
onEvent("faqCategoryDropdown" , "change", function( ){
  updateFAQScreen();
  // after the faq category dropdown eliminates the first option "category" , 
  // the slected option needs to stay as what was selected
  setProperty("faqCategoryDropdown", "options", faqCategories);
  setProperty("faqCategoryDropdown", "text", currentCategory);
});
onEvent("faqQuestionsDropdown" , "change", function( ){
    updateFAQScreen();
});
function fillLists() {
  // fill lists with values from data set
  names = getColumn("Student Data", "name");
  grades = getColumn("Student Data", "grade");
  events = getColumn("Events", "Events");
  eventsPoints = getColumn("Events", "Point Value");
  passkeys = getColumn("Student Data", "passkey");
  studentPoints = getColumn("Student Data", "points");
  faqQuestions =   getColumn("FAQ", "question");
  faqCategoryList = getColumn("FAQ", "category");
  faqAnswers = getColumn("FAQ", "answer");
  // the answers have quotes around them in the dataset, but these 
  // quotes should not show up in the text box
  for (var i = 0; i < faqAnswers; i++) {
    faqAnswers[i] =  faqAnswers[i].substring(2, faqAnswers[i].length-1);
  }
  // random winners are a dataset so they can be consitent through users
  randomWinners = getColumn("Random Winners", "name");
  //fill the list of prizes based off of each point value
  prizes = [];
  for (i = 0; i < names.length; i++) {
    if (studentPoints[i] < 30) {
      appendItem(prizes, "None");
    } else if (studentPoints[i] < 60) {
      appendItem(prizes, "Free Pizza with Lunch!");
    } else if ((studentPoints[i] <= 80)) {
      appendItem(prizes, "School Spirit Lanyard!");
    } else {
      appendItem(prizes, "Customize School ID!");
    }
  }
}
function filterGrades() {
  // reset lists
  ninthGraders = [];
  tenthGraders = [];
  eleventhGraders = [];
  twelvthGraders = [];
  ninthGradersPoints = [];
  tenthGradersPoints = [];
  eleventhGradersPoints = [];
  twelvthGradersPoints = [];
  ninthGradersPrizes = [];
  tenthGradersPrizes = [];
  eleventhGradersPrizes = [];
  twelvthGradersPrizes = [];
  // sort students by grade
  for (var i = 0; i < names.length; i++) {
    if (grades[i] == 9) {
      appendItem(ninthGraders, names[i]);
      appendItem(ninthGradersPoints, studentPoints[i]);
      appendItem(ninthGradersPrizes, prizes[i]);
    } else if ((grades[i] == 10)) {
      appendItem(tenthGraders, names[i]);
      appendItem(tenthGradersPoints, studentPoints[i]);
      appendItem(tenthGradersPrizes, prizes[i]);
    } else if ((grades[i] == 11)) {
      appendItem(eleventhGraders, names[i]);
      appendItem(eleventhGradersPoints, studentPoints[i]);
      appendItem(eleventhGradersPrizes, prizes[i]);
    } else if ((grades[i] == 12)) {
      appendItem(twelvthGraders, names[i]);
      appendItem(twelvthGradersPoints, studentPoints[i]);
      appendItem(twelvthGradersPrizes, prizes[i]);
    }
  }
}
function updateData() {
  //crates an object with all the data for the currently selected student and usated the data set with the new point and prize values
  studentObject = {
    "id": (currentStudentIndex + 1), 
    "name": (names[currentStudentIndex]),
    "grade": (grades[currentStudentIndex]),
    "points": (studentPoints[currentStudentIndex]),
    "prize": prizes[currentStudentIndex],
    "passkey": passkeys[currentStudentIndex],
  };
  updateRecord("Student Data", studentObject, function() {
    
  });
}
function updateStudentNameDropdownS() {
  //Have the grade dropdown effect the options in the name dropdown
  if (getText("gradeSelectorS") == "9th")  {
      setProperty("studentNameDropdownS", "options", ninthGraders);
  } else if ((getText("gradeSelectorS") == "10th")) {
    setProperty("studentNameDropdownS", "options", tenthGraders);
  } else if ((getText("gradeSelectorS") == "11th")) {
    setProperty("studentNameDropdownS", "options", eleventhGraders);
  } else if ((getText("gradeSelectorS") == "12th")){
    setProperty("studentNameDropdownS", "options", twelvthGraders);
  }
}
function updateStudentNameDropdownA() {
  //Have the grade dropdown effect the options in the name dropdown
  if (getText("gradeSelectorA") == "9th")  {
      setProperty("studentNameDropdownA", "options", ninthGraders);
  } else if ((getText("gradeSelectorA") == "10th")) {
    setProperty("studentNameDropdownA", "options", tenthGraders);
  } else if ((getText("gradeSelectorA") == "11th")) {
    setProperty("studentNameDropdownA", "options", eleventhGraders);
  } else if ((getText("gradeSelectorA") == "12th")){
    setProperty("studentNameDropdownA", "options", twelvthGraders);
  }
}
function resetStudentPointsViewS() {
  setText("studentPointsViewNameOutputS", currentStudent);
  setText("studentPointsTrackerS", studentPoints[currentStudentIndex]);
  //uncheck every checkbox
  for (var i = 0; i < 10; i++) {
    setChecked("studentCheckboxS" + i, false);
  }
}
function resetStudentPointsViewA() {
  setText("studentPointsViewNameOutputA", currentStudent);
  setText("studentPointsViewAHeading", ("What events has " + currentStudent) + " attended this quarter?");
  setText("studentPointsTrackerA", studentPoints[currentStudentIndex]);
  //uncheck every checkbox
  for (var i = 0; i < 10; i++) {
    setChecked("studentCheckboxA" + i, false);
  }
}
function updatePointsOutputS() {
  currentStudentPoints = 0;
  for (var i = 0; i < events.length; i++) {
    //for each checkbox, see if it was checked
    checkboxValue = getChecked("studentCheckboxS" + i);
    if (checkboxValue == true) {
      //if it was, add the corresponding point value to the current students points
      currentStudentPoints = currentStudentPoints + eventsPoints[i];
    }
  }
  //update the points in the list and the UI
 studentPoints[currentStudentIndex]  = currentStudentPoints;
  setText("studentPointsTrackerS", currentStudentPoints);
}
function updatePointsOutputA() {
  //same as student view, but different IDs
  currentStudentPoints = 0;
  for (var i = 0; i < events.length; i++) {
    checkboxValue = getChecked("studentCheckboxA" + i);
    if (checkboxValue == true) {
      currentStudentPoints = currentStudentPoints + eventsPoints[i];
    }
  }
 studentPoints[currentStudentIndex]  = currentStudentPoints;
  setText("studentPointsTrackerA", currentStudentPoints);
}
function updatePrizes() {
  //assign a prize to each student based on their point values
  if (studentPoints[currentStudentIndex] < 30) {
    prizes[currentStudentIndex] = "None";
  } else if ((studentPoints[currentStudentIndex] < 60)) {
    prizes[currentStudentIndex] = "Free Pizza with Lunch!";
  } else if ((studentPoints[currentStudentIndex] <= 80)) {
    prizes[currentStudentIndex] = "School Spirit Lanyard!";
  } else if (studentPoints[currentStudentIndex] > 80) {
    prizes[currentStudentIndex] = "Customize School ID!";
  }
}
function findTopPointsScorer() {
  // set the top point scorer as a blank list so multiple names can be stored there in the event of  tie
  topPointsScorer9 = [];
  topPointValue9 = (ninthGradersPoints[0]);
  for (var i = 0; i < ninthGraders.length; i++) {
    if (ninthGradersPoints[i] > topPointValue9) {
      //for every student, if it is greater than the previously greatest point value, it becomes the new gtop points scorer and greatest point value
      topPointsScorer9 = [(ninthGraders[i])];
      topPointValue9 = ninthGradersPoints[i];
    } else if ((ninthGradersPoints[i] == topPointValue9)) {
      //if there is a tie, add it to the list so both students can be the top points scorer
      //the top point value does not have to be updated here
      appendItem(topPointsScorer9, ninthGraders[i]);
    }
  }
  //repeat for every grade, since this happens whenever point values change and need to update dynamically
  topPointsScorer10 = [];
  topPointValue10 = [(tenthGradersPoints[0])];
  for ( i = 0; i < tenthGraders.length; i++) {
    if (tenthGradersPoints[i] > topPointValue10) {
      topPointsScorer10 = [(tenthGraders[i])];
      topPointValue10 = tenthGradersPoints[i];
    } else if ((tenthGradersPoints[i] == topPointValue10)) {
      appendItem(topPointsScorer10, tenthGraders[i]);
    }
  }
  topPointsScorer11 = [];
  topPointValue11 = [(eleventhGradersPoints[0])];
  for ( i = 0; i < eleventhGraders.length; i++) {
    if (eleventhGradersPoints[i] > topPointValue11) {
      topPointsScorer11 = [(eleventhGraders[i])];
      topPointValue11 = eleventhGradersPoints[i];
    } else if ((eleventhGradersPoints[i] == topPointValue11)) {
      appendItem(topPointsScorer11, eleventhGraders[i]);
    }
  }
  topPointsScorer12 = [];
  topPointValue12 = [(twelvthGradersPoints[0])];
  for ( i = 0; i < twelvthGraders.length; i++) {
    if (twelvthGradersPoints[i] > topPointValue12) {
      topPointsScorer12 = [(twelvthGraders[i])];
      topPointValue12 = twelvthGradersPoints[i];
    } else if ((twelvthGradersPoints[i] == topPointValue12)) {
      appendItem(topPointsScorer12, twelvthGraders[i]);
    }
  }
}
function generateWinners(winnerGrade, topPointsScorer, topPointValue, randomWinner) {
  setScreen("winnerResultsScreen");
  topPointsOutputText = "";
  //depending on the amount of winners (ties) change the label to be singular or plural
  if (topPointsScorer.length == 1) {
    setText("topWinnerLabel", ("Top " + winnerGrade) + "th Grade Point Scorer:");
  } else if ((topPointsScorer.length > 1)) {
    setText("topWinnerLabel", ("Top " + winnerGrade) + "th Grade Point Scorers:");
  }
  setText("topPointsNumberOutput", topPointValue + " Points");
  // update the random winner
  setText("randomWinnerOutput", randomWinner);
  setText("randomWinnerLabel", "Random "+ winnerGrade + "th Grade Winner:");
  if (topPointValue == 0) {
    // if the greatest point value is 0, it means no student inputted their points
    setProperty("topPointsOutput", "font-size", 22);
    setText("topPointsOutput", "*No Data*");
    setText("topPointsNumberOutput", "");
  } else {
    setProperty("topPointsOutput", "font-size", 16);
    for (var i = 0; i < topPointsScorer.length; i++) {
       topPointsOutputText = topPointsOutputText + topPointsScorer[i] + "\n";
       // add every top points scorer to the display
    }
    setText("topPointsOutput", topPointsOutputText);
  }
  // saves the grade that is currently selected so it can be displayed again if the random winner is reset 
  winnerGradeValue = winnerGrade;

}
function generateReport(studentsList, pointsList, prizesList) {
  // filter grades to put the full data into each grades subset
  filterGrades();
  setScreen("adminParticipationReport");
  // make a list of every student in the list, seperated by a line
  var reportStudentsListText = "";
  reportStudentsListText = studentsList.join("\n" + "\n");
  setText("participationReportStudents", reportStudentsListText);
  // repeat for points
  var reportPointsListText = "";
  for ( var i = 0; i < studentsList.length; i++) {
     reportPointsListText = ((reportPointsListText) + pointsList[i]) + "\n" + "\n";
  }
  setText("participationReportPoints", reportPointsListText);
  // repeat for prizes
  var reportPrizesListText = "";
  for ( i = 0; i < studentsList.length; i++) {
     reportPrizesListText = ((reportPrizesListText) + prizesList[i]) + "\n" + "\n";
  }
  setText("participationReportPrizes", reportPrizesListText);
}
function resetRandomWinners() {
  //create objects for each random winner with a newly randomized name
  var randomWinnerObject9 = {
    "id": 1, 
    "name": (ninthGraders[(randomNumber(0, ninthGraders.length - 1))]),
    "grade": 9,
  };
  var randomWinnerObject10 = {
    "id": 2, 
    "name": (tenthGraders[(randomNumber(0, tenthGraders.length - 1))]),
    "grade": 10,
  };
  var randomWinnerObject11 = {
    "id": 3, 
    "name": (eleventhGraders[(randomNumber(0, eleventhGraders.length - 1))]),
    "grade": 11,
  };
  var randomWinnerObject12 = {
    "id": 4, 
    "name": (twelvthGraders[(randomNumber(0, twelvthGraders.length - 1))]),
    "grade": 12,
  };
  //update the record for each object
  //each update only happens after the other finishes
  updateRecord("Random Winners", randomWinnerObject9, function() {
    updateRecord("Random Winners", randomWinnerObject10, function() {
      updateRecord("Random Winners", randomWinnerObject11, function() {
        updateRecord("Random Winners", randomWinnerObject12, function() {
          // reset the variables and UI based on the data
          randomWinners = getColumn("Random Winners", "name");
          randomWinner9 = randomWinners[0];
          randomWinner10 = randomWinners[1];
          randomWinner11 = randomWinners[2];
          randomWinner12 = randomWinners[3];
          if (winnerGradeValue == 9) {
            setText("randomWinnerOutput", randomWinner9);
          } else if (winnerGradeValue == 10) {
            setText("randomWinnerOutput", randomWinner10);
          } else if (winnerGradeValue == 11) {
            setText("randomWinnerOutput", randomWinner11);
          } else if ((winnerGradeValue == 12)) {
            setText("randomWinnerOutput", randomWinner12);
          }
        });
      });
    });
  });
}
function filterQuestions() {
   //sort the questions by category
   faqStudentQuestions = [];
 faqAdminQuestions = [];
 faqInterfaceQuestions = [];
   for (var i = 0; i < faqQuestions.length; i++) {
     if (faqCategoryList[i] == "Student Usage") {
       appendItem(faqStudentQuestions, faqQuestions[i]);
     }
     else if (faqCategoryList[i] == "Administrator Usage") {
       appendItem(faqAdminQuestions, faqQuestions[i]);
     }
     else if (faqCategoryList[i] == "Interface Usage"	) {
       appendItem(faqInterfaceQuestions, faqQuestions[i]);
     }
   }
}
function updateFAQScreen() {
  currentCategory = getText("faqCategoryDropdown");
  //before a category is selected, the only option in the dropdown should by "Questions"
  var blankQuestionsList = ["Questions"];
  // adjust the question dropdown based on the selected category
  switch(currentCategory){
    case "Student Usage":
    setProperty("faqQuestionsDropdown", "options",  faqStudentQuestions);
    break;
    case "Administrator Usage":
    setProperty("faqQuestionsDropdown", "options",  faqAdminQuestions);
    break;
    case "Interface Usage":
    setProperty("faqQuestionsDropdown", "options",  faqInterfaceQuestions);
    break;
    case "Categories":
    setProperty("faqQuestionsDropdown", "options",  blankQuestionsList);
    break;
  }
    // set the answer based on the index of the current question
  for (var i = 0; i < faqQuestions.length; i++) {
      if (getText("faqQuestionsDropdown") == faqQuestions[i])
      setText("faqOutput", faqAnswers[i]);
    }
    }
function setEventNames(screen){
  for (var i = 0; i < events.length; i++){
    setText("checkboxText" + screen + i, events[i]);
  }
  }