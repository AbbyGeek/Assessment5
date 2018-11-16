var score = 0;
var questions = [
{
prompt:"A late hit penalty should be given to a skater "+
"who, after the end of a jam, blocks an opponent so they are"+
"foced off the track, but do not stumble or fall.\n a)true\nb)false",
  options: ["True", "False"],
  answer:"a"
},
{
  prompt:"A Jammer who starts skating before the"+
"Jam-Starting Whistle and is gaining speed"+
"in a counterclockwise direction when the"+
"whistle blows has committed a False Start.\n a)true\nb)false",
  options: ["True", "False"],
    answer:  "a"
},
{
prompt:"A Jammer passes the Star to a Non-Pivot"+
"Blocker. Which Skater should be assesed"+
"the Star Pass violation?\n(a)Jammer\n(b)Non-Pivot Blocker\n"+
"(c)Pivot\n(d)Player closest to the referee making the call",
options: ["Jammer", "Non-Pivot Blocker", "Pivot","Player closest to the referee making the call"],
  answer:"a"
},
{
prompt:"Is there a 4th question in this quiz? (a)Yes (b)No",
options: ["Jammer", "Non-Pivot Blocker", "Pivot","Player closest to the referee making the call"],
  answer:"a"
}
]

for (var i = 0; i < questions.length; i++)
{
var response = window.prompt(questions[i].prompt)
if (response == questions[i].answer)
{
score++;
alert("Correct");
}
else{
  alert("Wrong");
}
}

alert("Your final score was: " + score + "out of " + questions.length);
