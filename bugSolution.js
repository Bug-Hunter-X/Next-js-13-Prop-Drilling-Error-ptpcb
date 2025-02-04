```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyComponent someProp={'hello'}/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent({ someProp }) {
  console.log(someProp);
  return <p>Hello from MyComponent: {someProp}</p>;
}
```