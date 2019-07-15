import React from "react";
import "./style.css";

function Images(props) {
    return (
        <div className="image-holder">
            {props.images.map(image => (
                <img 
                    src={image.url}
                    alt="Failed to load"
                    className="image-card"
                    id={image.id}
                    key={image.id}
                    onClick={() => props.handleImageClick(image.id)}>
                </img>
            ))}
        </div>
    );
}

export default Images;