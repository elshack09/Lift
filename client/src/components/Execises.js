import React, { Component } from "react";
import { Container, Row, Col, Mask, Fa, View, Button } from "mdbreact";

class Exercises extends React.Component {
  render() {
    return (
      <Container>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Weight-Training Exercises
        </h2>
        <Row>
          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <View hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="http://martamontenegro.com/wp-content/uploads/2011/10/split-squat-2.jpg"
              />
              <Mask overlay="white-slight" />
            </View>
            <h4 className="font-weight-bold mb-3">
              <strong>Squats</strong>
            </h4>
            <p className="text-center w-responsive mx-auto mb-5">
              Squats increase the size of your leg muscles (especially quads,
              hamstrings and glutes) and don't do much to decrease the fat so
              overall your legs will look bigger. If you continue to squat, your
              legs will continue to grow in size.
            </p>
            <Button
              color="red darken-4"
              rounded
              size="md"
              href="https://youtu.be/LAMVB4FMuE8?t=38s"
              target="_blank"
            >
              Squat Visual
            </Button>
          </Col>
          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <View hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1520877947209-d479d930e23b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9270d59662021397f24c9ff663ef003e&auto=format&fit=crop&w=400&q=60"
              />
              <Mask overlay="white-slight" />
            </View>
            <h4 className="font-weight-bold mb-3">
              <strong>Dumbbell for Biceps</strong>
            </h4>
            <p className="text-center w-responsive mx-auto mb-5">
            Dumbbell biceps curls, which will also allow you to overload those biceps with a heavy weight. Most trainees are slightly stronger when lifting a barbell versus a set of dumbbells, so this is a great one for maximum strength development.
            </p>
            <Button
              color="red darken-4"
              rounded
              size="md"
              href="https://youtu.be/LAMVB4FMuE8?t=38s"
              target="_blank"
            >
              Dumbell Visual
            </Button>
          </Col>
          <Col lg="4" md="12" className="mb-lg-0 mb-4">
            <View hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1529674958567-45dab8621c64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03372de52f913089b7476b788611c252&auto=format&fit=crop&w=633&q=80"
              />
              <Mask overlay="white-slight" />
            </View>
            <h4 className="font-weight-bold mb-3">
              <strong>Deadlifts</strong>
            </h4>
            <p className="text-center w-responsive mx-auto mb-5">
            Core strength, core pertaining to the central muscles of the body; lower back, glutes and the abdominal region is a very important health component, in that it supports the body in almost every movement and position, and the deadlift is the key core strength building movement.
            </p>
            <Button
              color="red darken-4"
              rounded
              size="md"
              href="https://youtu.be/RyJbvWAh6ec?t=54s"
              target="_blank"
            >
              Deadlifts Visual
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Exercises;
