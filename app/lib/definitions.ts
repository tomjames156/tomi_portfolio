export type WorkExperience = {
    organisation: string;
    exp_id: number,
    role: string,
    duration: string,
    experiences: string[]
}

export type Project = {
    proj_id: number,
    proj_img: string,
    proj_name: string
    proj_descr: string,
    tech_used: string[],
    github_link: string,
    live_site: string
}