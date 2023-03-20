
const number =  process.argv.slice(2)
function newBeep (){
  process.stdout.write('\x07');
}
function alarmClock (delay){
  delay = Number(delay) 
  setTimeout(newBeep, delay * 1000)

} 
for (const num of number){
  let delay = Number(num);
  if (!isNaN(delay) && delay >= 0) {
    alarmClock(delay)
  }
}

//