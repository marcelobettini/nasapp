import React from "react";

const MEP3 = () => {
  return (
    <div>
      <h4>ORGANIZATION</h4>
      <p>
        In 1994, NASA announced the start of the Mars Exploration Program (MEP),
        initially called the Mars Surveyor Program. NASA assigned the lead role
        for MEP implementation to the Jet Propulsion Laboratory (JPL). MEP
        explores Mars on behalf of NASA’s Science Mission Directorate (SMD). MEP
        currently operates rovers and orbiters on and around Mars, contributes
        to Mars missions conducted by national and international partners, and
        is formulating and developing future rover and orbiter missions.
        Scientific data and associated information for all MEP missions are
        archived in the NASA Planetary Data System. Organized programmatically,
        MEP missions mutually support each other in three key aspects:
      </p>

      <ol>
        <li>
          Scientific discoveries by one mission can drive the formulation of the
          scientific focus of future missions. Acquired data provides crucial
          information for the execution of future missions. For example, orbiter
          missions provide data for characterizing and certifying candidate
          landing sites for future missions, while landed assets provide ground
          truth and detailed context for orbital remote-sensing results.
          Scientific observations from landed assets are interpreted and placed
          into a broader context using research results from other areas of the
          planet, which help inform our understanding of Mars as a system.
        </li>
        <li>
          {" "}
          MEP missions develop and demonstrate engineering capability as
          feed-forward to enable future missions (e.g., entry-descent-landing
          capabilities).
        </li>
        <li>
          MEP orbiters enhance the scientific return of landed missions by
          serving as telecommunication relays for those missions, enabling
          significant increases in data return.
        </li>
      </ol>
    </div>
  );
};

export default MEP3;
