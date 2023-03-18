import Link from "next/link";

type CheckCardProps = {
  image: string;
  title: string;
  color: string;
  reference: string;
};

const CheckCard = ({ image, title, color, reference }: CheckCardProps) => {
  return (
    <Link href={reference}>
      <div
        className="w-full h-40 md:h-52 bg-cover relative hover:opacity-90 my-8"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={`bg-${color}-light dark:bg-${color}-dark 
        absolute top-6 right-6 md:top-10 md:right-10 w-8 h-8`}
        ></div>
        <p className="absolute bottom-8 left-6 md:bottom-12 md:left-10 text-xl text-foreground-dark">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default CheckCard;
