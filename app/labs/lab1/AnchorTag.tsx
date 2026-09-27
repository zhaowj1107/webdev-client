export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/zhaowj1107/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link">
        MDN: table element
      </a>
      <br />
      <a href="https://www.hupu.com" id="wd-your-link">
        Hupu News
      </a>
      <br />
      <a
        href="https://github.com/zhaowj1107"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
    </>
  );
}
