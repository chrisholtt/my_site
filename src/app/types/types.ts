import internal from "stream";

export interface RatingReq {
    rating: number;
    projectId: string;
    user: string;
}

export interface Project {
    description: string;
    displayLink: string;
    id: string;
    images: string[];
    lang: string;
    link: string;
    rating: number;
    repo: string;
    technologies: string[];
    title: string;
    GitHubRepoLink: string;
}