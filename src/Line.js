import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { pink } from '@mui/material/colors';

function Line(props) {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#4a148c'
          },
          secondary: pink
        },
      });
  return (
    <>  {props?.checkPoint===1? 
      <ThemeProvider theme={theme}>
        <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px'}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2020-21
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot variant="outlined" sx={{height:'15px',width:'15px'}} color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="outlined" sx={{height:'15px',width:'15px',color:"black"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color='secondary' sx={{height:'100px'}}>
          <TimelineDot  color="primary" variant="outlined" sx={{height:'15px',width:'15px'}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </ThemeProvider>
    : 
    props?.checkPoint===2? 
    <ThemeProvider theme={theme}>
        <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px'}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2020-21
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot variant="filled" sx={{height:'15px',width:'15px'}} color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="outlined" sx={{height:'15px',width:'15px',color:"black"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color='secondary' sx={{height:'100px'}}>
          <TimelineDot  color="primary" variant="outlined" sx={{height:'15px',width:'15px'}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </ThemeProvider>
    : 
    props?.checkPoint===3? 
    <ThemeProvider theme={theme}>
        <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px'}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2020-21
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot variant="filled" sx={{height:'15px',width:'15px'}} color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px',color:"black"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color='secondary' sx={{height:'100px'}}>
          <TimelineDot  color="primary" variant="outlined" sx={{height:'15px',width:'15px'}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </ThemeProvider>
        :
        props?.checkPoint===4? 
        <ThemeProvider theme={theme}>
        <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px'}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2020-21
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot variant="filled" sx={{height:'15px',width:'15px'}} color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="filled" sx={{height:'15px',width:'15px',color:"black"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color='secondary' sx={{height:'100px'}}>
          <TimelineDot  color="primary" variant="filled" sx={{height:'15px',width:'15px'}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </ThemeProvider>
        :
        <ThemeProvider theme={theme}>
        <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="outlined" sx={{height:'15px',width:'15px'}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2020-21
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot variant="outlined" sx={{height:'15px',width:'15px'}} color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="secondary" sx={{height:'100px'}}>
          <TimelineDot color="primary" variant="outlined" sx={{height:'15px',width:'15px',color:"black"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color='secondary' sx={{height:'100px'}}>
          <TimelineDot  color="primary" variant="outlined" sx={{height:'15px',width:'15px'}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h4" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
        </ThemeProvider>
        
    }
        
    </>
  )
}

export default Line