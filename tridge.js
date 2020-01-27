const MONTHS = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31 ,9: 30 ,10: 31 ,11:30 , 12: 31};
const START_DAY = 7; // Jan 7 1900
const START_MONTH = 1;
const START_YEAR = 1900;

function countFirstSunday(targetYear) {
    let currentDay = START_DAY;
    let currentMonth = START_MONTH;
    let maxDays = MONTHS[currentMonth];
    let currentYear = START_YEAR;
    let totalSunday = 0;

    while (currentYear <= targetYear) {
        currentDay += 7;
        if (currentDay > maxDays) {
            currentDay = firstSunday(currentDay - 7, maxDays);
            if (currentMonth === 12) {
                currentMonth = 1;
                currentYear++;
            } else {
                currentMonth++;
            }
            if (currentMonth === 2) {
                if (leapYear(currentYear)) maxDays = 29;
                else maxDays = MONTHS[currentMonth];
            } else maxDays = MONTHS[currentMonth];
        }
        console.log(`sunday: ${currentDay} / ${currentMonth} / ${currentYear}`);
        if (currentDay === 1 && currentYear <= targetYear) {
            totalSunday++;
        }
    }
    return totalSunday;
}

function leapYear(year) {
    const century = !(year % 100);

    return century && !(year % 400) || !century && !(year % 4);
}

function firstSunday(currentDay, lastDay) {
    return 7 - (lastDay - currentDay);
}

console.log(`total sundays: ${countFirstSunday(2000)}`);