import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { FaChartSimple, FaBullhorn, FaChartLine, FaBell } from "react-icons/fa6";
const fullWidthButton =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={fullWidthButton}>
        <BiImport className="me-2 text-base" /> Import Existing Content
      </button>
      <button type="button" className={fullWidthButton}>
        <LiaFileImportSolid className="me-2 text-base" /> Import from Commons
      </button>
      <button type="button" className={fullWidthButton}>
        <IoHomeOutline className="me-2 text-base" /> Choose Home Page
      </button>
      <button type="button" className={fullWidthButton}>
        <FaChartSimple className="me-2 text-base" /> View Course Stream
      </button>
      <button type="button" className={fullWidthButton}>
        <FaBullhorn className="me-2 text-base" /> New Announcement
      </button>
      <button type="button" className={fullWidthButton}>
        <FaChartLine className="me-2 text-base" /> New Analytics
      </button>
      <button type="button" className={fullWidthButton}>
        <FaBell className="me-2 text-base" /> View Course Notifications
      </button>
    </div>
  );
}
