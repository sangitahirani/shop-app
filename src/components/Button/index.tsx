import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
type Props = TouchableOpacityProps & {
  title?: string;
  icon?: any;
};

export function Button({title, icon, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Icon name={icon} size={28} color={'#111729'} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
