import React from 'react';
import { Box, Flex } from 'reflexbox';
import Appear from '../atoms/Appear';

const Features = (props: { features: string[]; icon: React.ReactNode; variant?: 'regular' | 'small' }) => (
    <Box pb={3}>
        {props.features.map((feature, i) => (
            <Appear as={'div'} key={i}>
                <Flex mt={'25px'}>
                    {props.icon}
                    <Box ml={3}>
                        {props.variant === 'small' ? (
                            <p>{feature}</p>
                        ) : (
                            <h4 style={{ marginTop: '0.2rem' }}>{feature}</h4>
                        )}
                    </Box>
                </Flex>
            </Appear>
        ))}
    </Box>
);

export default Features;
