export default function Layout(props) {
  return (
    <div className="bg-white max-w-screen-xl mx-auto h-screen">
      <span>JavaScripture</span>
      {props.children}
    </div>
  );
}
