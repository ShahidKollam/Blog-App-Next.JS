// app/api/user/route.js

export async function POST(req) {
  try {
    console.log("ok",req.body);
    
    const body = await req.json(); // Parse the incoming request body
    console.log("1",body);
    
    const { name, password } = body;

    // Perform your logic here (e.g., saving user data to the database)

    return new Response(JSON.stringify({ message: 'User created successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating user', error: error.message }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  return new Response(JSON.stringify({ message: 'GET request successful' }), {
    status: 200,
  });
}
