import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import LocationOn from "@material-ui/icons/LocationOn";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import carouselStyle from "../assets/jss/app/views/indexSections/carouselStyle.js";
// import image1 from "../assets/img/Asian_Dress_Bokeh_Glance_Brown_haired_Model_568492_600x400.png";
// import image2 from "../assets/img/Asian_Pose_Bokeh_Glance_Hands_Brunette_girl_568501_600x400.png";
// import image3 from "../assets/img/Asian_Swing_Dress_Wreath_Bokeh_Cute_Sitting_Legs_568488_600x400.png";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src="../assets/img/Asian_Dress_Bokeh_Glance_Brown_haired_Model_568492_600x400.png"
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src="../assets/img/Asian_Pose_Bokeh_Glance_Hands_Brunette_girl_568501_600x400.png"
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src="../assets/img/Asian_Swing_Dress_Wreath_Bokeh_Cute_Sitting_Legs_568488_600x400.png"
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionCarousel.propTypes = {
  classes: PropTypes.object
};

export default withStyles(carouselStyle)(SectionCarousel);