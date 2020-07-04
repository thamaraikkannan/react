import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if (comments.length>0) {
            const commentList = comments.map(comment => 
                <li key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>--{comment.author},&nbsp;{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'})
                    .format(new Date(comment.date))}</li>
                </li>  
            ) 
            return(
                <div>                    
                    <ul className='list-unstyled'>
                    <h4> Comments </h4>
                        {commentList}
                    </ul>    
                </div>
                
            )      
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.comment)}
                </div>
            </div> 
        )
    }

    
}

export default DishDetail;