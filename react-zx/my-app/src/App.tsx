import React from 'react';
import TransferBox from './component/TransferBox';

function App() {
  const allItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ];
  return (
    <div className="App">
      <TransferBox allItems={allItems} />;
    </div>
  );
}

export default App;
