import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';

function RandomLinks() {
  return (
    <MoreAboutLayout title="Random Links">
      <div className="inconsolata gray textHeight-regular">
        <ul>
          <Itm>
            <a href="https://www.servomagazine.com/magazine/article/grant-imahara-eulogy" target="_blank">Grant Imahara Eulogy</a>
          </Itm>

          <Itm>
            <a href="https://www.selfdefined.app/" target="_blank">Self-Defined</a>- "A modern dictionary about us." by <a href="https://twitter.com/TatianaTMac" target="_blank">Tatiana Mac</a>
          </Itm>

          <Itm>
            <a href="https://window-swap.com/" target="_blank">WindowSwap</a>- Take a peek through someone else's window view
          </Itm>
        </ul>
      </div>
    </MoreAboutLayout>
  );
}

export default RandomLinks;
