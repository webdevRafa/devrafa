import { ReactNode } from "react";

//define props
interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto relative w-[90%] max-w-[1200px]">{children}</div>
  );
};
