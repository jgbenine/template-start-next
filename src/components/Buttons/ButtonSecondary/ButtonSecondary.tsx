import Link from "next/link";
import { FC } from "react";
import "./ButtonSecondary.scss";
import Spinner from "public/img/loading/spinner.svg";

const ButtonSecondary: FC<{ data?: { title: string; url: string; target: string; loading?: boolean } }> = ({ data }) => {
  return (
    <div className="buttonSecondary">
      {!data?.loading ? (
        <Link href={data?.url || ""} target={data?.target} className="buttonSecondary-button" scroll={false}>
          {data?.title}
        </Link>
      ) : (
        <Spinner className="buttonSecondary-spinner" />
      )}
    </div>
  );
};

export default ButtonSecondary;
