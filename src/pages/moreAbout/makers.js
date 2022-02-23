import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';

// TODO: Tools list?

function Makers() {
  return (
    <MoreAboutLayout title="Makers">
      <div className="inconsolata gray textHeight-regular">
        <ul>
          <Itm>
            <a href="https://www.servomagazine.com/magazine/article/underwater-remotely-operated-vehicles-the-next-big-thing-in-robotics" target="_blank">Underwater Remote Operated Vehicles: The Next Big Thing in Robotics?</a>
          </Itm>
        </ul>
      </div>
    </MoreAboutLayout>
  );
}

export default Makers;
