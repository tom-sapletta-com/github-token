dayjs = require("dayjs");

function githubLink() {
    const dateString = dayjs().format('YYYY-MM-DD');
    const description = encodeURIComponent(`Traverse ${dateString}`);
    const scopes = [
        'public_repo',
        'read:user',
        'user:email',
        'user:follow',
    ];
    return `https://github.com/settings/tokens/new?description=${description}&scopes=${scopes.join(',')}`;
}

console.log(githubLink());
