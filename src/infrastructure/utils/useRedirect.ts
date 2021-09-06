import { useHistory } from 'react-router-dom';

const useRedirect = (presetLocation?: string) => {
  const history = useHistory();

  return (location?: string) => {
    if (presetLocation) {
      history.push(presetLocation);
    }

    if (location) {
      history.push(location);
    }
  };
};

export default useRedirect;
