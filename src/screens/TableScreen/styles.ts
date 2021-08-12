import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#bebebe',
        borderWidth: 0.7,
    },
    itemStyle:{
        borderRightWidth: 0.7,
        borderRightColor: 'black',
        height: 43,
        justifyContent: 'center',
        alignItems:'center'
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderWidth: 0.7,
    }
})

