const { https } = require('follow-redirects');
const fs = require('fs');

const schedule_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTibFX7z4uGvq5oHrHY-aUG7L5dyFSMSPIkLJoDYmwOM-ugsN9T9nIwkzDKF0Sfc7vevA3BT9rjxUp/pub?gid=1969887782&single=true&output=csv';
const schedule_start_row = 10;

const TeamKey = {
    'A': {
        name: 'Black Sheep',
        color: 'Black',
        logo: 'black_team_logo.jpg',
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    },
    'B': {
        name: 'Dianes Dipsticks',
        color: "Blue",
        logo: "blue_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    },
    'C': {
        name: 'Orcutts',
        color: "gold",
        logo: "gold_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    },
    'D': {
        name: 'Mansours',
        color: "white",
        logo: "white_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    },
    'E': {
        name: 'Instant Replay',
        color: "red",
        logo: "red_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    },
    'F': {
        name: 'Outlaws',
        color: "Green",
        logo: "green_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
        enet_goals: 0
    }
};

const download = (url) => {
    let body = '';
    return new Promise(resolve => {
        https.get(url, (resp) => {
            resp.on('data', (chunk) => {
                body += chunk;
            });

            resp.on('end', () => {
                resolve(body);
            });
        });
    });
}

const toRealDate = (dateRaw, timeRaw) => {
    const dateParts = dateRaw.split('/');
    const month = dateParts[0];
    const day = Number(dateParts[1]);
    const timeParts = timeRaw.split(':')
    const hour = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);
    let year = 2023;
    if (month === '1' || month === '2' || month === '3') {
        year = 2024;
    }

    //2023-09-25T16:23:03.026Z
    return new Date(year, month - 1, day, hour, minutes);
}

download(schedule_url).then(csvTxt => {
    const rows = csvTxt.split('\n');

    //Sanity Check - assert we're certain we know where the schedule starts
    if (!rows[schedule_start_row].startsWith('Date,Time,Team 1,Team 2,Goalie 1,Goalie 2,Score,,Empty Net Goals')) {
        throw Error(`There's a problem with the schedule, the ${schedule_start_row} row should have been the schedule header`);
    }

    const schedule = [];
    const scheduleRows = rows.splice(schedule_start_row + 1 , rows.length);
    scheduleRows.forEach(line => {        
        const data = line.replace(/"/g, "").split(',');

        const dateRaw = data[1].split(' ')[1]; //First column has value "2/12" and we only want 2/12
        const timeRaw = data[2].split(' ')[0]; //Second column has value "10:00 pm EDT" and we only want 10:00
        const isPM = data[2].toLowerCase().indexOf('pm') > -1; //Second column has value "10:00 pm EDT" and we only want PM or AM
        const teamA = data[3];
        const teamB = data[4];
        const goalieA = data[5];
        const goalieB = data[6];
        const scoreA = +data[7];        
        const scoreB = +data[8];
        const eNetA = +data[9];
        const eNetB = +data[10];

        if (dateRaw && timeRaw && teamA && teamB && goalieA && goalieB) {            
            const date = toRealDate(dateRaw, timeRaw);
            date.setHours(date.getHours() + (isPM ? 12 : 0));

            schedule.push({
                date: date.toISOString(),
                teamA: TeamKey[teamA].name,
                teamB: TeamKey[teamB].name,
                goalieA: goalieA,
                goalieB: goalieB
            });            
        }

        if(TeamKey[teamA] && TeamKey[teamB] && (scoreA > 0 || scoreB > 0)){
            TeamKey[teamA].goals_for += scoreA;
            TeamKey[teamB].goals_for += scoreB;

            TeamKey[teamA].goals_against += scoreB;
            TeamKey[teamB].goals_against += scoreA;

            if(eNetA){
                TeamKey[teamA].enet_goals += eNetA;
            }

            if(eNetB){
                TeamKey[teamB].enet_goals += eNetB;
            }
            
            TeamKey[teamA].wins += scoreA > scoreB ? 1 : 0;
            TeamKey[teamB].wins += scoreB > scoreA ? 1 : 0;

            TeamKey[teamA].losses += scoreB > scoreA ? 1 : 0;
            TeamKey[teamB].losses += scoreA > scoreB ? 1 : 0;
        }
    });

    fs.writeFile('./src/assets/teams/schedule.json', JSON.stringify(schedule, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });

    fs.writeFile('./src/assets/teams/standings.json', JSON.stringify(Object.values(TeamKey), null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
});

