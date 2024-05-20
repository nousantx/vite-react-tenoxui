
import { useStyles } from "../styles/lib/useStyles";


export const Line = () => {
  useStyles()

  return (
    <>
      <div className="line line-y r-1rem">
        <div className="line-anim">
          <div className="y"></div>
        </div>
      </div>
      <div className="line line-y l-1rem">
        <div className="line-anim">
          <div className="y anim-name-[line-y-2]"></div>
        </div>
      </div>
      <div className="line line-x t-4rem">
        <div className="line-anim">
          <div className="x"></div>
        </div>
      </div>
      <div className="line line-x b-4rem">
        <div className="line-anim">
          <div className="x anim-name-[line-x-2]"></div>
        </div>
      </div>
    </>
  );
};
