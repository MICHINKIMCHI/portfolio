# Portfolio Management Rules

When the user asks to update the portfolio, add a new project, or change bio information, follow these strict rules:

1. **Only Edit Data**: Make all content changes inside `src/data/portfolio.json`. Do not modify React components unless the user explicitly asks for a redesign or layout change.
2. **Handle Images**: If adding a new project, verify if an image needs to be copied into the `public/` folder, or generate a placeholder image if requested.
3. **Auto-Deploy**: Once the JSON is updated and verified, automatically run the following terminal commands to deploy the changes to Cloudflare Pages:
   ```bash
   git add .
   git commit -m "chore: update portfolio content"
   git push
   ```
4. **Notify**: Inform the user that the site will update automatically on their live Cloudflare Pages link in a few seconds.
