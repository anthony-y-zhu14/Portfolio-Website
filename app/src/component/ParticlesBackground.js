import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesBackground() {
    return (
        <Particles style={{zIndex: 0, position: 'absolute'}}
            params={{
            "particles": {
                "number": {
                    "value": 20
                },
                "size": {
                    "value": 10
                },
                "line_linked": {
                    "color": {
                      'value': "#6c9ff8"
                    },
                  },
                  "color": {
                    "value": "#6c9ff8",            
                }
            },
        //     "interactivity": {
        //         "events": {
        //             "onhover": {
        //                 "enable": true,
        //                 "mode": "repulse"
        //             }
        //         }
        //   }
      }} />
    )
}