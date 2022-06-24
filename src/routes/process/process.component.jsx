import "./process.component.scss";
import apnote from "../../assets/ap-note.png";
import aparrow from "../../assets/ap-note-arrow.png";
import oneimg from "../../assets/one.png";
import oneh from "../../assets/one-h.png";
import twoimg from "../../assets/two.png";
import threeimg from "../../assets/three.png";
import threeh from "../../assets/three-h.png";

const Process = () => {
  return (
    <div className="process">
      <h1>Project guidelines</h1>
      <div className="underline"></div>
      <p className="p1">Anyone is welcome to apply for a grant. Projects funded through our programs are broad in scope, but our focus lies on strong technical projects that add value to the ecosystem.</p>
      <div className="top-cards">
        <div className="card" data-aos="zoom-in">
          <h4>Better chances of acceptance</h4>
          <ul>
            <li>It presents a well-researched or tested concept for which ideally you are able to show some prior work.</li>
            <li>Demonstrate that the project will be maintained after completion of the grant.</li>
            <li>Your team has proven experience with the relevant languages and technologies and/or a strong technical background.</li>
            <li>Your application is rich in technical details and well-defined.</li>
            <li>You can clearly present how your project stands out among competitors or implements technology that doesn't exist in the ecosystem yet.</li>
          </ul>
        </div>
        <div className="card" data-aos="zoom-in">
          <h4>Additional requirements</h4>
          <ul>
            <li>All code produced as part of a grant must be open-sourced, and it must also not rely on closed-source software for full functionality.</li>
            <li>We do not award grants for projects that have been the object of a successful token sale.</li>
            <li>As a general rule, teams are asked to finish a grant before applying for another one.</li>
            <li>We require all projects to create documentation that explains how their project works. Tutorials or videos are also helpful for new users to understand how to use your product.</li>
          </ul>
        </div>
      </div>
      <p className="p2">
        We take licensing and the right of all teams in and outside the ecosystem to be recognised for their work very seriously. Using others' work with no attribution or indication that this was not your own work as part of a milestone delivery
        will lead to immediate termination. Please reach out to us before submitting if you have any doubts on how to comply with a specific license and we'll be happy to help.
      </p>
      <h1>Application Process</h1>
      <div className="underline"></div>
      <div className="ap-top">
        <img alt="loading" src={apnote} className="noteimg" />
        <img alt="loading" src={aparrow} className="arrowimg" />
        <p className="note">Note:</p>
        <p className="p3">
          The process below is independent of the level. Payment is made in Bitcoin, USDT, USDC, DAI or aUSD. If you want to apply in private and/or you need to be paid out in fiat, you can apply here. Note that this is generally a slower process and
          imposes stricter requirements on applicants.
        </p>
      </div>
      <div className="ap">
        <div className="apin" data-aos="zoom-in-right" data-aos-duration="500">
          <div className="ap-content">
            <p>1. Fork the GitHub repository.</p>
            <p>
              2. In the newly created fork, create a copy of the application template (applications/application-template.md). If you're using the GitHub web interface, you will need to create a new file and copy the contents of the template inside
              the new one. Make sure you do not modify the template file directly. In the case of a maintenance application, use the maintenance template (maintenance template) instead.
            </p>
            <p>3. Name the new file after your project: project_name.md.</p>
            <p>
              4. Fill out the template with the details of your project. The more information you provide, the faster the review. Please refer to our Grant guidelines for most popular grant categories and make sure your deliverables present a similar
              same level of detail.
            </p>
            <p>5. Once you're done, create a pull request. The pull request should only contain one new file—the Markdown file you created from the template.</p>
            <p>6. You will see a comment template that contains a checklist. You can leave it as is and tick the checkboxes once the pull request has been created. Please read through these items and check all of them.</p>
            <p>7. Sign off on the terms and conditions presented by the CLA assistant bot as a Contributor License Agreement. You might need to reload the pull request to see its comment.</p>
          </div>
          <div className="ap-img-container">
            <img alt="loading" className="ap-img" src={oneimg} />
            <div className="no-header1">
              <img alt="loading" src={oneh}></img>
              <p>Application</p>
            </div>
          </div>
        </div>
        <div className="connector"></div>
        <div className="apin ap2" data-aos="zoom-in-left" data-aos-duration="500">
          <div className="ap-img-container">
            <img alt="loading" className="ap-img two-img" src={twoimg} />
            <div className="no-header2">
              <img alt="loading" src={oneh}></img>
              <p>Application Review</p>
            </div>
          </div>
          <div className="ap-content">
            <p>1. The committee can (and usually does) issue comments and request changes on the pull request.</p>
            <p>
              2. Clarifications and amendments made in the comments need to be included in the application. You may address feedback by directly modifying your application and leaving a comment once you're done. Generally, if you don't reply within 2
              weeks, the application will be closed due to inactivity, but you're always free to reopen it as long as it hasn't been rejected.
            </p>
            <p>3. When all requested changes are addressed and the terms and conditions have been signed, someone will mark your application as ready for review and share it internally with the rest of the committee.</p>
            <p>
              4. The application will be accepted and merged as soon as it receives the required number of approvals (see levels), or closed after two weeks of inactivity. Unless specified otherwise, the day on which it is accepted will be considered
              the starting date of the project, and will be used to estimate delivery dates.
            </p>
          </div>
        </div>
        <div className="connector con2"></div>
        <div className="apin" data-aos="zoom-in-right" data-aos-duration="500">
          <div className="ap-content">
            <p>Milestones are to be delivered on the Grant Milestone Delivery repository following the process described therein.</p>
          </div>

          <div className="ap-img-container three-img">
            <img alt="loading" className="ap-img" src={threeimg} />
            <div className="no-header3">
              <img alt="loading" src={threeh}></img>
              <p>Milestone delivery & payment</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="h1-2">Changes to a Grant after Approval</h1>
      <div className="underline2"></div>
      <ul className="p-bottom">
        <li>
          Accepted grant applications can be amended at any time. However, this necessitates a reevaluation by the committee and the same number of approvals as an application (according to the levels). If your application has been accepted and,
          during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application. This also applies in case of significant delays.
        </li>
        <li>If your delivery schedule significantly changes, please also open a pull request with an updated timeline.</li>
        <li>
          If your deliveries are significantly delayed and we cannot get a hold of you, we will terminate the grant (3 approvals required, regardless of level. If a member of the committee creates the termination PR, only 2 more approvals are
          required).
        </li>
      </ul>
    </div>
  );
};

export default Process;
