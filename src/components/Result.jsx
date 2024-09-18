const Result = ({ srcDoc }) => {
  return (
    <div className="h-[50vh]"> {/* Adjust height as needed */}
      <h2 className="text-white mb-2">Result</h2> {/* Added margin-bottom for spacing */}
      <iframe
        srcDoc={srcDoc} // Correctly use srcDoc for inline HTML
        title="Output"
        sandbox="allow-scripts"
        className="w-full h-full bg-white border border-green-900" // Tailwind classes for width, height, background color, and border
      />
    </div>
  );
};

export default Result;
