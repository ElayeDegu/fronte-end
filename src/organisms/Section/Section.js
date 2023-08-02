import React from "react";
import Text from "../../atoms/Text/Text";
import Flex, { FlexItem } from "../../atoms/Flex/Flex";
import SingleBookListing from "../SingleBookListing/SingleBookListing";

const Section = ({ sectionTitle, profiles = [] }) => {
  return (
    <div>
      <Text text={sectionTitle} type="heading" gutterBottom />
      <Flex>
        {profiles.map(
          ({ imageUrl, discountRate, title, description, price }, index) => (
            <FlexItem key={index}>
              <SingleBookListing
                imageUrl={imageUrl}
                discountRate={discountRate}
                title={title}
                price={price}
                description={description}
              />
            </FlexItem>
          )
        )}
      </Flex>
    </div>
  );
};

export default Section;
