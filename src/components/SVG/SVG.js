import "./SVG.css";
const SVG = () => {
  return (
    <div class="svg-container">
      <svg viewbox="0 0 800 400" class="svg">
        <path
          id="curve"
          fill="#50c6d8"
          d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
        ></path>
      </svg>
    </div>
  );
};

export default SVG;
