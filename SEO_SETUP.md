# SEO Setup & Enhancement Guide

This document explains the SEO features implemented and how to maximize them.

## ✅ Implemented SEO Features

### 1. Schema.org Structured Data
**Location**: `src/components/Schema.astro`

LocalBusiness schema markup has been added to help search engines understand your business:
- Business name, description, and contact info
- Service area coverage (Burton upon Trent, Derby, and surrounding areas)
- Operating hours
- Services offered (Standard Clean, Deep Clean, Steam Clean)
- Geographic coordinates

**Benefits**:
- Better local search visibility
- Rich snippets in Google Search
- Enhanced Google Business Profile integration

### 2. XML Sitemap
**Auto-generated at**: `/sitemap-index.xml`

Automatically includes all pages:
- Homepage
- Service pages (Standard, Deep, Steam Clean)
- About, Contact pages
- Blog posts (when Contentful is configured)

**Benefits**:
- Helps search engines discover all pages
- Improves crawl efficiency
- Ensures new content gets indexed quickly

### 3. Robots.txt
**Location**: `/public/robots.txt`

Allows all search engines to crawl the site and points to the sitemap.

### 4. Meta Tags & Open Graph
Every page includes:
- **Title tags** - Unique, descriptive
- **Meta descriptions** - Compelling, keyword-rich
- **Canonical URLs** - Prevents duplicate content issues
- **Open Graph tags** - Optimizes social media sharing (Facebook, LinkedIn)
- **Twitter Cards** - Rich previews when shared on Twitter/X

### 5. Google Analytics (Optional)
**Location**: `src/components/GoogleAnalytics.astro`

Ready to track:
- Page views
- User behavior
- Conversion events
- Traffic sources

**To Enable**:
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env`: `GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX`
4. Add to Netlify environment variables
5. Redeploy

## 🎯 SEO Best Practices Implemented

### Page Speed & Performance
✅ Static site generation (fast loading)
✅ Tailwind CSS (minimal CSS)
✅ Optimized images (when used)
✅ No render-blocking resources

### Mobile Optimization
✅ Fully responsive design
✅ Mobile-first approach
✅ Touch-friendly navigation
✅ Readable text sizes

### Content Structure
✅ Semantic HTML elements
✅ Proper heading hierarchy (H1-H3)
✅ Descriptive alt text (for future images)
✅ Internal linking between pages

### Local SEO
✅ LocalBusiness schema
✅ Service area defined
✅ Location keywords in content
✅ Contact information visible

## 📊 Recommended Next Steps

### 1. Google Business Profile
Create and verify your Google Business Profile:
- Go to [business.google.com](https://business.google.com/)
- Add business information
- Verify your business
- Add photos of your work
- Collect customer reviews

### 2. Google Search Console
Set up Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://tiegancleansite.netlify.app`
3. Verify ownership (HTML file method recommended)
4. Submit sitemap: `https://tiegancleansite.netlify.app/sitemap-index.xml`

### 3. Content Optimization

#### Homepage Keywords
- Domestic cleaning Burton upon Trent
- Professional cleaners Derby
- House cleaning services Staffordshire
- Family-friendly cleaning company

#### Service Page Keywords
- **Standard Clean**: Regular house cleaning, weekly cleaning service
- **Deep Clean**: Spring cleaning, move in/out cleaning, thorough house clean
- **Steam Clean**: Bathroom deep clean, grout cleaning, mould removal

### 4. Local Citations
List your business on:
- Yelp UK
- Yell.com
- Thomson Local
- Free Index
- Checkatrade
- TrustATrader

### 5. Review Strategy
Encourage satisfied customers to leave reviews on:
- Google Business Profile
- Facebook
- Checkatrade
- Trustpilot

## 📈 Monitoring & Analytics

### Key Metrics to Track
1. **Organic Traffic** - Monitor in Google Analytics
2. **Keyword Rankings** - Use Google Search Console
3. **Local Pack Rankings** - Check Google Maps visibility
4. **Conversion Rate** - Contact form submissions
5. **Page Load Speed** - Use PageSpeed Insights

