"use client";

interface HeadingProps {
  tittle: string;
  subtittle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ center, tittle, subtittle }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{tittle}</div>
      <div className="font-light text-neutral-500 mt-2">{subtittle}</div>
    </div>
  );
};

export default Heading;
