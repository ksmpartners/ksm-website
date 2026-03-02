# Adding Jobs to the Career Page

This guide describes how to add job listings to the career page on the site.

## Content Location

Create job files in:

```
src/content/career/{language}/
```

For example, with English as the default language: `src/content/career/english/`.

**Note:** The `-index.md` file in the career folder configures the career page itself (intro, benefits, apply block) and is not a job listing. Do not use `-index` as a job filename.

## Front Matter Fields

Each job file must have YAML frontmatter at the top with the following fields:

| Field         | Type     | Required | Description                                                |
| ------------- | -------- | -------- | ---------------------------------------------------------- |
| `title`       | string   | Yes      | Job title                                                  |
| `categories`  | string[] | No       | Category labels (e.g., "Technology & Innovation")          |
| `type`        | string   | No       | Job type (e.g., "Full-time", "Part-time")                  |
| `location`    | string   | No       | Location (e.g., "Austin, TX")                              |
| `deadline`    | date     | No       | Application deadline (YYYY-MM-DD)                          |
| `apply_link`  | string   | Yes      | URL for applications (external or internal)               |
| `custom_slug` | string   | No       | Override default URL slug (default: filename without .md)  |
| `draft`       | boolean  | No       | Hide from production when true                             |
| `description` | string   | No       | Meta description for SEO/social sharing                    |

## File Naming

Use descriptive filenames such as `job-01.md`, `senior-engineer.md`, or `data-security-analyst.md`. The filename (without the `.md` extension) becomes the URL slug unless `custom_slug` is set in the frontmatter.

For example, `job-01.md` produces the URL `/career/job-01/`.

## Multilingual

To add jobs in multiple languages, add a corresponding language folder under `src/content/career/` (e.g., `english/`, `spanish/`) and create one job file per language per position.

## Full Example

Below is a complete example job file you can copy and customize:

```markdown
---
title: "Data Security Analyst"

categories:
  - "Technology & Innovation"
type: "Full-time"
location: "Austin, TX"
deadline: 2028-01-01

apply_link: "https://astro.build"
---

The Marketing Manager will be responsible for developing and executing strategic marketing plans to achieve company objectives. This role requires a blend of creativity, analytical prowess, and leadership skills to effectively drive marketing campaigns and initiatives. The ideal candidate will have a strong background in digital marketing, brand management, and a proven track record of generating leads and enhancing brand visibility.

## Responsibilities

- **Develop Marketing Strategy**: Create and implement comprehensive marketing strategies to enhance brand awareness and drive customer engagement.
- **Campaign Management**: Oversee all marketing campaigns, from concept development to execution and performance analysis, ensuring alignment with company goals and objectives.
- **Market Research**: Conduct thorough market research and competitor analysis to identify opportunities for growth and market positioning.
- **Digital Marketing**: Manage digital marketing channels, including SEO, SEM, email marketing, and social media, to optimize campaign performance and generate leads.
- **Budget Management**: Develop and manage the marketing budget, allocating resources effectively and ensuring cost-effective marketing initiatives.
- **Team Leadership**: Lead and mentor a team of marketing professionals, fostering a collaborative and high-performance culture within the department.
- **Collaboration**: Work closely with the sales team to align marketing efforts with sales objectives, supporting lead generation and conversion activities.

## Qualifications

- Bachelor's degree in Marketing, Business Administration, or a related field; Master's degree preferred.
- Proven experience as a Marketing Manager or similar role, with a minimum of 04 years in a corporate environment.
- Demonstrable experience developing and implementing successful marketing campaigns.
- Strong leadership skills with the ability to inspire and motivate a team.
- Exceptional communication and interpersonal skills, with the ability to build strong relationships with internal teams and external stakeholders.
- Solid understanding of current marketing trends and digital platforms.
- Analytical mindset with proficiency in data analysis tools and techniques.
```
