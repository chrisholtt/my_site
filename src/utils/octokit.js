const { Octokit } = require('octokit');

const octokit = new Octokit();

export async function getAllCommits(owner, repo) {
    try {
        const response = await octokit.repos.listCommits({
            owner: owner,
            repo: repo,
        });

        const commits = response.data;
        return commits;
    } catch (error) {
        console.error('Error fetching commits:', error);
        return [];
    }
}

