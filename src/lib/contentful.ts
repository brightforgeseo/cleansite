import * as contentful from 'contentful';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  author?: string;
  publishDate: string;
  category?: string;
  tags?: string[];
}

// Check if Contentful credentials are available
const hasContentfulCredentials = !!(
  import.meta.env.CONTENTFUL_SPACE_ID &&
  import.meta.env.CONTENTFUL_ACCESS_TOKEN
);

// Initialize Contentful client only if credentials are available
let client: contentful.ContentfulClientApi<undefined> | null = null;

if (hasContentfulCredentials) {
  client = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID!,
    accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN!,
  });
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!client) {
    console.warn('Contentful client not initialized. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables.');
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    });

    return entries.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: item.fields.featuredImage,
      author: item.fields.author,
      publishDate: item.fields.publishDate,
      category: item.fields.category,
      tags: item.fields.tags,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) {
    console.warn('Contentful client not initialized.');
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const item = entries.items[0] as any;
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: item.fields.featuredImage,
      author: item.fields.author,
      publishDate: item.fields.publishDate,
      category: item.fields.category,
      tags: item.fields.tags,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  if (!client) {
    console.warn('Contentful client not initialized.');
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.category': category,
      order: ['-fields.publishDate'],
    });

    return entries.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: item.fields.featuredImage,
      author: item.fields.author,
      publishDate: item.fields.publishDate,
      category: item.fields.category,
      tags: item.fields.tags,
    }));
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
}
