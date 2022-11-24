import styles from "../modules/ModeToggle.module.css";
import { useState } from "react";

function ModeToggle(props) {
  function handleButton() {
    props.toggle();
  }

  return (
    <div
      className={styles.toggle}
      onClick={() => {
        handleButton();
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.38 0C8.64313 0.686621 8.05211 1.51462 7.64219 2.43462C7.23227 3.35461 7.01185 4.34775 6.99408 5.35477C6.97632 6.3618 7.16156 7.36209 7.53877 8.29598C7.91598 9.22986 8.47743 10.0782 9.18962 10.7904C9.9018 11.5026 10.7501 12.064 11.684 12.4412C12.6179 12.8184 13.6182 13.0037 14.6252 12.9859C15.6323 12.9681 16.6254 12.7477 17.5454 12.3378C18.4654 11.9279 19.2934 11.3369 19.98 10.6C19.662 15.835 15.316 19.981 10.001 19.981C4.477 19.981 0 15.504 0 9.981C0 4.666 4.146 0.32 9.38 0Z"
          fill="#262A2D"
        />
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5556 12C19.5556 13.4943 19.1124 14.9551 18.2822 16.1976C17.452 17.4401 16.272 18.4086 14.8914 18.9804C13.5108 19.5523 11.9916 19.7019 10.526 19.4104C9.06035 19.1188 7.71408 18.3992 6.65742 17.3426C5.60075 16.2859 4.88116 14.9397 4.58962 13.474C4.29809 12.0084 4.44771 10.4892 5.01958 9.10861C5.59144 7.72802 6.55985 6.548 7.80236 5.71779C9.04486 4.88757 10.5057 4.44444 12 4.44444C14.003 4.44738 15.923 5.24436 17.3393 6.66066C18.7556 8.07697 19.5526 9.99704 19.5556 12ZM12 2.66667C12.2357 2.66667 12.4618 2.57302 12.6285 2.40632C12.7952 2.23962 12.8889 2.01353 12.8889 1.77778V0.888889C12.8889 0.653141 12.7952 0.427048 12.6285 0.260349C12.4618 0.0936505 12.2357 0 12 0C11.7643 0 11.5382 0.0936505 11.3715 0.260349C11.2048 0.427048 11.1111 0.653141 11.1111 0.888889V1.77778C11.1111 2.01353 11.2048 2.23962 11.3715 2.40632C11.5382 2.57302 11.7643 2.66667 12 2.66667ZM4.14444 5.4C4.31248 5.56357 4.53772 5.6551 4.77222 5.6551C5.00672 5.6551 5.23197 5.56357 5.4 5.4C5.56623 5.23336 5.65959 5.0076 5.65959 4.77222C5.65959 4.53685 5.56623 4.31108 5.4 4.14444L4.76667 3.51111C4.59758 3.3579 4.37605 3.27558 4.14794 3.2812C3.91984 3.28682 3.70263 3.37994 3.54128 3.54128C3.37994 3.70263 3.28682 3.91984 3.2812 4.14794C3.27558 4.37605 3.3579 4.59758 3.51111 4.76667L4.14444 5.4ZM1.77778 11.1111H0.888889C0.653141 11.1111 0.427048 11.2048 0.260349 11.3715C0.0936505 11.5382 0 11.7643 0 12C0 12.2357 0.0936505 12.4618 0.260349 12.6285C0.427048 12.7952 0.653141 12.8889 0.888889 12.8889H1.77778C2.01353 12.8889 2.23962 12.7952 2.40632 12.6285C2.57302 12.4618 2.66667 12.2357 2.66667 12C2.66667 11.7643 2.57302 11.5382 2.40632 11.3715C2.23962 11.2048 2.01353 11.1111 1.77778 11.1111ZM4.14444 18.6L3.51111 19.2333C3.34488 19.4 3.25152 19.6257 3.25152 19.8611C3.25152 20.0965 3.34488 20.3223 3.51111 20.4889C3.68174 20.652 3.90841 20.7434 4.14444 20.7444C4.37732 20.7441 4.60074 20.6523 4.76667 20.4889L5.4 19.8556C5.55321 19.6865 5.63553 19.4649 5.62991 19.2368C5.62429 19.0087 5.53117 18.7915 5.36983 18.6302C5.20849 18.4688 4.99127 18.3757 4.76317 18.3701C4.53506 18.3645 4.31353 18.4468 4.14444 18.6ZM12 21.3333C11.7643 21.3333 11.5382 21.427 11.3715 21.5937C11.2048 21.7604 11.1111 21.9865 11.1111 22.2222V23.1111C11.1111 23.3469 11.2048 23.573 11.3715 23.7397C11.5382 23.9064 11.7643 24 12 24C12.2357 24 12.4618 23.9064 12.6285 23.7397C12.7952 23.573 12.8889 23.3469 12.8889 23.1111V22.2222C12.8889 21.9865 12.7952 21.7604 12.6285 21.5937C12.4618 21.427 12.2357 21.3333 12 21.3333ZM19.8556 18.6C19.6865 18.4468 19.4649 18.3645 19.2368 18.3701C19.0087 18.3757 18.7915 18.4688 18.6302 18.6302C18.4688 18.7915 18.3757 19.0087 18.3701 19.2368C18.3645 19.4649 18.4468 19.6865 18.6 19.8556L19.2333 20.4889C19.3993 20.6523 19.6227 20.7441 19.8556 20.7444C20.0916 20.7434 20.3183 20.652 20.4889 20.4889C20.6551 20.3223 20.7485 20.0965 20.7485 19.8611C20.7485 19.6257 20.6551 19.4 20.4889 19.2333L19.8556 18.6ZM23.1111 11.1111H22.2222C21.9865 11.1111 21.7604 11.2048 21.5937 11.3715C21.427 11.5382 21.3333 11.7643 21.3333 12C21.3333 12.2357 21.427 12.4618 21.5937 12.6285C21.7604 12.7952 21.9865 12.8889 22.2222 12.8889H23.1111C23.3469 12.8889 23.573 12.7952 23.7397 12.6285C23.9064 12.4618 24 12.2357 24 12C24 11.7643 23.9064 11.5382 23.7397 11.3715C23.573 11.2048 23.3469 11.1111 23.1111 11.1111ZM19.2333 5.65556C19.3488 5.65658 19.4634 5.63449 19.5702 5.59061C19.6771 5.54672 19.7741 5.48191 19.8556 5.4L20.4889 4.76667C20.5781 4.68581 20.65 4.58768 20.7002 4.4782C20.7503 4.36873 20.7777 4.25021 20.7807 4.12984C20.7836 4.00946 20.7621 3.88973 20.7174 3.77793C20.6727 3.66612 20.6057 3.56456 20.5206 3.47942C20.4354 3.39427 20.3339 3.32731 20.2221 3.28261C20.1103 3.2379 19.9905 3.21637 19.8702 3.21934C19.7498 3.2223 19.6313 3.24969 19.5218 3.29985C19.4123 3.35 19.3142 3.42188 19.2333 3.51111L18.6 4.14444C18.4338 4.31108 18.3404 4.53685 18.3404 4.77222C18.3404 5.0076 18.4338 5.23336 18.6 5.4C18.6828 5.48327 18.7816 5.54886 18.8904 5.59279C18.9993 5.63672 19.116 5.65808 19.2333 5.65556Z"
          fill="white"
        />
      </svg>
      <span></span>
    </div>
  );
}

export default ModeToggle;
