import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="grey darken-4" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col sm="6">
              <h5 className="title">Developed by Erica Shackelford</h5>
            </Col>
          </Row>
          <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
