const h1 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello from React'
  );

  const root  = ReactDOM.createRoot(document.getElementById("root"));
  root.render(h1);