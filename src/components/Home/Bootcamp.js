import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import { Box } from 'gestalt';

// https://github.com/Noitidart/react-countTo/blob/gh-pages/dist/react-countto.js
// https://github.com/MicheleBertoli/react-count-to/blob/master/src/react-count-to.js

// TODO: Use real styles
const textStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};


export default function Bootcamp() {
  return (
    <section>
      <Box display="flex" justifyContent="center" column={6} margin="auto">
        <Box display="flex" justifyContent="center">
          <h1 className="montserrat" style={{ display: 'block', fontSize: '25px' }}>PROUD BOOTCAMP HERITAGE</h1>
        </Box>
      </Box>

      <Box marginTop={8}>
        <StaticQuery
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "SublimeTextProveIt.png" }) {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={(data) => {
            const imageData = data.desktop.childImageSharp.fluid;
            return (
              <BackgroundImage
                preserveStackingContext
                backgroundColor="#040e18"
                fluid={imageData}
                Tag="section"
                style={{ background: 'rgba(0, 0, 0, .5)', height: '50vh' }}
              >
                <Box display="flex" height="100%">
                  <Box margin="auto">
                    <Box
                      color="darkGray"
                      marginBottom={3}
                      dangerouslySetInlineStyle={{
                        __style: {
                          margin: 'auto',
                          marginBottom: '12px',
                          width: 'min-content',
                        },
                      }}
                    >
                      <div
                        className="montserrat"
                        styles={{
                          ...textStyles,
                          fontSize: '30px',
                        }}
                      >
                        {'</CODE>'}
                      </div>
                    </Box>

                    <Box
                      color="darkGray"
                      dangerouslySetInlineStyle={{ __style: { padding: '6px' } }}
                    >
                      <div className="montserrat" style={{ ...textStyles, marginBottom: '6px' }}>
                        Software developer @ Pinterest
                      </div>

                      <div className="montserrat" style={{ ...textStyles, marginBottom: '6px' }}>
                        Minted in NYC @ //Flatiron School
                      </div>

                      <div className="montserrat" style={{ ...textStyles, marginBottom: '6px' }}>
                        Making sweet, sweet code
                      </div>
                    </Box>
                  </Box>
                </Box>
              </BackgroundImage>
            );
          }}
        />
      </Box>
    </section>
  );
  // return (
  //   <section>
  //     <h1 className="montserrat" style={{ display: 'block', fontSize: '30px' }}>THE FLATIRON WAY</h1>
  //   </section>
  // );
}


// function EniacHeroModule() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           desktop: file(relativePath: { eq: "00-eniac.jpg" }) {
//             childImageSharp {
//               fluid(quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => {
//         const imageData = data.desktop.childImageSharp.fluid;
//         return (
//           <BackgroundImage
//             preserveStackingContext
//             backgroundColor="#040e18"
//             fluid={imageData}
//             Tag="section"
//             style={{
//               height: `${window.innerHeight}px`,
//               backgroundColor: 'rgba(0, 0, 0, 0.3)',
//             }}
//           >
//             <Box display="flex" height="100%" width="100%">
//               <Box margin="auto">
//                 <Box
//                   color="darkGray"
//                   marginBottom={3}
//                   dangerouslySetInlineStyle={{
//                     __style: {
//                       margin: 'auto',
//                       marginBottom: '12px',
//                       width: 'min-content',
//                     },
//                   }}
//                 >
//                   <Montserrat
//                     styles={{
//                       ...textStyles,
//                       fontSize: '30px',
//                     }}
//                   >
//                     {'</CODE>'}
//                   </Montserrat>
//                 </Box>

//                 <Box
//                   color="darkGray"
//                   dangerouslySetInlineStyle={{ __style: { padding: '6px' } }}
//                 >
//                   <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
//                     Software developer @ Pinterest
//                   </Montserrat>

//                   <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
//                     Minted in NYC @ //Flatiron School
//                   </Montserrat>

//                   <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
//                     Making sweet, sweet code
//                   </Montserrat>
//                 </Box>
//               </Box>
//             </Box>
//           </BackgroundImage>
//         );
//       }}
//     />
//   );
// }


{/* <section class="module-small bg-dark bg-dark-50" data-background="assets/images/SublimeTextProveIt.png">
<h2 class="module-title align-center font-alt">The Flatiron Way</h2>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 m-b-md-20">
                <div class="counter-item">
                    <div class="counter-number font-alt" data-number="3">
                        <span>3</span>
                    </div>
                    <div class="counter-title font-inc">
                        Months
                    </div>
                </div>
            </div>
            <div class="col-sm-3 m-b-md-20">
                <div class="counter-item">
                    <div class="counter-number font-alt" data-number="166">
                        <span>166</span>
                    </div>
                    <div class="counter-title font-inc">
                        Repos
                    </div>
                </div>
            </div>
            <div class="col-sm-3 m-b-md-20">
                <div class="counter-item">
                    <div class="counter-number font-alt" data-number="318">
                        <span>318</span>
                    </div>
                    <div class="counter-title font-inc">
                        Commits
                    </div>
                </div>
            </div>
            <div class="col-sm-3 m-b-md-20">
                <div class="counter-item">
                    <div class="counter-number font-alt" data-number="999">
                        <span>999</span>%
                    </div>
                    <div class="counter-title font-inc">
                        Improved
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

// $('.counter-item').each(function(i) {
//   $(this).appear(function() {
//     var number = $(this).find('.counter-number').data('number');
//     $(this).find('.counter-number span').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
//   });
// });
