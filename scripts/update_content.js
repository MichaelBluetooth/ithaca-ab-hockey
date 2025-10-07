const { https } = require('follow-redirects');
const fs = require('fs');

/**
 * Parse a loose "M/D H[:MM] [am|pm] [optional tz]" string
 * and return a Date object for the next occurrence on/after Oct 4 2025,
 * interpreted as America/New_York local time (DST-aware).
 */
function parseToNextOccurrence(input,
  { referenceYear = 2025, referenceMonth = 10, referenceDay = 4, timeZone = 'America/New_York' } = {}
) {
  // --- Step 1: Extract parts (ignore trailing text like EDT/EST)
  const re = /^\s*(\d{1,2})\/(\d{1,2})\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i;
  const m = String(input).match(re);
  if (!m) throw new Error('Unrecognized date/time format. Expected "M/D H[:MM] [am|pm]".');

  let [, mm, dd, hh, min, ampm] = m;
  const month = Number(mm);
  const day = Number(dd);
  let hour = Number(hh);
  const minute = Number(min || 0);

  // --- Step 2: Convert to 24-hour
  if (ampm) {
    const a = ampm.toLowerCase();
    if (a === 'pm' && hour !== 12) hour += 12;
    if (a === 'am' && hour === 12) hour = 0;
  }

  // --- Step 3: Decide year (based on reference 10/4/2025)
  const useYear =
    month > referenceMonth || (month === referenceMonth && day >= referenceDay)
      ? referenceYear
      : referenceYear + 1;

  // --- Step 4: Convert that local wall-clock in America/New_York → actual UTC instant.
  // We’ll iterate to ensure DST correctness.
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  function zoneParts(ms) {
    const p = {};
    for (const part of fmt.formatToParts(new Date(ms))) {
      if (part.type !== 'literal') p[part.type] = Number(part.value);
    }
    return p;
  }

  function offsetMillis(ms) {
    const z = zoneParts(ms);
    const utc = Date.UTC(z.year, z.month - 1, z.day, z.hour, z.minute, z.second);
    return utc - ms;
  }

  let guess = Date.UTC(useYear, month - 1, day, hour, minute);
  for (let i = 0; i < 4; i++) {
    const off = offsetMillis(guess);
    const next = Date.UTC(useYear, month - 1, day, hour, minute) - off;
    if (Math.abs(next - guess) < 1000) break;
    guess = next;
  }

  return new Date(guess);
}

const schedule_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuaE-p_YSEfBTHlMXSMw-J1EiTen71H41qiiZ_nrSLZGy6O54n35octBxiDgleDWPVv4atF7rVsJ8N/pub?gid=1969887782&single=true&output=csv';
const schedule_start_row = 10;

const TeamKey = {
    'A': {
        name: 'DSP Shows',
        color: 'Black',
        logo: 'black_team_logo_2025.jpg',
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

        if (dateRaw && timeRaw && teamA && teamB && goalieA && goalieB && TeamKey[teamA] && TeamKey[teamB]) {
            const date = parseToNextOccurrence(dateRaw + " " + timeRaw);

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

    fs.writeFile('./src/assets/teams/schedule_2025.json', JSON.stringify(schedule, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });

    fs.writeFile('./src/assets/teams/standings_2025.json', JSON.stringify(Object.values(TeamKey), null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
});

