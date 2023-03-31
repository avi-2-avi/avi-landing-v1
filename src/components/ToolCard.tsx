import Image from "next/image";
import { useEffect, useState } from "react";
import "animate.css";

type ToolCardProps = {
  title: string;
  description: string;
  image: string;
  color: string;
};

const ToolCard = ({ title, description, image, color }: ToolCardProps) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const onLoadColors = () => {
    if (color !== "none") {
      setBackgroundColor(
        () => "text-background-light dark:text-background-dark "
      );
      if (color === "red") {
        setBackgroundColor((state) => state + "bg-red-light dark:bg-red-dark");
      } else if (color === "blue") {
        setBackgroundColor(
          (state) => state + "bg-blue-light dark:bg-blue-dark"
        );
      } else {
        setBackgroundColor(
          (state) => state + "bg-yellow-light dark:bg-yellow-dark"
        );
      }
    }
  };

  useEffect(() => {
    onLoadColors();
  }, [onLoadColors]);

  return (
    <div
      className={`${backgroundColor} text-center px-6 h-[420px] xs:h-[500px] 2xl:h-[580px]  w-auto flex flex-col justify-center items-center `}
    >
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="mt-2 mb-8 text-xl">{description}</p>
      <Image
        src={image}
        alt="Test"
        width={260}
        height={80}
        className="w-[240px] md:w-[280px] xl:w-[320px] animate__animated animate__zoomIn animate__faster"
      />
    </div>
  );
};

export default ToolCard;
