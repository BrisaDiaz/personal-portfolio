export default function SVG({
  name,
  color,
  bg,
  width,
  height,
}: {
  name: string;
  color?: string;
  bg?: string;
  height?: number;
  width?: number;
}) {
  return name === "address-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill={bg || "#3F3D56"}
      />
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill={bg || "#3F3D56"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6874 11.7706C17.4225 9.03556 21.132 7.49902 24.9999 7.49902C28.8679 7.49902 32.5774 9.03556 35.3124 11.7706C38.0475 14.5056 39.584 18.2152 39.584 22.0831C39.584 25.9511 38.0475 29.6606 35.3124 32.3956L24.9999 42.7081L14.6874 32.3956C13.3331 31.0413 12.2587 29.4337 11.5258 27.6642C10.7928 25.8948 10.4155 23.9983 10.4155 22.0831C10.4155 20.1678 10.7928 18.2713 11.5258 16.502C12.2587 14.7326 13.3331 13.1248 14.6874 11.7706ZM24.9999 26.2497C26.105 26.2497 27.1648 25.8108 27.9463 25.0293C28.7276 24.248 29.1666 23.1882 29.1666 22.0831C29.1666 20.9781 28.7276 19.9182 27.9463 19.1368C27.1648 18.3555 26.105 17.9165 24.9999 17.9165C23.8949 17.9165 22.835 18.3555 22.0536 19.1368C21.2723 19.9182 20.8333 20.9781 20.8333 22.0831C20.8333 23.1882 21.2723 24.248 22.0536 25.0293C22.835 25.8108 23.8949 26.2497 24.9999 26.2497Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "email-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill={bg || "#3F3D56"}
      />
      <path
        d="M8.33984 16.425L25.0003 24.7541L41.6607 16.425C41.599 15.3634 41.1338 14.3656 40.3603 13.6359C39.5868 12.9061 38.5637 12.4998 37.5003 12.5H12.5003C11.4369 12.4998 10.4137 12.9061 9.64022 13.6359C8.86674 14.3656 8.40152 15.3634 8.33984 16.425Z"
        fill={color || "white"}
      />
      <path
        d="M41.6668 21.0791L25.0002 29.4125L8.3335 21.0791V33.3334C8.3335 34.4384 8.77248 35.4982 9.55388 36.2796C10.3353 37.061 11.3951 37.5 12.5002 37.5H37.5002C38.6052 37.5 39.6651 37.061 40.4464 36.2796C41.2278 35.4982 41.6668 34.4384 41.6668 33.3334V21.0791Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "birthday-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill={bg || "#3F3D56"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6668 8.75033C16.6668 8.19779 16.8863 7.66789 17.277 7.27719C17.6677 6.88649 18.1976 6.66699 18.7502 6.66699H18.771C19.3236 6.66699 19.8535 6.88649 20.2441 7.27719C20.6348 7.66789 20.8543 8.19779 20.8543 8.75033C20.8543 9.30287 20.6348 9.83277 20.2441 10.2235C19.8535 10.6142 19.3236 10.8337 18.771 10.8337H18.7502C18.1976 10.8337 17.6677 10.6142 17.277 10.2235C16.8863 9.83277 16.6668 9.30287 16.6668 8.75033ZM20.8335 15.0004C20.8335 14.4479 20.614 13.9179 20.2233 13.5272C19.8326 13.1365 19.3027 12.917 18.7502 12.917C18.1976 12.917 17.6677 13.1365 17.277 13.5272C16.8863 13.9179 16.6668 14.4479 16.6668 15.0004V17.0836C15.5617 17.0836 14.502 17.5226 13.7206 18.3041C12.9391 19.0855 12.5002 20.1452 12.5002 21.2504V23.3336C11.3951 23.3336 10.3353 23.7726 9.55388 24.5541C8.77248 25.3355 8.3335 26.3952 8.3335 27.5004V28.9232C9.11475 29.1422 9.85651 29.4832 10.5314 29.9336C11.1145 30.3222 11.7995 30.5296 12.5002 30.5296C13.2008 30.5296 13.8858 30.3222 14.469 29.9336C15.7367 29.0882 17.2263 28.6371 18.7502 28.6371C20.274 28.6371 21.7636 29.0882 23.0315 29.9336C23.6145 30.3222 24.2995 30.5296 25.0002 30.5296C25.7008 30.5296 26.3858 30.3222 26.969 29.9336C28.2367 29.0882 29.7263 28.6371 31.2502 28.6371C32.774 28.6371 34.2636 29.0882 35.5315 29.9336C36.1145 30.3222 36.7995 30.5296 37.5002 30.5296C38.2008 30.5296 38.8858 30.3222 39.469 29.9336C40.1438 29.4832 40.8856 29.1422 41.6668 28.9232V27.5004C41.6668 26.3952 41.2278 25.3355 40.4465 24.5541C39.6651 23.7726 38.6052 23.3336 37.5002 23.3336V21.2504C37.5002 20.1452 37.0612 19.0855 36.2797 18.3041C35.4983 17.5226 34.4386 17.0836 33.3335 17.0836V15.0004C33.3335 14.4479 33.114 13.9179 32.7233 13.5272C32.3326 13.1365 31.8027 12.917 31.2502 12.917C30.6976 12.917 30.1677 13.1365 29.777 13.5272C29.3863 13.9179 29.1668 14.4479 29.1668 15.0004V17.0836H27.0835V15.0004C27.0835 14.4479 26.864 13.9179 26.4733 13.5272C26.0826 13.1365 25.5527 12.917 25.0002 12.917C24.4476 12.917 23.9177 13.1365 23.527 13.5272C23.1363 13.9179 22.9168 14.4479 22.9168 15.0004V17.0836H20.8335V15.0004ZM41.6668 33.4754C40.4038 34.2855 38.9321 34.71 37.4317 34.6966C35.9312 34.6832 34.4673 34.2329 33.219 33.4004C32.6358 33.0117 31.9508 32.8044 31.2502 32.8044C30.5495 32.8044 29.8645 33.0117 29.2815 33.4004C28.0136 34.2457 26.524 34.6969 25.0002 34.6969C23.4763 34.6969 21.9867 34.2457 20.719 33.4004C20.1358 33.0117 19.4508 32.8044 18.7502 32.8044C18.0495 32.8044 17.3645 33.0117 16.7815 33.4004C15.5331 34.2329 14.0691 34.6832 12.5686 34.6966C11.0682 34.71 9.59645 34.2855 8.3335 33.4754V37.917C8.3335 38.4695 8.55298 38.9995 8.94368 39.3901C9.33438 39.7809 9.8643 40.0004 10.4168 40.0004H39.5835C40.1361 40.0004 40.666 39.7809 41.0566 39.3901C41.4473 38.9995 41.6668 38.4695 41.6668 37.917V33.4754ZM22.9168 8.75033C22.9168 8.19779 23.1363 7.66789 23.527 7.27719C23.9177 6.88649 24.4476 6.66699 25.0002 6.66699H25.021C25.5736 6.66699 26.1035 6.88649 26.4941 7.27719C26.8848 7.66789 27.1043 8.19779 27.1043 8.75033C27.1043 9.30287 26.8848 9.83277 26.4941 10.2235C26.1035 10.6142 25.5736 10.8337 25.021 10.8337H25.0002C24.4476 10.8337 23.9177 10.6142 23.527 10.2235C23.1363 9.83277 22.9168 9.30287 22.9168 8.75033ZM29.1668 8.75033C29.1668 8.19779 29.3863 7.66789 29.777 7.27719C30.1677 6.88649 30.6976 6.66699 31.2502 6.66699H31.271C31.8236 6.66699 32.3535 6.88649 32.7441 7.27719C33.1348 7.66789 33.3543 8.19779 33.3543 8.75033C33.3543 9.30287 33.1348 9.83277 32.7441 10.2235C32.3535 10.6142 31.8236 10.8337 31.271 10.8337H31.2502C30.6976 10.8337 30.1677 10.6142 29.777 10.2235C29.3863 9.83277 29.1668 9.30287 29.1668 8.75033Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "linkedin-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill="url(#paint0_linear_400_483)"
      />
      <path
        d="M39.6033 6.66699H10.397C7.87793 6.66699 5.8335 8.66277 5.8335 11.1218V39.6329C5.8335 42.0919 7.87793 44.0876 10.397 44.0876H39.6033C42.1223 44.0876 44.1668 42.0919 44.1668 39.6329V11.1218C44.1668 8.66277 42.1223 6.66699 39.6033 6.66699ZM17.6986 20.9225V37.8509H12.2224V20.9225H17.6986ZM12.2224 15.9955C12.2224 14.7481 13.3176 13.7947 14.9605 13.7947C16.6033 13.7947 17.6347 14.7481 17.6986 15.9955C17.6986 17.2427 16.6763 18.2496 14.9605 18.2496C13.3176 18.2496 12.2224 17.2427 12.2224 15.9955ZM37.778 37.8509H32.3017C32.3017 37.8509 32.3017 29.6005 32.3017 28.9412C32.3017 27.1592 31.3891 25.3774 29.1073 25.3417H29.0343C26.8256 25.3417 25.9128 27.1771 25.9128 28.9412C25.9128 29.752 25.9128 37.8509 25.9128 37.8509H20.4367V20.9225H25.9128V23.2034C25.9128 23.2034 27.6743 20.9225 31.2156 20.9225C34.8391 20.9225 37.778 23.3549 37.778 28.2819V37.8509Z"
        fill={color || "white"}
      />
      <path
        d="M40 0.625H10C4.82233 0.625 0.625 4.82233 0.625 10V40C0.625 45.1777 4.82233 49.375 10 49.375H40C45.1777 49.375 49.375 45.1777 49.375 40V10C49.375 4.82233 45.1777 0.625 40 0.625Z"
        stroke="#C78989"
        strokeOpacity="0.17"
      />
      <defs>
        <linearGradient
          id="paint0_linear_400_483"
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={bg || "#3F3D56"} />
          <stop offset="1" stopColor={bg || "#3F3D56"} />
        </linearGradient>
      </defs>
    </svg>
  ) : name === "telephone-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill={bg || "#3F3D56"}
      />
      <path
        d="M8.3335 10.4163C8.3335 9.86381 8.55298 9.3339 8.94368 8.9432C9.33438 8.5525 9.8643 8.33301 10.4168 8.33301H14.9022C15.3954 8.33323 15.8724 8.50838 16.2486 8.8273C16.6247 9.14621 16.8756 9.58821 16.9564 10.0747L18.4981 19.3142C18.5717 19.7543 18.5022 20.2063 18.2997 20.6038C18.0972 21.0015 17.7723 21.3235 17.3731 21.5226L14.1481 23.133C15.3046 25.999 17.0269 28.6023 19.2122 30.7876C21.3974 32.973 24.0009 34.6952 26.8668 35.8517L28.4793 32.6267C28.6783 32.2278 29.0001 31.9033 29.3972 31.7008C29.7943 31.4983 30.2458 31.4286 30.6856 31.5017L39.9252 33.0435C40.4116 33.1243 40.8536 33.3751 41.1726 33.7512C41.4914 34.1273 41.6666 34.6045 41.6668 35.0976V39.583C41.6668 40.1356 41.4473 40.6655 41.0567 41.0561C40.6659 41.4468 40.1361 41.6663 39.5834 41.6663H35.4168C20.4584 41.6663 8.3335 29.5413 8.3335 14.583V10.4163Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "github-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z"
        fill="url(#paint0_linear_400_500)"
      />
      <path
        d="M18.9927 42.5359C19.5852 42.291 20.0002 41.7254 20.0002 41.067V36.747C20.0002 36.5894 20.0135 36.4254 20.0343 36.259C20.0227 36.2622 20.0118 36.2646 20.0002 36.267C20.0002 36.267 17.5002 36.267 17.0002 36.267C15.7502 36.267 14.6668 35.787 14.1668 34.827C13.5835 33.787 13.3335 32.027 11.8335 31.067C11.5835 30.907 11.7502 30.667 12.2502 30.667C12.7502 30.747 13.8335 31.387 14.5002 32.267C15.2502 33.147 16.0002 33.867 17.3335 33.867C19.406 33.867 20.5168 33.767 21.1852 33.423C21.9635 32.3119 23.041 31.467 24.1668 31.467V31.447C19.4435 31.3014 16.426 29.7942 15.021 27.467C11.9668 27.5006 9.30766 27.791 7.79016 28.0326C7.74182 27.771 7.70016 27.5079 7.66432 27.243C9.16182 27.0062 11.7002 26.7254 14.6185 26.6719C14.5252 26.451 14.4443 26.2246 14.376 25.9926C11.4502 25.8502 8.92516 25.9614 7.5535 26.0702C7.53682 25.8046 7.51432 25.5399 7.511 25.271C8.88516 25.163 11.3418 25.055 14.1927 25.1822C14.1268 24.7822 14.0843 24.3734 14.0843 23.9479C14.0843 22.5879 14.5843 21.1479 15.501 19.9479C15.0843 18.5879 14.501 15.7079 15.6677 14.6679C17.9177 14.6679 19.501 15.7079 20.251 16.3479C21.6668 15.787 23.2502 15.467 25.0002 15.467C26.7502 15.467 28.3335 15.787 29.6668 16.347C30.4168 15.707 32.0002 14.667 34.2502 14.667C35.5002 15.787 34.8335 18.667 34.4168 19.947C35.3335 21.147 35.8335 22.507 35.7502 23.947C35.7502 24.3342 35.7127 24.7079 35.6585 25.0742C38.5743 24.9366 41.0977 25.047 42.4952 25.1559C42.4935 25.4254 42.4677 25.6886 42.4527 25.955C41.0602 25.8446 38.4735 25.731 35.4868 25.8839C35.4127 26.1526 35.3227 26.4142 35.216 26.6679C38.171 26.7046 40.7702 26.979 42.3393 27.219C42.3035 27.4846 42.2618 27.7479 42.2135 28.0086C40.6202 27.7639 37.9043 27.4774 34.8143 27.463C33.4268 29.7654 30.4643 31.267 25.8335 31.4422V31.467C28.0002 31.467 30.0002 34.587 30.0002 36.747V41.067C30.0002 41.7254 30.4152 42.291 31.0077 42.5359C38.6418 40.1102 44.1668 33.1982 44.1668 25.067C44.1668 14.9214 35.5693 6.66699 25.0002 6.66699C14.431 6.66699 5.8335 14.9214 5.8335 25.067C5.8335 33.1982 11.3585 40.1102 18.9927 42.5359Z"
        fill={color || "white"}
      />
      <path
        d="M40 0.625H10C4.82233 0.625 0.625 4.82233 0.625 10V40C0.625 45.1777 4.82233 49.375 10 49.375H40C45.1777 49.375 49.375 45.1777 49.375 40V10C49.375 4.82233 45.1777 0.625 40 0.625Z"
        stroke="#C78989"
        strokeOpacity="0.17"
      />
      <defs>
        <linearGradient
          id="paint0_linear_400_500"
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={bg || "#3F3D56"} />
          <stop offset="1" stopColor={bg || "#3F3D56"} />
        </linearGradient>
      </defs>
    </svg>
  ) : name === "code-fill" ? (
    <svg
      width={width || "25"}
      height={height || "25"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width || "25"}
        height={height || "25"}
        rx="8"
        fill={bg || "#A0616A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1634 6.50864C18.3067 6.55634 18.4393 6.6318 18.5534 6.73073C18.6676 6.82966 18.7612 6.95011 18.8288 7.08521C18.8964 7.2203 18.9367 7.36739 18.9474 7.51807C18.9582 7.66876 18.9391 7.82008 18.8913 7.96339L14.2913 21.7634C14.195 22.0528 13.9875 22.2921 13.7147 22.4287C13.4419 22.5652 13.126 22.5877 12.8366 22.4913C12.5471 22.395 12.3078 22.1876 12.1713 21.9147C12.0348 21.6419 12.0123 21.326 12.1086 21.0366L16.7086 7.23659C16.7563 7.09326 16.8318 6.96072 16.9307 6.84655C17.0297 6.73239 17.1501 6.63883 17.2852 6.57123C17.4203 6.50363 17.5674 6.46331 17.7181 6.45257C17.8688 6.44183 18.0201 6.46089 18.1634 6.50864V6.50864ZM10.563 10.2369C10.7786 10.4526 10.8997 10.7451 10.8997 11.05C10.8997 11.3549 10.7786 11.6474 10.563 11.863L7.92609 14.5L10.563 17.1369C10.6729 17.243 10.7605 17.3699 10.8208 17.5102C10.881 17.6505 10.9128 17.8014 10.9141 17.9541C10.9154 18.1068 10.8863 18.2583 10.8285 18.3996C10.7707 18.5409 10.6853 18.6693 10.5773 18.7773C10.4693 18.8853 10.3409 18.9707 10.1996 19.0285C10.0583 19.0863 9.90683 19.1154 9.75413 19.1141C9.60143 19.1128 9.45053 19.081 9.31023 19.0208C9.16992 18.9605 9.04303 18.8729 8.93694 18.763L5.48694 15.313C5.27135 15.0974 5.15024 14.8049 5.15024 14.5C5.15024 14.1951 5.27135 13.9026 5.48694 13.6869L8.93694 10.2369C9.1526 10.0214 9.44505 9.90024 9.74999 9.90024C10.0549 9.90024 10.3474 10.0214 10.563 10.2369V10.2369ZM20.4369 10.2369C20.6526 10.0214 20.9451 9.90024 21.25 9.90024C21.5549 9.90024 21.8474 10.0214 22.063 10.2369L25.513 13.6869C25.7286 13.9026 25.8497 14.1951 25.8497 14.5C25.8497 14.8049 25.7286 15.0974 25.513 15.313L22.063 18.763C21.957 18.8729 21.8301 18.9605 21.6898 19.0208C21.5495 19.081 21.3985 19.1128 21.2459 19.1141C21.0932 19.1154 20.9417 19.0863 20.8004 19.0285C20.6591 18.9707 20.5307 18.8853 20.4227 18.7773C20.3147 18.6693 20.2293 18.5409 20.1715 18.3996C20.1137 18.2583 20.0846 18.1068 20.0859 17.9541C20.0872 17.8014 20.119 17.6505 20.1792 17.5102C20.2395 17.3699 20.3271 17.243 20.4369 17.1369L23.0739 14.5L20.4369 11.863C20.2214 11.6474 20.1002 11.3549 20.1002 11.05C20.1002 10.7451 20.2214 10.4526 20.4369 10.2369V10.2369Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "website-fill" ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width || "25"}
        height={height || "25"}
        rx="8"
        fill={bg || "#A0616A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3392 6.1021C11.2636 5.82028 11.0792 5.58002 10.8265 5.43417C10.5738 5.28832 10.2735 5.24884 9.9917 5.3244C9.70988 5.39996 9.46962 5.58438 9.32377 5.83708C9.17793 6.08979 9.13844 6.39008 9.214 6.6719L9.4989 7.7345C9.57446 8.01632 9.75888 8.25658 10.0116 8.40243C10.2643 8.54827 10.5646 8.58776 10.8464 8.5122C11.1282 8.43664 11.3685 8.25222 11.5143 7.99952C11.6602 7.74681 11.6997 7.44652 11.6241 7.1647L11.3381 6.1021H11.3392ZM6.6719 9.214C6.53211 9.17589 6.38618 9.16578 6.24247 9.18423C6.09877 9.20269 5.96012 9.24935 5.8345 9.32154C5.70888 9.39374 5.59876 9.49003 5.51047 9.6049C5.42217 9.71978 5.35743 9.85096 5.31998 9.99092C5.28253 10.1309 5.27309 10.2769 5.29222 10.4205C5.31134 10.5641 5.35865 10.7025 5.43143 10.8278C5.50421 10.9531 5.60102 11.0628 5.7163 11.1505C5.83158 11.2383 5.96306 11.3024 6.1032 11.3392L7.1658 11.6241C7.44711 11.698 7.74623 11.6574 7.99772 11.5113C8.24922 11.3652 8.43262 11.1255 8.5078 10.8445C8.58299 10.5636 8.54384 10.2643 8.39892 10.0121C8.254 9.75991 8.01511 9.57539 7.7345 9.4989L6.6719 9.2129V9.214ZM16.3673 8.5881C16.4694 8.4859 16.5504 8.36458 16.6057 8.23108C16.6609 8.09757 16.6893 7.95449 16.6893 7.81001C16.6892 7.66553 16.6607 7.52247 16.6054 7.389C16.55 7.25554 16.469 7.13428 16.3667 7.03215C16.2645 6.93002 16.1432 6.84902 16.0097 6.79378C15.8762 6.73853 15.7331 6.71012 15.5887 6.71018C15.4442 6.71023 15.3011 6.73874 15.1677 6.79407C15.0342 6.84941 14.9129 6.9305 14.8108 7.0327L14.0331 7.8104C13.9309 7.9126 13.8498 8.03393 13.7945 8.16746C13.7392 8.301 13.7107 8.44411 13.7107 8.58865C13.7107 8.73318 13.7392 8.8763 13.7945 9.00983C13.8498 9.14337 13.9309 9.2647 14.0331 9.3669C14.1353 9.4691 14.2566 9.55017 14.3902 9.60548C14.5237 9.66079 14.6668 9.68926 14.8113 9.68926C14.9559 9.68926 15.099 9.66079 15.2325 9.60548C15.3661 9.55017 15.4874 9.4691 15.5896 9.3669L16.3673 8.5881V8.5881ZM8.5892 16.3673L9.3669 15.5896C9.57345 15.3833 9.6896 15.1035 9.68981 14.8116C9.69002 14.5197 9.57426 14.2397 9.368 14.0331C9.16174 13.8265 8.88188 13.7104 8.58998 13.7102C8.29808 13.71 8.01805 13.8257 7.8115 14.032L7.0327 14.8097C6.82629 15.0161 6.71034 15.296 6.71034 15.5879C6.71034 15.8799 6.82629 16.1598 7.0327 16.3662C7.2391 16.5726 7.51905 16.6886 7.81095 16.6886C8.10285 16.6886 8.38279 16.5726 8.5892 16.3662V16.3673ZM12.1092 10.6792C11.9093 10.5992 11.6903 10.5796 11.4794 10.6229C11.2685 10.6661 11.0749 10.7704 10.9226 10.9226C10.7704 11.0749 10.6661 11.2685 10.6229 11.4794C10.5796 11.6903 10.5992 11.9093 10.6792 12.1092L15.0792 23.1092C15.158 23.3061 15.2921 23.476 15.4653 23.5984C15.6384 23.7209 15.8433 23.7906 16.0552 23.7994C16.267 23.8081 16.4769 23.7554 16.6596 23.6475C16.8422 23.5397 16.9898 23.3814 17.0845 23.1917L18.6025 20.1568L21.9223 23.4788C22.1287 23.6851 22.4086 23.8009 22.7004 23.8008C22.9922 23.8007 23.272 23.6847 23.4782 23.4783C23.6845 23.2718 23.8003 22.992 23.8002 22.7002C23.8001 22.4084 23.6841 22.1286 23.4777 21.9223L20.1568 18.6003L23.1928 17.0834C23.3822 16.9884 23.5401 16.8408 23.6476 16.6582C23.7551 16.4757 23.8075 16.266 23.7987 16.0543C23.7899 15.8426 23.7201 15.638 23.5978 15.465C23.4755 15.292 23.3058 15.1581 23.1092 15.0792L12.1092 10.6792V10.6792Z"
        fill={color || "white"}
      />
    </svg>
  ) : name === "menu" ? (
    <svg
      width={width || "25"}
      height={height || "32"}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.14307 57.8569H57.8574H2.14307ZM2.14307 2.14258H57.8574H2.14307ZM2.14307 29.9997H57.8574H2.14307Z"
        stroke={color || "#18181B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : name === "close" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={width || "20"}
    >
      <path
        fill={color || "#18181B"}
        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
      />
    </svg>
  ) : null;
}