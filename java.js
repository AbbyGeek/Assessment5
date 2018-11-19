var input = new Array();
var answers = ["B", "A", "A", "E"]
numQuestions = answers.length;

function getAnsweredValue(nameOfQuestion)
{
  var possibleAnswers = document.getElementsByName(nameOfQuestion);
  for(var i = 0; i < possibleAnswers.length; i++)
  {
    if (possibleAnswers[i].checked)
    {
      return possibleAnswers[i].value;
    }
  }

}

function score()
{
  var score = 0;

  for(i=0; i<numQuestions; i++)
  {
    if(getAnsweredValue("question"+i) === answers[i])
    {
      score++
      // MAKE ANSWER GREEN

      document.getElementById(i).style.backgroundColor = "green";
    }
    else {
    // MAKE ANSWER RED
    document.getElementById(i).style.backgroundColor = "red";
    }
  }
  return score;
}

function showScore()
{
  alert("You got " + score() + " correct out of " + numQuestions);
}
