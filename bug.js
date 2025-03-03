```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This is where the error occurs */}
      <MyComponent props={{ someProp: 'hello' }}/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent({ props }) {
  console.log(props);
  return <p>Hello from MyComponent</p>;
}
```