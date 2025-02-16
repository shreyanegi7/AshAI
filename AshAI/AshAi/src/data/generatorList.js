export const generatorList = [
    {
        id: 1,
        title: 'Blog Post Ideas',
        description: 'Stuck in the idea phase? Generate 5 ideas',
        link: 'blog-ideas',
        featured: true,
        prompt: 'Brainstorm a list of 5 blog post ideas for ',
        description2: 'Enter your your content topic to generate a list of 5 blog post ideas.',
        formLabel: 'Topic:',
        formName: 'topic',
        placeholder: 'e.g. Finance, Working With AI, etc.',
        temperature: 0.2,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    },
    {
        id: 2,
        title: 'Product Description',
        description: 'Generate an awesome Product Description',
        link: 'product-description',
        featured: false,
        prompt: 'Write a persuasive and exciting product description for: ',
        description2: 'Enter your your product and a few keywords to include in your output. Click Submit and get a product description generated for you by AI. Think less and sell more.',
        formLabel: 'Product Name & Purpose:',
        formName: 'productName',
        placeholder: 'e.g. ScoobySnacks will make your dog chill out',
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    },
    {
        id: 3,
        title: 'Company Bio',
        description: 'Generate an awesome Company Bio',
        link: 'company-bio',
        featured: true,
        prompt: 'Write a persuasive and exciting company bio for: ',
        description2: 'Enter your company name and a few keywords that you\'d like to include in your output. Click Submit and get a company bio generated for you by AI. Think less and sell more.',
        formLabel: 'Company Name & Purpose:',
        formName: 'companyName',
        placeholder: 'e.g. Dunder Mifflin the best paper company ',
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    },
    {
        id: 4,
        title: 'SEO Blog Intro',
        description: 'Generate an awesome SEO blog into paragraph',
        link: 'seo-blog-intro',
        featured: true,
        prompt: 'Write an uplifting and positive Blog intro paragraph with SEO keywords for the blog title: ',
        description2: 'Enter your blog posts title and SEO keywords that you\'d like to include in your output. Click Submit and get a blog post introduction paragraph generated for you by AI. Think less and publish more.',
        formLabel: 'Blog post title:',
        formName: 'blogTitle',
        placeholder: 'e.g. How to Make a Commit with Git',
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    },
    {
        id: 5,
        title: 'LinkedIn Job Description',
        description: 'Generate a knowledgeable LinkedIn Job Description',
        link: 'linkedin-job-description',
        featured: false,
        prompt: 'Write an informative and knowledgeable LinkedIn job description in the first person past tense for the job title: ',
        description2: 'Enter your your job title, click submit, and get a job description generated for you by AI.',
        formLabel: 'Job Title:',
        formName: 'jobTitle',
        placeholder: 'e.g. Software Engineer specializing in AI',
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    },
    // {
    //     id: 6,
    //     title: 'TL;DR',
    //     description: 'Summarize verbose text into a TL;DR.',
    //     link: 'tldr',
    //     featured: true,
    //     prompt: 'Write a TL;DR for the following text: ',
    //     description2: 'Enter your your verbose text, click submit, and get a TL;DR generated for you by AI.',
    //     formLabel: 'Paragraph:',
    //     formName: 'longParagraph',
    //     placeholder: 'paste your text here',
    //     temperature: 0.6,
    //     max_tokens: 150,
    //     top_p: 1,
    //     frequency_penalty: 1,
    //     presence_penalty: 1,
    // }
];
