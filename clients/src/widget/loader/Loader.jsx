import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="loading">
        <div className="container mx-auto">
          <div className="flex-col flex justify-center items-center h-screen">
            <div className="balls ">
              <div className="ball ball1 shadow-lg"></div>
              <div className="ball ball2 shadow-lg"></div>
              <div className="ball ball3 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader