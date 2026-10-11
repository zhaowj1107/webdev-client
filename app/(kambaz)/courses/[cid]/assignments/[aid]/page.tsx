import Link from "next/link";
const input = "w-full rounded border border-neutral-300 px-3 py-2 font-sans";
const rowLabel = "pt-2 md:w-48 md:shrink-0 md:text-right";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-4`} />
      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-4`}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
      />

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={input} />
      </div>

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <label htmlFor="wd-group" className={rowLabel}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <label htmlFor="wd-display-grade-as" className={rowLabel}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <label htmlFor="wd-submission-type" className={rowLabel}>
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <div className={rowLabel}>Assign</div>
        <div className="w-full rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" className={`${input} mb-4`} />
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className={input}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className={input}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="mb-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
