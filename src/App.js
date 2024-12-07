import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-3xl font-bold">Responsive Web App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Card 1</h2>
            <p>This is a simple card. Resize the screen to see how the layout changes.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Card 2</h2>
            <p>This is another card.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Card 3</h2>
            <p>This is a third card.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024  Responsive Web App</p>
      </footer>
    </div>
  );
}

export default App;
