import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="112"
        visible={true}
      />
    </div>
  );
};

export default Loader;
