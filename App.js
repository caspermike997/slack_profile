
const date = new Date()

const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const toDay = daysOfTheWeek[date.getDay()-1]

const currentDay = document.getElementById("utcDays")
const currentUTCTime = document.getElementById("utcTime")

const updateTime = () => {
  const date = new Date()
  currentUTCTime.textContent = date.getTime()
}




// const currentDay = document.queryselector('[data-testid="currentDayOfTheWeek"]')
// const currentUTCTime = document.queryselector('[data-testid="currentUTCTime"]')

currentDay.textContent=toDay

setInterval(updateTime,1)
