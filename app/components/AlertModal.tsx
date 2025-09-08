import { Modal, Text, View } from "react-native";
import { ExclamationTriangleIcon } from "react-native-heroicons/outline";

type AlertModalProps = {
    visible: boolean
    onClose: () => void
}
const AlertModal = ({ visible, onClose }: AlertModalProps) => {
    return (
        <Modal >
            <View>
                <View>
                    <Text>Reportar Robo</Text>
                    <ExclamationTriangleIcon size={50} color="red"/>
                </View>
                <View>
                    <Text>Reportar Robo</Text>
                    <ExclamationTriangleIcon size={50} color="red"/>
                </View>
                <View>
                    <Text>Reportar Robo</Text>
                    <ExclamationTriangleIcon size={50} color="red"/>
                </View>
            </View>
        </Modal>
    );
};
export default AlertModal;
