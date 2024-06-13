import React from "react";

interface LoadingSpinnerProps {
  color?: string;
  size?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color = "text-blue-500",
  size = "h-5 w-5",
}) => {
  return (
    <svg className={`animate-spin ${color} ${size}`} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1.732-1.017zM12 20a8 8 0 01-8-8H0c0 4.418 3.582 8 8 8v-4zm5.268-2.329A7.962 7.962 0 0020 12h-4c0 3.042-1.135 5.824-3 7.938l1.732-1.017zM12 4a8 8 0 018 8h4c0-4.418-3.582-8-8-8v4zm-1.732 13.329l-1.732-1.017A7.962 7.962 0 0012 20v-4a3.968 3.968 0 01-1.732-7.329l1.732-1.017A5.963 5.963 0 0012 8a5.963 5.963 0 00-1.732 11.329z"
      />
    </svg>
  );
};

export default LoadingSpinner;
