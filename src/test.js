import React, { useState } from 'react';

function ParentComponent() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        Toggle Child Component
      </button>
      {showChild ? <ChildComponent /> : null}
    </div>
  );
}

function ChildComponent() {
  return <div>Child Component</div>;
}

export default ParentComponent;
