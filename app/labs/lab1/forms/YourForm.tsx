"use client";
export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Weijian" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Zhao" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input id="wd-your-password" type="password" placeholder="password" />
      <br />

      <h5>Textarea</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I want to learn how to build and deploy a full-stack web application with Next.js, Node.js, and MongoDB."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="radio-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="radio-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Checkboxes</h5>
      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-your-frontend" defaultChecked />
      <label htmlFor="wd-your-frontend">Front-end development</label>
      <br />
      <input type="checkbox" id="wd-your-backend" defaultChecked />
      <label htmlFor="wd-your-backend">Back-end development</label>
      <br />
      <input type="checkbox" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <input type="checkbox" id="wd-your-ai" defaultChecked />
      <label htmlFor="wd-your-ai">AI applications</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "MONGODB"]}
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS and Tailwind</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js and Express</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <h5>Typed fields</h5>
      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="zhao.weij@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-graduation">Expected graduation year:</label>
      <input
        id="wd-your-graduation"
        type="number"
        min={2026}
        max={2032}
        defaultValue={2027}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input id="wd-your-start-date" type="date" defaultValue="2025-09-03" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0-10):
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min={0}
        max={10}
        defaultValue={9}
      />
      <br />

      <h5>Buttons</h5>
      <button id="wd-your-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
