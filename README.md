# Introduction 
To do

# Getting Started
(To do)

# Build and Test
You will need `npm` installed to build and run the site. After installing npm, you can download and install all of the dependencies for this site with:
```
npm install
```
To build and serve the site with hot-loaded changes, run:
```
npm run dev
```
and open [http://localhost:4321](http://localhost:4321).

**Environment variables:**
- `VITE_HIDE_DRAFTS_IN_DEV`: Set to `true` to hide draft content in development mode. Drafts are always hidden in production. Example: `VITE_HIDE_DRAFTS_IN_DEV=true npm run dev` or add to `.env` / `.env.local`.

To build the static site, run:
```
npm run build
```
This puts the static site and all assets into the `dist` directory, where it can be served from a static web server, e.g.
```
npx http-server dist -p 8000
```
which serves the static site at [http://localhost:8000](http://localhost:8000).

# Adding Content
## How to add a blog post

To add a new blog post to the site:

1. **Create a new file** in the `src/content/blog/english/` directory. The filename will become the URL slug, so use a descriptive name with hyphens (e.g., `my-new-post.mdx`).

2. **Add frontmatter** at the top of the file with the following fields:
   ```yaml
   ---
   title: "Your Blog Post Title"
   date: 2024-01-15
   author: "Author Name"
   categories:
     - category1
     - category2
   image: "/images/blog/your-image.png"
   excerpt: "A brief summary of your blog post that will appear in listings."
   draft: false
   ---
   ```

3. **Required fields:**
   - `title`: The title of your blog post (string)

4. **Optional but recommended fields:**
   - `date`: Publication date in YYYY-MM-DD format
   - `author`: Author name (string)
   - `categories`: Array of category strings (defaults to ["others"] if not provided)
   - `excerpt`: Short summary for blog listings
   - `image`: Path to featured image (e.g., "/images/blog/image.png")
   - `draft`: Set to `true` to hide the post from production builds

5. **Write your content** below the frontmatter using Markdown or MDX syntax. You can use:
   - Standard Markdown formatting
   - MDX components (if using `.mdx` extension)
   - Code blocks with syntax highlighting
   - Images, links, lists, etc.

6. **Example blog post structure:**
   ```mdx
   ---
   title: "My First Blog Post"
   date: 2024-01-15
   author: "John Doe"
   categories:
     - Tutorial
     - React
   image: "/images/blog/my-post.png"
   excerpt: "This is a brief description of my blog post."
   ---

   # Introduction

   Your blog post content goes here...

   ## Section Title

   More content...
   ```

7. **Test your post** by running `npm run dev` and navigating to the blog section to see your new post.

**Note:** To add more languages later, add a locale in `src/config/language.json` and create content in the corresponding directory under each collection (e.g. `src/content/blog/<contentDir>/`), plus `src/i18n/<code>.json` and `src/config/menu.<code>.json`.

## How to add job listings

To add job listings to the career page, see [docs/adding-jobs.md](docs/adding-jobs.md) for full documentation.

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)