### Tools to Use
- **Google Search Console** - Search performance, indexing issues
- **Google Analytics** - Traffic analysis, user behavior
- **Google PageSpeed Insights** - Performance optimization
- **Ahrefs/SEMrush** - (Optional) Keyword research, competitor analysis

## 🔧 Technical SEO Checklist

✅ SSL Certificate (HTTPS) - Provided by Netlify
✅ Mobile-friendly design
✅ Fast loading times
✅ XML Sitemap
✅ Robots.txt
✅ Structured data (Schema.org)
✅ Canonical URLs
✅ Meta descriptions on all pages
✅ Proper heading structure
✅ Internal linking
✅ Alt text for images (when added)

## 📝 Content Marketing Ideas

### Blog Post Topics (SEO-Optimized)
1. "Top 10 Cleaning Tips for Busy Parents in Burton upon Trent"
2. "How Often Should You Deep Clean Your Home?"
3. "The Benefits of Professional Steam Cleaning for Bathrooms"
4. "Spring Cleaning Checklist for Derby Homeowners"
5. "Eco-Friendly Cleaning: What Works and What Doesn't"

### Local Content
- "Best Areas for Family Living in Burton upon Trent"
- "Derby Cleaning Services: What to Look For"
- "Supporting Local Businesses in Staffordshire"

## 🌐 Social Media Integration

**To Add Social Links**:
Update `src/components/Schema.astro` with your actual social media URLs:
```javascript
"sameAs": [
  "https://www.facebook.com/your-page",
  "https://www.instagram.com/your-handle",
  "https://twitter.com/your-handle"
]
```

Then add social icons to the footer in `src/layouts/Layout.astro`.

## 📞 Contact Information SEO

**Important**: Update Schema.astro with actual phone number:
```javascript
"telephone": "+44-1234-567890"  // Replace with real number
```

## 🎨 Image SEO (When Adding Images)

When adding images:
1. Use descriptive filenames: `bathroom-steam-cleaning-derby.jpg`
2. Compress images: Use TinyPNG or ImageOptim
3. Add alt text: `<img src="..." alt="Professional bathroom cleaning in Burton upon Trent">`
4. Use WebP format when possible

## 📱 Implementing Click-to-Call

Add to navigation or contact sections:
```html
<a href="tel:+441234567890" class="...">
  Call: 01234 567890
</a>
```

## 🔍 Keyword Research

### Primary Keywords
- Domestic cleaning [location]
- House cleaning services [location]
- Professional cleaners [location]

### Long-tail Keywords
- "Family-friendly cleaning company Burton upon Trent"
- "Regular house cleaning Derby area"
- "Bathroom deep clean services Staffordshire"

### LSI (Related) Keywords
- Home cleaning
- Residential cleaning
- Maid service
- Housekeeping
- Janitorial services

## 🎯 Conversion Optimization

Current CTAs (Call-to-Actions):
✅ Email buttons in navigation
✅ Contact forms on every page
✅ "Get a Quote" buttons
✅ Service page links

**Consider Adding**:
- Phone number in header
- WhatsApp business chat
- Online booking system
- "Book Now" buttons
- Limited-time offers

## 📊 Expected Results Timeline

- **Weeks 1-2**: Site indexed by Google
- **Month 1**: Start appearing for brand searches
- **Months 2-3**: Local rankings improve
- **Months 3-6**: Organic traffic increases
- **Months 6+**: Consistent lead generation

## 🚀 Advanced SEO (Future)

Consider implementing:
- FAQ schema markup
- Review schema (star ratings in search results)
- Video content (cleaning demos)
- Service area pages (individual town pages)
- Seasonal landing pages
- Link building campaigns

---

**Need Help?**
Refer to:
- [Google Search Central](https://developers.google.com/search)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Schema.org Documentation](https://schema.org/)
