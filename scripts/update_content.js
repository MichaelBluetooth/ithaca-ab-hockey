const { https } = require('follow-redirects');
const fs = require('fs');

const toRealDate = (dateRaw, timeRaw) => {
    const date = dateRaw.split(' ')[1]; //comes in as "Sunday, 10/1"    
    const monthNumeric = +date.split('/')[0];
    const month = monthNumeric.toString().padStart(2, '0');
    const dayNumeric = +date.split('/')[1];
    const day = dayNumeric.toString().padStart(2, '0');

    let year = 2024;
    if (monthNumeric === 1 || monthNumeric === 2 || monthNumeric === 3) {
        year = 2025;
    }

    let daylightSavingsTime = true;
    if (monthNumeric === 11 && dayNumeric >= 3 || monthNumeric === 12 || monthNumeric === 1 || monthNumeric === 2 || monthNumeric === 3) {
        //if it's november and it's the 3rd or greater
        // OR it's january
        // OR it's feb
        // OR it's march
        // ...date math is hard...
        daylightSavingsTime = true;
    }

    const isPM = timeRaw.toLowerCase().indexOf('pm') > -1;
    const time = timeRaw.split(' ')[0].toString().padStart(2, '0');
    const hour = (+(time.split(':')[0]) + 12).toString().padStart(2, '0');
    const minute = (+(time.split(':')[1])).toString().padStart(2, '0');

    const iso = `${year}-${month}-${day}T${hour}:${minute}:00-0${daylightSavingsTime ? '5' : '4'}:00`;
    return new Date(iso);
}

const schedule_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7dqw8sMQi6mYeboh9_aKJztFjQ5UFQgHnnSdKs4pahijaSa0bzHad3_KytbgPVRXpKCgAcR6mjfkR/pub?gid=1969887782&single=true&output=csv';
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
    },
    'C': {
        name: 'Orcutt Real Estate',
        color: "gold",
        logo: "gold_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
    },
    'D': {
        name: 'Mansour Jewelers',
        color: "white",
        logo: "white_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
    },
    'E': {
        name: 'Ice Cream Bar',
        color: "Teal",
        logo: "teal_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
    },
    'F': {
        name: 'Instant Replay',
        color: "red",
        logo: "red_team_logo.jpg",
        wins: 0,
        losses: 0,
        ties: 0,
        goals_for: 0,
        goals_against: 0,
    },
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

download(schedule_url).then(csvTxt => {
    const rows = csvTxt.split('\n');

    //Sanity Check - assert we're certain we know where the schedule starts
    if (!rows[schedule_start_row].startsWith('Date,Time,Team 1,Team 2')) {
        throw Error(`There's a problem with the schedule, the ${schedule_start_row} row should have been the schedule header, but was ${rows[schedule_start_row]}`);
    }

    const schedule = [];
    const scheduleRows = rows.splice(schedule_start_row + 1, rows.length);
    scheduleRows.forEach(line => {
        const data = line.replace(/"/g, "").split(',');

        const dateRaw = data[1];
        const timeRaw = data[2];
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

            schedule.push({
                date: date.toISOString(),
                teamA: TeamKey[teamA].name,
                teamB: TeamKey[teamB].name,
                goalieA: goalieA?.trim(),
                goalieB: goalieB?.trim()
            });
        }

        if (TeamKey[teamA] && TeamKey[teamB] && (scoreA > 0 || scoreB > 0)) {
            TeamKey[teamA].goals_for += scoreA;
            TeamKey[teamB].goals_for += scoreB;

            TeamKey[teamA].goals_against += scoreB;
            TeamKey[teamB].goals_against += scoreA;

            TeamKey[teamA].wins += scoreA > scoreB ? 1 : 0;
            TeamKey[teamB].wins += scoreB > scoreA ? 1 : 0;

            TeamKey[teamA].losses += scoreB > scoreA ? 1 : 0;
            TeamKey[teamB].losses += scoreA > scoreB ? 1 : 0;

            TeamKey[teamA].ties += scoreA === scoreB ? 1 : 0;
            TeamKey[teamB].ties += scoreA === scoreB ? 1 : 0;
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

