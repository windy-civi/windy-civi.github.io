# Windy Civi

## Start Development

**Easiest:** The development assumes you are using Github Codespaces. Shoot up an instance and it should just work.

If wanting to develop outside GitHub Codespaces, run `npm install` on whichever project you want. You'll need the following APIs:

```env
# For scraper/wiki-summaries: API key from Google to scrape Google Sheet for wiki (can be same as GOOGLE_API_KEY)
GOOGLE_SPREADSHEET_API_KEY=

# For scraper/gpt: API key to run OpenAI GPT commands
OPENAI_API_KEY=
```

## Folder Structure

The codebase follows monorepo behavior, but doesn't use any workspaces (like Yarn Workspaces or similar). It mostly depends on relative imports or `paths` in `tsconfig.json`. Each repo has it's own package.json, with the goal to make things mostly portable.

By being a monorepo, we prioritize making PR management unified, and also making global refactors easier.

### Folders

- [`.devcontainer`](.devcontainer): For setting up GitHub Codespaces.
- [`.github`](.github): We use GitHub Actions for all CI, including running scrapers & checking code quality.
- [`.vscode`](.vscode): Recommended settings for vscode.
- [`domain`](domain): Core business logic (should not have external dependencies, and just focuses on data logic/types/transformations). See [domain driven design](https://en.wikipedia.org/wiki/Domain-driven_design).
- [`web-app`](web-app): Progressive Web App built on React/Tailwind/TypeScript/Vite.
- [`scraper`](scraper): Make the data, including get GPT summaries.
- [`native-app`](native-app): Expo React Native App. Local development won't work on codespaces.
- [`storage`](storage): For getting/writing data from github releases / the filesystem.
