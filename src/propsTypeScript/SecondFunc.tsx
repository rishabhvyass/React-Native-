import { Text, View } from 'react-native';

interface MyType {
  userName: string;
  userEmail: string;
  userId: number;
  isUser: boolean;
}

export const SecondFunc = ({ userName, userEmail, userId, isUser }: MyType) => {
  console.log(isUser);
  return (
    <View>
      <Text>
        i am {userName} this is my email:-{userEmail} and my id is {userId}
        and i am valid user{' '}
        { isUser  ? <Text> TRUE </Text> : <Text> FALSE </Text>}
      </Text>
    </View>
  );
};
