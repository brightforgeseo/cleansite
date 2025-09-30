# Contentful CMS Setup Guide for Clean Collective Blog

This guide will help you set up Contentful CMS to manage blog posts for the Clean Collective website.

## 🚀 Quick Start

### Step 1: Create a Contentful Account

1. Go to [https://www.contentful.com/](https://www.contentful.com/)
2. Sign up for a free account
3. Create a new space (e.g., "Clean Collective Blog")

### Step 2: Create the Blog Post Content Model

In your Contentful space:

1. Go to **Content model** → **Add content type**
2. Name it: `Blog Post`
3. API Identifier: `blogPost`

Add the following fields:

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required, max 100 characters |
| Slug | `slug` | Short text | Required, unique, regex: `^[a-z0-9]+(?:-[a-z0-9]+)*$` |
| Excerpt | `excerpt` | Long text | Required, max 300 characters |
| Content | `content` | Long text | Required |
| Featured Image | `featuredImage` | Media (single file) | Optional |
| Author | `author` | Short text | Optional |
| Publish Date | `publishDate` | Date and time | Required |
| Category | `category` | Short text | Optional |
| Tags | `tags` | Short text, list | Optional |

**Field Details:**

#### Title
- **Type**: Short text
- **Required**: Yes
- **Max length**: 100 characters
- **Help text**: The main title of the blog post

#### Slug
- **Type**: Short text
- **Required**: Yes
- **Unique**: Yes
- **Pattern**: `^[a-z0-9]+(?:-[a-z0-9]+)*$`
- **Help text**: URL-friendly version (e.g., "spring-cleaning-tips")

#### Excerpt
- **Type**: Long text
- **Required**: Yes
- **Max length**: 300 characters
- **Help text**: Brief summary shown in blog listing

#### Content
- **Type**: Long text
- **Required**: Yes
- **Help text**: Main article content (supports paragraphs)

#### Featured Image
- **Type**: Media
- **Required**: No
- **Accept**: Images only
- **Help text**: Main image for the blog post

#### Author
- **Type**: Short text
- **Required**: No
- **Help text**: Author name (e.g., "Clean Collective Team")

#### Publish Date
- **Type**: Date and time
- **Required**: Yes
- **Help text**: When the post should be published

#### Category
- **Type**: Short text
- **Required**: No
- **Help text**: Category (e.g., "Cleaning Tips", "Guides", "Maintenance")

#### Tags
- **Type**: Short text, list
- **Required**: No
- **Help text**: Keywords for the post

### Step 3: Get Your API Keys

1. Go to **Settings** → **API keys**
2. Click **Add API key**
3. Name it (e.g., "Clean Collective Website")
4. Copy these values:
   - **Space ID**
   - **Content Delivery API - access token**

### Step 4: Configure Environment Variables

1. Create a `.env` file in the root of your project:

```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

2. **Never commit the .env file to Git** (it's already in .gitignore)

### Step 5: Add Environment Variables to Netlify

1. Go to your Netlify dashboard
2. Select your site (tiegancleansite)
3. Go to **Site settings** → **Environment variables**
4. Add these variables:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
5. Save and redeploy your site

## 📝 Creating Your First Blog Post

1. In Contentful, go to **Content**
2. Click **Add entry** → **Blog Post**
3. Fill in the fields:
   - **Title**: "Top 5 Spring Cleaning Tips for Busy Parents"
   - **Slug**: "spring-cleaning-tips-busy-parents"
   - **Excerpt**: "Discover our expert tips for tackling spring cleaning when you have limited time..."
   - **Content**: Write your full article
   - **Featured Image**: Upload an image
   - **Author**: "Clean Collective Team"
   - **Publish Date**: Select today's date
   - **Category**: "Cleaning Tips"
   - **Tags**: Add tags like "spring cleaning", "tips", "parents"
4. Click **Publish**

## 🎨 Sample Blog Post Ideas

Here are some blog post ideas for Clean Collective:

1. **"10 Quick Cleaning Hacks for Busy Families"**
   - Category: Cleaning Tips
   - Tags: quick tips, busy families, time-saving

2. **"How to Deep Clean Your Kitchen: A Room-by-Room Guide"**
   - Category: Guides
   - Tags: kitchen, deep clean, guide

3. **"The Benefits of Professional Cleaning Services"**
   - Category: Services
   - Tags: professional cleaning, benefits

4. **"Seasonal Cleaning Checklist: Preparing for Summer"**
   - Category: Maintenance
   - Tags: seasonal, checklist, summer

5. **"Natural Cleaning Products: What Works and What Doesn't"**
   - Category: Tips
   - Tags: eco-friendly, natural products

## 🔧 How the Blog System Works

### Blog Listing Page (`/blog`)
- Fetches all published blog posts from Contentful
- Displays them in a grid layout
- Shows title, excerpt, category, and publish date
- Links to individual blog posts

### Individual Blog Post (`/blog/[slug]`)
- Dynamically generates pages for each blog post
- Shows full content, featured image, and metadata
- Includes related posts section
- SEO optimized with title and meta description

### Static Generation
- Blog posts are fetched at build time
- Pages are pre-rendered for fast loading
- Redeploy site to show new blog posts

## 🚨 Troubleshooting

### No Blog Posts Showing?
1. Check that blog posts are **Published** in Contentful
2. Verify environment variables are set correctly
3. Check browser console for errors
4. Redeploy the site after adding posts

### Images Not Loading?
- Ensure images are published in Contentful
- Check image URLs in the browser console
- Contentful serves images via CDN automatically

### Build Errors?
- Verify all required fields are filled in Contentful
- Check that slugs are unique and URL-friendly
- Ensure Content Delivery API key (not Preview API) is used

## 📚 Additional Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful Free Tier](https://www.contentful.com/pricing/) - 25,000 records, perfect for small blogs
- [Rich Text Support](https://www.contentful.com/developers/docs/concepts/rich-text/) - For advanced content formatting

## 🎯 Next Steps

1. Create your Contentful space
2. Set up the content model
3. Add your API keys to `.env` and Netlify
4. Create your first blog post
5. Deploy and test!

Your blog will be live at: https://tiegancleansite.netlify.app/blog
