import React from 'react';

const  HelloWorld: React.FC = async () => {
    // wait 3 seconds

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};

export default HelloWorld;