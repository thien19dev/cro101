const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
    ];

const validRule = ({name, goals} = {}) => {
    return !!name && !!goals
}

const validPlayers = players.filter(validRule);
console.log(validPlayers);

validPlayers.sort((a,b) => b.goals - a.goals);
const mostGoalsPlayer = validPlayers[0]
console.log('Cau thu ghi ban nhieu nhat: ');
console.log(mostGoalsPlayer.name);