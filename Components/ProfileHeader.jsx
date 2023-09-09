import { View, Text } from 'react-native';
import UserProfileImage from './UserProfileImage';
import img from '../assets/images/img3.jpg';

const ProfileHeader = () => {
  return (
    <View style={{ alignItems: 'center', paddingVertical: 32 }}>
      <UserProfileImage image={img} width={120} height={120} />
      <Text
        style={{
          fontFamily: 'Inter_500Medium',
          fontSize: 20,
          marginTop: 20,
        }}
      >
        John Doe
      </Text>
    </View>
  );
};

export default ProfileHeader;
