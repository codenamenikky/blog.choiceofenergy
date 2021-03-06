import { Box, Heading, Text } from 'grommet'
import { Link } from 'gatsby'
import React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <header>
    <Box margin='small'>
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none'
        }}
        to='/'
      >
        <Heading textAlign='center' color='brand' margin='small'>
          {siteConfig.title}
        </Heading>
      </Link>
      <Text textAlign='center' color='brand'>
        {siteConfig.description}
      </Text>
    </Box>
  </header>
)
