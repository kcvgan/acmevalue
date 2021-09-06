import * as React from 'react';
import styled from 'styled-components';

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-right"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const ArrowIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  background-color: #434758;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  svg {
    margin-left: 1px;
  }
`;

const ArrowButton = ({ onClick }: { onClick?: () => void }) => (
  <ArrowIcon onClick={onClick}>
    <ArrowRight />
  </ArrowIcon>
);

export default ArrowButton;
