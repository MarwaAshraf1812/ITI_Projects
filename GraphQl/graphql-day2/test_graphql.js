// Use global fetch


const GRAPHQL_ENDPOINT = 'http://localhost:4001/';

async function query(queryStr, variables = {}, token = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: queryStr,
      variables,
    }),
  });

  return await res.json();
}

async function runTests() {
  console.log('--- STARTING GRAPHQL INTEGRATION TESTS ---');

  // 1. Register a new user
  const registerMutation = `
    mutation Register($name: String!, $email: String!, $password: String!) {
      register(name: $name, email: $email, password: $password) {
        token
        user {
          id
          name
          email
        }
      }
    }
  `;
  
  const uniqueEmail = `test_${Date.now()}@example.com`;
  const registerVars = {
    name: 'Marwa Ashraf',
    email: uniqueEmail,
    password: 'securepassword123',
  };

  console.log('Testing register mutation...');
  const regResult = await query(registerMutation, registerVars);
  console.log('Register Result:', JSON.stringify(regResult, null, 2));

  if (!regResult.data || !regResult.data.register) {
    console.error('Registration failed!');
    return;
  }

  const { token, user } = regResult.data.register;
  const userId = user.id;

  // 2. Try to add a post WITHOUT token
  const addPostMutation = `
    mutation AddPost($title: String!, $userId: ID!) {
      addPost(title: $title, userId: $userId) {
        id
        title
      }
    }
  `;
  const postVars = {
    title: 'Mongoose with GraphQL',
    userId,
  };

  console.log('\nTesting addPost mutation WITHOUT token (should fail)...');
  const postFailResult = await query(addPostMutation, postVars);
  console.log('AddPost (No Token) Result:', JSON.stringify(postFailResult, null, 2));

  if (postFailResult.errors && postFailResult.errors[0].message.includes('Access denied')) {
    console.log('✅ Correctly blocked access without token!');
  } else {
    console.error('❌ Failed! Allowed mutation without token or returned wrong error.');
  }

  // 3. Try to add a post WITH token
  console.log('\nTesting addPost mutation WITH token (should succeed)...');
  const postSuccessResult = await query(addPostMutation, postVars, token);
  console.log('AddPost (With Token) Result:', JSON.stringify(postSuccessResult, null, 2));

  if (postSuccessResult.data && postSuccessResult.data.addPost) {
    console.log('✅ Successfully added post with token!');
    
    // 4. Query all posts (public)
    const getPostsQuery = `
      query {
        getAllPosts {
          id
          title
          user {
            id
            name
            email
          }
        }
      }
    `;
    console.log('\nTesting getAllPosts query (should succeed, public)...');
    const postsResult = await query(getPostsQuery);
    console.log('GetAllPosts Result:', JSON.stringify(postsResult, null, 2));
  } else {
    console.error('❌ Failed to add post even with token!');
  }

  console.log('--- TESTS COMPLETED ---');
}

runTests().catch(console.error);
