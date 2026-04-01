# Deploy to Netlify

## Quick Deploy Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables:**
   In Netlify dashboard → Site settings → Environment variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_TO_EMAIL=your-email@gmail.com
   ```

4. **Set Build Command:**
   ```
   npm run build
   ```

5. **Publish Directory:**
   ```
   dist
   ```

## Alternative: Deploy to Vercel

1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure:**
   - Framework: Vite
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: dist

3. **Add Environment Variables** in Vercel dashboard

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## For Backend (Contact Form):

The contact form requires a backend service. You can:
- Use a service like [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/)
- Deploy the backend separately to Heroku/Railway/Render
- Use serverless functions (Netlify/Vercel functions)

## Live Demo

Your portfolio will be live at: `https://your-domain.com`