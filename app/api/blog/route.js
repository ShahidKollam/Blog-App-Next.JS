export async function GET(request) {
    const sampleBlogPost = {
      id: 1,
      title: "First Blog Post",
      author: "Shahid M",
      content: "This is a sample blog post to test the API route.",
      createdAt: new Date().toISOString(),
    };
  
    return new Response(JSON.stringify(sampleBlogPost), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }