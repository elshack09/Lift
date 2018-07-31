import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import {Button} from 'mdbreact'

const Imagehomepage = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ca004a9cd0ce1144e94460a9f5e79b&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
        <CardImgOverlay>
          <CardTitle><h1>Weight Training</h1></CardTitle>
          <CardText><h2 class="h2-responsive white-text"><em>App for Beginners</em></h2></CardText> < br/>< br/>< br/>< br/>< br/>< br/>< br/>< br/>< br/>
          <Button type="button" class="btn red darken-4 btn-rounded waves-effect">Enter</Button>
        </CardImgOverlay>
      </Card>
      
    </div>
  );
};

export default Imagehomepage;