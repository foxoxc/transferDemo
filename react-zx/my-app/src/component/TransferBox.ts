import React, { useState } from 'react';
import './TransferBox.css'
interface Item {
  id: number;
  name: string;
}

interface TransferBoxProps {
  allItems: Item[];
}

const TransferBox: React.FC<TransferBoxProps> = ({ allItems }) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [availableItems, setAvailableItems] = useState<Item[]>(allItems);

  const handleSelect = (item: Item) => {
    setSelectedItems([...selectedItems, item]);
    setAvailableItems(availableItems.filter((i) => i.id !== item.id));
  };

  const handleDeselect = (item: Item) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    setAvailableItems([...availableItems, item]);
  };

  return (
    <div>
      <h2>可用项目</h2>
      <ul>
        {availableItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleSelect(item)}>Select</button>
          </li>
        ))}
      </ul>

      <h2>可选项目</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeselect(item)}>Deselect</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferBox;