import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const Loading = () => (
  <div>
    <Segment style={{height: '100vh'}}>
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
{/* 
      <Image src='/assets/images/wireframe/short-paragraph.png' /> */}
    </Segment>

    {/* <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment> */}
  </div>
)

export default Loading;