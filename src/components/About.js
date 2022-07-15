import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Card } from "@mui/material";
import { Box } from "@mui/system";

const About = () => {
  return (
    <>
      <Timeline position="alternate" style={{marginTop:'5%'}}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              accusantium voluptatibus dolor aperiam a facere quisquam eveniet
              voluptatum unde id natus sunt dignissimos ducimus sapiente amet
              impedit, minus recusandae ad vitae beatae inventore non. Neque
              voluptatum doloremque, corporis accusantium esse vero nostrum sit
              totam eligendi, aperiam nobis rerum exercitationem optio!
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              accusantium voluptatibus dolor aperiam a facere quisquam eveniet
              voluptatum unde id natus sunt dignissimos ducimus sapiente amet
              impedit, minus recusandae ad vitae beatae inventore non. Neque
              voluptatum doloremque, corporis accusantium esse vero nostrum sit
              totam eligendi, aperiam nobis rerum exercitationem optio!
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              accusantium voluptatibus dolor aperiam a facere quisquam eveniet
              voluptatum unde id natus sunt dignissimos ducimus sapiente amet
              impedit, minus recusandae ad vitae beatae inventore non. Neque
              voluptatum doloremque, corporis accusantium esse vero nostrum sit
              totam eligendi, aperiam nobis rerum exercitationem optio!
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Box >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              accusantium voluptatibus dolor aperiam a facere quisquam eveniet
              voluptatum unde id natus sunt dignissimos ducimus sapiente amet
              impedit, minus recusandae ad vitae beatae inventore non. Neque
              voluptatum doloremque, corporis accusantium esse vero nostrum sit
              totam eligendi, aperiam nobis rerum exercitationem optio!
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default About;
