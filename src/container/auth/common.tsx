import {useSelector} from 'react-redux';
import {Button, Spinner} from 'tamagui';

const AuthButton = ({handleSubmit, title}: any) => {
  const {isLoading} = useSelector((store: any) => store.auth);
  return (
    <>
      {!isLoading ? (
        <Button
          onPress={handleSubmit}
          backgroundColor="green"
          color={'white'}
          fontSize={18}>
          {title}
        </Button>
      ) : (
        <Spinner scale={1.3} size="large" />
      )}
    </>
  );
};

export default AuthButton;
