import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    padding: 24px;
    background: #28262e;
    padding-top: ${getStatusBarHeight() + 10}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    color: #f4ede8;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
    line-height: 28px
`;

export const UserName = styled.Text`
    color: #ff9000;
    font-family: 'RobotoSlab-Medium';
`; 

export const ProfileButton = styled.TouchableOpacity`
   
`; 

export const UserAvatar = styled.Image`
   width: 56px;
   height: 56px;
   border-radius: 28px;
`; 

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
   
`; 
