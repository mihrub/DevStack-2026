const Stack = () => {
    return (
        <div className="card h-fit w-60 shrink-0 border border-gray-100 bg-base-100 shadow-sm mr-4">
          <div className="card-body">
            <h2 className="card-title">Your Stack</h2>
            <p>No technologies selected yet.</p>
          </div>
          <button className="mb-8">Your stack is empty.</button>
        </div>
    );
};

export default Stack;