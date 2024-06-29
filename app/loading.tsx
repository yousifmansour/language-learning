import React from "react";
import './loading.scss';

const Loading: React.FC = () => {
    return (
        <div>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "4px solid #f3f3f3",
                    borderTop: "4px solid #3498db",
                    animation: "loading-spin 1s linear infinite",
                }}
            ></div>
        </div>
    );
};

export default Loading;
