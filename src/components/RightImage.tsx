import React, { useState } from 'react';
import {
  Column,
  HeaderImage,
  HeaderImageContentBack,
  HeaderImageContentBackTexta,
  HeaderImageContentBackTextb,
  Row,
} from '../pages/Home/HomeStyles';
//import Profile from '../Assets/Images/user.svg';

// const Data = [
//   {
//     id: 0,
//     name: 'Tom Walker',
//     desc: 'Startup Mentor',
//     img: Profile,
//   },
//   {
//     id: 1,
//     name: 'Tom Walker',
//     desc: 'Startup Mentor',
//     img: Profile,
//   },
//   {
//     id: 2,
//     name: 'Tom Walker',
//     desc: 'Startup Mentor',
//     img: Profile,
//   },
// ];
const RightImage = () => {
  const [id, setId] = useState(0);
  return (
    <Row>
      {/* {Data.map((data) => {
                return (
                    <div 
                    style={data.id === 0 ? {position:'relative'} : data.id === 1 ? {position:'relative',marginTop:'5%'}: { position: 'relative', alignSelf: 'center', marginLeft: '10%' }}
                    // style={data.id === 0 ? { position: 'relative' } : data.id === 1 ? { position: 'relative', marginTop: '5%' } : data.id === 2 ? { position: 'relative', alignSelf: 'center', marginLeft: '10%' } : <></>}
                    >
                        <HeaderImage src={data.img} />

                        <HeaderImageContentBack>
                            <HeaderImageContentBackTexta>{data.name}</HeaderImageContentBackTexta>
                            <HeaderImageContentBackTextb>{data.desc}</HeaderImageContentBackTextb>

                        </HeaderImageContentBack>
                    </div>
                )
            })} */}
      <div style={{ marginLeft: '50px' }}>
        <div style={{ position: 'relative' }}>
          <HeaderImage
            src={
              'https://mentorgrad.s3.us-west-2.amazonaws.com/mature-male-ceo-listening-colleague-holding-papers-2021-09-04-09-42-09-utc+6.png'
            }
          />
          <HeaderImageContentBack>
            <HeaderImageContentBackTexta>
              Tom Walker
            </HeaderImageContentBackTexta>
            <HeaderImageContentBackTextb>
              Strartup Mentor
            </HeaderImageContentBackTextb>
          </HeaderImageContentBack>
        </div>
        <div
          style={{ position: 'relative', marginTop: '5%', marginBottom: '8%' }}
        >
          <HeaderImage
            src={'https://mentorgrad.s3.us-west-2.amazonaws.com/hero_2.png'}
          />

          <HeaderImageContentBack>
            <HeaderImageContentBackTexta>
              Zak Robinson
            </HeaderImageContentBackTexta>
            <HeaderImageContentBackTextb>
              Branding Expert
            </HeaderImageContentBackTextb>
          </HeaderImageContentBack>
        </div>
      </div>
      <div style={{ alignSelf: 'center', marginLeft: '10%' }}>
        <div style={{ position: 'relative' }}>
          <HeaderImage
            src={'https://mentorgrad.s3.us-west-2.amazonaws.com/hero_3.png'}
          />

          <HeaderImageContentBack>
            <HeaderImageContentBackTexta>
              Karla Rojas
            </HeaderImageContentBackTexta>
            <HeaderImageContentBackTextb>
              Data Scientist
            </HeaderImageContentBackTextb>
          </HeaderImageContentBack>
        </div>
      </div>
    </Row>
  );
};
export default RightImage;
