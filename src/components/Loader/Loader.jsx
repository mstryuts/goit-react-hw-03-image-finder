import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="50"
        width="50"
        color="#303f9f"
        ariaLabel="loading"
        margin="0 auto"
      />
    </div>
  );
};

export default Loader;
