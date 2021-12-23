import React from "react";
import { Button, Card } from "react-bootstrap";
import "./MovieCart.css"
import ReactStars from "react-rating-stars-component";

const MovieCart = ({movie}) => {
  return (
    <div className="movie">
      <Card style={{ width: "18rem" , height:"550"}}>
        <Card.Img variant="top" src={movie.poster} width="20" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
          {/* {movie.description} */}
          </Card.Text>
          <ReactStars
              count={MovieCart.rating}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
            />
          <Button variant="primary">Go somewhere</Button>

        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCart;
