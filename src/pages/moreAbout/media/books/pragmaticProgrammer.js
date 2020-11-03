import React from 'react';
import Chapter from '../../../../components/Chapter';
import Image from '../../../../components/Image';
import MoreAboutLayout from '../../../../components/MoreAboutLayout';
import { Box } from 'gestalt';

function Chapter0() {
  return (
    <Chapter idx="0" title="Preface">
      <p>
        "Kaizen" is a Japanese term that captures the concept of continuously
        making many small improvements.
      </p>
    </Chapter>
  );
}

function Chapter1() {
  return (
    <Chapter idx="1" title="A Pragmatic Philosophy">
      <p>
        Your knowledge portfolio
        <ul>
          <li>Invest regularly</li>

          <li>Diversify</li>

          <li>Manage risk</li>
        </ul>
      </p>

      <p>
        Goals
        <ul>
          <li>Learn at least one language every year</li>

          <li>Read a technical book each quarter</li>

          <li>Read nontechnical books too</li>

          <li>Take classes</li>

          <li>Participate in local user groups</li>

          <li>Experiment with different environments</li>

          <li>Stay current (trade magazines and journals)</li>

          <li>Get wired</li>
        </ul>
      </p>

      <p>
        Communicate!
        <br />
        Use WISDOM:
        <ul>
          <li>
            <b>W</b>hat do you want them to learn?
          </li>
          <li>
            What is their <b>I</b>nterest in what you've got to say?
          </li>
          <li>
            How <b>S</b>ophisticated are they?
          </li>
          <li>
            How much <b>D</b>etail do they want?
          </li>
          <li>
            Whom do you want to <b>O</b>wn the information?
          </li>
          <li>
            How can you <b>M</b>otivate them to listen to you?
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter2() {
  return (
    <Chapter idx="2" title="A Pragmatic Approach">
      <p>
        Orthoganality
        <br />
        In computing, the term has come to signify a kind of independece or{' '}
        <b>decoupling</b>.<br />
        Two or more things are orthogonal if changes in one do not affect any of
        the others.
        <br />
        (Developers) may use words such as modular, component-based, and layered
        to describe the process.
      </p>
      <p>
        Tracer bullets:
        <ul>
          <li>Users get to see something that works early</li>
          <li>Developers build a structure to work in</li>
          <li>
            You have an integration platform
            <br />
            As the system is connected end-to-end, you have an environment to
            which you can add new pieces of code.
          </li>
          <li>You have something to demonstrate</li>
          <li>You have a better feel for progress</li>
        </ul>
      </p>
      <p>
        How to Use Prototypes
        <br />
        When building a prototype, what details can you ignore?
        <ul>
          <li>Correctness</li>
          <li>Completeness</li>
          <li>Robustness</li>
          <li>Style</li>
        </ul>
      </p>
      <p>
        Estimating
        <br />
        Build a model of the system
        <ul>
          <li>Build a rough and ready bare-bones mental model</li>
          <li>
            For a project, the model may be the steps that your organization
            uses during development, along with a rough picture of how the
            system might be implemented
          </li>
          <li>
            The process of building the model leads to discoveries about the
            underlying patterns and processes that weren't apparent on the
            surface.
          </li>
          <li>
            Building the model introduces inaccuracies into the estimating
            process.
            <br />
            You are trading off model simplicity for accuracy
          </li>
        </ul>
        Break the Model into Components
        <ul>
          <li>
            Discover the mathematical rules that describe how these components
            interact
          </li>
        </ul>
        Give Each Parameter a Value
        <ul>
          <li>
            The trick is to work out which parameters have the most impact on
            the result, and concentrate on getting them about right.
          </li>
        </ul>
        Calculate the Answers
        <ul>
          <li>
            As the system get more complex you'll want to hedge your answers
          </li>
          <li>
            Run multiple calculations, varying the values of the critical
            parameters, until you work out which ones really drive the model.
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter4() {
  return (
    <Chapter idx="4" title="Pragmatic Paranoia">
      <p>
        Design by Contract
        <ul>
          <li>
            Be strict in what you will accept before you begin, and promise as
            little as possible in return
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter5() {
  return (
    <Chapter idx="5" title="Bend, or Break">
      <p>
        Metaprogramming
        <ul>
          <li>Metadata is any data that describes the application</li>
          <li>
            Typically, metadata is accessed and used at <b>runtime</b>, not at
            compile time
          </li>
          <li>
            Metadata can be expressed in a manner that's much closer to the
            problem domain
          </li>
        </ul>
      </p>

      <p>
        Temporal Coupling
        <ul>
          <li>
            Design using services- independet concurrent objects behind
            well-defined, consistent interfaces.
          </li>
          <li>
            Design for concurrency
            <ul>
              <li>Concurrency may reveal time-based dependencies</li>
              <li>
                Any global or static variable must be protected from concurrent
                access
              </li>
              <li>
                Objects must always be in a valid state when called.
                <br />
                Since in a concurrent system the object may be called at any
                time you must ensure that it is in a valid state at all times.
              </li>
            </ul>
          </li>
        </ul>
      </p>

      <p>
        It's Just a View
        <ul>
          <li>
            Event- simply a special message that says "something interesting
            just happened". Signals changes in one object that others might be
            interested in.
            <br />
            Using events in this way minimizes coupling between those objects-
            the sender of the event doesn't need to have any explicit knowledge
            of the receiver.
          </li>
          <li>
            Publish/Subscribe
            <ul>
              <li>
                Objects should be able to register to receive only the events
                they need, and should never be sent events they don't need.
              </li>
              <li>
                Variations on Pub/Sub:
                <ul>
                  <li>Peer-to-peer</li>
                  <li>
                    Software bus- A centralized object maintains the database of
                    listeners and dispatches messages appropriately
                  </li>
                  <li>
                    And others... ex) critical events broadcast to all
                    listeners, whether subscribed or not
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Model-View-Controller
            <ul>
              <li>
                Model- Data itself, with common operations to manipulate it
                <br />
                The abstract data model representing the target object. The
                model has no direct knowledge of any views or controllers.
              </li>
              <li>
                View- Representations of some aspect of the model
                <br />A way to interpret the model. It subscribes to changes in
                the model and logical events from the controller.
              </li>
              <li>
                Controller- Manipulates aspects of the view
                <br />A way to control the view and provide the model with new
                data. It publishes events to both the model and the view.
              </li>
            </ul>
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter6() {
  return (
    <Chapter idx="6" title="While you are coding">
      <p>
        How to Program Deliberately:
        <ul>
          <li>Always be aware of what you are doing.</li>
          <li>
            Don't code blindfolded. Attempting to build an application you don't
            fully understand, or use a technology you aren't familiar with, is
            an invitation to be mislied by coincidences.
          </li>
          <li>Proceed from a plan</li>
          <li>
            Rely only on reliable things. If you aren't sure, assume the worst
          </li>
          <li>Document your assumptions. Design by contract can help.</li>
          <li>Don't just test your code, but test your assumptions as well.</li>
          <li>Prioritize your effort.</li>
          <li>
            Don't be a slave to history. Don't let existing code dictate future
            code. Be ready to refactor.
          </li>
        </ul>
      </p>

      <p>
        Algorithm Speed
        <br />
        Most significant algorithms are not linear.
        <br />
        Good new: Many, like a binary search, are sublinear.
        <br />
        Bad news: Others are considerabbly worse than linear.
        <br />
        The O() Notations
        <ul>
          <li>
            O() notation is a mathematical way of dealing with approximations.
          </li>
          <li>Think of `O` as meaning `order of`</li>
          <li>
            Puts and upper bound on the value of the thing we are measuring.
            <br />
            Something that is O(n^2) at the upper bound will not grow faster
            than n^2
          </li>
          <li>
            Sometimes we come up with fairly complex O() notation functions, but
            because the highest-order term will dominate the value as n
            increases, the conventions is to remove all low-order terms and not
            to bother showing any constant multiplying factors.
            <br />
            O((n^2)/2) {'=>'} O(n^2)
          </li>
          <li>
            This is a weakness of O() notation, one O(n^2) may be 100x faster
            than another, but you won't know it from the notation.
          </li>
        </ul>
        <Image fileName="BigONotation.png" alt="Big O Notation" />
        Common Sense Estimation
        <ul>
          <li>
            Simple loops- ex) max value in array, generating checksums,
            exhaustive searches: O(n)
          </li>
          <li>
            Nested loops- ex) bubble sort (O(n^2)): O(m x N) where m and n are
            the two loops' limits.
          </li>
          <li>
            Binary Chop- ex) binary search of a sorted list, traversing a binary
            tree: O(lg(n))
          </li>
          <li>
            Divide and Conquer- ex) quicksort and other algorithms that
            partition their input, work on the two halves independently, and
            then combine the results O(nlg(n))
          </li>
          <li>
            Combinatoric- ex) traveling salesmen, optimally packed container
            (problems described by factorials)
          </li>
        </ul>
      </p>

      <p>
        Refactoring
        <br />
        <ul>
          <li>
            Though software development often compared to construction, it is
            more like gardening
          </li>
          <li>
            When should you refactor?
            <ul>
              <li>Duplication</li>
              <li>Nonorthogonal design</li>
              <li>Outdated knowledge</li>
              <li>Performance</li>
            </ul>
          </li>
          <li>
            A medical analogy: Think of the code that needs refactoring as a
            "growth". Removing it requires invasive surgery . You can go in now,
            and take it out while it is still small. Or, you could wait while it
            grows and spreads- but removing it will be both more expensive and
            more dangerous.
          </li>
          <li>
            How do you refactor?
            <ul>
              <li>Don't refactor and add functionality at the same time</li>
              <li>
                Make sure you have good tests before refactoring and run them
                often
              </li>
              <li>Take short, deliberate steps.</li>
              <li>
                It can also be helpful to make sure that drastic changes to a
                module- such as altering its interface or its functionality in
                an incompaticle manner- break the build. That is, old clients of
                this code should fail to compile. You can then quickly find the
                old clients and make the necessary changes to bring them up to
                date.
              </li>
            </ul>
          </li>
        </ul>
      </p>

      <p>
        Code That's Easy to Test
        <ul>
          <li>
            Ad Hoc Testing- During debugging, we may end up creating some
            particular tests on-the-fly....
            <br />
            At the end of the debugging session, you need to formalize the ad
            hoc test. If the code broke once, it is likely to break again. Don't
            just throw away the test you created; add it to the existing unit
            test.
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter7() {
  return (
    <Chapter idx="7" title="Before the Project">
      <p>
        Documenting Requirements
        <ul>
          <li>
            <i>use cases</i> to capture requirements
            <ul>
              <li>
                One way of looking at use cases is to emphasize their
                goal-dirven nature
              </li>
            </ul>
            <Image fileName="UseCaseTemplate.jpg" alt="Use Case Template" />
            <Image fileName="UseCaseExample.png" alt="Use Case Example" />
          </li>

          <li>
            Where requirements are concerned, the simplest statement that
            accurately reflects the business need is best.
            <br />
            Requirements are not architecture/design/the user interface.
            Requirements are <i>need</i>.
          </li>

          <li>
            The key to managing growth of requirements is to point out each new
            feature's impact on the schedule to the project sponsors.
            <br />
            ...it can be helpful to have an accurate, complete picture of how,
            and when, requirements growth occured.
          </li>

          <li>
            Maintain a project glossary- one place that defines all the specific
            terms and vocabulary used in a project.
          </li>
        </ul>
      </p>

      <p>
        Solving Impossible Puzzles
        <ul>
          <li>
            The secret to solving the puzzle is to identify the real (not
            imagined) constraints, and find a solution therein.
          </li>
          <li>
            "thinking outside the box" encourages us to recognize constraints
            that might not be applicable and ignore them. But this phrase isn't
            entirely accurate. If the "box" is the boundary of constraints and
            conditions, then the trick is to find the box, which may be
            considerably larger than you think.
          </li>
          <li>
            Categorize and prioritize your constraints. Identify the most
            restrictive constraints first, and fit the remaining constraints
            within them.
          </li>
          <li>
            There must be an easier way!
            <ul>
              <li>Is there an easier way?</li>
              <li>
                Are you trying to solve the right problem, or have you been
                distracted by a peripheral technicality?
              </li>
              <li>Why is this thing a problem?</li>
              <li>What is it that's making it so hard to solve?</li>
              <li>Does it have to be done this way?</li>
              <li>Does it have to be done at all?</li>
            </ul>
          </li>
        </ul>
      </p>

      <p>
        The Specification Trap
        <ul>
          <li>
            Program specification is the process of taking a requirement and
            reducing it donw to the point where a programmer's skill can take
            over. Communicate/explain/clarify the world in sucha a way as to
            remove major ambiguity. A record for future developers and
            maintainers. Codifies user needs and contract that the final system
            will be in line with that requirement.
          </li>
          <li>
            As a pragmatic programmer you should tend to view requirements
            gathering, design, and implementation as different facets of the
            same process- the delivery of a quality system. Distrust
            environments where requirements are gathered, specs written, and
            then coding starts, all in isolation.
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Chapter8() {
  return (
    <Chapter idx="8" title="Pragmatic Projects">
      <p>
        Pragmatic Teams
        <ul>
          <li>
            Quality can come only from the individual contributions of all team
            memebers
          </li>
          <li>
            Monitor the environment for change (scope, time scales, additional
            features, new environments) and keep metrics
          </li>
          <li>
            Communicate- the team as an entity need to communicate clearly with
            the rest of the world.
            <br />
            Generate a team brand to build identity.
          </li>
          <li>
            Don't repeat yourself- Appoint a team librarian or people as focal
            points for various functional aspects of work.
          </li>
          <li>
            Orthogonality- Traditional team organization is based on the
            old-fashioned waterfall method of software construction. Individuals
            are assigned roles based on their job function. We favor splitting
            teams functionally. Divide your people into small teams, each
            responsible for a particular functional aspect of the final system.
            We're looking for cohesive, largely self-contained teams of people.
            <br />
            How does this functional style of organization help? Organize our
            resources using the same techniques we use to organize code
            (contracts, decoupling, orthogonality) and we help isolate the team
            as a whole from the effects of change.
          </li>
          <li>
            Know when to stop adding paint- Give each team memeber the ability
            to shine in his or her own way. Give them just enough structure to
            support them and ensure that the project delivers against its
            requirements
          </li>
        </ul>
      </p>

      <p>
        Ruthless Testing
        <ul>
          <li>
            What to test:
            <ul>
              <li>Unit testing</li>
              <li>Integration testing</li>
              <li>Validation and verification</li>
              <li>Resource exhaustion, errors, and recovery</li>
              <li>Performance testing</li>
              <li>Usability testing</li>
            </ul>
          </li>
          <li>
            How to test:
            <ul>
              <li>Regression testing- Did you break something?</li>
              <li>
                Test data-
                <ul>
                  <li>
                    Real world data- Represents typical user data. The big
                    surprises come as you discover what typical means. This is
                    most likely to reveal defects and misunderstandings in
                    requirement analysis.
                  </li>
                  <li>
                    Synthetic data
                    <ul>
                      <li>
                        You need a lot of data, possibly more than any
                        real-world sample can provide. Might use real data as a
                        seed to generate a larger sample size, and tweak certain
                        fields that need to be unique.
                      </li>
                      <li>Data to stress boundary conditions</li>
                      <li>
                        Data that exhibits certain statistical properties.
                        unsorted/presorted data, failures, etc.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Exercising the GUI systems</li>
              <li>Testing the tests</li>
              <li>
                Testing thoroughly- Test state coverage, not code coverage
              </li>
            </ul>
          </li>
          <li>
            When to test
            <ul>
              <li>As soon as production code exists it needs to be tested.</li>
              <li>Test before checking code into the source repo</li>
              <li>
                Some tests may not be easily run on a frequent baiss. Stress
                tests may require special setup or equipment, and some hand
                holding. These tests may be run less often... but it is
                important that they be run on a regular schedule.
              </li>
            </ul>
          </li>
          <li>
            Tightening the net- Find bugs once. Add a new test with every
            bugfix.
          </li>
        </ul>
      </p>

      <p>
        It's all writing
        <ul>
          <li>
            In general, comments should discuss <i>why</i> something is done...
            code already shows <i>how</i> it is done, so commenting on this is
            redundant- and it is a violation of the DRY principle.
          </li>
        </ul>
      </p>
    </Chapter>
  );
}

function Tips() {
  return (
    <Chapter idx="Appendix" title="Tips For the Pragmatic Programmer">
      <ol>
        <li>
          <b>Care About Your Craft</b>
          <br />
          Why spend your life developing software unless you care about doing it
          well?
        </li>

        <li>
          <b>Think! About Your Work</b>
          <br />
          Turn off the autopilot and take control. Constantly critique and
          appraise your work.
        </li>

        <li>
          <b>Provide Options, Don't Make Lame Excuses</b>
          <br />
          Instead of excuses, provide options. Don't say it can't be done;
          explain what can be done.
        </li>

        <li>
          <b>Don't Live with Broken Windows</b>
          <br />
          Fix bad designs, wrong decisions, and poor code when you see them.
        </li>

        <li>
          <b>Be a Catalyst for Change</b>
          <br />
          You can't force change on people. Instead, show them how the future
          might be and help them participate in creating it.
        </li>

        <li>
          <b>Remember the Big Picture</b>
          <br />
          Don't get so engrossed in the details that you forget to check what's
          happening around you.
        </li>

        <li>
          <b>Make Quality a Requirements Issue</b>
          <br />
          Involve your users in determining the project's real quality
          requirements.
        </li>

        <li>
          <b>Invest Regularly in Your Knowledge Portfolio</b>
          <br />
          Make learning a habit.
        </li>

        <li>
          <b>Critically Analyze What You Read and Hear</b>
          <br />
          Don't be swayed by vendors, media hype, or dogma. Analyze information
          in terms of you and your project.
        </li>

        <li>
          <b>It's Both What You Say and the Way You Say It</b>
          <br />
          There's no point in having great ideas if you don't communicate them
          effectively.
        </li>

        <li>
          <b>DRY–Don't Repeat Yourself</b>
          <br />
          Every piece of knowledge must have a single, unambiguous,
          authoritative representation within a system.
        </li>

        <li>
          <b>Make It Easy to Reuse</b>
          <br />
          If it's easy to reuse, people will. Create an environment that
          supports reuse.
        </li>

        <li>
          <b>Eliminate Effects Between Unrelated Things</b>
          <br />
          Design components that are self-contained. independent, and have a
          single, well-defined purpose.
        </li>

        <li>
          <b>There Are No Final Decisions</b>
          <br />
          No decision is cast in stone. Instead, consider each as being written
          in the sand at the beach, and plan for change.
        </li>

        <li>
          <b>Use Tracer Bullets to Find the Target</b>
          <br />
          Tracer bullets let you home in on your target by trying things and
          seeing how close they land.
        </li>

        <li>
          <b>Prototype to Learn</b>
          <br />
          Prototyping is a learning experience. Its value lies not in the code
          you produce, but in the lessons you learn.
        </li>

        <li>
          <b>Program Close to the Problem Domain</b>
          <br />
          Design and code in your user's language.
        </li>

        <li>
          <b>Estimate to Avoid Surprises</b>
          <br />
          Estimate before you start. You'll spot potential problems up front.
        </li>

        <li>
          <b>Iterate the Schedule with the Code</b>
          <br />
          Use experience you gain as you implement to refine the project time
          scales.
        </li>

        <li>
          <b>Keep Knowledge in Plain Text</b>
          <br />
          Plain text won't become obsolete. It helps leverage your work and
          simplifies debugging and testing.
        </li>

        <li>
          <b>Use the Power of Command Shells</b>
          <br />
          Use the shell when graphical user interfaces don't cut it.
        </li>

        <li>
          <b>Use a Single Editor Well</b>
          <br />
          The editor should be an extension of your hand; make sure your editor
          is configurable, extensible, and programmable.
        </li>

        <li>
          <b>Always Use Source Code Control</b>
          <br />
          Source code control is a time machine for your work—you can go back.
        </li>

        <li>
          <b>Fix the Problem, Not the Blame</b>
          <br />
          It doesn't really matter whether the bug is your fault or someone
          else's—it is still your problem, and it still needs to be fixed.
        </li>

        <li>
          <b>Don't Panic When Debugging</b>
          <br />
          Take a deep breath and THINK! about what could be causing the bug.
        </li>

        <li>
          <b>"select" Isn't Broken.</b>
          <br />
          It is rare to find a bug in the OS or the compiler, or even a
          third-party product or library. The bug is most likely in the
          application.
        </li>

        <li>
          <b>Don't Assume It—Prove It</b>
          <br />
          Prove your assumptions in the actual environment-- with real data and
          boundary conditions.
        </li>

        <li>
          <b>Learn a Text Manipulation Language.</b>
          <br />
          You spend a large part of each day working with text. Why not have the
          computer do some of it for you?
        </li>

        <li>
          <b>Write Code That Writes Code</b>
          <br />
          Code generators increase your productivity and help avoid duplication.
        </li>

        <li>
          <b>You Can't Write Perfect Software</b>
          <br />
          Software can't be perfect. Protect your code and users from the
          inevitable errors.
        </li>

        <li>
          <b>Design with Contracts</b>
          <br />
          Use contracts to document and verify that code does no more and no
          less than it claims to do.
        </li>

        <li>
          <b>Crash Early</b>
          <br />A dead program normally does a lot less damage than a crippled
          one.
        </li>

        <li>
          <b>Use Assertions to Prevent the Impossible</b>
          <br />
          Assertions validate your assumptions. Use them to protect your code
          from an uncertain world.
        </li>

        <li>
          <b>Use Exceptions for Exceptional Problems</b>
          <br />
          Exceptions can suffer from all the readability and maintainability
          problems of classic spaghetti code. Reserve exceptions for exceptional
          things.
        </li>

        <li>
          <b>Finish What You Start</b>
          <br />
          Where possible, the routine or object that allocates a resource should
          be responsible for deallocating it.
        </li>

        <li>
          <b>Minimize Coupling Between Modules</b>
          <br />
          Avoid coupling by writing "shy" code and applying the Law of Demeter.
        </li>

        <li>
          <b>Configure, Don't Integrate</b>
          <br />
          Implement technology choices for an application as configuration
          options, not through integration or engineering.
        </li>

        <li>
          <b>Put Abstractions in Code, Details in Metadata</b>
          <br />
          Program for the general case, and put the specifics outside the
          compiled code base.
        </li>

        <li>
          <b>Analyze Workflow to Improve Concurrency</b>
          <br />
          Exploit concurrency in your user's workflow.
        </li>

        <li>
          <b>Design Using Services</b>
          <br />
          Design in terms of services—independent, concurrent objects behind
          well-defined, consistent interfaces.
        </li>

        <li>
          <b>Always Design for Concurrency</b>
          <br />
          Allow for concurrency, and you'll design cleaner interfaces with fewer
          assumptions.
        </li>

        <li>
          <b>Separate Views from Models</b>
          <br />
          Gain flexibility at low cost by designing your application in terms of
          models and views.
        </li>

        <li>
          <b>Use Blackboards to Coordinate Workflow</b>
          <br />
          Use blackboards to coordinate disparate facts and agents, while
          maintaining independence and isolation among participants.
        </li>

        <li>
          <b>Don't Program by Coincidence</b>
          <br />
          Rely only on reliable things. Beware of accidental complexity, and
          don't confuse a happy coincidence with a purposeful plan.
        </li>

        <li>
          <b>Estimate the Order of Your Algorithms</b>
          <br />
          Get a feel for how long things are likely to take before you write
          code.
        </li>

        <li>
          <b>Test Your Estimates</b>
          <br />
          Mathematical analysis of algorithms doesn't tell you everything. Try
          timing your code in its target environment.
        </li>

        <li>
          <b>Refactor Early, Refactor Often</b>
          <br />
          Just as you might weed and rearrange a garden, rewrite, rework, and
          re-architect code when it needs it. Fix the root of the problem.
        </li>

        <li>
          <b>Design to Test</b>
          <br />
          Start thinking about testing before you write a line of code.
        </li>

        <li>
          <b>Test Your Software, or Your Users Will</b>
          <br />
          Test ruthlessly. Don't make your users find bugs for you.
        </li>

        <li>
          <b>Don't Use Wizard Code You Don't Understand</b>
          <br />
          Wizards can generate reams of code. Make sure you understand all of it
          before you incorporate it into your project.
        </li>

        <li>
          <b>Don't Gather Requirements–Dig for Them</b>
          <br />
          Requirements rarely lie on the surface. They're buried deep beneath
          layers of assumptions, misconceptions, and politics.
        </li>

        <li>
          <b>Workwith a User to Think Like a User</b>
          <br />
          It's the best way to gain insight into how the system will really be
          used.
        </li>

        <li>
          <b>Abstractions Live Longer than Details</b>
          <br />
          Invest in the abstraction, not the implementation. Abstractions can
          survive the barrage of changes from different implementations and new
          technologies.
        </li>

        <li>
          <b>Use a Project Glossary</b>
          <br />
          Create and maintain a single source of all the specific terms and
          vocabulary for a project.
        </li>

        <li>
          <b>Don't Think Outside the Box–Find the Box</b>
          <br />
          When faced with an impossible problem, identify the real constraints.
          Ask yourself: "Does it have to be done this way? Does it have to be
          done at all?"
        </li>

        <li>
          <b>Start When You're Ready.</b>
          <br />
          You've been building experience all your life. Don't ignore niggling
          doubts.
        </li>

        <li>
          <b>Some Things Are Better Done than Described</b>
          <br />
          Don't fall into the specification spiral—at some point you need to
          start coding.
        </li>

        <li>
          <b>Don't Be a Slave to Formal Methods.</b>
          <br />
          Don't blindly adopt any technique without putting it into the context
          of your development practices and capabilities.
        </li>

        <li>
          <b>Costly Tools Don't Produce Better Designs</b>
          <br />
          Beware of vendor hype, industry dogma, and the aura of the price tag.
          Judge tools on their merits.
        </li>

        <li>
          <b>Organize Teams Around Functionality</b>
          <br />
          Don't separate designers from coders, testers from data modelers.
          Build teams the way you build code.
        </li>

        <li>
          <b>Don't Use Manual Procedures</b>
          <br />A shell script or batch file will execute the same instructions,
          in the same order, time after time.
        </li>

        <li>
          <b>Test Early. Test Often. Test Automatically</b>
          <br />
          Tests that run with every build are much more effective than test
          plans that sit on a shelf.
        </li>

        <li>
          <b>Coding Ain't Done 'Til All the Tests Run</b>
          <br />
          'Nuff said.
        </li>

        <li>
          <b>Use Saboteurs to Test Your Testing</b>
          <br />
          Introduce bugs on purpose in a separate copy of the source to verify
          that testing will catch them.
        </li>

        <li>
          <b>Test State Coverage, Not Code Coverage</b>
          <br />
          Identify and test significant program states. Just testing lines of
          code isn't enough.
        </li>

        <li>
          <b>Find Bugs Once</b>
          <br />
          Once a human tester finds a bug, it should be the last time a human
          tester finds that bug. Automatic testsshould check for it from then
          on.
        </li>

        <li>
          <b>English is Just a Programming Language</b>
          <br />
          Write documents as you would write code: honor the DRY principle, use
          metadata, MVC, automatic generation, and so on.
        </li>

        <li>
          <b>Build Documentation In, Don't Bolt It On</b>
          <br />
          Documentation created separately from code is less likely to be
          correct and up to date.
        </li>

        <li>
          <b>Gently Exceed Your Users' Expectations</b>
          <br />
          Come to understand your users' expectations, then deliver just that
          little bit more.
        </li>

        <li>
          <b>Sign Your Work</b>
          <br />
          Craftsmen of an earlier age were proud to sign their work. You should
          be, too.
        </li>
      </ol>
    </Chapter>
  );
}

function PragmaticProgrammer() {
  return (
    <MoreAboutLayout title="Pragmatic Programmer Notes">
      <div className="inconsolata gray textHeight-regular">
        <h2>
          The Pragmatic Programmer:
          <br />
          From Journeyman to Master
        </h2>
        <h4>By Andrew Hunt and David Thomas</h4>
        <br />
        <h3>Notes:</h3>
        <Box marginStart={8}>
          <Chapter0 />
          <Chapter1 />
          <Chapter2 />
          <Chapter4 />
          <Chapter5 />
          <Chapter6 />
          <Chapter7 />
          <Chapter8 />
          <Tips />
        </Box>
      </div>
    </MoreAboutLayout>
  );
}

export default PragmaticProgrammer;
