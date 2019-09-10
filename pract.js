var botui = new BotUI('hello-world');

      botui.message.bot({
          type:'html',
          content:`hey`
      }).
      then(()=> { // wait till previous message has been shown.
          botui.message.bot({
          delay: 1000,
            type:'html',
        content: `want to play quiz? `
        });
      }).then(()=>{
          return botui.action.button({
                delay:1500,
             action:[
                 {
                     text:'Yes',
                     value:'Yes'
                 },
                 {
                     text:'NO',
                     value:'NO'
                 }
             ]
          })
      }).then(res=>{
            if(res.value==='NO')
                {
                    end()
                }
          else{
              yes()
          }
      })
const questions = [
    {
        question: "'Which planet did superman came from?'",
        option: ['Jupiter','Krypton','Mars','Neptune'],
        answer: 'Krypton'
    },
    {
        question: "'How did Dr Strange defeat Dormammu?'",
        option: ['Built An Energy Prison','Created a timeloop','Froze time','none'],
        answer: 'Created a timeloop'
    },
    {
        question: "'How is Thanos combining the infinity stones?'",
        option: ['Glove of power','Infinity glove','Gauntlet of power','Infinity Gauntlet'],
        answer: 'Infinity Gauntlet'
    },
    {
        question: "'Which marvel hero is capable of holding a stone?'",
        option: ['Peter Quill','Black Panther','Gamora','Dr strange'],
        answer: 'Peter Quill'
    }
]
function yes(){
    try{
    let i=Math.round(Math.random()*4)
    botui.message.bot('I will ask question until error comes').then(()=>{
        botui.message.bot({
            type:'html',
            content:`<button onclick="responsiveVoice.speak(${questions[i].question},'Hindi Female');" 
          type="button" value="Play">Play</button>`
        })
    }).then(()=>{
        return botui.action.button(
            {
            action:[
                {
                text:questions[i].option[0],
                value:questions[i].option[0]
            },  {
                text:questions[i].option[1],
                value:questions[i].option[1]
            },{
                text:questions[i].option[2],
                value:questions[i].option[2]
            },{
                text:questions[i].option[3],
                value:questions[i].option[3]
            }
            ]
        })
    }).then(res=>{
        if(res.value===questions[i].answer){
            botui.message.bot('correct answer')
        }
        else{
            botui.message.bot('wrong')
        }
    }).then(yes)}
    catch(error){
        console.log(error)
    }
}
var end = function () {
  botui.message
    .bot({
      delay: 1000,
      content: 'liken hum apko khali hath nhi jaane de gai is liye qmobile apka hua'
    });
}