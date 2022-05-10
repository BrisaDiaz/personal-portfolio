import React from "react";

export default function Avatar() {
  const [isHover, setIsHover] = React.useState(false);
  const [faceType, setFaceType] = React.useState("default");
  React.useEffect(() => {
    if (isHover) {
      setFaceType("smiling");
      setTimeout(() => {
        setFaceType("winking");
        isHover &&
          setTimeout(() => {
            setFaceType("smiling");
          }, 1000);
      }, 1000);

      return;
    }
    return setFaceType("neutral");
  }, [isHover]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="264"
      height="300"
      onMouseMove={(e) => setIsHover(true)}
      onTouchMove={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      onTouchEnd={(e) => setIsHover(false)}
    >
      <defs>
        <path
          d="M12 160c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0H0v160h12Z"
          id="c"
        />
        <path
          d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73Z"
          id="e"
        />
        <circle id="a" cx="120" cy="120" r="120" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(12 40)">
          <mask id="b" fill="var(--high-contrast-color)">
            <use xlinkHref="#a" />
          </mask>
          <use
            fill="var(--high-contrast-color)"
            xlinkHref="#a"
            stroke="var(--high-contrast-color)"
          />
          <g mask="url(#b)" fill="var(--high-contrast-color)">
            <path d="M0 0h240v240H0z" />
          </g>
        </g>
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <g mask="url(#d)">
          <g transform="translate(32 36)">
            <mask id="f" fill="#fff">
              <use xlinkHref="#e" />
            </mask>
            <use fill="#D0C6AC" xlinkHref="#e" />
            <g mask="url(#f)" fill="#EDB98A">
              <path d="M0 0h264v280H0z" />
            </g>
            <path
              d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79Z"
              fillOpacity=".1"
              fill="#000"
              mask="url(#f)"
            />
          </g>
          <g xmlns="http://www.w3.org/2000/svg" transform="translate(0 170)">
            <defs>
              <path
                d="M108 13.07c-17.919 2.006-31.72 7.482-31.996 21.575C50.146 45.568 32 71.165 32 100.999V110h200v-9c0-29.835-18.146-55.432-44.004-66.355-.276-14.093-14.077-19.57-31.996-21.574V32c0 13.255-10.745 24-24 24s-24-10.745-24-24V13.07Z"
                id="g"
              />
            </defs>
            <mask id="h" fill="#fff">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#g" />
            </mask>
            <use
              fill="#B7C1DB"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#g"
            />
            <g mask="url(#h)" fill="var(--primary-main)">
              <path d="M0 0h264v110H0z" />
            </g>
            <path
              d="M102 61.74V110h-7V58.15a64.54 64.54 0 0 0 7 3.59Zm67-3.59V98.5a3.5 3.5 0 1 1-7 0V61.74a64.54 64.54 0 0 0 7-3.59Z"
              fill="#F4F4F4"
              mask="url(#h)"
            />
            <path
              d="M90.96 12.724C75.91 15.571 65.5 21.243 65.5 32.308 65.5 52.02 98.538 68 132 68s66.5-15.98 66.5-35.692c0-11.065-10.41-16.737-25.46-19.584 9.085 3.35 14.96 8.982 14.96 18.353C188 51.469 160.179 68 132 68S76 51.469 76 31.077c0-9.37 5.875-15.003 14.96-18.353Z"
              fillOpacity=".16"
              fill="#000"
              mask="url(#h)"
            />
          </g>
          <AvatarFace type={faceType} />
          <defs>
            <path id="i" d="M0 0h264v280H0z" />
            <path
              d="M133.506 81.335A12 12 0 0 1 140 92v13c0 6.019-4.43 11.002-10.209 11.867-1.743 20.248-14.26 37.416-31.791 45.744V181h4c17.49 0 33.525 6.237 46 16.608V74c0-20.435-8.283-38.935-21.674-52.326C112.935 8.283 94.435 0 74 0 33.13 0 0 33.13 0 74v183.716c13.57-1.94 24-13.61 24-27.716v-45.577A71.954 71.954 0 0 1 46 181h4v-18.389a56.234 56.234 0 0 1-26-25.365v-61.98c9.147-2.975 18.778-7.249 28.342-12.77 15.403-8.894 28.09-19.555 36.724-30.099a86.921 86.921 0 0 0 7.044 15.488c8.768 15.186 21.114 26.349 33.89 32.032v.249c.4.067.794.154 1.18.26.775.323 1.55.626 2.326.91Z"
              id="k"
            />
          </defs>
          <mask id="j" fill="#fff">
            <use xlinkHref="#i" />
          </mask>
          <g mask="url(#j)">
            <g transform="translate(58 18)">
              <mask id="l" fill="#fff">
                <use xlinkHref="#k" />
              </mask>
              <use fill="#944F23" xlinkHref="#k" />
              <g mask="url(#l)" fill="#2C1B18">
                <path d="M0 0h264v280H0z" />
              </g>
            </g>
            <path
              d="M191.506 99.335c4.869 1.773 9.757 2.737 14.494 2.813V92c0-20.435-8.283-38.935-21.674-52.326C197.717 53.065 206 71.565 206 92v123.608C193.525 205.237 177.49 199 160 199h-4v-18.389c17.53-8.328 30.048-25.496 31.791-45.744C193.57 134.002 198 129.02 198 123v-13a12 12 0 0 0-6.494-10.665Zm-2.326-.91c-.386-.105-.78-.192-1.18-.26v-.248c.393.175.786.344 1.18.509ZM82 155.246a56.234 56.234 0 0 0 26 25.366V199h-4c-7.673 0-15.065 1.2-22 3.423v-47.177Z"
              fillOpacity=".24"
              fill="#000"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function AvatarFace({ type }: { type: string }) {
  return type === "winking" ? (
    <g xmlns="http://www.w3.org/2000/svg" fill="#000">
      <path
        d="M118 149c0 7.732 6.268 14 14 14s14-6.268 14-14"
        fillOpacity=".7"
      />
      <path d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8" fillOpacity=".16" />
      <g transform="translate(76 90)" fillOpacity=".6">
        <circle cx="30" cy="22" r="6" />
        <path d="M70.61 24.955c1.577-3.918 5.54-6.85 10.36-7.188 4.805-.335 9.124 1.999 11.24 5.637.627 1.081-.091 2.052-.928 1.428-2.592-1.93-6.156-3-10.008-2.731-3.731.26-7.02 1.729-9.312 3.887-.838.789-1.814.113-1.352-1.033Z" />
      </g>
      <g fillRule="nonzero" fillOpacity=".6">
        <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 0 0 .954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 0 0 3.26 2.318ZM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 0 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z" />
      </g>
    </g>
  ) : type === "smiling" ? (
    <g xmlns="http://www.w3.org/2000/svg" fill="#000">
      <path
        d="M118 149c0 7.732 6.268 14 14 14s14-6.268 14-14"
        fillOpacity=".7"
      />
      <path d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8" fillOpacity=".16" />
      <g fillOpacity=".6">
        <path d="M92.16 112.447c1.847-3.798 6.004-6.447 10.838-6.447 4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125ZM150.16 112.447c1.847-3.798 6.004-6.447 10.838-6.447 4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125Z" />
      </g>
      <g fillRule="nonzero" fillOpacity=".6">
        <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 0 0 .954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 0 0 3.26 2.318ZM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 0 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z" />
      </g>
    </g>
  ) : (
    <g fill="#000">
      <path
        d="M118 149c0 7.732 6.268 14 14 14s14-6.268 14-14"
        fillOpacity=".7"
      ></path>
      <path
        d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8"
        fillOpacity=".16"
      ></path>
      <g transform="translate(76 90)" fillOpacity=".6">
        <circle cx="30" cy="22" r="6"></circle>
        <circle cx="82" cy="22" r="6"></circle>
      </g>
      <g fillRule="nonzero" fillOpacity=".6">
        <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 0 0 .954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 0 0 3.26 2.318ZM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 0 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z"></path>
      </g>
    </g>
  );
}
