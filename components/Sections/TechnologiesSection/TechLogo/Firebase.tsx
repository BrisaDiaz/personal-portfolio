export default function Firebase() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 351"
    >
      <defs>
        <filter
          id="a"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="17.5"
          ></feGaussianBlur>
          <feOffset
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          ></feColorMatrix>
        </filter>
        <filter
          id="b"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="3.5"
          ></feGaussianBlur>
          <feOffset
            dx="1"
            dy="-9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <path
        fill="#FFC24A"
        d="M0 283l2.1-3L102.5 89.5l.2-2L58.5 4.4A8.2 8.2 0 0043 7L0 283z"
      ></path>
      <use fill="#FFA712"></use>
      <use filter="url(#a)"></use>
      <path
        fill="#F4BD62"
        d="M135 150.4l33-33.8-33-62.9c-3.1-6-11.9-6-15 0l-17.6 33.6V90l32.6 60.3z"
      ></path>
      <use fill="#FFA50E"></use>
      <use filter="url(#b)"></use>
      <path
        fill="#F6820C"
        d="M0 283l1-1 3.5-1.4 128.4-128 1.7-4.4-32-61.1z"
      ></path>
      <path
        fill="#FDE068"
        d="M139.1 347.6l116.3-64.9-33.2-204.5a8 8 0 00-13.5-4.3L0 283l115.6 64.5a24.1 24.1 0 0023.5 0"
      ></path>
      <path
        fill="#FCCA3F"
        d="M254.4 282.2l-33-203c-1-6.3-7.6-9-12.1-4.4L1.3 282.6l114.3 64a24 24 0 0023.4 0l115.4-64.4z"
      ></path>
      <path
        fill="#EEAB37"
        d="M139.1 345.6a24.1 24.1 0 01-23.5 0L1 282l-.9 1 115.6 64.5a24.1 24.1 0 0023.5 0l116.3-64.8-.3-1.7-116 64.6z"
      ></path>
    </svg>
  );
}
