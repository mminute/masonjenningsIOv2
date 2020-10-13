import React from 'react';
import MoreAboutLayout from '../../../components/MoreAboutLayout';
import { Box } from 'gestalt';
import Chapter from '../../../components/Chapter';

function ZeroBugsAndProgramFaster() {
  return (
    <MoreAboutLayout title="Zero Bugs Notes">
      <div className="inconsolata gray textHeight-regular">
        <h2>Zero Bugs and Program Faster</h2>
        <h4>By Kate Thompson</h4>

        <h3>Notes:</h3>
        <Box marginStart={8}>
          <Chapter idx="2" title="Code that Doesn’t Leak">
            <p>
              “If the design is so complicated that there are no obvious
              deficiencies, the deficiencies are hidden”
            </p>

            <strong>Ch 7: Know What Each Function Call Does</strong>
            <p>
              “API’s are one of the most common sources of programming bugs”
            </p>
          </Chapter>

          <Chapter idx="8" title="Reusable Code">
            <p>
              If you want people to build on your code, it needs three things:
              <ol>
                <li>An obvious way to extend it</li>
                <li>An easy way to extend it</li>
                <li>A fast way to extend it</li>
              </ol>
            </p>
          </Chapter>

          <Chapter idx="9" title="Cyclomatic Complexity">
            <p>
              'Cyclomatic complexity’ … means ‘number of paths through code’
              <br />
              When code is as simple as the problem you’re trying to solve, then
              you’ve succeeded. … Code can never be simpler thatn the problem it
              is trying to solve: that’s when you’ve done enough.
            </p>
          </Chapter>

          <Chapter idx="10" title="One Small Piece at a Time">
            <p>
              Bob Martin developed three rules for unit tests…
              <ol>
                <li>
                  You are not allowed to write any code unless it is to make a
                  failing unit test pass.
                </li>
                <li>
                  You are not allowed to write any more of a unit test than is
                  sufficient to fail; and compilation failures are failures.
                </li>
                <li>
                  You are not allowed to write any more code than is sufficient
                  to pass the one failing unit test.
                </li>
              </ol>
            </p>
          </Chapter>

          <Chapter idx="12" title="Each Line Changed is a Chance for a Bug">
            <p>
              If you want to be sure, you will need to test in multiple layers:
              code review, black-box testing, fuzz testing, white-box testing,
              unit-tests, functional tests, manual tests, formal verification,
              design verification, etc. The more layers of testing, the fewer
              bugs.
              <ul>
                <li>
                  Fuzz testing: providing invalid/unexpected/random inputs to a
                  program
                </li>
                <li>
                  White box testing: intern structure of a program is known to
                  the tester
                </li>
              </ul>
              A simpler way to introduce unit tests to an old project is to only
              write them for code you need to change anyway…
            </p>
          </Chapter>

          <Chapter idx="13" title="The Team and Literate Programming">
            <p>
              “The term Literate Programming means writing your program for a
              human to read”
              <br />
              “... for a deep taste of literate programming, download cweb and
              play.”
            </p>
          </Chapter>

          <Chapter idx="19" title="Structural vs Real Code">
            <p>
              Real code is code that actually does things: open a file, draw on
              the screen… Structural code connects things together. … minimize
              structural code as much as possible.
            </p>
          </Chapter>

          <Chapter idx="21" title="Use Data to Optimize and Win Arguments">
            <p>
              When an argument goes on for a long time, it is usually because of
              a lack of data, or because neither side is right.
              <br />
              If you haven’t timed your code before the change and after the
              change, you don’t know whether you’ve improved things or slowed
              them down.
            </p>
          </Chapter>

          <Chapter idx="22" title="Be Your Own Worst Enemy">
            <p>
              A way to help examine your own ideas (and other people’s) is to
              recognize when you are proposing a hypothesis… If someone presents
              an idea without any evidence to back it up, it’s a hypothesis.
            </p>
          </Chapter>

          <Chapter idx="26" title="Points of Flexibility">
            <p>
              Sometimes programmers create bugs by trying to fit every piece of
              code into a design pattern. Instead of increasing flexibility,
              they decrease flexibility because the problem isn’t well defined,
              and isn’t a good match for the chosen design pattern.
            </p>
          </Chapter>

          <Chapter idx="27" title="Do it Later">
            <p>
              Writing code before it needs to be written is poor management.
              <br />
              Clean the things that have serious potential to cause problems,
              like poor interfaces, or doce that you are working on right now
            </p>
          </Chapter>

          <Chapter idx="29" title="Bad APIs Cause Bugs">
            <p>
              Fixing mistakes, instead of starting over from scratch, is the way
              to learn.
              <br />
              Any time we change a software standard, it’s an act of violence.
              It’s disruptive. It will cause stuff to fail. It will cause cost
              and harm people
            </p>
          </Chapter>

          <Chapter idx="30" title="Lessons from Lisp">
            <p>Control side effects</p>
          </Chapter>

          <Chapter idx="31" title="ACID">
            <p>
              <ul>
                <li>Atomic- Actions succeed completely or fail completely</li>
                <li>
                  Consistency- The system has rules and it will always follow
                  those rules
                </li>
                <li>
                  Isolation- If the system handles multiple threads, it remains
                  consistent, as if each thread ran in isolation
                </li>
                <li>
                  Durability- Once an operation is complete, it stays complete
                </li>
              </ul>
              Protected action- If something goes wrong the action can be
              reveresed
              <br />
              Real actions cannot be reversed
            </p>
          </Chapter>

          <Chapter
            idx="34"
            title="Contracts, and When You are too Lazy for Proofs"
          >
            <p>
              An invariant is always true. … Invariants define what a class
              does, although the invariants might not be formally defined
            </p>

            <strong>Ch 38: Von Meuman</strong>
            <p>
              TODO- Look up John von Neumann
              <br />
              Book Richard Feynmann `QED: The Strange Theory of Light and
              Matter`
            </p>
          </Chapter>

          <Chapter idx="39" title="Gates">
            <p>
              Priorities:
              <ol>
                <li>Take care of your customers first</li>
                <li>Second, take care of your employees</li>
                <li>Then take care of your stockholders</li>
              </ol>
            </p>
          </Chapter>
        </Box>
      </div>
    </MoreAboutLayout>
  );
}

export default ZeroBugsAndProgramFaster;
