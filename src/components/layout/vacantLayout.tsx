import React from 'react';

type VaCantLayOutProps = {
  children: React.ReactNode;
};

function VaCantLayout({ children }: VaCantLayOutProps) {
  return <div>{children}</div>;
}

export default VaCantLayout;
