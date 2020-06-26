import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRatings] = useState(null);

    return (
        <div>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRatings(ratingValue)} />
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                            size={100}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating