import { TailSpin } from 'react-loader-spinner';
export const loadingSpinner = (
  <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{
      marginLeft: 930,
      marginBottom: 1000,
    }}
    wrapperClass=""
    visible={true}
  />
);
