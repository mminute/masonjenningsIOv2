import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';

function KellysRules() {
  return (
    <MoreAboutLayout title="Kelly's 14 Rules & Practices">
      <div className="inconsolata gray textHeight-regular">
        <ol>
          <Itm>
            The Skunk Works® manager must be delegated practically complete control of his program in all aspects. He should report to a division president or higher.
          </Itm>

          <Itm>
            Strong but small project offices must be provided both by the military and industry.
          </Itm>

          <Itm>
            The number of people having any connection with the project must be restricted in an almost vicious manner. Use a small number of good people (10% to 25% compared to the so-called normal systems).
          </Itm>

          <Itm>
            A very simple drawing and drawing release system with great flexibility for making changes must be provided.
          </Itm>

          <Itm>
            There must be a minimum number of reports required, but important work must be recorded thoroughly.
          </Itm>

          <Itm>
            There must be a monthly cost review covering not only what has been spent and committed but also projected costs to the conclusion of the program.
          </Itm>

          <Itm>
            The contractor must be delegated and must assume more than normal responsibility to get good vendor bids for subcontract on the project. Commercial bid procedures are very often better than military ones.
          </Itm>

          <Itm>
            The inspection system as currently used by the Skunk Works, which has been approved by both the Air Force and Navy, meets the intent of existing military requirements and should be used on new projects. Push more basic inspection responsibility back to subcontractors and vendors. Don't duplicate so much inspection.
          </Itm>

          <Itm>
            The contractor must be delegated the authority to test his final product in flight. He can and must test it in the initial stages. If he doesn't, he rapidly loses his competency to design other vehicles.
          </Itm>

          <Itm>
            The specifications applying to the hardware must be agreed to well in advance of contracting. The Skunk Works practice of having a specification section stating clearly which important military specification items will not knowingly be complied with and reasons therefore is highly recommended.
          </Itm>

          <Itm>
            Funding a program must be timely so that the contractor doesn't have to keep running to the bank to support government projects.
          </Itm>

          <Itm>
            There must be mutual trust between the military project organization and the contractor, the very close cooperation and liaison on a day-to-day basis. This cuts down misunderstanding and correspondence to an absolute minimum.
          </Itm>

          <Itm>
            Access by outsiders to the project and its personnel must be strictly controlled by appropriate security measures.
          </Itm>

          <Itm>
            Because only a few people will be used in engineering and most other areas, ways must be provided to reward good performance by pay not based on the number of personnel supervised.
          </Itm>
        </ol>
      </div>
    </MoreAboutLayout>
  );
}

export default KellysRules;
