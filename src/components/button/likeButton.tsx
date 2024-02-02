const HeartIcon = ({ fill = '#FFF', stroke = '#363636' }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Group 723">
      <rect id="Rectangle 407" width="22" height="22" fill="white" />
      <path
        id="Vector"
        d="M19.4578 3.59133C18.9691 3.08683 18.3889 2.68663 17.7503 2.41358C17.1117 2.14054 16.4272 2 15.7359 2C15.0446 2 14.3601 2.14054 13.7215 2.41358C13.0829 2.68663 12.5026 3.08683 12.0139 3.59133L10.9997 4.63785L9.98554 3.59133C8.99842 2.57276 7.6596 2.00053 6.26361 2.00053C4.86761 2.00053 3.52879 2.57276 2.54168 3.59133C1.55456 4.6099 1 5.99139 1 7.43187C1 8.87235 1.55456 10.2538 2.54168 11.2724L3.55588 12.3189L10.9997 20L18.4436 12.3189L19.4578 11.2724C19.9467 10.7681 20.3346 10.1694 20.5992 9.51045C20.8638 8.85148 21 8.14517 21 7.43187C21 6.71857 20.8638 6.01225 20.5992 5.35328C20.3346 4.69431 19.9467 4.09559 19.4578 3.59133Z"
        fill={fill}
        stroke={stroke}
      />
    </g>
  </svg>
);

interface LikeButtonProps {
  onClick: () => void;
  isLiked: boolean;
}

function LikeButton({ onClick, isLiked }: LikeButtonProps) {
  return (
    <button onClick={onClick}>
      <HeartIcon
        fill={`${isLiked ? '#FF5A5A' : '#FFF'}`}
        stroke={`${isLiked ? 'none' : '#363636'}`}
      />
    </button>
  );
}
export default LikeButton;
